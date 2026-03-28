const fs = require('fs');
const path = require('path');

const root = process.cwd();
const docsDir = path.join(root, 'docs');
const siteUrl = 'https://hydraulic-oil-press.com';
const langs = ['en', 'zh', 'ru', 'fr', 'vi', 'bn'];
const mainModels = ['300', '325', '355', '400', '426', '480', '500'];

const productExclude = new Set([
  'index.md',
  'instruction-manual',
  'customer-order-shipping-video',
  'supporting',
  'pre-treatment',
  'post-treatment',
  'filtration-equipment',
  'refining-and-dewaxing-equipment',
  'filling-equipment'
]);

const locale = {
  en: {
    overviewHeading: '## Series Overview',
    paramsHeading: ['## Product Parameters'],
    home: 'Home',
    products: 'Products',
    solutions: 'Solutions',
    quote: 'Get Price & Quote',
    official: 'Official Website',
    purchaseHeading: '## Purchase Decision Snapshot',
    lineHeading: '## Recommended Line Configuration',
    supportHeading: '## Factory Quote & After-Sales',
    hot: {
      quotePrompt: 'Need factory pricing, barrel selection, or delivery time?',
      process: 'Hot pressing for peanut, sesame, rapeseed, soybean, and tea seed.',
      route: 'Cleaning -> crushing/flaking -> roasting or conditioning -> hydraulic pressing -> filtration.',
      materials: 'Peanut, sesame, rapeseed, soybean, and tea seed projects.',
      includes: 'Machine model, barrel configuration, electrical cabinet, packing, lead time, and after-sales guidance.',
      crusher: 'Conditioning/Roasting',
      crusherLink: '[Feeding crushing frying integrated machine](/en/products/feeding-crushing-frying-integrated-machine)',
      references: '[Peanut oil solution](/en/solutions/peanut/), [Sesame oil solution](/en/solutions/sesame/), [Tea seed oil solution](/en/solutions/tea-seed/)'
    },
    cold: {
      quotePrompt: 'Need cold-press pricing, capacity planning, or turnkey support?',
      process: 'Cold pressing after crushing, with optional low-temperature drying before pressing.',
      route: 'Screening -> cleaning -> optional low-temperature drying -> high-speed crushing -> direct barrel pressing -> filtration.',
      materials: 'Walnut, sea buckthorn, perilla seed, coconut, tea seed, hemp seed, flaxseed, almond, pine nut, pumpkin seed, waste clay, and activated carbon decolorizer.',
      includes: 'Machine model, barrel size, crushing suggestion, packing, delivery time, and remote after-sales support.',
      crusher: 'Cleaning/Crushing',
      crusherLink: '[11 kW high-speed pulverizer](/en/products/11kw-high-speed-pulverizer)',
      references: '[Walnut oil solution](/en/solutions/walnut/), [Almond oil solution](/en/solutions/almond/), [Flaxseed oil solution](/en/solutions/flaxseed/), [Pumpkin seed oil solution](/en/solutions/pumpkin-seed/)'
    }
  },
  zh: {
    overviewHeading: '## 系列概述',
    paramsHeading: ['## 产品参数如下：'],
    home: '首页',
    products: '产品',
    solutions: '解决方案',
    quote: '获取价格/报价',
    official: '官方网站',
    purchaseHeading: '## 采购决策要点',
    lineHeading: '## 推荐整线配置',
    supportHeading: '## 厂家报价与售后支持',
    hot: {
      quotePrompt: '需要厂家价格、料桶配置或交期方案？',
      process: '以花生、芝麻、菜籽、大豆、茶籽等热榨项目为主。',
      route: '清理 -> 破碎/剥壳 -> 炒籽或调质 -> 液压压榨 -> 过滤。',
      materials: '适合花生浓香热榨、芝麻香油、菜籽油等项目。',
      includes: '主机型号、料桶配置、电控柜、包装方式、交期与售后建议。',
      crusher: '炒籽/调质',
      crusherLink: '[喂料破碎炒籽一体机](/zh/products/feeding-crushing-frying-integrated-machine)',
      references: '[花生热榨方案](/zh/solutions/peanut/)、[芝麻榨油方案](/zh/solutions/sesame/)、[茶籽榨油方案](/zh/solutions/tea-seed/)'
    },
    cold: {
      quotePrompt: '需要冷榨价格、产能核算或成套采购方案？',
      process: '侧重粉碎后直接冷榨，必要时增加低温烘干工序。',
      route: '筛选 -> 清理 -> 必要时低温烘干 -> 高速粉碎 -> 直接入桶压榨 -> 过滤。',
      materials: '适合核桃、沙棘果油、紫苏籽、椰子、茶籽、火麻籽、亚麻籽、杏仁、松籽、南瓜籽、化工废白土、活性炭脱色剂等物料。',
      includes: '主机型号、料桶尺寸、粉碎方案、包装发货周期与远程售后支持。',
      crusher: '清理/破碎',
      crusherLink: '[11KW高速粉碎机](/zh/products/11kw-high-speed-pulverizer)',
      references: '[核桃冷榨方案](/zh/solutions/walnut/)、[杏仁冷榨方案](/zh/solutions/almond/)、[亚麻籽冷榨方案](/zh/solutions/flaxseed/)、[南瓜籽冷榨方案](/zh/solutions/pumpkin-seed/)'
    }
  },
  ru: {
    overviewHeading: '## Обзор серии',
    paramsHeading: ['## Параметры продукта'],
    home: 'Главная',
    products: 'Продукция',
    solutions: 'Решения',
    quote: 'Запросить цену и расчёт',
    official: 'Официальный сайт',
    purchaseHeading: '## Ключевые аргументы для закупки',
    lineHeading: '## Рекомендуемая комплектация линии',
    supportHeading: '## Цена завода и сервис',
    hot: {
      quotePrompt: 'Нужна заводская цена, подбор бака или срок поставки?',
      process: 'Горячий отжим для арахиса, кунжута, рапса, сои и чайного семени.',
      route: 'Очистка -> дробление/шелушение -> обжарка или кондиционирование -> гидравлический отжим -> фильтрация.',
      materials: 'Проекты по арахису, кунжуту, рапсу, сое и чайному семени.',
      includes: 'Модель пресса, конфигурация бака, электрошкаф, упаковка, срок поставки и рекомендации по сервису.',
      crusher: 'Обжарка/подготовка',
      crusherLink: '[Интегрированная машина подачи, дробления и жарки](/ru/products/feeding-crushing-frying-integrated-machine)',
      references: '[Линия по арахисовому маслу](/ru/solutions/peanut/), [Линия по кунжутному маслу](/ru/solutions/sesame/), [Линия по чайному семени](/ru/solutions/tea-seed/)'
    },
    cold: {
      quotePrompt: 'Нужна цена на холодный отжим, расчёт производительности или проект под ключ?',
      process: 'Холодный отжим после дробления, при необходимости с низкотемпературной сушкой.',
      route: 'Сортировка -> очистка -> при необходимости низкотемпературная сушка -> высокоскоростное дробление -> прямой отжим в баке -> фильтрация.',
      materials: 'Грецкий орех, облепиха, семена периллы, кокос, чайное семя, конопля, лён, миндаль, кедровый орех, тыквенные семечки, отработанная глина и активированный уголь.',
      includes: 'Модель пресса, размер бака, схема дробления, упаковка, срок поставки и удалённая сервисная поддержка.',
      crusher: 'Очистка/дробление',
      crusherLink: '[Высокоскоростной измельчитель 11 кВт](/ru/products/11kw-high-speed-pulverizer)',
      references: '[Линия по маслу грецкого ореха](/ru/solutions/walnut/), [Линия по миндальному маслу](/ru/solutions/almond/), [Линия по льняному маслу](/ru/solutions/flaxseed/), [Линия по тыквенному маслу](/ru/solutions/pumpkin-seed/)'
    }
  },
  fr: {
    overviewHeading: '## Aperçu de la série',
    paramsHeading: ['## Paramètres du produit'],
    home: 'Accueil',
    products: 'Produits',
    solutions: 'Solutions',
    quote: 'Obtenir prix & devis',
    official: 'Site officiel',
    purchaseHeading: "## Points clés pour l'achat",
    lineHeading: '## Configuration de ligne recommandée',
    supportHeading: '## Prix usine et service après-vente',
    hot: {
      quotePrompt: 'Besoin d’un prix usine, du choix de cuve ou du délai de livraison ?',
      process: 'Pressage à chaud pour arachide, sésame, colza, soja et graine de thé.',
      route: 'Nettoyage -> broyage/décorticage -> torréfaction ou conditionnement -> pressage hydraulique -> filtration.',
      materials: 'Projets d’huile d’arachide, de sésame, de colza, de soja et de graine de thé.',
      includes: 'Modèle de presse, configuration de cuve, armoire électrique, emballage, délai et recommandations SAV.',
      crusher: 'Torréfaction/conditionnement',
      crusherLink: '[Machine intégrée alimentation, broyage et cuisson](/fr/products/feeding-crushing-frying-integrated-machine)',
      references: "[Solution huile d'arachide](/fr/solutions/peanut/), [Solution huile de sésame](/fr/solutions/sesame/), [Solution huile de graine de thé](/fr/solutions/tea-seed/)"
    },
    cold: {
      quotePrompt: 'Besoin d’un prix pour pressage à froid, d’un calcul de capacité ou d’un projet clé en main ?',
      process: 'Pressage à froid après broyage, avec séchage basse température si nécessaire.',
      route: 'Tri -> nettoyage -> séchage basse température si nécessaire -> broyage rapide -> pressage direct en cuve -> filtration.',
      materials: 'Noix, argousier, graines de perilla, coco, graines de thé, chanvre, lin, amande, pignon de pin, graine de courge, argile usagée et charbon actif décolorant.',
      includes: 'Modèle de presse, taille de cuve, schéma de broyage, emballage, délai de livraison et support SAV à distance.',
      crusher: 'Nettoyage/broyage',
      crusherLink: '[Broyeur haute vitesse 11 kW](/fr/products/11kw-high-speed-pulverizer)',
      references: '[Solution huile de noix](/fr/solutions/walnut/), [Solution huile d’amande](/fr/solutions/almond/), [Solution huile de lin](/fr/solutions/flaxseed/), [Solution huile de graine de courge](/fr/solutions/pumpkin-seed/)'
    }
  },
  vi: {
    overviewHeading: '## Tổng quan dòng sản phẩm',
    paramsHeading: ['## Thông số sản phẩm như sau：', '## Thông số sản phẩm như sau:'],
    home: 'Trang chủ',
    products: 'Sản phẩm',
    solutions: 'Giải pháp',
    quote: 'Nhận giá & báo giá',
    official: 'Trang chính thức',
    purchaseHeading: '## Điểm chính khi chọn mua',
    lineHeading: '## Cấu hình dây chuyền khuyến nghị',
    supportHeading: '## Báo giá nhà máy và hỗ trợ sau bán',
    hot: {
      quotePrompt: 'Cần giá nhà máy, cấu hình thùng ép hoặc thời gian giao hàng?',
      process: 'Ép nóng cho lạc, mè, cải dầu, đậu nành và hạt chè.',
      route: 'Làm sạch -> nghiền/tách vỏ -> rang hoặc điều hòa -> ép thủy lực -> lọc dầu.',
      materials: 'Phù hợp cho dự án dầu lạc, dầu mè, dầu cải và dầu hạt chè.',
      includes: 'Model máy, cấu hình thùng ép, tủ điện, đóng gói, tiến độ giao hàng và hướng dẫn sau bán.',
      crusher: 'Rang/điều hòa',
      crusherLink: '[Máy tích hợp nạp liệu, nghiền và rang](/vi/products/feeding-crushing-frying-integrated-machine)',
      references: '[Giải pháp dầu lạc](/vi/solutions/peanut/), [Giải pháp dầu mè](/vi/solutions/sesame/), [Giải pháp dầu hạt chè](/vi/solutions/tea-seed/)'
    },
    cold: {
      quotePrompt: 'Cần giá ép lạnh, tính toán công suất hoặc phương án trọn gói?',
      process: 'Ép lạnh sau nghiền, có thể thêm sấy nhiệt độ thấp nếu nguyên liệu yêu cầu.',
      route: 'Sàng lọc -> làm sạch -> sấy nhiệt độ thấp khi cần -> nghiền tốc độ cao -> ép trực tiếp trong thùng -> lọc dầu.',
      materials: 'Óc chó, hắc mai biển, tía tô, dừa, hạt chè, hạt gai dầu, hạt lanh, hạnh nhân, hạt thông, hạt bí, đất sét thải và chất tẩy màu than hoạt tính.',
      includes: 'Model máy, kích thước thùng ép, phương án nghiền, đóng gói, lịch giao hàng và hỗ trợ từ xa sau bán.',
      crusher: 'Làm sạch/nghiền',
      crusherLink: '[Máy nghiền tốc độ cao 11 kW](/vi/products/11kw-high-speed-pulverizer)',
      references: '[Giải pháp dầu óc chó](/vi/solutions/walnut/), [Giải pháp dầu hạnh nhân](/vi/solutions/almond/), [Giải pháp dầu hạt lanh](/vi/solutions/flaxseed/), [Giải pháp dầu hạt bí](/vi/solutions/pumpkin-seed/)'
    }
  },
  bn: {
    overviewHeading: '## সিরিজ পরিচিতি',
    paramsHeading: ['## পণ্যের বিবরণ নিম্নরূপ:'],
    home: 'হোম',
    products: 'পণ্য',
    solutions: 'সমাধান',
    quote: 'দাম ও দরপত্র নিন',
    official: 'অফিশিয়াল ওয়েবসাইট',
    purchaseHeading: '## ক্রয় সিদ্ধান্তের মূল পয়েন্ট',
    lineHeading: '## প্রস্তাবিত লাইন কনফিগারেশন',
    supportHeading: '## কারখানার দরপত্র ও বিক্রয়োত্তর সাপোর্ট',
    hot: {
      quotePrompt: 'কারখানার দাম, ব্যারেল কনফিগারেশন বা ডেলিভারি সময় জানতে চান?',
      process: 'বাদাম, তিল, সরিষা, সয়াবিন ও চা বীজের জন্য হট প্রেসিং।',
      route: 'পরিষ্কার -> ভাঙা/খোসা ছাড়ানো -> ভাজা বা কন্ডিশনিং -> হাইড্রোলিক প্রেস -> ফিল্টারিং।',
      materials: 'বাদাম, তিল, সরিষা, সয়াবিন এবং চা বীজের তেল প্রকল্পের জন্য উপযুক্ত।',
      includes: 'মেশিন মডেল, ব্যারেল কনফিগারেশন, ইলেকট্রিক কন্ট্রোল ক্যাবিনেট, প্যাকিং, ডেলিভারি সময় ও সাপোর্ট পরামর্শ।',
      crusher: 'ভাজা/কন্ডিশনিং',
      crusherLink: '[ফিডিং, ক্রাশিং ও ফ্রাইং ইন্টিগ্রেটেড মেশিন](/bn/products/feeding-crushing-frying-integrated-machine)',
      references: '[বাদাম তেল সমাধান](/bn/solutions/peanut/), [তিল তেল সমাধান](/bn/solutions/sesame/), [চা বীজ তেল সমাধান](/bn/solutions/tea-seed/)'
    },
    cold: {
      quotePrompt: 'ঠান্ডা প্রেসের দাম, ক্যাপাসিটি হিসাব বা টার্নকি সমাধান দরকার?',
      process: 'ক্রাশিংয়ের পর সরাসরি কোল্ড প্রেস, প্রয়োজন হলে লো-টেম্পারেচার ড্রাইং।',
      route: 'বাছাই -> পরিষ্কার -> প্রয়োজনে কম তাপে শুকানো -> হাই-স্পিড ক্রাশিং -> সরাসরি ব্যারেলে প্রেস -> ফিল্টারিং।',
      materials: 'আখরোট, সি বাকথর্ন, পেরিলা বীজ, নারিকেল, চা বীজ, হেম্প সিড, ফ্ল্যাক্সসিড, বাদাম, পাইন নাট, কুমড়ার বীজ, বর্জ্য ব্লিচিং আর্থ ও অ্যাক্টিভেটেড কার্বন ডিকলারাইজার।',
      includes: 'মেশিন মডেল, ব্যারেল সাইজ, ক্রাশিং পরামর্শ, প্যাকিং, ডেলিভারি সময় এবং রিমোট সাপোর্ট।',
      crusher: 'পরিষ্কার/ক্রাশিং',
      crusherLink: '[11 কিলোওয়াট হাই-স্পিড পালভারাইজার](/bn/products/11kw-high-speed-pulverizer)',
      references: '[আখরোট তেল সমাধান](/bn/solutions/walnut/), [বাদাম তেল সমাধান](/bn/solutions/almond/), [ফ্ল্যাক্সসিড তেল সমাধান](/bn/solutions/flaxseed/), [কুমড়া বীজ তেল সমাধান](/bn/solutions/pumpkin-seed/)'
    }
  }
};

