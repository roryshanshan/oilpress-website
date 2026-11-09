#!/usr/bin/env python3
"""2026-11-09: add compact 6SXM / belt 6SXZ-L models, 6SXZ-768, more crops,
compressed-air layout and a chute-vs-belt FAQ to the color sorter page in all
six locales. Mirrors hydraulic-oil-press.com page 5457 (same date).
Run once from the repo root."""
from pathlib import Path

IMG = '/images/color-sorter/'
SMALL = [
    ('6SXM-32A', '0.3–0.5', '0.6', '≤ 400', '160', '408 × 972 × 1605'),
    ('6SXM-48A', '0.3–0.8', '0.8', '≤ 400', '205', '750 × 1184 × 1440'),
    ('6SXM-80A', '0.5–1.5', '1.5', '≤ 1000', '260', '785 × 1397 × 1497'),
    ('6SXM-80B', '0.8–1.7', '1.5', '≤ 1000', '310', '865 × 1460 × 1787'),
    ('6SXM-96', '0.8–1.7', '1.7', '≤ 1000', '290', '785 × 1397 × 1497'),
    ('6SXM-96A', '0.8–2.0', '1.7', '≤ 1000', '410', '1133 × 1611 × 1817'),
    ('6SXM-78A', '0.8–1.8', '1.0', '≤ 1000', '370', '980 × 1530 × 1910'),
    ('6SXM-127A', '1.2–3.5', '2.0', '≤ 1300', '430', '1320 × 1520 × 1885'),
]
BELT = [
    ('6SXZ-64L', '1.0–2.0', '3.0', '≤ 600', '360', '2817 × 1100 × 1640'),
    ('6SXZ-128L', '2.0–8.0', '4.0', '≤ 1200', '535', '2750 × 1331 × 1510'),
    ('6SXZ-192L', '3.0–10', '5.0', '≤ 1400', '800', '2750 × 1675 × 1510'),
    ('6SXZ-256L', '3–15', '5.5', '≤ 1600', '1000', '2800 × 2000 × 1522'),
    ('6SXL-640K', '15–30', '16', '—', '1180', '2876 × 2029 × 2431'),
]

