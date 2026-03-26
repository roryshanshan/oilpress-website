from __future__ import annotations

import re
from pathlib import Path


ROOT = Path(__file__).resolve().parent.parent
DOCS = ROOT / "docs"
LOCALES = ["en", "fr", "ru", "vi", "bn"]
ALLOWED_HTML_TAGS = ["table", "tbody", "thead", "tr", "th", "td", "br", "sup", "sub", "details", "summary", "div", "span", "a", "iframe", "center"]
TAG_REPLACEMENTS = [
    (re.compile(r"&lt;/\s*tableau>"), "</table>"),
    (re.compile(r"&lt;tableau>"), "<table>"),
    (re.compile(r"&lt;/\s*corps>"), "</tbody>"),
    (re.compile(r"&lt;corps>"), "<tbody>"),
    (re.compile(r"</\s*tableau>"), "</table>"),
    (re.compile(r"<tableau>"), "<table>"),
    (re.compile(r"</\s*corps>"), "</tbody>"),
    (re.compile(r"<corps>"), "<tbody>"),
    (re.compile(r"</\s*таблица>"), "</table>"),
    (re.compile(r"<таблица>"), "<table>"),
    (re.compile(r"</\s*тело>"), "</tbody>"),
    (re.compile(r"<тело>"), "<tbody>"),
    (re.compile(r"</\s*тр>"), "</tr>"),
    (re.compile(r"<тр>"), "<tr>"),
    (re.compile(r"</\s*тд>"), "</td>"),
    (re.compile(r"<тд>"), "<td>"),
    (re.compile(r"</\s*bảng>"), "</table>"),
    (re.compile(r"<bảng>"), "<table>"),
    (re.compile(r"</\s*টেবিল>"), "</table>"),
    (re.compile(r"<টেবিল>"), "<table>"),
]
NON_HTML_LT = re.compile(r"<(?!(?:/?(?:" + "|".join(ALLOWED_HTML_TAGS) + r")\b|!--))")
ESCAPED_ALLOWED_TAG = re.compile(r"&lt;(/?(?:" + "|".join(ALLOWED_HTML_TAGS) + r")\b[^>]*)>")
SPACED_HEADING_FIX = re.compile(r"^((?:#\s+)+#)\s+", flags=re.M)
HEADING_FIX = re.compile(r"^(#{1,6})([^#\s])", flags=re.M)


def iter_targets() -> list[Path]:
    paths: list[Path] = []
    for locale in LOCALES:
        paths.extend((DOCS / locale / "solutions").rglob("*.md"))
        paths.extend((DOCS / locale / "products" / "filling").glob("*.md"))
    return paths


def sanitize_text(text: str) -> str:
    for pattern, replacement in TAG_REPLACEMENTS:
        text = pattern.sub(replacement, text)
    text = ESCAPED_ALLOWED_TAG.sub(r"<\1>", text)
    text = NON_HTML_LT.sub("&lt;", text)
    text = SPACED_HEADING_FIX.sub(lambda match: match.group(1).replace(" ", "") + " ", text)
    text = HEADING_FIX.sub(r"\1 \2", text)
    return text


def main() -> int:
    changed: list[Path] = []
    for path in iter_targets():
        source = path.read_text(encoding="utf-8")
        sanitized = sanitize_text(source)
        if sanitized != source:
            path.write_text(sanitized, encoding="utf-8")
            changed.append(path)

    print(f"changed={len(changed)}")
    for path in changed[:120]:
        print(path.relative_to(ROOT))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
