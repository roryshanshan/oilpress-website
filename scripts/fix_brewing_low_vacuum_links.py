from __future__ import annotations

import re
from pathlib import Path


ROOT = Path(__file__).resolve().parent.parent
DOCS = ROOT / "docs"
LOCALES = ["fr", "ru", "vi", "bn"]
MODELS = ["gfp-12a", "gfp-18a", "gfp-24h", "gfp-30h", "gfp-36h", "gfp-40h"]
HIGH_MODELS = ["gfp-48h", "gfp-60h"]
TABLE_MODELS = [
    ("GFP-12B", "gfp-12b"),
    ("GFP-12A", "gfp-12a"),
    ("GFP-18A", "gfp-18a"),
    ("GFP-24H", "gfp-24h"),
    ("GFP-30H", "gfp-30h"),
    ("GFP-36H", "gfp-36h"),
    ("GFP-40H", "gfp-40h"),
    ("GFP-48H", "gfp-48h"),
    ("GFP-60H", "gfp-60h"),
]

INDEX_BLOCKS = {
    "fr": {
        "table_row": '| [Machine de remplissage sous vide faible GFP-12A~GFP-60H](/fr/solutions/brewing/low-vacuum-filling-machine) | 3 000 à 20 000 p/h ; 12 à 60 têtes ; 1,12-7,5 kW ; adapté au remplissage à niveau fixe de liquides facilement moussants | Convient pour le vin, le vin de riz, la sauce soja, le vinaigre |',
        "direct_4": "- [Aperçu de la bibliothèque de paramètres des équipements de remplissage et d'emballage](/fr/products/filling-equipment)",
        "series": "- Aperçu de la série : [Machine de remplissage sous vide faible](/fr/solutions/brewing/low-vacuum-filling-machine)",
        "models": "- Entrée du modèle : [`GFP-12A`](/fr/solutions/brewing/gfp-12a-low-vacuum-filling-machine), [`GFP-18A`](/fr/solutions/brewing/gfp-18a-low-vacuum-filling-machine), [`GFP-24H`](/fr/solutions/brewing/gfp-24h-low-vacuum-filling-machine), [`GFP-30H`](/fr/solutions/brewing/gfp-30h-low-vacuum-filling-machine), [`GFP-36H`](/fr/solutions/brewing/gfp-36h-low-vacuum-filling-machine), [`GFP-40H`](/fr/solutions/brewing/gfp-40h-low-vacuum-filling-machine)",
        "higher": "- Si vous souhaitez une productivité plus élevée, vous pouvez également continuer à vérifier : [`GFP-48H`](/fr/solutions/brewing/gfp-48h-low-vacuum-filling-machine) / [`GFP-60H`](/fr/solutions/brewing/gfp-60h-low-vacuum-filling-machine)",
        "related": [
            "- [Série de boucheuses](/fr/solutions/corking/)",
            "- [Série de machines thermorétractables pour capsules de gel](/fr/solutions/cap-shrinking/)",
            "- [Série d'étiqueteuses](/fr/solutions/labeling/)",
            "- [Série de filtres](/fr/solutions/filtering/)",
        ],
    },
    "ru": {
        "table_row": '| [Машина для розлива при низком вакууме GFP-12A~GFP-60H](/ru/solutions/brewing/low-vacuum-filling-machine) | 3000-20000 п/ч; 12-60 голов; 1,12-7,5 кВт; подходит для розлива легкопенящихся жидкостей с фиксированным уровнем | Подходит для вина, рисового вина, соевого соуса, уксуса |',
        "direct_4": "- [Обзор библиотеки параметров фасовочно-упаковочного оборудования](/ru/products/filling-equipment)",
        "series": "- Обзор серии: [Машина для розлива при низком вакууме](/ru/solutions/brewing/low-vacuum-filling-machine)",
        "models": "- Запись модели: [`GFP-12A`](/ru/solutions/brewing/gfp-12a-low-vacuum-filling-machine), [`GFP-18A`](/ru/solutions/brewing/gfp-18a-low-vacuum-filling-machine), [`GFP-24H`](/ru/solutions/brewing/gfp-24h-low-vacuum-filling-machine), [`GFP-30H`](/ru/solutions/brewing/gfp-30h-low-vacuum-filling-machine), [`GFP-36H`](/ru/solutions/brewing/gfp-36h-low-vacuum-filling-machine), [`GFP-40H`](/ru/solutions/brewing/gfp-40h-low-vacuum-filling-machine)",
        "higher": "- Если вам нужна более высокая производительность, вы также можете продолжить проверку: [`GFP-48H`](/ru/solutions/brewing/gfp-48h-low-vacuum-filling-machine) / [`GFP-60H`](/ru/solutions/brewing/gfp-60h-low-vacuum-filling-machine)",
        "related": [
            "- [Серия укупорочных машин](/ru/solutions/corking/)",
            "- [Серия термоусадочных машин с гелевыми крышками](/ru/solutions/cap-shrinking/)",
            "- [Серия этикетировочной машины](/ru/solutions/labeling/)",
            "- [Серия фильтров](/ru/solutions/filtering/)",
        ],
    },
    "vi": {
        "table_row": '| [Máy chiết rót chân không thấp GFP-12A~GFP-60H](/vi/solutions/brewing/low-vacuum-filling-machine) | 3000-20000 chai/giờ; 12-60 đầu; 1,12-7,5 kW; thích hợp để đổ đầy chất lỏng dễ tạo bọt ở mức cố định | Thích hợp đựng rượu vang, rượu gạo, nước tương, giấm |',
        "direct_4": "- [Tổng quan về thư viện thông số thiết bị chiết rót và đóng gói](/vi/products/filling-equipment)",
        "series": "- Tổng quan về dòng sản phẩm: [Máy chiết rót chân không thấp](/vi/solutions/brewing/low-vacuum-filling-machine)",
        "models": "- Mục nhập mẫu: [`GFP-12A`](/vi/solutions/brewing/gfp-12a-low-vacuum-filling-machine), [`GFP-18A`](/vi/solutions/brewing/gfp-18a-low-vacuum-filling-machine), [`GFP-24H`](/vi/solutions/brewing/gfp-24h-low-vacuum-filling-machine), [`GFP-30H`](/vi/solutions/brewing/gfp-30h-low-vacuum-filling-machine), [`GFP-36H`](/vi/solutions/brewing/gfp-36h-low-vacuum-filling-machine), [`GFP-40H`](/vi/solutions/brewing/gfp-40h-low-vacuum-filling-machine)",
        "higher": "- Nếu muốn năng suất cao hơn, bạn cũng có thể tiếp tục kiểm tra: [`GFP-48H`](/vi/solutions/brewing/gfp-48h-low-vacuum-filling-machine) / [`GFP-60H`](/vi/solutions/brewing/gfp-60h-low-vacuum-filling-machine)",
        "related": [
            "- [Dòng máy đóng nút chai](/vi/solutions/corking/)",
            "- [Dòng máy co nhiệt nắp gel](/vi/solutions/cap-shrinking/)",
            "- [Dòng máy dán nhãn](/vi/solutions/labeling/)",
            "- [Loạt bộ lọc](/vi/solutions/filtering/)",
        ],
    },
    "bn": {
        "table_row": '| [লো ভ্যাকুয়াম ফিলিং মেশিন GFP-12A~GFP-60H](/bn/solutions/brewing/low-vacuum-filling-machine) | 3000-20000 বোতল/ঘন্টা; 12-60 হেড; 1.12-7.5 কিলোওয়াট; সহজে ফেনা ওঠা তরলের ফিক্সড-লেভেল ফিলিংয়ের জন্য উপযুক্ত | ওয়াইন, রাইস ওয়াইন, সয়া সস ও ভিনেগারের জন্য উপযুক্ত |',
        "direct_4": "- [ফিলিং এবং প্যাকেজিং সরঞ্জাম প্যারামিটার লাইব্রেরি ওভারভিউ](/bn/products/filling-equipment)",
        "series": "- সিরিজ ওভারভিউ: [লো ভ্যাকুয়াম ফিলিং মেশিন](/bn/solutions/brewing/low-vacuum-filling-machine)",
        "models": "- মডেল এন্ট্রি: [`GFP-12A`](/bn/solutions/brewing/gfp-12a-low-vacuum-filling-machine), [`GFP-18A`](/bn/solutions/brewing/gfp-18a-low-vacuum-filling-machine), [`GFP-24H`](/bn/solutions/brewing/gfp-24h-low-vacuum-filling-machine), [`GFP-30H`](/bn/solutions/brewing/gfp-30h-low-vacuum-filling-machine), [`GFP-36H`](/bn/solutions/brewing/gfp-36h-low-vacuum-filling-machine), [`GFP-40H`](/bn/solutions/brewing/gfp-40h-low-vacuum-filling-machine)",
        "higher": "- আপনি যদি উচ্চতর উৎপাদন ক্ষমতা চান, তাহলে আরও দেখতে পারেন: [`GFP-48H`](/bn/solutions/brewing/gfp-48h-low-vacuum-filling-machine) / [`GFP-60H`](/bn/solutions/brewing/gfp-60h-low-vacuum-filling-machine)",
        "related": [
            "- [কর্কিং মেশিন সিরিজ](/bn/solutions/corking/)",
            "- [জেল ক্যাপ হিট সঙ্কুচিত মেশিন সিরিজ](/bn/solutions/cap-shrinking/)",
            "- [লেবেলিং মেশিন সিরিজ](/bn/solutions/labeling/)",
            "- [ফিল্টার সিরিজ](/bn/solutions/filtering/)",
        ],
    },
}