L = {
'en': dict(
 head=['Model', 'Capacity (t/h)', 'Power (kW)', 'Air use (L/min)', 'Weight (kg)', 'Size L×W×H (mm)'],
 crops="**Other crops with sorting programs:** cashews, pistachios, hazelnuts, watermelon seeds, red beans, quinoa, sorghum, highland barley, fox nuts, lotus seeds, Sichuan pepper, dried chili and green coffee beans. The same machines also sort plastic flakes, glass and ore. For any crop not listed, send a sample and we will test it.",
 crops_alt='Accept and reject samples: cashew, pistachio, hazelnut, peanut, soybean and sesame',
 h_more='## Compact and Belt-Type Sorters',
 more="Two more families sit beside the chute models: compact 6SXM single-chute machines for small workshops, and 6SXZ-L belt sorters for large, flat or fragile kernels. On a belt sorter the material rides flat past the cameras instead of sliding down a chute, so cashews, peanut kernels, pistachios and hazelnuts do not roll or bounce.",
 small_alt='Compact single-chute color sorter 6SXM-78A',
 h_small='### Compact single-chute models (6SXM)',
 belt_alt='Belt-type color sorter 6SXZ-128L for nut kernels',
 h_belt='### Belt-type models (6SXZ-L)',
 belt_note='6SXL-640K is a double-belt machine.',
 note="Both tables: sorting accuracy ≥ 99.9% (6SXZ-192L ≥ 99%), AC 220 V 50 Hz, compressed air ≥ 0.6 MPa. Capacities are factory figures on rice (6SXM) and corn (6SXZ-L) with 2% impurity, a faster basis than the mung-bean figures in the chute table, so we confirm the rate for your crop with a sample test. A twelve-chute 6SXZ-768 (6.5 kW, air ≤ 4100 L/min, 2388 kg, 4685 × 1620 × 1820 mm) is also available. The 6SXM-96A comes in a high-spec version with rodent-proof sealed air lines and valve wiring, dual temperature control, an 8-row LED light, about 35% air saving (25% on the standard build), Wi-Fi and a larger touch screen.",
 h_air='## Compressed Air Setup',
 air=["**Oil-free compressor.** Oil mist reaches the ejector valves and the product. Size it to the air use in the tables, plus a margin.",
      "**Air tank between compressor and sorter,** with a safety valve, a pressure gauge and a drain; it steadies the pressure when many ejectors fire at once.",
      "**Filters before the machine:** a ball valve and filter set after the tank, then a rubber hose to the filter set on the sorter.",
      "**Drain the water** from the compressor and the tank regularly so condensate does not reach the valves."],
 air_alt='Compressed air layout: oil-free compressor, air tank, filters and color sorter',
 faq_q='### Chute or belt sorter for nut kernels?',
 faq_a="Small, round seed such as sesame, soybeans and sound peanuts runs well on a chute machine. Large, flat or fragile kernels such as cashews and pistachios sort more cleanly on a belt sorter because they do not roll or bounce in front of the camera."),
'zh': dict(
 head=['型号', '产量（吨/小时）', '功率（kW）', '耗气量（L/min）', '重量（kg）', '外形尺寸 长×宽×高（mm）'],
 crops="**其他有色选程序的物料：**腰果、开心果、榛子、西瓜子、红豆、藜麦、高粱、青稞、芡实、莲子、花椒、干辣椒和咖啡生豆。同样的机器还能选塑料片、玻璃和矿石。清单里没有的物料，寄样品来我们试选。",
 crops_alt='色选良品和次品：腰果、开心果、榛子、花生、大豆和芝麻',
 h_more='## 小型机和履带式色选机',
 more="除了溜槽式机型，还有两个系列：给小作坊用的 6SXM 小型单通道机，以及给大颗粒、扁平或易碎物料用的 6SXZ-L 履带式色选机。履带机让物料平铺在皮带上经过相机，而不是沿溜槽滑落，所以腰果、花生仁、开心果、榛子不会滚动或弹跳。",
 small_alt='小型单通道色选机 6SXM-78A',
 h_small='### 小型单通道机（6SXM）',
 belt_alt='用于坚果仁的履带式色选机 6SXZ-128L',
 h_belt='### 履带式机型（6SXZ-L）',
 belt_note='6SXL-640K 为双层履带机型。',
 note="两张表通用：色选精度 ≥ 99.9%（6SXZ-192L 为 ≥ 99%），AC 220 V 50 Hz，气源压力 ≥ 0.6 MPa。产量是厂家按大米（6SXM）和玉米（6SXZ-L）含杂 2% 测得的数据，比上面溜槽机表里按绿豆计的口径偏高，所以按你的物料用样品试选后确认产量。另有十二通道 6SXZ-768（6.5 kW，耗气 ≤ 4100 L/min，2388 kg，4685 × 1620 × 1820 mm）。6SXM-96A 有高配版：防鼠封闭气管和阀线、双温控、8 排灯珠、节气约 35%（标配约 25%）、WiFi 和更大的触摸屏。",
 h_air='## 气源配置',
 air=["**用无油空压机。**油雾会进到喷阀和物料里。按表中耗气量选型并留余量。",
      "**空压机和色选机之间加储气罐，**带安全阀、压力表和排污口；很多喷阀同时动作时能稳住气压。",
      "**进机前加过滤：**储气罐后接球阀和过滤器，再用橡胶管接到色选机自带的过滤器。",
      "**定期排水：**打开空压机和储气罐的排污口，防止冷凝水进到阀里。"],
 air_alt='色选机气源配置示意：无油空压机、储气罐、过滤器和色选机',
 faq_q='### 坚果仁用溜槽机还是履带机？',
 faq_a="芝麻、大豆、完整花生这类小而圆的颗粒，用溜槽机就够了。腰果、开心果这类大颗粒、扁平或易碎的物料，用履带机选得更干净，因为它们在相机前不会滚动或弹跳。"),
'ru': dict(
 head=['Модель', 'Производительность (т/ч)', 'Мощность (кВт)', 'Расход воздуха (л/мин)', 'Масса (кг)', 'Размеры Д×Ш×В (мм)'],
 crops="**Другие культуры, для которых есть программы сортировки:** кешью, фисташки, фундук, семечки арбуза, красная фасоль, киноа, сорго, ячмень, семена эвриалы, семена лотоса, сычуаньский перец, сушёный чили и зелёный кофе. Те же машины сортируют пластиковую крошку, стекло и руду. Если вашей культуры нет в списке, пришлите образец, и мы проверим.",
 crops_alt='Годная и отбракованная фракции: кешью, фисташки, фундук, арахис, соя и кунжут',
 h_more='## Компактные и ленточные фотосепараторы',
 more="Кроме лотковых моделей есть ещё две серии: компактные однолотковые 6SXM для небольших цехов и ленточные 6SXZ-L для крупных, плоских или хрупких ядер. На ленточной машине продукт проходит перед камерами лёжа на ленте, а не скользит по лотку, поэтому кешью, ядра арахиса, фисташки и фундук не катятся и не подпрыгивают.",
 small_alt='Компактный однолотковый фотосепаратор 6SXM-78A',
 h_small='### Компактные однолотковые модели (6SXM)',
 belt_alt='Ленточный фотосепаратор 6SXZ-128L для ядер орехов',
 h_belt='### Ленточные модели (6SXZ-L)',
 belt_note='6SXL-640K — двухъярусная ленточная машина.',
 note="Для обеих таблиц: точность сортировки ≥ 99,9 % (6SXZ-192L ≥ 99 %), 220 В 50 Гц, сжатый воздух ≥ 0,6 МПа. Производительность — заводские данные для риса (6SXM) и кукурузы (6SXZ-L) с 2 % примесей; это более высокая база, чем данные по машу в таблице лотковых моделей, поэтому производительность для вашей культуры подтверждаем пробной сортировкой. Есть также двенадцатилотковая 6SXZ-768 (6,5 кВт, воздух ≤ 4100 л/мин, 2388 кг, 4685 × 1620 × 1820 мм). 6SXM-96A выпускается в расширенной комплектации: герметичные воздушные линии и проводка клапанов с защитой от грызунов, двойной контроль температуры, 8-рядная светодиодная подсветка, экономия воздуха около 35 % (около 25 % в стандарте), Wi-Fi и увеличенный сенсорный экран.",
 h_air='## Подготовка сжатого воздуха',
 air=["**Безмасляный компрессор.** Масляный туман попадает в клапаны-эжекторы и в продукт. Подбирайте компрессор по расходу воздуха из таблиц с запасом.",
      "**Ресивер между компрессором и сепаратором** с предохранительным клапаном, манометром и сливом; он выравнивает давление, когда срабатывает много эжекторов сразу.",
      "**Фильтры перед машиной:** после ресивера шаровой кран и блок фильтров, затем резиновый шланг к фильтрам на самом сепараторе.",
      "**Регулярно сливайте конденсат** из компрессора и ресивера, чтобы вода не попадала в клапаны."],
 air_alt='Схема подачи воздуха: безмасляный компрессор, ресивер, фильтры и фотосепаратор',
 faq_q='### Лотковый или ленточный сепаратор для ядер орехов?',
 faq_a="Мелкое округлое сырьё — кунжут, соя, целый арахис — хорошо сортируется на лотковой машине. Крупные, плоские или хрупкие ядра, например кешью и фисташки, чище сортируются на ленточной машине: перед камерой они не катятся и не подпрыгивают."),
'fr': dict(
 head=['Modèle', 'Débit (t/h)', 'Puissance (kW)', "Consommation d'air (L/min)", 'Poids (kg)', 'Dimensions L×l×H (mm)'],
 crops="**Autres produits avec programme de tri :** noix de cajou, pistaches, noisettes, graines de pastèque, haricots rouges, quinoa, sorgho, orge, graines d'euryale, graines de lotus, poivre du Sichuan, piment séché et café vert. Les mêmes machines trient aussi les paillettes de plastique, le verre et le minerai. Pour un produit absent de la liste, envoyez un échantillon et nous le testerons.",
 crops_alt='Fractions acceptées et rejetées : cajou, pistache, noisette, arachide, soja et sésame',
 h_more='## Trieurs compacts et trieurs à bande',
 more="À côté des modèles à canaux, deux autres gammes : les trieurs compacts à un canal 6SXM pour les petits ateliers, et les trieurs à bande 6SXZ-L pour les amandes grosses, plates ou fragiles. Sur un trieur à bande, le produit passe devant les caméras posé à plat sur la bande au lieu de glisser dans un canal : noix de cajou, arachides décortiquées, pistaches et noisettes ne roulent pas et ne rebondissent pas.",
 small_alt='Trieur optique compact à un canal 6SXM-78A',
 h_small='### Modèles compacts à un canal (6SXM)',
 belt_alt='Trieur optique à bande 6SXZ-128L pour amandes de fruits à coque',
 h_belt='### Modèles à bande (6SXZ-L)',
 belt_note='Le 6SXL-640K est une machine à double bande.',
 note="Pour les deux tableaux : précision de tri ≥ 99,9 % (6SXZ-192L ≥ 99 %), 220 V 50 Hz, air comprimé ≥ 0,6 MPa. Les débits sont les chiffres d'usine sur riz (6SXM) et maïs (6SXZ-L) avec 2 % d'impuretés, une base plus rapide que les chiffres sur haricot mungo du tableau des modèles à canaux ; nous confirmons donc le débit pour votre produit par un essai sur échantillon. Un modèle à douze canaux 6SXZ-768 (6,5 kW, air ≤ 4100 L/min, 2388 kg, 4685 × 1620 × 1820 mm) est aussi disponible. Le 6SXM-96A existe en version haut de gamme : conduites d'air et câblage des vannes étanches contre les rongeurs, double régulation de température, éclairage LED à 8 rangées, environ 35 % d'économie d'air (25 % en version standard), Wi-Fi et écran tactile plus grand.",
 h_air="## Installation de l'air comprimé",
 air=["**Compresseur sans huile.** Le brouillard d'huile atteint les éjecteurs et le produit. Dimensionnez-le selon la consommation d'air des tableaux, avec une marge.",
      "**Réservoir d'air entre compresseur et trieur,** avec soupape de sécurité, manomètre et purge ; il stabilise la pression quand de nombreux éjecteurs se déclenchent ensemble.",
      "**Filtres avant la machine :** vanne à boisseau et filtres après le réservoir, puis un tuyau en caoutchouc vers les filtres du trieur.",
      "**Purgez l'eau** du compresseur et du réservoir régulièrement pour que les condensats n'atteignent pas les vannes."],
 air_alt="Schéma de l'air comprimé : compresseur sans huile, réservoir, filtres et trieur optique",
 faq_q='### Trieur à canaux ou à bande pour les amandes de fruits à coque ?',
 faq_a="Les petites graines rondes comme le sésame, le soja et les arachides saines passent bien sur un trieur à canaux. Les amandes grosses, plates ou fragiles comme les noix de cajou et les pistaches se trient plus proprement sur un trieur à bande, car elles ne roulent pas et ne rebondissent pas devant la caméra."),
'vi': dict(
 head=['Model', 'Công suất (tấn/giờ)', 'Điện (kW)', 'Lượng khí (L/phút)', 'Khối lượng (kg)', 'Kích thước D×R×C (mm)'],
 crops="**Các loại hạt khác đã có chương trình tách màu:** hạt điều, hạt dẻ cười, hạt phỉ, hạt dưa hấu, đậu đỏ, diêm mạch (quinoa), cao lương, lúa mạch, khiếm thực, hạt sen, tiêu Tứ Xuyên, ớt khô và cà phê nhân. Cùng loại máy cũng tách được mảnh nhựa, thủy tinh và quặng. Nếu loại hạt của bạn không có trong danh sách, hãy gửi mẫu để chúng tôi chạy thử.",
 crops_alt='Mẫu hạt đạt và hạt loại: hạt điều, hạt dẻ cười, hạt phỉ, đậu phộng, đậu nành và mè',
 h_more='## Máy tách màu cỡ nhỏ và máy băng tải',
 more="Ngoài các model máng trượt còn có hai dòng máy: máy một máng cỡ nhỏ 6SXM cho xưởng nhỏ, và máy tách màu băng tải 6SXZ-L cho nhân hạt lớn, dẹt hoặc dễ vỡ. Trên máy băng tải, nguyên liệu nằm phẳng trên băng khi đi qua camera thay vì trượt xuống máng, nên hạt điều, nhân đậu phộng, hạt dẻ cười và hạt phỉ không lăn hay nảy.",
 small_alt='Máy tách màu một máng cỡ nhỏ 6SXM-78A',
 h_small='### Model một máng cỡ nhỏ (6SXM)',
 belt_alt='Máy tách màu băng tải 6SXZ-128L cho nhân hạt',
 h_belt='### Model băng tải (6SXZ-L)',
 belt_note='6SXL-640K là máy băng tải hai tầng.',
 note="Áp dụng cho cả hai bảng: độ chính xác ≥ 99,9% (6SXZ-192L ≥ 99%), 220 V 50 Hz, khí nén ≥ 0,6 MPa. Công suất là số liệu của nhà máy trên gạo (6SXM) và ngô (6SXZ-L) có 2% tạp chất, cao hơn so với số liệu đậu xanh trong bảng model máng trượt, nên chúng tôi xác nhận công suất cho loại hạt của bạn bằng chạy thử mẫu. Ngoài ra còn có model mười hai máng 6SXZ-768 (6,5 kW, khí ≤ 4100 L/phút, 2388 kg, 4685 × 1620 × 1820 mm). 6SXM-96A có bản cấu hình cao: đường khí và dây van kín chống chuột, điều khiển nhiệt độ kép, đèn LED 8 hàng, tiết kiệm khí khoảng 35% (bản tiêu chuẩn khoảng 25%), Wi-Fi và màn hình cảm ứng lớn hơn.",
 h_air='## Lắp đặt khí nén',
 air=["**Dùng máy nén khí không dầu.** Hơi dầu sẽ vào van thổi và vào sản phẩm. Chọn máy theo lượng khí trong bảng và để dư.",
      "**Bình chứa khí giữa máy nén và máy tách màu,** có van an toàn, đồng hồ áp suất và van xả; bình giữ áp ổn định khi nhiều van thổi cùng lúc.",
      "**Lọc trước khi vào máy:** sau bình chứa lắp van bi và bộ lọc, rồi nối ống cao su đến bộ lọc trên máy tách màu.",
      "**Xả nước định kỳ** ở máy nén và bình chứa để nước ngưng không vào van."],
 air_alt='Sơ đồ khí nén: máy nén không dầu, bình chứa khí, bộ lọc và máy tách màu',
 faq_q='### Nhân hạt nên dùng máy máng trượt hay máy băng tải?',
 faq_a="Hạt nhỏ, tròn như mè, đậu nành và đậu phộng nguyên hạt chạy tốt trên máy máng trượt. Nhân hạt lớn, dẹt hoặc dễ vỡ như hạt điều và hạt dẻ cười tách sạch hơn trên máy băng tải vì chúng không lăn hay nảy trước camera."),
'bn': dict(
 head=['মডেল', 'ক্ষমতা (টন/ঘণ্টা)', 'শক্তি (kW)', 'বাতাস খরচ (L/min)', 'ওজন (kg)', 'মাপ দৈ×প্র×উ (mm)'],
 crops="**আরও যেসব শস্যের বাছাই প্রোগ্রাম আছে:** কাজু, পেস্তা, হ্যাজেলনাট, তরমুজের বীজ, লাল শিম, কিনোয়া, জোয়ার, যব, মাখানা, পদ্মবীজ, সিচুয়ান মরিচ, শুকনো লঙ্কা ও কাঁচা কফি বীজ। একই মেশিন প্লাস্টিকের টুকরো, কাচ ও আকরিকও বাছাই করে। তালিকায় না থাকলে নমুনা পাঠান, আমরা পরীক্ষা করে দেখব।",
 crops_alt='ভালো ও বাতিল দানার নমুনা: কাজু, পেস্তা, হ্যাজেলনাট, চিনাবাদাম, সয়াবিন ও তিল',
 h_more='## ছোট মডেল ও বেল্ট-টাইপ কালার সর্টার',
 more="চুট মডেলের পাশাপাশি আরও দুটি সিরিজ আছে: ছোট কারখানার জন্য এক চুটের কমপ্যাক্ট 6SXM, এবং বড়, চ্যাপ্টা বা ভঙ্গুর দানার জন্য বেল্ট-টাইপ 6SXZ-L। বেল্ট মেশিনে দানা চুট বেয়ে না নেমে বেল্টের ওপর সমানভাবে শুয়ে ক্যামেরার সামনে দিয়ে যায়, তাই কাজু, চিনাবাদামের দানা, পেস্তা ও হ্যাজেলনাট গড়ায় না বা লাফায় না।",
 small_alt='এক চুটের কমপ্যাক্ট কালার সর্টার 6SXM-78A',
 h_small='### এক চুটের কমপ্যাক্ট মডেল (6SXM)',
 belt_alt='বাদামের দানার জন্য বেল্ট-টাইপ কালার সর্টার 6SXZ-128L',
 h_belt='### বেল্ট-টাইপ মডেল (6SXZ-L)',
 belt_note='6SXL-640K দুই স্তরের বেল্ট মেশিন।',
 note="দুটি তালিকার জন্যই: বাছাই নির্ভুলতা ≥ 99.9% (6SXZ-192L ≥ 99%), 220 V 50 Hz, সংকুচিত বাতাস ≥ 0.6 MPa। ক্ষমতা কারখানার তথ্য, চাল (6SXM) ও ভুট্টা (6SXZ-L) ২% অপদ্রব্যসহ মেপে; চুট মডেলের তালিকার মুগ ডালের হিসাবের চেয়ে এটি বেশি, তাই আপনার শস্যের নমুনা পরীক্ষা করে ক্ষমতা নিশ্চিত করি। বারো চুটের 6SXZ-768 (6.5 kW, বাতাস ≤ 4100 L/min, 2388 kg, 4685 × 1620 × 1820 mm) মডেলও আছে। 6SXM-96A উন্নত সংস্করণে পাওয়া যায়: ইঁদুর-রোধী সিল করা বাতাসের লাইন ও ভালভের তার, দ্বৈত তাপমাত্রা নিয়ন্ত্রণ, ৮ সারির LED আলো, প্রায় ৩৫% বাতাস সাশ্রয় (সাধারণ সংস্করণে প্রায় ২৫%), Wi-Fi ও বড় টাচ স্ক্রিন।",
 h_air='## সংকুচিত বাতাসের ব্যবস্থা',
 air=["**তেলমুক্ত কম্প্রেসার ব্যবহার করুন।** তেলের কুয়াশা ইজেক্টর ভালভ ও পণ্যে পৌঁছায়। তালিকার বাতাস খরচ অনুযায়ী কিছুটা বাড়তি রেখে কম্প্রেসার বাছুন।",
      "**কম্প্রেসার ও সর্টারের মাঝে এয়ার ট্যাংক,** সেফটি ভালভ, প্রেসার গেজ ও ড্রেনসহ; অনেক ইজেক্টর একসাথে চললে চাপ স্থির রাখে।",
      "**মেশিনের আগে ফিল্টার:** ট্যাংকের পরে বল ভালভ ও ফিল্টার, তারপর রাবার পাইপে সর্টারের নিজস্ব ফিল্টারে সংযোগ।",
      "**নিয়মিত পানি বের করুন** কম্প্রেসার ও ট্যাংক থেকে, যাতে জমা পানি ভালভে না যায়।"],
 air_alt='সংকুচিত বাতাসের নকশা: তেলমুক্ত কম্প্রেসার, এয়ার ট্যাংক, ফিল্টার ও কালার সর্টার',
 faq_q='### বাদামের দানার জন্য চুট না বেল্ট সর্টার?',
 faq_a="তিল, সয়াবিন ও আস্ত চিনাবাদামের মতো ছোট গোল দানা চুট মেশিনেই ভালো চলে। কাজু ও পেস্তার মতো বড়, চ্যাপ্টা বা ভঙ্গুর দানা বেল্ট মেশিনে বেশি পরিষ্কার বাছাই হয়, কারণ ক্যামেরার সামনে এগুলো গড়ায় বা লাফায় না।"),
}

