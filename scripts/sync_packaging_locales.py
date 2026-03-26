from __future__ import annotations

import re
import sys
import time
from pathlib import Path

from deep_translator import GoogleTranslator


ROOT = Path(__file__).resolve().parent.parent
DOCS = ROOT / "docs"
ZH_SOLUTIONS = DOCS / "zh" / "solutions"
ZH_PRODUCTS = DOCS / "zh" / "products"

LOCALES = ["en", "fr", "ru", "vi", "bn"]
SECTION_ORDER = [
    "filling-packages",
    "bottle-washing",
    "filling",
    "light-inspection",
    "sealing",
    "corking",
    "cap-shrinking",
    "drying",
    "labeling",
    "laser-coding",
    "packing-palletizing",
    "fruit-veg-processing",
    "brewing",
    "dairy-processing",
]
PACKAGING_SECTIONS = {
    "bottle-washing",
    "filling",
    "light-inspection",
    "sealing",
    "corking",
    "cap-shrinking",
    "drying",
    "labeling",
    "laser-coding",
    "packing-palletizing",
    "fruit-veg-processing",
    "dairy-processing",
    "brewing",
    "filling-packages",
}

FRONTMATTER_TRANSLATED_KEYS = {"title", "description", "keywords"}
HUB_SECTION_HEADING = {
    "en": "Detailed Product Links",
    "fr": "Liens détaillés vers les produits",
    "ru": "Подробные ссылки на оборудование",
    "vi": "Liên kết sản phẩm chi tiết",
    "bn": "বিস্তারিত পণ্যের লিংক",
}
ALLOWED_HTML_TAGS = ("table", "tbody", "thead", "tr", "th", "td", "br", "sup", "sub", "details", "summary", "div", "span")
PROTECTED_PATTERNS = [
    re.compile(r"(?<=\]\()/[^)\s]+"),
    re.compile(r'(?<=href=")/[^"]+'),
    re.compile(r"</?[^>\n]+?>"),
    re.compile(r"&(?:[a-zA-Z]+|#\d+|#x[0-9A-Fa-f]+);"),
    re.compile(r"\b(?=[A-Z0-9/-]*\d)(?=[A-Z0-9/-]*[A-Z])[A-Z0-9]+(?:[-/][A-Z0-9]+)*[A-Z0-9]*\b"),
    re.compile(r"\b[A-Z]{2,}\b"),
]


def split_frontmatter(text: str) -> tuple[str | None, str]:
    if not text.startswith("---\n"):
        return None, text
    end = text.find("\n---\n", 4)
    if end == -1:
        return None, text
    frontmatter = text[4:end]
    body = text[end + 5 :]
    return frontmatter, body


def yaml_quote(value: str) -> str:
    clean = " ".join(value.replace("\r", "").split())
    clean = clean.replace("\\", "\\\\").replace('"', '\\"')
    return f'"{clean}"'


def translate_text(text: str, target: str, retries: int = 5) -> str:
    text = text.strip("\n")
    if not text.strip():
        return text

    if len(text) > 4500:
        return "\n\n".join(translate_text(chunk, target, retries=retries) for chunk in split_long_text(text))

    protected_text, replacements = protect_text(text)
    if len(protected_text) > 4500:
        chunks = split_long_text(text, limit=2000)
        if len(chunks) == 1:
            chunks = split_long_text(text, limit=1200)
        return "\n\n".join(translate_text(chunk, target, retries=retries) for chunk in chunks)
    last_error = None
    for attempt in range(retries):
        try:
            translated = GoogleTranslator(source="zh-CN", target=target).translate(protected_text)
            translated = restore_text(translated, replacements)
            return sanitize_translated_text(translated)
        except Exception as exc:  # noqa: BLE001
            last_error = exc
            time.sleep(1 + attempt)
    raise RuntimeError(f"translate failed for {target}: {last_error}")


def split_long_text(text: str, limit: int = 4200) -> list[str]:
    chunks: list[str] = []
    current = ""

    blocks = re.split(r"(\n\s*\n)", text)
    for block in blocks:
        if len(current) + len(block) <= limit:
            current += block
            continue

        if current.strip():
            chunks.append(current.strip("\n"))
            current = ""

        if len(block) <= limit:
            current = block
            continue

        lines = block.splitlines(keepends=True)
        line_buf = ""
        for line in lines:
            if len(line_buf) + len(line) <= limit:
                line_buf += line
            else:
                if line_buf.strip():
                    chunks.append(line_buf.strip("\n"))
                line_buf = line
        if line_buf.strip():
            chunks.append(line_buf.strip("\n"))

    if current.strip():
        chunks.append(current.strip("\n"))

    return chunks


def protect_text(text: str) -> tuple[str, dict[str, str]]:
    replacements: dict[str, str] = {}
    counter = 0

    def reserve(raw: str) -> str:
        nonlocal counter
        key = f"__CODEX_KEEP_{counter}__"
        counter += 1
        replacements[key] = raw
        return key

    for pattern in PROTECTED_PATTERNS:
        text = pattern.sub(lambda match: reserve(match.group(0)), text)

    return text, replacements


def restore_text(text: str, replacements: dict[str, str]) -> str:
    for key, raw in replacements.items():
        text = text.replace(key, raw)
    return text


def sanitize_translated_text(text: str) -> str:
    allowed = "|".join(ALLOWED_HTML_TAGS)
    text = re.sub(rf"<(?!(?:/?(?:{allowed})\b|!--))", "&lt;", text)
    text = re.sub(r"^(#+)(\S)", r"\1 \2", text, flags=re.M)
    return text


