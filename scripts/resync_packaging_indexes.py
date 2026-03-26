from __future__ import annotations

import sys
from pathlib import Path

import sync_packaging_locales as spl


EXTRA_RELATIVE_FILES = {
    Path("brewing/low-vacuum-filling-machine.md"),
}


def target_solution_files() -> list[Path]:
    rels = []
    for rel in spl.relative_solution_files():
        if rel == Path("filling-packages.md") or rel.name == "index.md" or rel in EXTRA_RELATIVE_FILES:
            rels.append(rel)
    return rels


def main() -> int:
    locales = sys.argv[1:] or ["fr", "ru", "vi", "bn"]
    rels = target_solution_files()

    for locale in locales:
        print(f"[solutions] {locale}")
        for rel in rels:
            translated = spl.build_translated_solution(rel, locale)
            spl.write_file(spl.DOCS / locale / "solutions" / rel, translated)

        print(f"[products] {locale}")
        for rel in rels:
            if rel.name == "index.md" or rel == Path("filling-packages.md"):
                continue
            solution_path = spl.DOCS / locale / "solutions" / rel
            product_text = spl.build_product_content(solution_path.read_text(encoding="utf-8"), locale)
            spl.write_file(spl.DOCS / locale / "products" / "filling" / f"{rel.stem}.md", product_text)

    print("done")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
