#!/usr/bin/env bash
# Builds the PDF from src/*.md. Two passes: the second fills in TOC page numbers.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
TMP="${TMPDIR:-/tmp}/blender_enciclopedia_build"
OUT="${1:-$ROOT/Blender enciclopedia técnica - Módulos 1 y 2.pdf}"
mkdir -p "$TMP"

cat "$ROOT"/src/*.md > "$TMP/all.md"
pandoc "$TMP/all.md" -f markdown-smart -t html5 --no-highlight -o "$TMP/body.html"

cd "$ROOT/build"
node render.mjs "$TMP/body.html" style.css "$TMP/pass1.pdf" "$TMP/headings.json"
python3 pages.py map "$TMP/pass1.pdf" "$TMP/headings.json" "$TMP/pages.json"
node render.mjs "$TMP/body.html" style.css "$OUT" "$TMP/headings.json" "$TMP/pages.json"
python3 pages.py map "$OUT" "$TMP/headings.json" "$TMP/pages_check.json"
if ! cmp -s "$TMP/pages.json" "$TMP/pages_check.json"; then
  echo "page numbers moved between passes; rendering once more" >&2
  cp "$TMP/pages_check.json" "$TMP/pages.json"
  node render.mjs "$TMP/body.html" style.css "$OUT" "$TMP/headings.json" "$TMP/pages.json"
fi
python3 pages.py fix "$OUT" "$TMP/headings.json"
echo "OK: $OUT"
