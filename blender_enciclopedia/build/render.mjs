// Renders the encyclopedia HTML to PDF with Chromium.
// Usage: node render.mjs <body.html> <style.css> <out.pdf> <headings.json> [pages.json]
import fs from 'node:fs';
import { createRequire } from 'node:module';

// Playwright is installed globally in this environment; resolve it the CommonJS way.
const { chromium } = createRequire(import.meta.url)('playwright');

const [bodyPath, cssPath, outPdf, headingsPath, pagesPath] = process.argv.slice(2);
const body = fs.readFileSync(bodyPath, 'utf8');
const css = fs.readFileSync(cssPath, 'utf8');
const meta = JSON.parse(fs.readFileSync(new URL('./meta.json', import.meta.url), 'utf8'));
const pages = pagesPath && fs.existsSync(pagesPath) ? JSON.parse(fs.readFileSync(pagesPath, 'utf8')) : {};

const html = `<!doctype html><html lang="es"><head><meta charset="utf-8">
<title>${meta.title}</title><style>${css}</style></head><body>
<section class="cover"><div class="grid"></div>
  <div class="bar"></div>
  <div class="kicker">${meta.kicker}</div>
  <div class="cover-title">${meta.coverTitle}</div>
  <div class="subtitle">${meta.subtitle}</div>
  <div class="meta">
    ${meta.coverMeta.map(m => `<div><div class="label">${m.label}</div><div class="value">${m.value}</div></div>`).join('')}
  </div>
</section>
<section class="toc" id="toc"></section>
<main>${body}</main></body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setContent(html, { waitUntil: 'load' });

const headings = await page.evaluate(({ pages, meta }) => {
  const main = document.querySelector('main');

  // 1. Group each h4 + following siblings (until next heading) into a ficha card.
  for (const h4 of [...main.querySelectorAll('h4')]) {
    const card = document.createElement('div');
    card.className = 'ficha';
    h4.parentNode.insertBefore(card, h4);
    card.appendChild(h4);
    let n = card.nextSibling;
    while (n && !(n.nodeType === 1 && /^H[1-4]$/.test(n.tagName))) {
      const next = n.nextSibling;
      card.appendChild(n);
      n = next;
    }
    // Trailing whitespace/text nodes are harmless. Label the rows.
    for (const li of card.querySelectorAll(':scope > ul > li')) {
      const strong = li.firstElementChild && li.firstElementChild.tagName === 'STRONG' ? li.firstElementChild
        : (li.firstElementChild && li.firstElementChild.tagName === 'P' ? li.firstElementChild.querySelector('strong') : null);
      if (!strong) continue;
      const label = strong.textContent.replace(/:\s*$/, '').trim();
      const span = document.createElement('span');
      span.className = 'lbl';
      span.textContent = label;
      strong.replaceWith(span);
      // The label now sits in its own column, so the text starts a sentence.
      const next = span.nextSibling;
      if (next && next.nodeType === 3) {
        next.textContent = next.textContent.replace(/^(\s*)(\p{Ll})/u, (m, sp, ch) => sp + ch.toUpperCase());
      }
      if (/^Pro-tip/i.test(label)) li.classList.add('tip');
      if (/^Trampa/i.test(label)) li.classList.add('warn');
    }
    if (card.querySelector('table') || card.textContent.length > 1900) card.classList.add('long');
  }

  // 2. Lede: first paragraph after each module title. The page break goes on a
  // separate element: a heading that carries the break gets a garbled PDF bookmark.
  for (const h1 of main.querySelectorAll('h1')) {
    const pb = document.createElement('div');
    pb.className = 'pagebreak';
    h1.parentNode.insertBefore(pb, h1);
    const p = h1.nextElementSibling;
    if (p && p.tagName === 'P') p.classList.add('lede');
  }

  // 3. Table of contents from h1/h2/h3.
  const toc = document.getElementById('toc');
  const tocTitle = document.createElement('h1');
  tocTitle.textContent = 'Índice';
  tocTitle.id = 'indice';
  toc.appendChild(tocTitle);
  const note = document.createElement('p');
  note.className = 'note';
  note.textContent = meta.tocNote;
  toc.appendChild(note);
  const ol = document.createElement('ol');
  toc.appendChild(ol);
  const all = [];
  let i = 0;
  for (const h of main.querySelectorAll('h1, h2, h3, h4')) {
    if (!h.id) h.id = 'h-' + (i++);
    const level = Number(h.tagName[1]);
    all.push({ id: h.id, level, text: h.textContent.trim() });
    if (level > 3) continue;
    const li = document.createElement('li');
    li.className = 'l' + level;
    const a = document.createElement('a');
    a.href = '#' + h.id;
    const p = pages[h.id] ? String(pages[h.id]) : '';
    a.innerHTML = '<span class="t"></span><span class="dots"></span><span class="p"></span>';
    a.querySelector('.t').textContent = h.textContent.trim();
    a.querySelector('.p').textContent = p;
    li.appendChild(a);
    ol.appendChild(li);
  }
  if (meta.pending && meta.pending.length) {
    const h = document.createElement('p');
    h.className = 'sub';
    h.textContent = meta.pendingTitle;
    toc.appendChild(h);
    const pol = document.createElement('ol');
    for (const t of meta.pending) {
      const li = document.createElement('li');
      li.className = 'pending';
      li.textContent = t;
      pol.appendChild(li);
    }
    toc.appendChild(pol);
  }
  return all;
}, { pages, meta });

fs.writeFileSync(headingsPath, JSON.stringify(headings, null, 1));
await page.pdf({
  path: outPdf,
  format: 'A4',
  printBackground: true,
  preferCSSPageSize: true,
  outline: true,
  tagged: true,
});
await browser.close();
console.log(`wrote ${outPdf} (${headings.length} headings)`);