const modelSeo = {
  en: {
    '300': {
      title: '300 Hydraulic Oil Press | Hot Press Price & Quote',
      description: 'Get factory pricing for the 300 hydraulic oil press for peanut, sesame, and tea seed hot-press projects with direct after-sales support.',
      keywords: '300 hydraulic oil press price, 300 oil press quote, hot press oil machine, peanut oil press supplier, sesame oil press manufacturer, factory direct after-sales',
      family: 'hot',
      bestFor: 'Entry-level oil mills, family workshops, and pilot production.',
      tip: 'Choose 300 when you want a lower starting cost and a clear hot-press process.'
    },
    '325': {
      title: '325 Hydraulic Oil Press | Hot Press Price & Quote',
      description: 'Get factory pricing for the 325 hydraulic oil press for peanut, sesame, rapeseed, and other hot-press projects with flexible barrel options.',
      keywords: '325 hydraulic oil press price, 325 oil press quote, hot press oil machine supplier, sesame oil press factory, rapeseed oil press manufacturer, export service',
      family: 'hot',
      bestFor: 'Small and medium mills that need better batch rhythm than the 300 series.',
      tip: 'Choose 325 when you need more throughput without a large footprint increase.'
    },
    '355': {
      title: '355 Hydraulic Oil Press | Cold Press Price & Quote',
      description: 'Get factory pricing for the 355 hydraulic oil press for walnut, perilla, flaxseed, and other cold-press projects after crushing.',
      keywords: '355 hydraulic oil press price, 355 cold press machine quote, walnut oil press supplier, flaxseed oil press manufacturer, factory direct service, cold press equipment',
      family: 'cold',
      bestFor: 'Small and medium plants moving into stable cold-press production.',
      tip: 'Choose 355 when you need stronger pressure and better frame stability for cold pressing.'
    },
    '400': {
      title: '400 Hydraulic Oil Press | Cold Press Price & Quote',
      description: 'Get factory pricing for the 400 hydraulic oil press for walnut, tea seed, almond, and other cold-press oil projects with stronger capacity planning.',
      keywords: '400 hydraulic oil press price, 400 cold press quote, almond oil press supplier, tea seed oil press manufacturer, factory pricing, export service',
      family: 'cold',
      bestFor: 'Medium-capacity cold-press projects needing a balance of output and investment.',
      tip: 'Choose 400 when you want a capacity step-up without moving to the heaviest frame.'
    },
    '426': {
      title: '426 Hydraulic Oil Press | Cold Press Price & Quote',
      description: 'Get factory pricing for the 426 hydraulic oil press for walnut, coconut, pumpkin seed, and other cold-press procurement projects.',
      keywords: '426 hydraulic oil press price, 426 cold press machine quote, pumpkin seed oil press supplier, coconut oil press manufacturer, procurement support, after-sales',
      family: 'cold',
      bestFor: 'Medium and large plants handling multiple cold-press materials.',
      tip: 'Choose 426 when you need higher pressure and broader raw-material flexibility.'
    },
    '480': {
      title: '480 Hydraulic Oil Press | Cold Press Price & Quote',
      description: 'Get factory pricing for the 480 hydraulic oil press for walnut, sea buckthorn, hemp seed, and other industrial cold-press projects.',
      keywords: '480 hydraulic oil press price, 480 cold press quote, hemp seed oil press supplier, sea buckthorn oil press manufacturer, industrial procurement, factory direct',
      family: 'cold',
      bestFor: 'Industrial cold-press plants targeting higher daily output.',
      tip: 'Choose 480 when you need heavier-duty scheduling and higher output per batch.'
    },
    '500': {
      title: '500 Hydraulic Oil Press | Cold Press Price & Quote',
      description: 'Get factory pricing for the 500 hydraulic oil press for walnut, sea buckthorn, pine nut, pumpkin seed, and other large cold-press lines.',
      keywords: '500 hydraulic oil press price, 500 cold press machine quote, pine nut oil press supplier, pumpkin seed oil press manufacturer, turnkey procurement, after-sales support',
      family: 'cold',
      bestFor: 'Large projects and flagship cold-press lines that need maximum series capacity.',
      tip: 'Choose 500 when your project needs a long-term core press for large-capacity production.'
    }
  },
  zh: {
    '300': {
      title: '300系列液压榨油机｜热榨价格与厂家报价',
      description: '获取300系列液压榨油机厂家价格，适合花生、芝麻、茶籽等热榨项目，支持选型、采购与售后。',
      keywords: '300系列液压榨油机价格, 热榨榨油机报价, 花生榨油机厂家, 芝麻榨油机采购, 厂家直供, 售后支持',
      family: 'hot',
      bestFor: '小型油坊、家庭工坊和试产项目。',
      tip: '如果你更看重入门成本和热榨工艺的稳定落地，300更合适。'
    },
    '325': {
      title: '325系列液压榨油机｜热榨价格与厂家报价',
      description: '获取325系列液压榨油机厂家报价，适合花生、芝麻、菜籽等热榨项目，支持单双桶配置选择。',
      keywords: '325系列液压榨油机价格, 热榨榨油机报价, 芝麻榨油机厂家, 菜籽榨油机采购, 双桶榨油机, 厂家直供',
      family: 'hot',
      bestFor: '需要更高批次效率的小中型油厂。',
      tip: '如果你希望在不明显增加占地的情况下提升产量，325更合适。'
    },
    '355': {
      title: '355系列液压榨油机｜冷榨价格与厂家报价',
      description: '获取355系列液压榨油机冷榨价格，适合核桃、紫苏籽、亚麻籽等粉碎后直接榨项目，支持采购与售后。',
      keywords: '355系列液压榨油机价格, 冷榨榨油机报价, 核桃榨油机厂家, 亚麻籽榨油机采购, 冷榨设备, 售后支持',
      family: 'cold',
      bestFor: '准备切入稳定冷榨项目的小中型油厂。',
      tip: '如果你需要比325更高的冷榨压力与机架稳定性，355更合适。'
    },
    '400': {
      title: '400系列液压榨油机｜冷榨价格与厂家报价',
      description: '获取400系列液压榨油机冷榨报价，适合核桃、茶籽、杏仁等项目，兼顾产能规划与采购成本。',
      keywords: '400系列液压榨油机价格, 冷榨榨油机报价, 杏仁榨油机厂家, 茶籽榨油机采购, 设备选型, 厂家直供',
      family: 'cold',
      bestFor: '追求产能与投资平衡的中型冷榨项目。',
      tip: '如果你要在冷榨产能和投入之间取得平衡，400更合适。'
    },
    '426': {
      title: '426系列液压榨油机｜冷榨价格与厂家报价',
      description: '获取426系列液压榨油机冷榨价格，适合核桃、椰子、南瓜籽等多品类冷榨项目采购。',
      keywords: '426系列液压榨油机价格, 冷榨榨油机报价, 椰子榨油机厂家, 南瓜籽榨油机采购, 厂家报价, 售后服务',
      family: 'cold',
      bestFor: '处理多种冷榨原料的中大型油厂。',
      tip: '如果你对压榨力和多原料适配性要求更高，426更合适。'
    },
    '480': {
      title: '480系列液压榨油机｜冷榨价格与厂家报价',
      description: '获取480系列液压榨油机冷榨报价，适合核桃、沙棘果油、火麻籽等规模化冷榨项目。',
      keywords: '480系列液压榨油机价格, 冷榨榨油机报价, 沙棘果油设备厂家, 火麻籽榨油机采购, 工业冷榨设备, 厂家直供',
      family: 'cold',
      bestFor: '重视单日产能与批次效率的工业化冷榨项目。',
      tip: '如果你的核心诉求是更重载的排产能力和更高单批产出，480更合适。'
    },
    '500': {
      title: '500系列液压榨油机｜冷榨价格与厂家报价',
      description: '获取500系列液压榨油机冷榨价格，适合核桃、沙棘果油、松籽、南瓜籽等大型成套冷榨生产线。',
      keywords: '500系列液压榨油机价格, 冷榨榨油机报价, 松籽榨油机厂家, 南瓜籽榨油机采购, 整线采购, 售后支持',
      family: 'cold',
      bestFor: '大型项目和旗舰冷榨产线的核心主机。',
      tip: '如果项目追求系列内最大产能和长期稳定运行，500更合适。'
    }
  },
  ru: {
    '300': {
      title: 'Маслопресс 300 серии | Цена для горячего отжима',
      description: 'Запросите цену на маслопресс 300 серии для арахиса, кунжута и чайного семени. Прямая поставка с завода и сервис.',
      keywords: 'маслопресс 300 цена, купить маслопресс 300, пресс для горячего отжима, арахисовое масло оборудование, завод-производитель, сервис и запчасти',
      family: 'hot',
      bestFor: 'Небольших маслобоен, семейных цехов и пилотных проектов.',
      tip: 'Если нужен доступный вход в горячий отжим и понятная технология, серия 300 подходит лучше всего.'
    },
    '325': {
      title: 'Маслопресс 325 серии | Цена для горячего отжима',
      description: 'Запросите цену на маслопресс 325 серии для арахиса, кунжута и рапса с более гибкой конфигурацией баков.',
      keywords: 'маслопресс 325 цена, купить маслопресс 325, оборудование для кунжутного масла, заводской расчёт, поставка из Китая, сервис',
      family: 'hot',
      bestFor: 'Малых и средних маслобоен, которым нужен лучший ритм загрузки и отжима.',
      tip: 'Если нужно повысить выпуск без резкого роста занимаемой площади, серия 325 является более удобным вариантом.'
    },
    '355': {
      title: 'Маслопресс 355 серии | Цена для холодного отжима',
      description: 'Запросите цену на маслопресс 355 серии для грецкого ореха, периллы и льна с холодным отжимом после дробления.',
      keywords: 'маслопресс 355 цена, купить маслопресс для холодного отжима, оборудование для масла грецкого ореха, коммерческое предложение, завод-производитель, сервис',
      family: 'cold',
      bestFor: 'Небольших и средних предприятий, переходящих к стабильному холодному отжиму.',
      tip: 'Если нужна более высокая сила давления и стабильность рамы для холодного отжима, серия 355 подходит лучше.'
    },
    '400': {
      title: 'Маслопресс 400 серии | Цена для холодного отжима',
      description: 'Запросите цену на маслопресс 400 серии для ореха, чайного семени и миндаля с более гибким планированием мощности.',
      keywords: 'маслопресс 400 цена, купить пресс для холодного отжима, оборудование для миндального масла, заводской расчёт, поставка, послепродажный сервис',
      family: 'cold',
      bestFor: 'Средних проектов по холодному отжиму, где важен баланс между выпуском и инвестициями.',
      tip: 'Если нужен шаг вверх по производительности без перехода на самый тяжёлый пресс, серия 400 подходит лучше.'
    },
    '426': {
      title: 'Маслопресс 426 серии | Цена для холодного отжима',
      description: 'Запросите цену на маслопресс 426 серии для кокоса, тыквенной семечки и других проектов по холодному отжиму.',
      keywords: 'маслопресс 426 цена, купить оборудование для холодного отжима, пресс для тыквенных семечек, предложение от завода, экспортная поставка, сервис',
      family: 'cold',
      bestFor: 'Средних и крупных заводов с несколькими видами сырья для холодного отжима.',
      tip: 'Если нужна более высокая сила отжима и гибкость по разным материалам, серия 426 будет правильным выбором.'
    },
    '480': {
      title: 'Маслопресс 480 серии | Цена для холодного отжима',
      description: 'Запросите цену на маслопресс 480 серии для облепихи, конопли и других промышленных проектов по холодному отжиму.',
      keywords: 'маслопресс 480 цена, купить промышленный маслопресс, оборудование для масла облепихи, заводской расчёт, закупка линии, сервис',
      family: 'cold',
      bestFor: 'Промышленных проектов, где нужен высокий суточный выпуск при холодном отжиме.',
      tip: 'Если приоритетом являются более тяжёлый рабочий цикл и высокий выпуск за партию, серия 480 подходит лучше.'
    },
    '500': {
      title: 'Маслопресс 500 серии | Цена для холодного отжима',
      description: 'Запросите цену на маслопресс 500 серии для ореха, облепихи, кедрового ореха и других крупных линий холодного отжима.',
      keywords: 'маслопресс 500 цена, купить пресс для холодного отжима, оборудование для масла кедрового ореха, проект под ключ, завод-производитель, сервис',
      family: 'cold',
      bestFor: 'Крупных проектов и флагманских линий холодного отжима с максимальной серийной производительностью.',
      tip: 'Если проекту нужен основной пресс для долгосрочной работы на высокой мощности, серия 500 является лучшим вариантом.'
    }
  },
  fr: {
    '300': {
      title: 'Presse à huile 300 | Prix usine pressage à chaud',
      description: 'Demandez le prix usine de la presse 300 pour l’arachide, le sésame et la graine de thé avec fourniture directe et SAV.',
      keywords: 'presse à huile 300 prix, acheter presse à huile 300, presse à chaud, équipement huile d’arachide, fabricant chinois, service après-vente',
      family: 'hot',
      bestFor: 'Les petites huileries, ateliers familiaux et projets pilotes.',
      tip: 'Si vous cherchez une entrée économique dans le pressage à chaud, le modèle 300 est le plus direct.'
    },
    '325': {
      title: 'Presse à huile 325 | Prix usine pressage à chaud',
      description: 'Demandez le prix usine de la presse 325 pour l’arachide, le sésame et le colza avec options de cuves plus flexibles.',
      keywords: 'presse à huile 325 prix, acheter presse à huile 325, devis usine, équipement huile de sésame, exportation Chine, SAV',
      family: 'hot',
      bestFor: 'Les petites et moyennes huileries ayant besoin d’un meilleur rythme de production par lot.',
      tip: 'Si vous voulez plus de débit sans augmenter fortement l’encombrement, le modèle 325 convient mieux.'
    },
    '355': {
      title: 'Presse à huile 355 | Prix usine pressage à froid',
      description: 'Demandez le prix usine de la presse 355 pour la noix, la perilla et le lin en pressage à froid après broyage.',
      keywords: 'presse à huile 355 prix, acheter presse à froid, équipement huile de noix, devis usine, fabricant, service après-vente',
      family: 'cold',
      bestFor: 'Les petites et moyennes usines qui passent à un pressage à froid plus stable.',
      tip: 'Si vous avez besoin d’une pression plus forte et d’un châssis plus stable pour le pressage à froid, le modèle 355 est mieux adapté.'
    },
    '400': {
      title: 'Presse à huile 400 | Prix usine pressage à froid',
      description: 'Demandez le prix usine de la presse 400 pour la noix, la graine de thé et l’amande avec un meilleur équilibre capacité/coût.',
      keywords: 'presse à huile 400 prix, acheter presse à froid, équipement huile d’amande, devis fabricant, achat usine, SAV',
      family: 'cold',
      bestFor: 'Les projets moyens de pressage à froid qui recherchent un bon compromis entre débit et investissement.',
      tip: 'Si vous voulez monter en capacité sans passer au châssis le plus lourd, le modèle 400 est le plus équilibré.'
    },
    '426': {
      title: 'Presse à huile 426 | Prix usine pressage à froid',
      description: 'Demandez le prix usine de la presse 426 pour la noix de coco, la courge et d’autres projets multi-matières en pressage à froid.',
      keywords: 'presse à huile 426 prix, acheter presse à froid, machine huile de courge, devis usine, exportation, service après-vente',
      family: 'cold',
      bestFor: 'Les usines moyennes et grandes qui traitent plusieurs matières de pressage à froid.',
      tip: 'Si vous exigez une pression plus élevée et une meilleure polyvalence matière, le modèle 426 est plus pertinent.'
    },
    '480': {
      title: 'Presse à huile 480 | Prix usine pressage à froid',
      description: 'Demandez le prix usine de la presse 480 pour l’argousier, le chanvre et d’autres projets industriels de pressage à froid.',
      keywords: 'presse à huile 480 prix, acheter presse industrielle, machine huile d’argousier, devis usine, achat industriel, SAV',
      family: 'cold',
      bestFor: 'Les projets industriels qui visent un débit journalier élevé en pressage à froid.',
      tip: 'Si vos priorités sont la cadence lourde et un rendement plus élevé par lot, le modèle 480 est le bon choix.'
    },
    '500': {
      title: 'Presse à huile 500 | Prix usine pressage à froid',
      description: 'Demandez le prix usine de la presse 500 pour la noix, l’argousier, le pignon et les grandes lignes de pressage à froid.',
      keywords: 'presse à huile 500 prix, acheter presse à froid grande capacité, machine huile de pignon, projet clé en main, fabricant, service après-vente',
      family: 'cold',
      bestFor: 'Les grands projets et lignes phares de pressage à froid qui visent la capacité maximale de la série.',
      tip: 'Si votre projet a besoin d’une presse centrale pour une production élevée sur le long terme, le modèle 500 est le plus adapté.'
    }
  },
  vi: {
    '300': {
      title: 'Máy ép dầu 300 | Giá ép nóng từ nhà máy',
      description: 'Nhận giá nhà máy cho máy ép dầu 300 dùng cho lạc, mè và hạt chè, hỗ trợ mua hàng và sau bán trực tiếp.',
      keywords: 'giá máy ép dầu 300, mua máy ép dầu 300, máy ép nóng, thiết bị dầu lạc, báo giá nhà máy, hỗ trợ sau bán',
      family: 'hot',
      bestFor: 'Xưởng dầu nhỏ, mô hình gia đình và dự án chạy thử.',
      tip: 'Nếu bạn cần mức đầu tư khởi điểm thấp và quy trình ép nóng rõ ràng, model 300 phù hợp hơn.'
    },
    '325': {
      title: 'Máy ép dầu 325 | Giá ép nóng từ nhà máy',
      description: 'Nhận giá nhà máy cho máy ép dầu 325 dùng cho lạc, mè, cải dầu với cấu hình thùng ép linh hoạt hơn.',
      keywords: 'giá máy ép dầu 325, mua máy ép dầu 325, báo giá ép nóng, thiết bị dầu mè, mua từ nhà máy, dịch vụ sau bán',
      family: 'hot',
      bestFor: 'Nhà máy nhỏ và vừa cần nhịp ép theo mẻ tốt hơn so với dòng 300.',
      tip: 'Nếu bạn muốn tăng sản lượng mà không tăng diện tích quá nhiều, model 325 hợp lý hơn.'
    },
    '355': {
      title: 'Máy ép dầu 355 | Giá ép lạnh từ nhà máy',
      description: 'Nhận giá nhà máy cho máy ép dầu 355 dùng cho óc chó, tía tô, hạt lanh và các dự án ép lạnh sau nghiền.',
      keywords: 'giá máy ép dầu 355, mua máy ép lạnh 355, thiết bị dầu óc chó, báo giá nhà máy, hỗ trợ mua hàng, hậu mãi',
      family: 'cold',
      bestFor: 'Nhà máy nhỏ và vừa đang chuyển sang ép lạnh ổn định.',
      tip: 'Nếu bạn cần áp lực ép mạnh hơn và khung máy ổn định hơn cho ép lạnh, model 355 phù hợp hơn.'
    },
    '400': {
      title: 'Máy ép dầu 400 | Giá ép lạnh từ nhà máy',
      description: 'Nhận giá nhà máy cho máy ép dầu 400 dùng cho óc chó, hạt chè, hạnh nhân với cân bằng tốt giữa công suất và chi phí.',
      keywords: 'giá máy ép dầu 400, mua máy ép lạnh, thiết bị dầu hạnh nhân, báo giá nhà máy, giao hàng xuất khẩu, hậu mãi',
      family: 'cold',
      bestFor: 'Dự án ép lạnh cỡ trung cần cân bằng giữa công suất và đầu tư.',
      tip: 'Nếu bạn muốn tăng công suất nhưng chưa cần khung máy nặng nhất, model 400 là lựa chọn cân đối hơn.'
    },
    '426': {
      title: 'Máy ép dầu 426 | Giá ép lạnh từ nhà máy',
      description: 'Nhận giá nhà máy cho máy ép dầu 426 dùng cho dừa, hạt bí và nhiều nguyên liệu ép lạnh khác.',
      keywords: 'giá máy ép dầu 426, mua máy ép lạnh 426, thiết bị dầu hạt bí, báo giá nhà máy, mua hàng xuất khẩu, sau bán',
      family: 'cold',
      bestFor: 'Nhà máy vừa và lớn xử lý nhiều loại nguyên liệu ép lạnh.',
      tip: 'Nếu bạn cần áp lực ép cao hơn và khả năng thích ứng nguyên liệu rộng hơn, model 426 hợp lý hơn.'
    },
    '480': {
      title: 'Máy ép dầu 480 | Giá ép lạnh từ nhà máy',
      description: 'Nhận giá nhà máy cho máy ép dầu 480 dùng cho hắc mai biển, gai dầu và các dự án ép lạnh công nghiệp.',
      keywords: 'giá máy ép dầu 480, mua máy ép dầu công nghiệp, thiết bị dầu hắc mai biển, báo giá nhà máy, mua hàng công nghiệp, hậu mãi',
      family: 'cold',
      bestFor: 'Dự án ép lạnh công nghiệp cần sản lượng ngày cao hơn.',
      tip: 'Nếu mục tiêu là chạy tải nặng hơn và sản lượng theo mẻ cao hơn, model 480 phù hợp hơn.'
    },
    '500': {
      title: 'Máy ép dầu 500 | Giá ép lạnh từ nhà máy',
      description: 'Nhận giá nhà máy cho máy ép dầu 500 dùng cho óc chó, hắc mai biển, hạt thông và các dây chuyền ép lạnh quy mô lớn.',
      keywords: 'giá máy ép dầu 500, mua máy ép lạnh công suất lớn, thiết bị dầu hạt thông, báo giá dây chuyền, mua từ nhà máy, hỗ trợ sau bán',
      family: 'cold',
      bestFor: 'Dự án lớn và dây chuyền ép lạnh chủ lực cần công suất tối đa trong dòng máy.',
      tip: 'Nếu dự án cần máy chủ lực cho sản lượng lớn và vận hành dài hạn, model 500 là lựa chọn mạnh nhất.'
    }
  },
  bn: {
    '300': {
      title: '300 সিরিজ অয়েল প্রেস | হট প্রেস কারখানা দরপত্র',
      description: '300 সিরিজ অয়েল প্রেসের কারখানার দাম নিন। বাদাম, তিল ও চা বীজের হট প্রেস প্রকল্পে উপযোগী, সরাসরি সাপোর্টসহ।',
      keywords: '300 সিরিজ অয়েল প্রেস দাম, 300 অয়েল প্রেস কিনতে, হট প্রেস মেশিন, বাদাম তেল যন্ত্র, কারখানা কোটেশন, বিক্রয়োত্তর সাপোর্ট',
      family: 'hot',
      bestFor: 'ছোট তেলকল, পারিবারিক ওয়ার্কশপ এবং ট্রায়াল প্রকল্পের জন্য।',
      tip: 'কম শুরুর বিনিয়োগে হট প্রেস লাইন চালু করতে চাইলে 300 সিরিজ সবচেয়ে সরাসরি পছন্দ।'
    },
    '325': {
      title: '325 সিরিজ অয়েল প্রেস | হট প্রেস কারখানা দরপত্র',
      description: '325 সিরিজ অয়েল প্রেসের কারখানার দাম নিন। বাদাম, তিল, সরিষার হট প্রেস প্রকল্পে আরও নমনীয় ব্যারেল কনফিগারেশন দেয়।',
      keywords: '325 সিরিজ অয়েল প্রেস দাম, 325 অয়েল প্রেস কিনতে, হট প্রেস কোটেশন, তিল তেল মেশিন, চীনা প্রস্তুতকারক, বিক্রয়োত্তর সাপোর্ট',
      family: 'hot',
      bestFor: 'ছোট ও মাঝারি তেলকল যারা 300 সিরিজের চেয়ে ভালো ব্যাচ রিদম চায়।',
      tip: 'অতিরিক্ত জায়গা না বাড়িয়ে উৎপাদন বাড়াতে চাইলে 325 সিরিজ বেশি উপযোগী।'
    },
    '355': {
      title: '355 সিরিজ অয়েল প্রেস | কোল্ড প্রেস কারখানা দরপত্র',
      description: '355 সিরিজ অয়েল প্রেসের কারখানার দাম নিন। আখরোট, পেরিলা ও ফ্ল্যাক্সসিডের মতো কোল্ড প্রেস প্রকল্পে ক্রাশিংয়ের পর সরাসরি প্রেসের জন্য উপযুক্ত।',
      keywords: '355 সিরিজ অয়েল প্রেস দাম, কোল্ড প্রেস মেশিন কিনতে, আখরোট তেল যন্ত্র, কারখানা কোটেশন, চীনা প্রস্তুতকারক, বিক্রয়োত্তর সাপোর্ট',
      family: 'cold',
      bestFor: 'ছোট ও মাঝারি কারখানা যারা স্থিতিশীল কোল্ড প্রেস প্রকল্পে যেতে চায়।',
      tip: 'কোল্ড প্রেসের জন্য বেশি চাপ এবং ভালো ফ্রেম স্ট্যাবিলিটি দরকার হলে 355 সিরিজ বেশি মানানসই।'
    },
    '400': {
      title: '400 সিরিজ অয়েল প্রেস | কোল্ড প্রেস কারখানা দরপত্র',
      description: '400 সিরিজ অয়েল প্রেসের কারখানার দাম নিন। আখরোট, চা বীজ ও বাদামের কোল্ড প্রেস প্রকল্পে ক্যাপাসিটি ও খরচের ভালো ভারসাম্য দেয়।',
      keywords: '400 সিরিজ অয়েল প্রেস দাম, কোল্ড প্রেস মেশিন কিনতে, বাদাম তেল যন্ত্র, কারখানা দরপত্র, রপ্তানি সরবরাহ, সাপোর্ট',
      family: 'cold',
      bestFor: 'মাঝারি কোল্ড প্রেস প্রকল্প যেখানে উৎপাদন ও বিনিয়োগের ভারসাম্য দরকার।',
      tip: 'সবচেয়ে ভারী ফ্রেমে না গিয়ে ক্যাপাসিটি বাড়াতে চাইলে 400 সিরিজ ভালো পছন্দ।'
    },
    '426': {
      title: '426 সিরিজ অয়েল প্রেস | কোল্ড প্রেস কারখানা দরপত্র',
      description: '426 সিরিজ অয়েল প্রেসের কারখানার দাম নিন। নারিকেল, কুমড়ার বীজ ও বহু কাঁচামালের কোল্ড প্রেস প্রকল্পে উপযোগী।',
      keywords: '426 সিরিজ অয়েল প্রেস দাম, কোল্ড প্রেস যন্ত্র কিনতে, কুমড়া বীজ তেল মেশিন, কারখানা কোটেশন, রপ্তানি, বিক্রয়োত্তর সাপোর্ট',
      family: 'cold',
      bestFor: 'মাঝারি ও বড় কারখানা যারা একাধিক কোল্ড প্রেস কাঁচামাল চালায়।',
      tip: 'বেশি প্রেসিং ফোর্স এবং বেশি কাঁচামাল অভিযোজন চাইলে 426 সিরিজ বেশি উপযুক্ত।'
    },
    '480': {
      title: '480 সিরিজ অয়েল প্রেস | কোল্ড প্রেস কারখানা দরপত্র',
      description: '480 সিরিজ অয়েল প্রেসের কারখানার দাম নিন। সি বাকথর্ন, হেম্প সিড ও শিল্প পর্যায়ের কোল্ড প্রেস প্রকল্পে উপযোগী।',
      keywords: '480 সিরিজ অয়েল প্রেস দাম, শিল্প অয়েল প্রেস কিনতে, সি বাকথর্ন তেল যন্ত্র, কারখানা দরপত্র, শিল্প ক্রয়, বিক্রয়োত্তর সাপোর্ট',
      family: 'cold',
      bestFor: 'শিল্প পর্যায়ের কোল্ড প্রেস প্রকল্প যেখানে দৈনিক উৎপাদন বেশি দরকার।',
      tip: 'ভারী কাজের শিডিউল ও বেশি ব্যাচ আউটপুট প্রয়োজন হলে 480 সিরিজ ভালো মানায়।'
    },
    '500': {
      title: '500 সিরিজ অয়েল প্রেস | কোল্ড প্রেস কারখানা দরপত্র',
      description: '500 সিরিজ অয়েল প্রেসের কারখানার দাম নিন। আখরোট, সি বাকথর্ন, পাইন নাট ও বড় কোল্ড প্রেস লাইনের জন্য উপযোগী।',
      keywords: '500 সিরিজ অয়েল প্রেস দাম, বড় কোল্ড প্রেস মেশিন কিনতে, পাইন নাট তেল যন্ত্র, টার্নকি দরপত্র, চীনা প্রস্তুতকারক, বিক্রয়োত্তর সাপোর্ট',
      family: 'cold',
      bestFor: 'বড় প্রকল্প ও ফ্ল্যাগশিপ কোল্ড প্রেস লাইন যেখানে সিরিজের সর্বোচ্চ ক্ষমতা দরকার।',
      tip: 'দীর্ঘমেয়াদি উচ্চক্ষমতা প্রকল্পের মূল প্রেস হিসেবে 500 সিরিজ সবচেয়ে শক্তিশালী বিকল্প।'
    }
  }
};

