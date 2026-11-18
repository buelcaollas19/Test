"""PDF outline helpers.

Chromium builds the PDF bookmarks from the headings, but it glues the lines of a
wrapped heading together without spaces. The bookmarks come out in document
order, so both jobs here are done by position instead of by title:

  python3 pages.py map <pdf> <headings.json> <pages.json>
      Write {heading id: page number} for the table of contents.
  python3 pages.py fix <pdf> <headings.json>
      Rewrite the bookmark titles in place with the real heading text.
"""
import json
import sys

from pypdf import PdfWriter
from pypdf.generic import NameObject, TextStringObject

# Bookmarks that come before the first heading of <main> (the TOC title).
LEADING = ["Índice"]


def walk(node):
    """Yield outline items depth-first, i.e. in document order."""
    child = node.get("/First")
    while child is not None:
        child = child.get_object()
        yield child
        yield from walk(child)
        child = child.get("/Next")


def page_of(writer, item):
    dest = item.get("/Dest")
    if dest is None and "/A" in item:
        dest = item["/A"].get_object().get("/D")
    if isinstance(dest, (str, bytes)):
        dest = writer._root_object["/Dests"][dest] if "/Dests" in writer._root_object else None
    if dest is None:
        return None
    dest = dest.get_object() if hasattr(dest, "get_object") else dest
    target = dest[0].get_object()
    for number, page in enumerate(writer.pages, start=1):
        if page.get_object() == target:
            return number
    return None


def load(pdf_path, headings_path):
    writer = PdfWriter(clone_from=pdf_path)
    items = list(walk(writer._root_object["/Outlines"].get_object()))
    headings = json.load(open(headings_path, encoding="utf-8"))
    titles = LEADING + [h["text"] for h in headings]
    if len(items) != len(titles):
        sys.exit(f"outline has {len(items)} items but {len(titles)} headings were expected")
    return writer, items, headings, titles


def main():
    mode, pdf_path, headings_path = sys.argv[1:4]
    writer, items, headings, titles = load(pdf_path, headings_path)
    if mode == "map":
        pages = {}
        for heading, item in zip(headings, items[len(LEADING):]):
            number = page_of(writer, item)
            if number is not None:
                pages[heading["id"]] = number
        json.dump(pages, open(sys.argv[4], "w", encoding="utf-8"))
        print(f"pages: {len(writer.pages)}, headings mapped: {len(pages)}/{len(headings)}")
    elif mode == "fix":
        for item, title in zip(items, titles):
            item[NameObject("/Title")] = TextStringObject(" ".join(title.split()))
        writer.write(pdf_path)
        print(f"bookmarks fixed: {len(items)}")
    else:
        sys.exit("mode must be 'map' or 'fix'")


if __name__ == "__main__":
    main()