def fix_low_vacuum_page(path: Path, locale: str, product_mode: bool) -> None:
    text = path.read_text(encoding="utf-8")
    base = f"/{locale}/{'products/filling' if product_mode else 'solutions/brewing'}"

    for label, slug in TABLE_MODELS:
        replacement = f'<td><a href="{base}/{slug}-low-vacuum-filling-machine">{label}</a></td>'
        text = re.sub(rf'<td>.*?{re.escape(label)}.*', replacement, text)

    text = re.sub(r"_*CODEX_KEEP_\d+__*", "", text)
    text = re.sub(r"__CODEX_KEEP_\d+__*", "", text)
    text = re.sub(r"\(__CODEX_KEEP_[^)]+\)", "(/missing-link)", text)
    path.write_text(text, encoding="utf-8")


def replace_line(lines: list[str], line_no: int, new_text: str) -> None:
    lines[line_no - 1] = new_text


def fix_brewing_index(path: Path, locale: str) -> None:
    cfg = INDEX_BLOCKS[locale]
    lines = path.read_text(encoding="utf-8").splitlines()

    replace_line(lines, 44, cfg["table_row"])
    replace_line(lines, 51, cfg["direct_4"])
    replace_line(lines, 55, cfg["series"])
    replace_line(lines, 56, cfg["models"])
    replace_line(lines, 57, cfg["higher"])
    replace_line(lines, 61, cfg["related"][0])
    replace_line(lines, 62, cfg["related"][1])
    replace_line(lines, 63, cfg["related"][2])
    replace_line(lines, 64, cfg["related"][3])

    text = "\n".join(lines) + "\n"
    text = re.sub(r"_*CODEX_KEEP_\d+__*", "", text)
    text = re.sub(r"__CODEX_KEEP_\d+__*", "", text)
    path.write_text(text, encoding="utf-8")


def main() -> int:
    changed = []
    for locale in LOCALES:
        for rel in [
            Path(locale) / "solutions" / "brewing" / "low-vacuum-filling-machine.md",
            Path(locale) / "products" / "filling" / "low-vacuum-filling-machine.md",
        ]:
            path = DOCS / rel
            fix_low_vacuum_page(path, locale, product_mode="products" in rel.parts)
            changed.append(path)

        index_path = DOCS / locale / "solutions" / "brewing" / "index.md"
        fix_brewing_index(index_path, locale)
        changed.append(index_path)

    print(f"changed={len(changed)}")
    for path in changed:
        print(path.relative_to(ROOT))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