function walk(dir) {
  let out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out = out.concat(walk(full));
    if (entry.isFile() && entry.name.endsWith('.md')) out.push(full);
  }
  return out;
}

function parseFrontmatter(content) {
  const lines = content.split(/\r?\n/);
  if (lines[0] !== '---') return null;
  const bodyIndex = lines.findIndex((line, idx) => idx > 0 && /^#\s*/.test(line));
  let end = -1;
  for (let i = 1; i < lines.length; i += 1) {
    if (lines[i] === '---') {
      end = i;
      break;
    }
  }
  if (end !== -1 && (bodyIndex === -1 || end < bodyIndex)) {
    return {
      frontmatter: lines.slice(1, end),
      body: lines.slice(end + 1).join('\n')
    };
  }
  if (bodyIndex === -1) return null;
  return {
    frontmatter: lines.slice(1, bodyIndex),
    body: lines.slice(bodyIndex).join('\n')
  };
}

function getField(frontmatter, key) {
  for (const line of frontmatter) {
    if (line.startsWith(`${key}:`)) {
      return stripQuotes(line.slice(key.length + 1).trim());
    }
  }
  return '';
}

function stripQuotes(value) {
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    return value.slice(1, -1);
  }
  return value;
}

function formatValue(value) {
  if (!value) return '""';
  if (/[#:]|^\s|\s$/.test(value)) {
    return `"${value.replace(/"/g, '\\"')}"`;
  }
  return value;
}

function setField(frontmatter, key, value) {
  for (let i = 0; i < frontmatter.length; i += 1) {
    if (frontmatter[i].startsWith(`${key}:`)) {
      frontmatter[i] = `${key}: ${formatValue(value)}`;
      return;
    }
  }
  frontmatter.push(`${key}: ${formatValue(value)}`);
}

function setHeadBlock(frontmatter, blockLines) {
  let start = -1;
  let finish = -1;
  for (let i = 0; i < frontmatter.length; i += 1) {
    if (frontmatter[i].startsWith('head:')) {
      start = i;
      finish = i + 1;
      while (finish < frontmatter.length && (/^\s/.test(frontmatter[finish]) || frontmatter[finish] === '')) {
        finish += 1;
      }
      break;
    }
  }
  if (start === -1) {
    frontmatter.push('head:', ...blockLines);
    return;
  }
  frontmatter.splice(start + 1, finish - (start + 1), ...blockLines);
}

function markdownHeadingName(body, fallback) {
  const match = body.match(/^#\s*(.+)$/m);
  if (!match) return fallback;
  return cleanName(match[1]) || fallback;
}

function cleanName(value) {
  return value
    .replace(/<[^>]+>/g, ' ')
    .replace(/\[(.*?)\]\(.*?\)/g, '$1')
    .replace(/\s+/g, ' ')
    .replace(/^[#\s]+/, '')
    .replace(/[|].*$/, '')
    .replace(/\s+-\s+Shengshi Hecheng.*$/i, '')
    .replace(/\s+Price$/i, '')
    .replace(/\s+prix$/i, '')
    .replace(/\s+цена$/i, '')
    .replace(/\s+giá$/i, '')
    .replace(/\s+价格$/, '')
    .replace(/\s+দাম$/, '')
    .trim();
}

function isProductDetail(relPath) {
  const parts = relPath.split('/');
  if (parts.length < 3) return false;
  if (parts[1] !== 'products') return false;
  if (parts[parts.length - 1] === 'index.md') return false;
  if (parts.length >= 3 && productExclude.has(parts[2])) return false;
  if (parts.length >= 2 && productExclude.has(parts[1])) return false;
  return true;
}

function isSolutionDetail(relPath) {
  const parts = relPath.split('/');
  return parts.length >= 3 && parts[1] === 'solutions' && parts[parts.length - 1] !== 'index.md';
}

function buildHeadBlock(kind, lang, relPath, name, description, sku) {
  const url = `${siteUrl}/${relPath.replace(/\.md$/, '')}`;
  const aboutUrl = `${siteUrl}/${lang}/about/`;
  const contactUrl = `${siteUrl}/${lang}/contact/`;
  const config = locale[lang];
  const core =
    kind === 'product'
      ? {
          '@context': 'https://schema.org',
          '@type': 'Product',
          name,
          description,
          brand: {
            '@type': 'Brand',
            name: 'Shengshi Hecheng'
          },
          manufacturer: {
            '@type': 'Organization',
            name: 'Shengshi Hecheng',
            url: aboutUrl
          },
          sku,
          url,
          offers: {
            '@type': 'Offer',
            url: contactUrl,
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            itemCondition: 'https://schema.org/NewCondition',
            seller: {
              '@type': 'Organization',
              name: 'Shengshi Hecheng',
              url: aboutUrl
            },
            businessFunction: 'http://purl.org/goodrelations/v1#Sell'
          }
        }
      : {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name,
          description,
          provider: {
            '@type': 'Organization',
            name: 'Shengshi Hecheng',
            url: aboutUrl
          },
          serviceType: kind === 'solution' ? config.solutions : config.products,
          areaServed: 'Worldwide',
          url,
          offers: {
            '@type': 'Offer',
            url: contactUrl,
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            seller: {
              '@type': 'Organization',
              name: 'Shengshi Hecheng',
              url: aboutUrl
            },
            businessFunction: 'http://purl.org/goodrelations/v1#Sell'
          }
        };

  const brand = {
    '@context': 'https://schema.org',
    '@type': 'Brand',
    name: 'Shengshi Hecheng',
    url: siteUrl
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: config.home,
        item: `${siteUrl}/${lang}/`
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: kind === 'product' ? config.products : config.solutions,
        item: `${siteUrl}/${lang}/${kind === 'product' ? 'products' : 'solutions'}/`
      },
      {
        '@type': 'ListItem',
        position: 3,
        name,
        item: url
      }
    ]
  };

  const schemas = [core, brand, breadcrumb];
  const lines = [];
  for (const schema of schemas) {
    lines.push('  - - script');
    lines.push('    - type: application/ld+json');
    lines.push('      children: |');
    const json = JSON.stringify(schema, null, 2).split('\n');
    for (const line of json) {
      lines.push(`        ${line}`);
    }
  }
  return lines;
}

function genericKeywords(lang, kind, name) {
  const clean = cleanName(name);
  const map = {
    ru: kind === 'product'
      ? `${clean} цена, купить ${clean}, коммерческое предложение, завод-производитель, поставка из Китая, сервис и запчасти`
      : `${clean} цена линии, коммерческое предложение, проект под ключ, подбор оборудования, поставка и сервис`,
    fr: kind === 'product'
      ? `${clean} prix, acheter ${clean}, devis usine, fabricant chinois, exportation, service après-vente`
      : `${clean} prix ligne, devis clé en main, étude d’équipement, achat usine, service après-vente`,
    vi: kind === 'product'
      ? `giá ${clean}, mua ${clean}, báo giá nhà máy, nhà sản xuất Trung Quốc, giao hàng xuất khẩu, hỗ trợ sau bán`
      : `${clean} báo giá dây chuyền, giải pháp trọn gói, danh mục thiết bị, mua từ nhà máy, hậu mãi`,
    bn: kind === 'product'
      ? `${clean} দাম, ${clean} কিনতে, কারখানা কোটেশন, চীনা প্রস্তুতকারক, রপ্তানি সরবরাহ, বিক্রয়োত্তর সাপোর্ট`
      : `${clean} লাইন দরপত্র, টার্নকি সমাধান, যন্ত্রপাতির তালিকা, কারখানা থেকে ক্রয়, বিক্রয়োত্তর সাপোর্ট`
  };
  return map[lang] || '';
}

function generateModelBlock(lang, model) {
  const page = modelSeo[lang][model];
  const config = locale[lang];
  const family = config[page.family];
  const prefix = `/${lang}`;
  return [
    '',
    `### ${config.quote} / ${config.official}`,
    family.quotePrompt,
    `- [${config.quote}](${prefix}/contact/)`,
    `- [${config.official}](${siteUrl}/)`,
    '',
    config.purchaseHeading,
    `- ${lang === 'en' ? 'Recommended for' : lang === 'zh' ? '适用场景' : lang === 'ru' ? 'Подходит для' : lang === 'fr' ? 'Adapté à' : lang === 'vi' ? 'Phù hợp cho' : 'উপযুক্ত' }: ${page.bestFor}`,
    `- ${lang === 'en' ? 'Recommended process' : lang === 'zh' ? '推荐工艺' : lang === 'ru' ? 'Рекомендуемый процесс' : lang === 'fr' ? 'Procédé recommandé' : lang === 'vi' ? 'Quy trình khuyến nghị' : 'প্রস্তাবিত প্রক্রিয়া' }: ${family.process}`,
    `- ${lang === 'en' ? 'Material focus' : lang === 'zh' ? '适用油料' : lang === 'ru' ? 'Основное сырьё' : lang === 'fr' ? 'Matières principales' : lang === 'vi' ? 'Nguyên liệu trọng tâm' : 'উপযুক্ত কাঁচামাল' }: ${family.materials}`,
    `- ${lang === 'en' ? 'Process route' : lang === 'zh' ? '工艺路线' : lang === 'ru' ? 'Технологический маршрут' : lang === 'fr' ? 'Route de procédé' : lang === 'vi' ? 'Lộ trình công nghệ' : 'প্রক্রিয়া রুট' }: ${family.route}`,
    `- ${lang === 'en' ? 'Quote usually includes' : lang === 'zh' ? '报价通常包含' : lang === 'ru' ? 'В расчёт обычно входят' : lang === 'fr' ? 'Le devis inclut généralement' : lang === 'vi' ? 'Báo giá thường gồm' : 'দরপত্রে সাধারণত থাকে' }: ${family.includes}`,
    '',
    config.lineHeading,
    `- ${lang === 'en' ? 'Pre-treatment' : lang === 'zh' ? '预处理' : lang === 'ru' ? 'Предварительная подготовка' : lang === 'fr' ? 'Prétraitement' : lang === 'vi' ? 'Tiền xử lý' : 'প্রি-ট্রিটমেন্ট' }: [${lang === 'zh' ? '油料预处理设备' : lang === 'ru' ? 'Оборудование предварительной подготовки' : lang === 'fr' ? 'Équipement de prétraitement des oléagineux' : lang === 'vi' ? 'Thiết bị tiền xử lý hạt dầu' : lang === 'bn' ? 'তেলবীজ প্রি-ট্রিটমেন্ট ইকুইপমেন্ট' : 'Oilseed pre-treatment equipment'}](${prefix}/products/pre-treatment)`,
    `- ${family.crusher}: ${family.crusherLink}`,
    `- ${lang === 'en' ? 'Pressing host' : lang === 'zh' ? '压榨主机' : lang === 'ru' ? 'Основной пресс' : lang === 'fr' ? 'Presse principale' : lang === 'vi' ? 'Máy ép chính' : 'প্রেসিং হোস্ট' }: ${model}${lang === 'en' ? ' hydraulic oil press' : lang === 'zh' ? '系列液压榨油机' : lang === 'ru' ? ' серия гидравлического маслопресса' : lang === 'fr' ? ' série de presse à huile hydraulique' : lang === 'vi' ? ' dòng máy ép dầu thủy lực' : ' সিরিজ হাইড্রোলিক অয়েল প্রেস'}`,
    `- ${lang === 'en' ? 'Filtration' : lang === 'zh' ? '过滤' : lang === 'ru' ? 'Фильтрация' : lang === 'fr' ? 'Filtration' : lang === 'vi' ? 'Lọc dầu' : 'ফিল্টারিং' }: [${lang === 'zh' ? '气动过滤机' : lang === 'ru' ? 'Пневматический фильтр-пресс' : lang === 'fr' ? 'Filtre-presse pneumatique' : lang === 'vi' ? 'Máy lọc dầu khí nén' : lang === 'bn' ? 'পনিউম্যাটিক ফিল্টার প্রেস' : 'Pneumatic filter press'}](${prefix}/products/pneumatic-filter-press)`,
    `- ${lang === 'en' ? 'Refining/Filling' : lang === 'zh' ? '精炼/灌装' : lang === 'ru' ? 'Рафинация/розлив' : lang === 'fr' ? 'Raffinage/remplissage' : lang === 'vi' ? 'Tinh luyện/chiết rót' : 'রিফাইনিং/ফিলিং' }: [${lang === 'zh' ? '食用油精炼设备' : lang === 'ru' ? 'Оборудование для рафинации пищевого масла' : lang === 'fr' ? 'Équipement de raffinage d’huile alimentaire' : lang === 'vi' ? 'Thiết bị tinh luyện dầu ăn' : lang === 'bn' ? 'ভোজ্য তেল রিফাইনিং ইকুইপমেন্ট' : 'Edible oil refining equipment'}](${prefix}/products/edible-oil-refining-equipment) / [${lang === 'zh' ? '灌装配套方案' : lang === 'ru' ? 'Решения по розливу' : lang === 'fr' ? 'Solutions de remplissage' : lang === 'vi' ? 'Giải pháp chiết rót' : lang === 'bn' ? 'ফিলিং সলিউশন' : 'Filling solutions'}](${prefix}/solutions/filling-packages/)`,
    '',
    config.supportHeading,
    `- ${lang === 'en' ? 'Reference solutions' : lang === 'zh' ? '参考工艺方案' : lang === 'ru' ? 'Референсные решения' : lang === 'fr' ? 'Solutions de référence' : lang === 'vi' ? 'Giải pháp tham chiếu' : 'রেফারেন্স সমাধান' }: ${family.references}`,
    `- ${lang === 'en' ? 'Factory-direct supply supports standalone machine purchase or full-line procurement.' : lang === 'zh' ? '厂家直供，既支持单机采购，也支持整线打包采购。' : lang === 'ru' ? 'Прямая заводская поставка подходит как для покупки одной машины, так и для закупки полной линии.' : lang === 'fr' ? 'La fourniture directe usine convient autant à l’achat d’une machine qu’à une ligne complète.' : lang === 'vi' ? 'Cung cấp trực tiếp từ nhà máy, hỗ trợ mua máy đơn lẻ hoặc trọn dây chuyền.' : 'কারখানা থেকে সরাসরি সরবরাহ, একক মেশিন বা পূর্ণ লাইন উভয় ক্রয়েই উপযোগী।'}`,
    `- ${lang === 'en' ? 'Video inspection, export packing, commissioning guidance, and remote after-sales support are available.' : lang === 'zh' ? '支持视频验机、出口包装、调试指导与远程售后。' : lang === 'ru' ? 'Доступны видеоинспекция, экспортная упаковка, пусконаладка и удалённая сервисная поддержка.' : lang === 'fr' ? 'Inspection vidéo, emballage export, assistance à la mise en service et SAV à distance disponibles.' : lang === 'vi' ? 'Hỗ trợ xem máy qua video, đóng gói xuất khẩu, hướng dẫn vận hành và hỗ trợ sau bán từ xa.' : 'ভিডিও পরিদর্শন, এক্সপোর্ট প্যাকিং, কমিশনিং গাইডেন্স এবং রিমোট সাপোর্ট পাওয়া যায়।'}`,
    `- ${page.tip}`,
    `- [${config.quote}](${prefix}/contact/)`,
    ''
  ].join('\n');
}

function replaceSection(body, startMarker, endMarkers, replacement) {
  const startIndex = body.indexOf(startMarker);
  if (startIndex === -1) return body;
  const contentStart = startIndex + startMarker.length;
  let endIndex = -1;
  for (const marker of endMarkers) {
    const idx = body.indexOf(marker, contentStart);
    if (idx !== -1 && (endIndex === -1 || idx < endIndex)) endIndex = idx;
  }
  if (endIndex === -1) return body;
  return `${body.slice(0, contentStart)}\n${replacement.trim()}\n\n${body.slice(endIndex)}`;
}

let updatedFiles = 0;
const files = walk(docsDir);

for (const file of files) {
  const relPath = path.relative(docsDir, file).replace(/\\/g, '/');
  const lang = relPath.split('/')[0];
  if (!langs.includes(lang)) continue;

  const content = fs.readFileSync(file, 'utf8');
  const parsed = parseFrontmatter(content);
  if (!parsed) continue;
  const { frontmatter, body } = parsed;
  const isProduct = isProductDetail(relPath);
  const isSolution = isSolutionDetail(relPath);
  if (!isProduct && !isSolution) continue;

  const basename = path.basename(file, '.md');
  const currentTitle = getField(frontmatter, 'title');
  const currentDescription = getField(frontmatter, 'description');
  const currentName = markdownHeadingName(body, cleanName(currentTitle));

  if (isProduct && mainModels.includes(basename)) {
    const seo = modelSeo[lang][basename];
    setField(frontmatter, 'title', seo.title);
    setField(frontmatter, 'description', seo.description);
    setField(frontmatter, 'keywords', seo.keywords);
  } else if ((isProduct || isSolution) && ['ru', 'fr', 'vi', 'bn'].includes(lang)) {
    const localized = genericKeywords(lang, isProduct ? 'product' : 'solution', currentName);
    if (localized) setField(frontmatter, 'keywords', localized);
  }

  const freshTitle = getField(frontmatter, 'title');
  const freshDescription = getField(frontmatter, 'description');
  const name = isProduct && mainModels.includes(basename)
    ? currentName
    : markdownHeadingName(body, cleanName(freshTitle));

  const headBlock = buildHeadBlock(
    isProduct ? 'product' : 'solution',
    lang,
    relPath.replace(/index\.md$/, ''),
    name,
    freshDescription,
    basename
  );
  setHeadBlock(frontmatter, headBlock);

  let nextBody = body;
  if (isProduct && mainModels.includes(basename)) {
    const config = locale[lang];
    const block = generateModelBlock(lang, basename);
    nextBody = replaceSection(nextBody, `${config.overviewHeading}\n`, config.paramsHeading, block);
  }

  const newContent = ['---', ...frontmatter, '---', nextBody].join('\n');
  if (newContent !== content) {
    fs.writeFileSync(file, newContent, 'utf8');
    updatedFiles += 1;
  }
}

console.log(`Updated ${updatedFiles} files.`);
