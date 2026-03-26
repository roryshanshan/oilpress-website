from __future__ import annotations

import re
from pathlib import Path


ROOT = Path(__file__).resolve().parent.parent
DOCS = ROOT / "docs"
ZH_SOLUTIONS = DOCS / "zh" / "solutions"
ZH_PRODUCTS = DOCS / "zh" / "products"
LOCALES = ["en", "fr", "ru", "vi", "bn"]
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
MD_IMAGE_RE = re.compile(r"(!\[[^\]]*\]\()(/[^)]*)(\))")
MD_LINK_RE = re.compile(r"(?<!!)(\[[^\]]*\]\()(/[^)]*)(\))")
HREF_RE = re.compile(r'(href=")(/[^"]+)(")')


def product_slug_set() -> set[str]:
    return {path.stem for path in (ZH_PRODUCTS / "filling").glob("*.md")}


PRODUCT_SLUGS = product_slug_set()


def relative_solution_files() -> list[Path]:
    result: list[Path] = []
    for path in sorted(ZH_SOLUTIONS.rglob("*.md")):
        rel = path.relative_to(ZH_SOLUTIONS)
        if rel.parts[0] not in PACKAGING_SECTIONS:
            continue
        result.append(rel)
    return result


def product_source_rel_paths() -> list[Path]:
    rel_paths = []
    for rel in relative_solution_files():
        if rel.name == "index.md" or rel == Path("filling-packages.md"):
            continue
        rel_paths.append(rel)
    return rel_paths


def solution_detail_to_product_path(path: str, locale: str) -> str:
    match = re.match(rf"/{locale}/solutions/([^/]+)/([^/]+)$", path)
    if not match:
        return path
    _section, slug = match.groups()
    if slug in PRODUCT_SLUGS:
        return f"/{locale}/products/filling/{slug}"
    return path


def map_path(path: str, locale: str, product_mode: bool) -> str:
    mapped = path
    if mapped.startswith("/zh/"):
        mapped = mapped.replace("/zh/", f"/{locale}/", 1)
    if product_mode:
        mapped = solution_detail_to_product_path(mapped, locale)
    return mapped


def expected_paths(source_text: str, pattern: re.Pattern[str], locale: str, product_mode: bool) -> list[str]:
    paths: list[str] = []
    for match in pattern.finditer(source_text):
        path = match.group(2)
        if not path.startswith("/"):
            continue
        paths.append(map_path(path, locale, product_mode))
    return paths


def replace_paths(text: str, pattern: re.Pattern[str], replacements: list[str]) -> str:
    index = 0

    def repl(match: re.Match[str]) -> str:
        nonlocal index
        path = match.group(2)
        if not path.startswith("/") or index >= len(replacements):
            return match.group(0)
        new_path = replacements[index]
        index += 1
        return f"{match.group(1)}{new_path}{match.group(3)}"

    return pattern.sub(repl, text)


def rewrite_file(target: Path, source_text: str, locale: str, product_mode: bool) -> bool:
    if not target.exists():
        return False

    text = target.read_text(encoding="utf-8")
    original = text

    text = replace_paths(text, MD_IMAGE_RE, expected_paths(source_text, MD_IMAGE_RE, locale, product_mode))
    text = replace_paths(text, MD_LINK_RE, expected_paths(source_text, MD_LINK_RE, locale, product_mode))
    text = replace_paths(text, HREF_RE, expected_paths(source_text, HREF_RE, locale, product_mode))

    if text == original:
        return False

    target.write_text(text, encoding="utf-8")
    return True


def main() -> int:
    changed: list[Path] = []

    for locale in LOCALES:
        for rel in relative_solution_files():
            source_text = (ZH_SOLUTIONS / rel).read_text(encoding="utf-8")
            target = DOCS / locale / "solutions" / rel
            if rewrite_file(target, source_text, locale, product_mode=False):
                changed.append(target)

        for rel in product_source_rel_paths():
            source_text = (ZH_SOLUTIONS / rel).read_text(encoding="utf-8")
            target = DOCS / locale / "products" / "filling" / f"{rel.stem}.md"
            if rewrite_file(target, source_text, locale, product_mode=True):
                changed.append(target)

    print(f"changed={len(changed)}")
    for path in changed[:120]:
        print(path.relative_to(ROOT))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
