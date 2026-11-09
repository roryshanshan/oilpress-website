"""Set FBJ-500 cake pulverizer capacity to 1-4 t/h (owner-confirmed 2026-11-09) and drop the 'unverified' caveats."""
import re, pathlib
L = {
 'en': ('11 kW', '1–4 t/h', '::: tip Actual output\nActual output within 1–4 t/h depends on the cake type, its hardness, thickness and moisture, the screen fitted and how evenly it is fed. Confirm the expected output for your cake in the written quotation.\n:::'),
 'zh': ('11 kW', '1–4 t/h', '::: tip 实际产量\n实际产量在 1–4 t/h 范围内，取决于饼粕种类、硬度、厚度、水分、所用筛网和进料是否均匀。具体饼粕的预期产量以书面报价为准。\n:::'),
 'ru': ('11 кВт', '1–4 т/ч', '::: tip Фактическая производительность\nФактическая производительность в диапазоне 1–4 т/ч зависит от вида жмыха, его твёрдости, толщины и влажности, установленного сита и равномерности подачи. Ожидаемая производительность для вашего жмыха указывается в письменном КП.\n:::'),
 'fr': ('11 kW', '1–4 t/h', "::: tip Débit réel\nLe débit réel, entre 1 et 4 t/h, dépend du type de tourteau, de sa dureté, de son épaisseur et de son humidité, du tamis monté et de la régularité de l'alimentation. Le débit attendu pour votre tourteau est confirmé dans le devis écrit.\n:::"),
 'vi': ('11 kW', '1–4 tấn/giờ', '::: tip Năng suất thực tế\nNăng suất thực tế trong khoảng 1–4 tấn/giờ phụ thuộc vào loại bánh dầu, độ cứng, độ dày, độ ẩm, lưới sàng sử dụng và việc cấp liệu có đều hay không. Năng suất dự kiến cho bánh dầu của bạn được xác nhận trong báo giá bằng văn bản.\n:::'),
 'bn': ('১১ কিলোওয়াট', '১–৪ টন/ঘণ্টা', '::: tip প্রকৃত উৎপাদন\n১–৪ টন/ঘণ্টার মধ্যে প্রকৃত উৎপাদন নির্ভর করে খৈলের ধরন, কাঠিন্য, পুরুত্ব ও আর্দ্রতা, ব্যবহৃত ছাঁকনি এবং খাওয়ানো কতটা সমান তার উপর। আপনার খৈলের প্রত্যাশিত উৎপাদন লিখিত কোটেশনে নিশ্চিত করা হয়।\n:::'),
}
for loc,(pw,cap,note) in L.items():
    p = pathlib.Path(f'docs/{loc}/products/cake-pulverizer.md'); s = p.read_text()
    s, n1 = re.subn(r'^(\|[^|\n]*\|\s*)(?:11 kW|11 кВт|১১ কিলোওয়াট)\s*[（(][^|\n]*[)）]\s*\|$', lambda m: f'{m.group(1)}{pw} |', s, flags=re.M)
    s, n2 = re.subn(r'^(\|[^|\n]*\|\s*)(?:1–4|১–৪)\s*(?:kg/h|кг/ч|kg/giờ|কেজি/ঘণ্টা)\s*[（(][^|\n]*[)）]\s*\|$', lambda m: f'{m.group(1)}{cap} |', s, flags=re.M)
    s, n3 = re.subn(r'^::: warning[^\n]*\n.*?\n:::$', note, s, count=1, flags=re.M|re.S)
    assert (n1,n2,n3)==(1,1,1), (loc,n1,n2,n3)
    p.write_text(s); print(loc,'ok')