def translate_frontmatter(frontmatter: str | None, target: str) -> str:
    if frontmatter is None:
        return ""

    output_lines: list[str] = ["---"]
    for line in frontmatter.splitlines():
        if not line.strip() or ":" not in line:
            output_lines.append(line)
            continue

        key, value = line.split(":", 1)
        key = key.strip()
        raw_value = value.strip()

        if key not in FRONTMATTER_TRANSLATED_KEYS or not raw_value:
            output_lines.append(line)
            continue

        translated = translate_text(raw_value, target)
        output_lines.append(f"{key}: {yaml_quote(translated)}")

    output_lines.append("---")
    return "\n".join(output_lines)


def localize_links(text: str, locale: str) -> str:
    return text.replace("/zh/", f"/{locale}/")


def extract_heading_title(text: str) -> str | None:
    for line in text.splitlines():
        match = re.match(r"^#\s*(.+)$", line)
        if match:
            return match.group(1).strip()
    return None


def product_slug_set() -> set[str]:
    return {path.stem for path in (ZH_PRODUCTS / "filling").glob("*.md")}


PRODUCT_SLUGS = product_slug_set()


def convert_solution_links_to_product_links(text: str, locale: str) -> str:
    def replace_markdown(match: re.Match[str]) -> str:
        path = match.group(1)
        new_path = solution_detail_to_product_path(path, locale)
        return match.group(0).replace(path, new_path)

    def replace_href(match: re.Match[str]) -> str:
        path = match.group(1)
        new_path = solution_detail_to_product_path(path, locale)
        return match.group(0).replace(path, new_path)

    text = re.sub(r"\]\((/" + re.escape(locale) + r"/solutions/[^)]+)\)", replace_markdown, text)
    text = re.sub(r'href="(/' + re.escape(locale) + r'/solutions/[^"]+)"', replace_href, text)
    return text


def solution_detail_to_product_path(path: str, locale: str) -> str:
    match = re.match(rf"/{locale}/solutions/([^/]+)/([^/]+)$", path)
    if not match:
        return path
    _section, slug = match.groups()
    if slug in PRODUCT_SLUGS:
        return f"/{locale}/products/filling/{slug}"
    return path


def relative_solution_files() -> list[Path]:
    result: list[Path] = []
    for path in sorted(ZH_SOLUTIONS.rglob("*.md")):
        rel = path.relative_to(ZH_SOLUTIONS)
        if rel.parts[0] not in PACKAGING_SECTIONS:
            continue
        result.append(rel)
    return result


def build_translated_solution(rel: Path, locale: str) -> str:
    source = (ZH_SOLUTIONS / rel).read_text(encoding="utf-8")
    frontmatter, body = split_frontmatter(source)
    translated_frontmatter = translate_frontmatter(frontmatter, locale)
    translated_body = translate_text(body, locale)
    translated_body = localize_links(translated_body, locale)
    return f"{translated_frontmatter}\n\n{translated_body.strip()}\n"


def write_file(path: Path, content: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content, encoding="utf-8")


def product_source_rel_paths() -> list[Path]:
    rel_paths = []
    for rel in relative_solution_files():
        if rel.name == "index.md" or rel == Path("filling-packages.md"):
            continue
        rel_paths.append(rel)
    return rel_paths


def build_product_content(solution_text: str, locale: str) -> str:
    return convert_solution_links_to_product_links(solution_text, locale)


def update_fill_equipment_hub(locale: str) -> None:
    path = DOCS / locale / "products" / "filling-equipment.md"
    if not path.exists():
        return

    text = path.read_text(encoding="utf-8")
    text = re.sub(
        r"\n<!-- packaging-hub-links:start -->.*?<!-- packaging-hub-links:end -->\n?",
        "\n",
        text,
        flags=re.S,
    ).rstrip()

    lines = ["", "<!-- packaging-hub-links:start -->", f"## {HUB_SECTION_HEADING[locale]}", ""]
    for section in SECTION_ORDER:
        section_dir = DOCS / locale / "solutions" / section
        if section == "filling-packages":
            root_file = DOCS / locale / "solutions" / "filling-packages.md"
        else:
            root_file = section_dir / "index.md"
        section_title = extract_heading_title(root_file.read_text(encoding="utf-8")) if root_file.exists() else section

        items = []
        for rel in product_source_rel_paths():
            if rel.parts[0] != section:
                continue
            title = extract_heading_title((DOCS / locale / "products" / "filling" / f"{rel.stem}.md").read_text(encoding="utf-8")) or rel.stem
            items.append((title, f"/{locale}/products/filling/{rel.stem}"))

        if not items:
            continue

        lines.append(f"### {section_title}")
        for title, link in items:
            lines.append(f"- [{title}]({link})")
        lines.append("")

    lines.append("<!-- packaging-hub-links:end -->")
    path.write_text(f"{text}\n" + "\n".join(lines).strip() + "\n", encoding="utf-8")


def main() -> int:
    locales = sys.argv[1:] or LOCALES
    rel_solution_files = relative_solution_files()

    for locale in locales:
        print(f"[solutions] {locale}")
        for rel in rel_solution_files:
            translated = build_translated_solution(rel, locale)
            dst = DOCS / locale / "solutions" / rel
            write_file(dst, translated)

        print(f"[products/filling] {locale}")
        for rel in product_source_rel_paths():
            solution_path = DOCS / locale / "solutions" / rel
            solution_text = solution_path.read_text(encoding="utf-8")
            product_text = build_product_content(solution_text, locale)
            dst = DOCS / locale / "products" / "filling" / f"{rel.stem}.md"
            write_file(dst, product_text)

        print(f"[products/filling-equipment] {locale}")
        update_fill_equipment_hub(locale)

    print("done")
    return 0


if __name__ == "__main__":
    sys.exit(main())