def table(head, rows):
    out = ['| ' + ' | '.join(head) + ' |', '| ' + ' | '.join(['---'] * len(head)) + ' |']
    out += ['| ' + ' | '.join(r) + ' |' for r in rows]
    return '\n'.join(out)

for loc, t in L.items():
    p = Path(f'docs/{loc}/products/oilseed-color-sorter.md')
    lines = p.read_text(encoding='utf-8').split('\n')
    assert 'color-sorting-accept-reject' not in '\n'.join(lines), f'{loc} already updated'
    h2 = [i for i, l in enumerate(lines) if l.startswith('## ')]
    h3 = [i for i, l in enumerate(lines) if l.startswith('### ')]
    assert len(h2) == 7 and len(h3) == 3, (loc, len(h2), len(h3))
    model_i, how_i, last_faq_i = h2[1], h2[2], h3[2]
    faq = [t['faq_q'], '', t['faq_a'], '']
    more = [t['h_more'], '', t['more'], '',
            f"![{t['small_alt']}]({IMG}small-single-chute-color-sorter.webp)", '',
            t['h_small'], '', table(t['head'], SMALL), '',
            f"![{t['belt_alt']}]({IMG}belt-color-sorter-for-nut-kernels.webp)", '',
            t['h_belt'], '', table(t['head'], BELT), '', t['belt_note'], '',
            t['note'], '',
            t['h_air'], '', f"![{t['air_alt']}]({IMG}color-sorter-compressed-air-layout.webp)", '',
            *[f'- {x}' for x in t['air']], '']
    crops = [t['crops'], '', f"![{t['crops_alt']}]({IMG}color-sorting-accept-reject-peanut-sesame-nuts.webp)", '']
    # insert bottom-up so earlier indexes stay valid
    lines[last_faq_i:last_faq_i] = faq
    lines[how_i:how_i] = more
    lines[model_i:model_i] = crops
    p.write_text('\n'.join(lines), encoding='utf-8')
    print(loc, 'ok')
