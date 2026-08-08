import { existsSync, readdirSync, readFileSync } from 'node:fs'

const zhFillingSeriesSidebarItems = [
  {
    text: '联体机与灌装配套总线',
    collapsed: true,
    items: [
      { text: '系列总览', link: '/zh/solutions/filling-packages' },
      { text: '冲瓶、灌装、封口三联机', link: '/zh/products/filling/cgf-three-in-one-monoblock' },
      { text: 'GDP36DK-10-10 联体机', link: '/zh/products/filling/gdp36dk-filling-capping-sealing-monoblock' },
      { text: '白酒灌装二联机', link: '/zh/products/filling/baijiu-filling-capping-monoblock' }
    ]
  },
  {
    text: '冲瓶机系列',
    collapsed: true,
    items: [
      { text: '系列页', link: '/zh/solutions/bottle-washing/' },
      { text: '回转式冲瓶机', link: '/zh/products/filling/rotary-bottle-washer' },
      { text: '六轮式冲瓶机', link: '/zh/products/filling/six-wheel-bottle-washer' },
      { text: '链轨式冲瓶机', link: '/zh/products/filling/chain-bottle-washer' },
      { text: '间歇式冲瓶机', link: '/zh/products/filling/intermittent-bottle-washer' },
      { text: '翻转式冲瓶机', link: '/zh/products/filling/flip-bottle-washer' }
    ]
  },
  {
    text: '灌装机系列',
    collapsed: true,
    items: [
      { text: '系列页', link: '/zh/solutions/filling/' },
      { text: '系列智能型灌装机', link: '/zh/products/filling/smart-filling-machine' },
      { text: '高精度定量灌装机', link: '/zh/products/filling/high-precision-filling-machine' },
      { text: '智能定量灌装机', link: '/zh/products/filling/intelligent-quantitative-filling-machine' },
      { text: '回转式大桶灌装机', link: '/zh/products/filling/rotary-drum-filling-machine' },
      { text: '直线式灌装机', link: '/zh/products/filling/linear-filling-machine' },
      { text: '农药灌装机', link: '/zh/products/filling/pesticide-filling-machine' },
      { text: '耐酸碱腐蚀灌装机', link: '/zh/products/filling/corrosion-resistant-filling-machine' }
    ]
  },
  {
      text: '灯检机系列',
      collapsed: true,
      items: [
        { text: '系列页', link: '/zh/solutions/light-inspection/' },
      { text: '灯检机', link: '/zh/products/filling/light-inspection-machine' }
      ]
  },
  {
    text: '封口机系列',
    collapsed: true,
    items: [
      { text: '系列页', link: '/zh/solutions/sealing/' },
      { text: '塑防压盖机', link: '/zh/products/filling/plastic-cap-pressing-machine' },
      { text: '全自动气动压盖机', link: '/zh/products/filling/pneumatic-capping-machine' },
      { text: '全自动防盗盖封口机', link: '/zh/products/filling/anti-theft-cap-sealing-machine' },
      { text: '自动单头封口机', link: '/zh/products/filling/single-head-sealing-machine' },
      { text: '铝盖封口机', link: '/zh/products/filling/aluminum-cap-sealing-machine' }
    ]
  },
  {
    text: '打塞机系列',
    collapsed: true,
    items: [
      { text: '系列页', link: '/zh/solutions/corking/' },
      { text: '全自动打塞机', link: '/zh/products/filling/automatic-corking-machine' },
      { text: '半自动打塞机', link: '/zh/products/filling/semi-automatic-corking-machine' },
      { text: '手动打塞机', link: '/zh/products/filling/manual-corking-machine' }
    ]
  },
  {
    text: '胶帽热缩机系列',
    collapsed: true,
    items: [
      { text: '系列页', link: '/zh/solutions/cap-shrinking/' },
      { text: '多头胶帽热缩机', link: '/zh/products/filling/multi-head-cap-shrinking-machine' },
      { text: '单头胶帽热缩机', link: '/zh/products/filling/single-head-cap-shrinking-machine' },
      { text: '碾帽/收缩两用机', link: '/zh/products/filling/cap-rolling-shrinking-machine' }
    ]
  },
  {
    text: '吹干机系列',
    collapsed: true,
    items: [
      { text: '系列页', link: '/zh/solutions/drying/' },
      { text: '涡轮增压风刀吹干机', link: '/zh/products/filling/turbo-air-knife-dryer' },
      { text: '蜘蛛手节能吹干机', link: '/zh/products/filling/spider-arm-bottle-dryer' }
    ]
  },
  {
    text: '贴标机系列',
    collapsed: true,
    items: [
      { text: '系列页', link: '/zh/solutions/labeling/' },
      { text: '直线式双标签全自动贴标机', link: '/zh/products/filling/double-label-automatic-labeling-machine' },
      { text: 'DF-T200型半自动圆瓶贴标机', link: '/zh/products/filling/df-t200-round-bottle-labeler' },
      { text: '全自动不干胶贴标机', link: '/zh/products/filling/self-adhesive-labeling-machine' }
    ]
  },
  {
    text: '激光打码机系列',
    collapsed: true,
    items: [
      { text: '系列页', link: '/zh/solutions/laser-coding/' },
      { text: '光纤激光打标机', link: '/zh/products/filling/fiber-laser-marking-machine' },
      { text: 'CO2激光机', link: '/zh/products/filling/co2-laser-marking-machine' }
    ]
  },
  {
    text: '装箱、码垛',
    collapsed: true,
    items: [
      { text: '系列页', link: '/zh/solutions/packing-palletizing/' },
      { text: '自动开箱、纸箱成型、装箱机', link: '/zh/products/filling/case-erector-packing-machine' },
      { text: '自动折盖封箱机', link: '/zh/products/filling/carton-sealing-machine' },
      { text: '机器人码垛机', link: '/zh/products/filling/robot-palletizer' }
    ]
  },
  {
    text: '蔬果类前期处理设备',
    collapsed: true,
    items: [
      { text: '系列页', link: '/zh/solutions/fruit-veg-processing/' },
      { text: '提升机', link: '/zh/products/filling/fruit-elevator' }
    ]
  },
  {
    text: '过滤机系列',
    collapsed: true,
    items: [
      { text: '系列页', link: '/zh/solutions/filtering/' },
      { text: '过滤设备总览', link: '/zh/products/filtration-equipment' },
      { text: '气动千层滤油机', link: '/zh/products/pneumatic-filter-press' },
      { text: '食用油后处理设备', link: '/zh/products/post-treatment' }
    ]
  },
  {
    text: '酿酒设备系列',
    collapsed: true,
    items: [
      { text: '系列页', link: '/zh/solutions/brewing/' },
      { text: '葡萄酒冲瓶灌装打塞联体机', link: '/zh/products/filling/wine-rinsing-filling-corking-monoblock' },
      { text: '灌装、打塞两联机', link: '/zh/products/filling/filling-corking-monoblock' },
      {
        text: '低真空灌装机',
        collapsed: true,
        items: [
          { text: '系列页', link: '/zh/products/filling/low-vacuum-filling-machine' },
          { text: 'GFP-12A', link: '/zh/products/filling/gfp-12a-low-vacuum-filling-machine' },
          { text: 'GFP-12B', link: '/zh/products/filling/gfp-12b-low-vacuum-filling-machine' },
          { text: 'GFP-18A', link: '/zh/products/filling/gfp-18a-low-vacuum-filling-machine' },
          { text: 'GFP-24H', link: '/zh/products/filling/gfp-24h-low-vacuum-filling-machine' },
          { text: 'GFP-30H', link: '/zh/products/filling/gfp-30h-low-vacuum-filling-machine' },
          { text: 'GFP-36H', link: '/zh/products/filling/gfp-36h-low-vacuum-filling-machine' },
          { text: 'GFP-40H', link: '/zh/products/filling/gfp-40h-low-vacuum-filling-machine' },
          { text: 'GFP-48H', link: '/zh/products/filling/gfp-48h-low-vacuum-filling-machine' },
          { text: 'GFP-60H', link: '/zh/products/filling/gfp-60h-low-vacuum-filling-machine' }
        ]
      }
    ]
  },
  {
    text: '奶类加工设备',
    collapsed: true,
    items: [
      { text: '系列页', link: '/zh/solutions/dairy-processing/' },
      { text: '罐式巴氏杀菌加工流水线', link: '/zh/products/filling/pasteurization-processing-line' }
    ]
  }
]

const buildLowVacuumModelItems = (prefix, overviewText) => [
  { text: overviewText, link: `${prefix}/products/filling/low-vacuum-filling-machine` },
  { text: 'GFP-12A', link: `${prefix}/products/filling/gfp-12a-low-vacuum-filling-machine` },
  { text: 'GFP-12B', link: `${prefix}/products/filling/gfp-12b-low-vacuum-filling-machine` },
  { text: 'GFP-18A', link: `${prefix}/products/filling/gfp-18a-low-vacuum-filling-machine` },
  { text: 'GFP-24H', link: `${prefix}/products/filling/gfp-24h-low-vacuum-filling-machine` },
  { text: 'GFP-30H', link: `${prefix}/products/filling/gfp-30h-low-vacuum-filling-machine` },
  { text: 'GFP-36H', link: `${prefix}/products/filling/gfp-36h-low-vacuum-filling-machine` },
  { text: 'GFP-40H', link: `${prefix}/products/filling/gfp-40h-low-vacuum-filling-machine` },
  { text: 'GFP-48H', link: `${prefix}/products/filling/gfp-48h-low-vacuum-filling-machine` },
  { text: 'GFP-60H', link: `${prefix}/products/filling/gfp-60h-low-vacuum-filling-machine` }
]

const enFillingSeriesSidebarItems = [
  {
    text: 'Filling Packages Overview',
    collapsed: true,
    items: [
      { text: 'Series Overview', link: '/en/solutions/filling-packages' },
      { text: 'CGF Three-in-One Monoblock', link: '/en/products/filling/cgf-three-in-one-monoblock' },
      { text: 'GDP36DK-10-10 Monoblock', link: '/en/products/filling/gdp36dk-filling-capping-sealing-monoblock' },
      { text: 'Baijiu Filling & Capping Monoblock', link: '/en/products/filling/baijiu-filling-capping-monoblock' }
    ]
  },
  {
    text: 'Bottle Washing Machine Series',
    collapsed: true,
    items: [
      { text: 'Series Overview', link: '/en/solutions/bottle-washing/' },
      { text: 'Rotary Bottle Washer', link: '/en/products/filling/rotary-bottle-washer' },
      { text: 'Six Wheel Bottle Washer', link: '/en/products/filling/six-wheel-bottle-washer' },
      { text: 'Chain Bottle Washer', link: '/en/products/filling/chain-bottle-washer' },
      { text: 'Intermittent Bottle Washer', link: '/en/products/filling/intermittent-bottle-washer' },
      { text: 'Flip Bottle Washer', link: '/en/products/filling/flip-bottle-washer' }
    ]
  },
  {
    text: 'Filling Machine Series',
    collapsed: true,
    items: [
      { text: 'Series Overview', link: '/en/solutions/filling/' },
      { text: 'Smart Filling Machine', link: '/en/products/filling/smart-filling-machine' },
      { text: 'High Precision Filling Machine', link: '/en/products/filling/high-precision-filling-machine' },
      { text: 'Intelligent Quantitative Filling Machine', link: '/en/products/filling/intelligent-quantitative-filling-machine' },
      { text: 'Rotary Drum Filling Machine', link: '/en/products/filling/rotary-drum-filling-machine' },
      { text: 'Linear Filling Machine', link: '/en/products/filling/linear-filling-machine' },
      { text: 'Pesticide Filling Machine', link: '/en/products/filling/pesticide-filling-machine' },
      { text: 'Corrosion Resistant Filling Machine', link: '/en/products/filling/corrosion-resistant-filling-machine' }
    ]
  },
  {
    text: 'Light Inspection Machine Series',
    collapsed: true,
    items: [
      { text: 'Series Overview', link: '/en/solutions/light-inspection/' },
      { text: 'Light Inspection Machine', link: '/en/products/filling/light-inspection-machine' }
    ]
  },
  {
    text: 'Sealing Machine Series',
    collapsed: true,
    items: [
      { text: 'Series Overview', link: '/en/solutions/sealing/' },
      { text: 'Plastic Cap Pressing Machine', link: '/en/products/filling/plastic-cap-pressing-machine' },
      { text: 'Pneumatic Capping Machine', link: '/en/products/filling/pneumatic-capping-machine' },
      { text: 'Anti-theft Cap Sealing Machine', link: '/en/products/filling/anti-theft-cap-sealing-machine' },
      { text: 'Single Head Sealing Machine', link: '/en/products/filling/single-head-sealing-machine' },
      { text: 'Aluminum Cap Sealing Machine', link: '/en/products/filling/aluminum-cap-sealing-machine' }
    ]
  },
  {
    text: 'Corking Machine Series',
    collapsed: true,
    items: [
      { text: 'Series Overview', link: '/en/solutions/corking/' },
      { text: 'Automatic Corking Machine', link: '/en/products/filling/automatic-corking-machine' },
      { text: 'Semi-automatic Corking Machine', link: '/en/products/filling/semi-automatic-corking-machine' },
      { text: 'Manual Corking Machine', link: '/en/products/filling/manual-corking-machine' }
    ]
  },
  {
    text: 'Cap Shrinking Machine Series',
    collapsed: true,
    items: [
      { text: 'Series Overview', link: '/en/solutions/cap-shrinking/' },
      { text: 'Multi-head Cap Shrinking Machine', link: '/en/products/filling/multi-head-cap-shrinking-machine' },
      { text: 'Single-head Cap Shrinking Machine', link: '/en/products/filling/single-head-cap-shrinking-machine' },
      { text: 'Cap Rolling Shrinking Machine', link: '/en/products/filling/cap-rolling-shrinking-machine' }
    ]
  },
  {
    text: 'Drying Machine Series',
    collapsed: true,
    items: [
      { text: 'Series Overview', link: '/en/solutions/drying/' },
      { text: 'Turbo Air Knife Dryer', link: '/en/products/filling/turbo-air-knife-dryer' },
      { text: 'Spider Arm Bottle Dryer', link: '/en/products/filling/spider-arm-bottle-dryer' }
    ]
  },
  {
    text: 'Labeling Machine Series',
    collapsed: true,
    items: [
      { text: 'Series Overview', link: '/en/solutions/labeling/' },
      { text: 'Double Label Automatic Labeling Machine', link: '/en/products/filling/double-label-automatic-labeling-machine' },
      { text: 'DF-T200 Round Bottle Labeler', link: '/en/products/filling/df-t200-round-bottle-labeler' },
      { text: 'Self-adhesive Labeling Machine', link: '/en/products/filling/self-adhesive-labeling-machine' }
    ]
  },
  {
    text: 'Laser Coding Machine Series',
    collapsed: true,
    items: [
      { text: 'Series Overview', link: '/en/solutions/laser-coding/' },
      { text: 'Fiber Laser Marking Machine', link: '/en/products/filling/fiber-laser-marking-machine' },
      { text: 'CO2 Laser Marking Machine', link: '/en/products/filling/co2-laser-marking-machine' }
    ]
  },
  {
    text: 'Packing and Palletizing',
    collapsed: true,
    items: [
      { text: 'Series Overview', link: '/en/solutions/packing-palletizing/' },
      { text: 'Case Erector Packing Machine', link: '/en/products/filling/case-erector-packing-machine' },
      { text: 'Carton Sealing Machine', link: '/en/products/filling/carton-sealing-machine' },
      { text: 'Robot Palletizer', link: '/en/products/filling/robot-palletizer' }
    ]
  },
  {
    text: 'Fruit and Vegetable Pre-processing Equipment',
    collapsed: true,
    items: [
      { text: 'Series Overview', link: '/en/solutions/fruit-veg-processing/' },
      { text: 'Fruit Elevator', link: '/en/products/filling/fruit-elevator' }
    ]
  },
  {
    text: 'Filtering Machine Series',
    collapsed: true,
    items: [
      { text: 'Series Overview', link: '/en/solutions/filtering/' },
      { text: 'Filtration Equipment Overview', link: '/en/products/filtration-equipment' },
      { text: 'Pneumatic Filter Press', link: '/en/products/pneumatic-filter-press' },
      { text: 'Post-treatment Equipment', link: '/en/products/post-treatment' }
    ]
  },
  {
    text: 'Brewing Equipment Series',
    collapsed: true,
    items: [
      { text: 'Series Overview', link: '/en/solutions/brewing/' },
      { text: 'Wine Rinsing Filling Corking Monoblock', link: '/en/products/filling/wine-rinsing-filling-corking-monoblock' },
      { text: 'Filling & Corking Monoblock', link: '/en/products/filling/filling-corking-monoblock' },
      {
        text: 'Low Vacuum Filling Machine',
        collapsed: true,
        items: [
          { text: 'Series Overview', link: '/en/products/filling/low-vacuum-filling-machine' },
          { text: 'GFP-12A', link: '/en/products/filling/gfp-12a-low-vacuum-filling-machine' },
          { text: 'GFP-12B', link: '/en/products/filling/gfp-12b-low-vacuum-filling-machine' },
          { text: 'GFP-18A', link: '/en/products/filling/gfp-18a-low-vacuum-filling-machine' },
          { text: 'GFP-24H', link: '/en/products/filling/gfp-24h-low-vacuum-filling-machine' },
          { text: 'GFP-30H', link: '/en/products/filling/gfp-30h-low-vacuum-filling-machine' },
          { text: 'GFP-36H', link: '/en/products/filling/gfp-36h-low-vacuum-filling-machine' },
          { text: 'GFP-40H', link: '/en/products/filling/gfp-40h-low-vacuum-filling-machine' },
          { text: 'GFP-48H', link: '/en/products/filling/gfp-48h-low-vacuum-filling-machine' },
          { text: 'GFP-60H', link: '/en/products/filling/gfp-60h-low-vacuum-filling-machine' }
        ]
      }
    ]
  },
  {
    text: 'Dairy Processing Equipment',
    collapsed: true,
    items: [
      { text: 'Series Overview', link: '/en/solutions/dairy-processing/' },
      { text: 'Pasteurization Processing Line', link: '/en/products/filling/pasteurization-processing-line' }
    ]
  }
]

const ruFillingSeriesSidebarItems = [
  {
    text: 'Комплексы розлива и упаковки',
    collapsed: true,
    items: [
      { text: 'Обзор серии', link: '/ru/solutions/filling-packages' },
      { text: 'Моноблок CGF 3-в-1', link: '/ru/products/filling/cgf-three-in-one-monoblock' },
      { text: 'Моноблок GDP36DK-10-10', link: '/ru/products/filling/gdp36dk-filling-capping-sealing-monoblock' },
      { text: 'Моноблок розлива и укупорки байцзю', link: '/ru/products/filling/baijiu-filling-capping-monoblock' }
    ]
  },
  {
    text: 'Серия машин для мытья бутылок',
    collapsed: true,
    items: [
      { text: 'Обзор серии', link: '/ru/solutions/bottle-washing/' },
      { text: 'Роторная моечная машина', link: '/ru/products/filling/rotary-bottle-washer' },
      { text: 'Шестиколесная моечная машина', link: '/ru/products/filling/six-wheel-bottle-washer' },
      { text: 'Цепная моечная машина', link: '/ru/products/filling/chain-bottle-washer' },
      { text: 'Прерывистая моечная машина', link: '/ru/products/filling/intermittent-bottle-washer' },
      { text: 'Переворотная моечная машина', link: '/ru/products/filling/flip-bottle-washer' }
    ]
  },
  {
    text: 'Серия наливных машин',
    collapsed: true,
    items: [
      { text: 'Обзор серии', link: '/ru/solutions/filling/' },
      { text: 'Интеллектуальная разливочная машина', link: '/ru/products/filling/smart-filling-machine' },
      { text: 'Высокоточная разливочная машина', link: '/ru/products/filling/high-precision-filling-machine' },
      { text: 'Интеллектуальная дозировочная машина', link: '/ru/products/filling/intelligent-quantitative-filling-machine' },
      { text: 'Роторная бочковая разливочная машина', link: '/ru/products/filling/rotary-drum-filling-machine' },
      { text: 'Линейная разливочная машина', link: '/ru/products/filling/linear-filling-machine' },
      { text: 'Разливочная машина для пестицидов', link: '/ru/products/filling/pesticide-filling-machine' },
      { text: 'Антикоррозионная разливочная машина', link: '/ru/products/filling/corrosion-resistant-filling-machine' }
    ]
  },
  {
    text: 'Серия машин для световой инспекции',
    collapsed: true,
    items: [
      { text: 'Обзор серии', link: '/ru/solutions/light-inspection/' },
      { text: 'Машина световой инспекции', link: '/ru/products/filling/light-inspection-machine' }
    ]
  },
  {
    text: 'Серия укупорочных машин',
    collapsed: true,
    items: [
      { text: 'Обзор серии', link: '/ru/solutions/sealing/' },
      { text: 'Машина прессования пластиковых крышек', link: '/ru/products/filling/plastic-cap-pressing-machine' },
      { text: 'Пневматическая укупорочная машина', link: '/ru/products/filling/pneumatic-capping-machine' },
      { text: 'Укупорочная машина с защитой от вскрытия', link: '/ru/products/filling/anti-theft-cap-sealing-machine' },
      { text: 'Одноголовочная укупорочная машина', link: '/ru/products/filling/single-head-sealing-machine' },
      { text: 'Укупорочная машина для алюминиевых крышек', link: '/ru/products/filling/aluminum-cap-sealing-machine' }
    ]
  },
  {
    text: 'Серия машин для укупоривания пробками',
    collapsed: true,
    items: [
      { text: 'Обзор серии', link: '/ru/solutions/corking/' },
      { text: 'Автоматическая машина для пробок', link: '/ru/products/filling/automatic-corking-machine' },
      { text: 'Полуавтоматическая машина для пробок', link: '/ru/products/filling/semi-automatic-corking-machine' },
      { text: 'Ручная машина для пробок', link: '/ru/products/filling/manual-corking-machine' }
    ]
  },
  {
    text: 'Серия машин для усадки колпачков',
    collapsed: true,
    items: [
      { text: 'Обзор серии', link: '/ru/solutions/cap-shrinking/' },
      { text: 'Многоголовочная термоусадочная машина', link: '/ru/products/filling/multi-head-cap-shrinking-machine' },
      { text: 'Одноголовочная термоусадочная машина', link: '/ru/products/filling/single-head-cap-shrinking-machine' },
      { text: 'Машина закатки и усадки колпачков', link: '/ru/products/filling/cap-rolling-shrinking-machine' }
    ]
  },
  {
    text: 'Серия сушильных машин',
    collapsed: true,
    items: [
      { text: 'Обзор серии', link: '/ru/solutions/drying/' },
      { text: 'Турбо-сушилка воздушными ножами', link: '/ru/products/filling/turbo-air-knife-dryer' },
      { text: 'Сушилка бутылок с паукообразными рычагами', link: '/ru/products/filling/spider-arm-bottle-dryer' }
    ]
  },
  {
    text: 'Серия этикетировочных машин',
    collapsed: true,
    items: [
      { text: 'Обзор серии', link: '/ru/solutions/labeling/' },
      { text: 'Автоматическая двуэтикеточная машина', link: '/ru/products/filling/double-label-automatic-labeling-machine' },
      { text: 'Этикетировщик круглых бутылок DF-T200', link: '/ru/products/filling/df-t200-round-bottle-labeler' },
      { text: 'Машина самоклеящейся этикетки', link: '/ru/products/filling/self-adhesive-labeling-machine' }
    ]
  },
  {
    text: 'Серия лазерных кодировщиков',
    collapsed: true,
    items: [
      { text: 'Обзор серии', link: '/ru/solutions/laser-coding/' },
      { text: 'Волоконный лазерный маркиратор', link: '/ru/products/filling/fiber-laser-marking-machine' },
      { text: 'CO2 лазерный маркиратор', link: '/ru/products/filling/co2-laser-marking-machine' }
    ]
  },
  {
    text: 'Упаковка и паллетизация',
    collapsed: true,
    items: [
      { text: 'Обзор серии', link: '/ru/solutions/packing-palletizing/' },
      { text: 'Машина формирования коробов', link: '/ru/products/filling/case-erector-packing-machine' },
      { text: 'Машина заклейки коробов', link: '/ru/products/filling/carton-sealing-machine' },
      { text: 'Робот-паллетайзер', link: '/ru/products/filling/robot-palletizer' }
    ]
  },
  {
    text: 'Оборудование для предварительной обработки фруктов и овощей',
    collapsed: true,
    items: [
      { text: 'Обзор серии', link: '/ru/solutions/fruit-veg-processing/' },
      { text: 'Подъемник для фруктов', link: '/ru/products/filling/fruit-elevator' }
    ]
  },
  {
    text: 'Серия фильтровальных машин',
    collapsed: true,
    items: [
      { text: 'Обзор серии', link: '/ru/solutions/filtering/' },
      { text: 'Обзор фильтрационного оборудования', link: '/ru/products/filtration-equipment' },
      { text: 'Пневматический фильтр-пресс', link: '/ru/products/pneumatic-filter-press' },
      { text: 'Оборудование постобработки', link: '/ru/products/post-treatment' }
    ]
  },
  {
    text: 'Оборудование для пивоварения',
    collapsed: true,
    items: [
      { text: 'Обзор серии', link: '/ru/solutions/brewing/' },
      { text: 'Винный моноблок ополаскивания, розлива и укупорки', link: '/ru/products/filling/wine-rinsing-filling-corking-monoblock' },
      { text: 'Моноблок розлива и укупорки', link: '/ru/products/filling/filling-corking-monoblock' },
      {
        text: 'Низковакуумная разливочная машина',
        collapsed: true,
        items: [
          { text: 'Обзор серии', link: '/ru/products/filling/low-vacuum-filling-machine' },
          { text: 'GFP-12A', link: '/ru/products/filling/gfp-12a-low-vacuum-filling-machine' },
          { text: 'GFP-12B', link: '/ru/products/filling/gfp-12b-low-vacuum-filling-machine' },
          { text: 'GFP-18A', link: '/ru/products/filling/gfp-18a-low-vacuum-filling-machine' },
          { text: 'GFP-24H', link: '/ru/products/filling/gfp-24h-low-vacuum-filling-machine' },
          { text: 'GFP-30H', link: '/ru/products/filling/gfp-30h-low-vacuum-filling-machine' },
          { text: 'GFP-36H', link: '/ru/products/filling/gfp-36h-low-vacuum-filling-machine' },
          { text: 'GFP-40H', link: '/ru/products/filling/gfp-40h-low-vacuum-filling-machine' },
          { text: 'GFP-48H', link: '/ru/products/filling/gfp-48h-low-vacuum-filling-machine' },
          { text: 'GFP-60H', link: '/ru/products/filling/gfp-60h-low-vacuum-filling-machine' }
        ]
      }
    ]
  },
  {
    text: 'Оборудование для молочной промышленности',
    collapsed: true,
    items: [
      { text: 'Обзор серии', link: '/ru/solutions/dairy-processing/' },
      { text: 'Линия пастеризации', link: '/ru/products/filling/pasteurization-processing-line' }
    ]
  }
]

const frFillingSeriesSidebarItems = [
  {
    text: 'Ensemble de remplissage et d\'emballage',
    collapsed: true,
    items: [
      { text: 'Aperçu de la série', link: '/fr/solutions/filling-packages' },
      { text: 'Monobloc CGF 3-en-1', link: '/fr/products/filling/cgf-three-in-one-monoblock' },
      { text: 'Monobloc GDP36DK-10-10', link: '/fr/products/filling/gdp36dk-filling-capping-sealing-monoblock' },
      { text: 'Monobloc remplissage & capsulage Baijiu', link: '/fr/products/filling/baijiu-filling-capping-monoblock' }
    ]
  },
  {
    text: 'Série de machines à laver les bouteilles',
    collapsed: true,
    items: [
      { text: 'Aperçu de la série', link: '/fr/solutions/bottle-washing/' },
      { text: 'Laveuse rotative', link: '/fr/products/filling/rotary-bottle-washer' },
      { text: 'Laveuse à six roues', link: '/fr/products/filling/six-wheel-bottle-washer' },
      { text: 'Laveuse à chaîne', link: '/fr/products/filling/chain-bottle-washer' },
      { text: 'Laveuse intermittente', link: '/fr/products/filling/intermittent-bottle-washer' },
      { text: 'Laveuse basculante', link: '/fr/products/filling/flip-bottle-washer' }
    ]
  },
  {
    text: 'Série de machines de remplissage',
    collapsed: true,
    items: [
      { text: 'Aperçu de la série', link: '/fr/solutions/filling/' },
      { text: 'Machine de remplissage intelligente', link: '/fr/products/filling/smart-filling-machine' },
      { text: 'Machine de remplissage haute précision', link: '/fr/products/filling/high-precision-filling-machine' },
      { text: 'Machine de dosage intelligente', link: '/fr/products/filling/intelligent-quantitative-filling-machine' },
      { text: 'Machine de remplissage à tambour rotatif', link: '/fr/products/filling/rotary-drum-filling-machine' },
      { text: 'Machine de remplissage linéaire', link: '/fr/products/filling/linear-filling-machine' },
      { text: 'Machine de remplissage pour pesticides', link: '/fr/products/filling/pesticide-filling-machine' },
      { text: 'Machine de remplissage anticorrosion', link: '/fr/products/filling/corrosion-resistant-filling-machine' }
    ]
  },
  {
    text: 'Série de machines d\'inspection lumineuse',
    collapsed: true,
    items: [
      { text: 'Aperçu de la série', link: '/fr/solutions/light-inspection/' },
      { text: 'Machine d\'inspection lumineuse', link: '/fr/products/filling/light-inspection-machine' }
    ]
  },
  {
    text: 'Série de machines de scellement',
    collapsed: true,
    items: [
      { text: 'Aperçu de la série', link: '/fr/solutions/sealing/' },
      { text: 'Machine de pressage de capsules plastiques', link: '/fr/products/filling/plastic-cap-pressing-machine' },
      { text: 'Machine de capsulage pneumatique', link: '/fr/products/filling/pneumatic-capping-machine' },
      { text: 'Machine de scellage anti-effraction', link: '/fr/products/filling/anti-theft-cap-sealing-machine' },
      { text: 'Machine de scellage à tête unique', link: '/fr/products/filling/single-head-sealing-machine' },
      { text: 'Machine de scellage pour capsules aluminium', link: '/fr/products/filling/aluminum-cap-sealing-machine' }
    ]
  },
  {
    text: 'Série de machines de bouchage',
    collapsed: true,
    items: [
      { text: 'Aperçu de la série', link: '/fr/solutions/corking/' },
      { text: 'Machine de bouchage automatique', link: '/fr/products/filling/automatic-corking-machine' },
      { text: 'Machine de bouchage semi-automatique', link: '/fr/products/filling/semi-automatic-corking-machine' },
      { text: 'Machine de bouchage manuelle', link: '/fr/products/filling/manual-corking-machine' }
    ]
  },
  {
    text: 'Série de machines de rétrécissement de bouchons',
    collapsed: true,
    items: [
      { text: 'Aperçu de la série', link: '/fr/solutions/cap-shrinking/' },
      { text: 'Machine de rétrécissement multi-têtes', link: '/fr/products/filling/multi-head-cap-shrinking-machine' },
      { text: 'Machine de rétrécissement à une tête', link: '/fr/products/filling/single-head-cap-shrinking-machine' },
      { text: 'Machine de roulage et rétrécissement des capsules', link: '/fr/products/filling/cap-rolling-shrinking-machine' }
    ]
  },
  {
    text: 'Série de machines de séchage',
    collapsed: true,
    items: [
      { text: 'Aperçu de la série', link: '/fr/solutions/drying/' },
      { text: 'Sécheur turbo à couteaux d\'air', link: '/fr/products/filling/turbo-air-knife-dryer' },
      { text: 'Sécheur de bouteilles à bras araignée', link: '/fr/products/filling/spider-arm-bottle-dryer' }
    ]
  },
  {
    text: 'Série de machines d\'étiquetage',
    collapsed: true,
    items: [
      { text: 'Aperçu de la série', link: '/fr/solutions/labeling/' },
      { text: 'Étiqueteuse automatique double étiquette', link: '/fr/products/filling/double-label-automatic-labeling-machine' },
      { text: 'Étiqueteuse de bouteilles rondes DF-T200', link: '/fr/products/filling/df-t200-round-bottle-labeler' },
      { text: 'Étiqueteuse auto-adhésive', link: '/fr/products/filling/self-adhesive-labeling-machine' }
    ]
  },
  {
    text: 'Série de codeurs laser',
    collapsed: true,
    items: [
      { text: 'Aperçu de la série', link: '/fr/solutions/laser-coding/' },
      { text: 'Marqueuse laser à fibre', link: '/fr/products/filling/fiber-laser-marking-machine' },
      { text: 'Marqueuse laser CO2', link: '/fr/products/filling/co2-laser-marking-machine' }
    ]
  },
  {
    text: 'Emballage et palettisation',
    collapsed: true,
    items: [
      { text: 'Aperçu de la série', link: '/fr/solutions/packing-palletizing/' },
      { text: 'Monteur de cartons', link: '/fr/products/filling/case-erector-packing-machine' },
      { text: 'Fermeuse de cartons', link: '/fr/products/filling/carton-sealing-machine' },
      { text: 'Palettiseur robotisé', link: '/fr/products/filling/robot-palletizer' }
    ]
  },
  {
    text: 'Équipement de prétraitement des fruits et légumes',
    collapsed: true,
    items: [
      { text: 'Aperçu de la série', link: '/fr/solutions/fruit-veg-processing/' },
      { text: 'Élévateur à fruits', link: '/fr/products/filling/fruit-elevator' }
    ]
  },
  {
    text: 'Série de machines de filtration',
    collapsed: true,
    items: [
      { text: 'Aperçu de la série', link: '/fr/solutions/filtering/' },
      { text: 'Aperçu des équipements de filtration', link: '/fr/products/filtration-equipment' },
      { text: 'Presse-filtre pneumatique', link: '/fr/products/pneumatic-filter-press' },
      { text: 'Équipement de post-traitement', link: '/fr/products/post-treatment' }
    ]
  },
  {
    text: 'Série d\'équipements de brassage',
    collapsed: true,
    items: [
      { text: 'Aperçu de la série', link: '/fr/solutions/brewing/' },
      { text: 'Monobloc rinçage-remplissage-bouchage pour vin', link: '/fr/products/filling/wine-rinsing-filling-corking-monoblock' },
      { text: 'Monobloc remplissage & bouchage', link: '/fr/products/filling/filling-corking-monoblock' },
      {
        text: 'Machine de remplissage à basse dépression',
        collapsed: true,
        items: [
          { text: 'Aperçu de la série', link: '/fr/products/filling/low-vacuum-filling-machine' },
          { text: 'GFP-12A', link: '/fr/products/filling/gfp-12a-low-vacuum-filling-machine' },
          { text: 'GFP-12B', link: '/fr/products/filling/gfp-12b-low-vacuum-filling-machine' },
          { text: 'GFP-18A', link: '/fr/products/filling/gfp-18a-low-vacuum-filling-machine' },
          { text: 'GFP-24H', link: '/fr/products/filling/gfp-24h-low-vacuum-filling-machine' },
          { text: 'GFP-30H', link: '/fr/products/filling/gfp-30h-low-vacuum-filling-machine' },
          { text: 'GFP-36H', link: '/fr/products/filling/gfp-36h-low-vacuum-filling-machine' },
          { text: 'GFP-40H', link: '/fr/products/filling/gfp-40h-low-vacuum-filling-machine' },
          { text: 'GFP-48H', link: '/fr/products/filling/gfp-48h-low-vacuum-filling-machine' },
          { text: 'GFP-60H', link: '/fr/products/filling/gfp-60h-low-vacuum-filling-machine' }
        ]
      }
    ]
  },
  {
    text: 'Équipement de transformation laitière',
    collapsed: true,
    items: [
      { text: 'Aperçu de la série', link: '/fr/solutions/dairy-processing/' },
      { text: 'Ligne de pasteurisation', link: '/fr/products/filling/pasteurization-processing-line' }
    ]
  }
]

const viFillingSeriesSidebarItems = [
  {
    text: 'Hệ thống chiết rót & đóng gói',
    collapsed: true,
    items: [
      { text: 'Tổng quan dòng', link: '/vi/solutions/filling-packages' },
      { text: 'Monoblock CGF 3-in-1', link: '/vi/products/filling/cgf-three-in-one-monoblock' },
      { text: 'Monoblock GDP36DK-10-10', link: '/vi/products/filling/gdp36dk-filling-capping-sealing-monoblock' },
      { text: 'Monoblock chiết rót & đóng nắp Baijiu', link: '/vi/products/filling/baijiu-filling-capping-monoblock' }
    ]
  },
  {
    text: 'Dòng máy rửa chai',
    collapsed: true,
    items: [
      { text: 'Tổng quan dòng', link: '/vi/solutions/bottle-washing/' },
      { text: 'Máy rửa chai dạng quay', link: '/vi/products/filling/rotary-bottle-washer' },
      { text: 'Máy rửa chai 6 bánh', link: '/vi/products/filling/six-wheel-bottle-washer' },
      { text: 'Máy rửa chai dạng xích', link: '/vi/products/filling/chain-bottle-washer' },
      { text: 'Máy rửa chai gián đoạn', link: '/vi/products/filling/intermittent-bottle-washer' },
      { text: 'Máy rửa chai lật', link: '/vi/products/filling/flip-bottle-washer' }
    ]
  },
  {
    text: 'Dòng máy chiết rót',
    collapsed: true,
    items: [
      { text: 'Tổng quan dòng', link: '/vi/solutions/filling/' },
      { text: 'Máy chiết rót thông minh', link: '/vi/products/filling/smart-filling-machine' },
      { text: 'Máy chiết rót độ chính xác cao', link: '/vi/products/filling/high-precision-filling-machine' },
      { text: 'Máy định lượng thông minh', link: '/vi/products/filling/intelligent-quantitative-filling-machine' },
      { text: 'Máy chiết rót trống quay', link: '/vi/products/filling/rotary-drum-filling-machine' },
      { text: 'Máy chiết rót tuyến tính', link: '/vi/products/filling/linear-filling-machine' },
      { text: 'Máy chiết rót thuốc bảo vệ thực vật', link: '/vi/products/filling/pesticide-filling-machine' },
      { text: 'Máy chiết rót chống ăn mòn', link: '/vi/products/filling/corrosion-resistant-filling-machine' }
    ]
  },
  {
    text: 'Dòng máy kiểm tra ánh sáng',
    collapsed: true,
    items: [
      { text: 'Tổng quan dòng', link: '/vi/solutions/light-inspection/' },
      { text: 'Máy kiểm tra ánh sáng', link: '/vi/products/filling/light-inspection-machine' }
    ]
  },
  {
    text: 'Dòng máy đóng nắp',
    collapsed: true,
    items: [
      { text: 'Tổng quan dòng', link: '/vi/solutions/sealing/' },
      { text: 'Máy ép nắp nhựa', link: '/vi/products/filling/plastic-cap-pressing-machine' },
      { text: 'Máy đóng nắp khí nén', link: '/vi/products/filling/pneumatic-capping-machine' },
      { text: 'Máy siết nắp chống giả', link: '/vi/products/filling/anti-theft-cap-sealing-machine' },
      { text: 'Máy siết nắp một đầu', link: '/vi/products/filling/single-head-sealing-machine' },
      { text: 'Máy siết nắp nhôm', link: '/vi/products/filling/aluminum-cap-sealing-machine' }
    ]
  },
  {
    text: 'Dòng máy đóng nút bần',
    collapsed: true,
    items: [
      { text: 'Tổng quan dòng', link: '/vi/solutions/corking/' },
      { text: 'Máy đóng nút bần tự động', link: '/vi/products/filling/automatic-corking-machine' },
      { text: 'Máy đóng nút bần bán tự động', link: '/vi/products/filling/semi-automatic-corking-machine' },
      { text: 'Máy đóng nút bần thủ công', link: '/vi/products/filling/manual-corking-machine' }
    ]
  },
  {
    text: 'Dòng máy co màng nắp',
    collapsed: true,
    items: [
      { text: 'Tổng quan dòng', link: '/vi/solutions/cap-shrinking/' },
      { text: 'Máy co màng nắp đa đầu', link: '/vi/products/filling/multi-head-cap-shrinking-machine' },
      { text: 'Máy co màng nắp một đầu', link: '/vi/products/filling/single-head-cap-shrinking-machine' },
      { text: 'Máy lăn nắp & co màng', link: '/vi/products/filling/cap-rolling-shrinking-machine' }
    ]
  },
  {
    text: 'Dòng máy sấy',
    collapsed: true,
    items: [
      { text: 'Tổng quan dòng', link: '/vi/solutions/drying/' },
      { text: 'Máy sấy dao gió turbo', link: '/vi/products/filling/turbo-air-knife-dryer' },
      { text: 'Máy sấy chai tay nhện', link: '/vi/products/filling/spider-arm-bottle-dryer' }
    ]
  },
  {
    text: 'Dòng máy dán nhãn',
    collapsed: true,
    items: [
      { text: 'Tổng quan dòng', link: '/vi/solutions/labeling/' },
      { text: 'Máy dán nhãn tự động 2 nhãn', link: '/vi/products/filling/double-label-automatic-labeling-machine' },
      { text: 'Máy dán nhãn chai tròn DF-T200', link: '/vi/products/filling/df-t200-round-bottle-labeler' },
      { text: 'Máy dán nhãn tự dính', link: '/vi/products/filling/self-adhesive-labeling-machine' }
    ]
  },
  {
    text: 'Dòng máy khắc mã laser',
    collapsed: true,
    items: [
      { text: 'Tổng quan dòng', link: '/vi/solutions/laser-coding/' },
      { text: 'Máy khắc laser sợi quang', link: '/vi/products/filling/fiber-laser-marking-machine' },
      { text: 'Máy khắc laser CO2', link: '/vi/products/filling/co2-laser-marking-machine' }
    ]
  },
  {
    text: 'Đóng thùng và xếp pallet',
    collapsed: true,
    items: [
      { text: 'Tổng quan dòng', link: '/vi/solutions/packing-palletizing/' },
      { text: 'Máy dựng thùng carton', link: '/vi/products/filling/case-erector-packing-machine' },
      { text: 'Máy dán kín thùng carton', link: '/vi/products/filling/carton-sealing-machine' },
      { text: 'Robot xếp pallet', link: '/vi/products/filling/robot-palletizer' }
    ]
  },
  {
    text: 'Thiết bị tiền xử lý rau quả',
    collapsed: true,
    items: [
      { text: 'Tổng quan dòng', link: '/vi/solutions/fruit-veg-processing/' },
      { text: 'Máy nâng trái cây', link: '/vi/products/filling/fruit-elevator' }
    ]
  },
  {
    text: 'Dòng máy lọc',
    collapsed: true,
    items: [
      { text: 'Tổng quan dòng', link: '/vi/solutions/filtering/' },
      { text: 'Tổng quan thiết bị lọc', link: '/vi/products/filtration-equipment' },
      { text: 'Máy lọc ép khí nén', link: '/vi/products/pneumatic-filter-press' },
      { text: 'Thiết bị hậu xử lý', link: '/vi/products/post-treatment' }
    ]
  },
  {
    text: 'Dòng thiết bị nấu bia',
    collapsed: true,
    items: [
      { text: 'Tổng quan dòng', link: '/vi/solutions/brewing/' },
      { text: 'Monoblock rửa-chiết rót-đóng nút cho rượu vang', link: '/vi/products/filling/wine-rinsing-filling-corking-monoblock' },
      { text: 'Monoblock chiết rót & đóng nút', link: '/vi/products/filling/filling-corking-monoblock' },
      {
        text: 'Máy chiết rót chân không thấp',
        collapsed: true,
        items: [
          { text: 'Tổng quan dòng', link: '/vi/products/filling/low-vacuum-filling-machine' },
          { text: 'GFP-12A', link: '/vi/products/filling/gfp-12a-low-vacuum-filling-machine' },
          { text: 'GFP-12B', link: '/vi/products/filling/gfp-12b-low-vacuum-filling-machine' },
          { text: 'GFP-18A', link: '/vi/products/filling/gfp-18a-low-vacuum-filling-machine' },
          { text: 'GFP-24H', link: '/vi/products/filling/gfp-24h-low-vacuum-filling-machine' },
          { text: 'GFP-30H', link: '/vi/products/filling/gfp-30h-low-vacuum-filling-machine' },
          { text: 'GFP-36H', link: '/vi/products/filling/gfp-36h-low-vacuum-filling-machine' },
          { text: 'GFP-40H', link: '/vi/products/filling/gfp-40h-low-vacuum-filling-machine' },
          { text: 'GFP-48H', link: '/vi/products/filling/gfp-48h-low-vacuum-filling-machine' },
          { text: 'GFP-60H', link: '/vi/products/filling/gfp-60h-low-vacuum-filling-machine' }
        ]
      }
    ]
  },
  {
    text: 'Thiết bị chế biến sữa',
    collapsed: true,
    items: [
      { text: 'Tổng quan dòng', link: '/vi/solutions/dairy-processing/' },
      { text: 'Dây chuyền thanh trùng', link: '/vi/products/filling/pasteurization-processing-line' }
    ]
  }
]

const bnFillingSeriesSidebarItems = [
  {
    text: 'ফিলিং ও প্যাকেজিং সমাধান',
    collapsed: true,
    items: [
      { text: 'সিরিজ ওভারভিউ', link: '/bn/solutions/filling-packages' },
      { text: 'CGF ৩-ইন-১ মনোব্লক', link: '/bn/products/filling/cgf-three-in-one-monoblock' },
      { text: 'GDP36DK-10-10 মনোব্লক', link: '/bn/products/filling/gdp36dk-filling-capping-sealing-monoblock' },
      { text: 'বাইজিউ ফিলিং ও ক্যাপিং মনোব্লক', link: '/bn/products/filling/baijiu-filling-capping-monoblock' }
    ]
  },
  {
    text: 'বোতল ধোয়ার মেশিন সিরিজ',
    collapsed: true,
    items: [
      { text: 'সিরিজ ওভারভিউ', link: '/bn/solutions/bottle-washing/' },
      { text: 'রোটারি বোতল ধোয়ার মেশিন', link: '/bn/products/filling/rotary-bottle-washer' },
      { text: 'ছয় চাকা বোতল ধোয়ার মেশিন', link: '/bn/products/filling/six-wheel-bottle-washer' },
      { text: 'চেইন বোতল ধোয়ার মেশিন', link: '/bn/products/filling/chain-bottle-washer' },
      { text: 'ইন্টারমিটেন্ট বোতল ধোয়ার মেশিন', link: '/bn/products/filling/intermittent-bottle-washer' },
      { text: 'ফ্লিপ বোতল ধোয়ার মেশিন', link: '/bn/products/filling/flip-bottle-washer' }
    ]
  },
  {
    text: 'ফিলিং মেশিন সিরিজ',
    collapsed: true,
    items: [
      { text: 'সিরিজ ওভারভিউ', link: '/bn/solutions/filling/' },
      { text: 'স্মার্ট ফিলিং মেশিন', link: '/bn/products/filling/smart-filling-machine' },
      { text: 'হাই-প্রিসিশন ফিলিং মেশিন', link: '/bn/products/filling/high-precision-filling-machine' },
      { text: 'ইন্টেলিজেন্ট কোয়ান্টিটেটিভ ফিলিং মেশিন', link: '/bn/products/filling/intelligent-quantitative-filling-machine' },
      { text: 'রোটারি ড্রাম ফিলিং মেশিন', link: '/bn/products/filling/rotary-drum-filling-machine' },
      { text: 'লিনিয়ার ফিলিং মেশিন', link: '/bn/products/filling/linear-filling-machine' },
      { text: 'পেস্টিসাইড ফিলিং মেশিন', link: '/bn/products/filling/pesticide-filling-machine' },
      { text: 'করোশন রেজিস্ট্যান্ট ফিলিং মেশিন', link: '/bn/products/filling/corrosion-resistant-filling-machine' }
    ]
  },
  {
    text: 'আলো পরিদর্শন মেশিন সিরিজ',
    collapsed: true,
    items: [
      { text: 'সিরিজ ওভারভিউ', link: '/bn/solutions/light-inspection/' },
      { text: 'লাইট ইন্সপেকশন মেশিন', link: '/bn/products/filling/light-inspection-machine' }
    ]
  },
  {
    text: 'সিলিং মেশিন সিরিজ',
    collapsed: true,
    items: [
      { text: 'সিরিজ ওভারভিউ', link: '/bn/solutions/sealing/' },
      { text: 'প্লাস্টিক ক্যাপ প্রেসিং মেশিন', link: '/bn/products/filling/plastic-cap-pressing-machine' },
      { text: 'পনিউম্যাটিক ক্যাপিং মেশিন', link: '/bn/products/filling/pneumatic-capping-machine' },
      { text: 'অ্যান্টি-থেফট ক্যাপ সিলিং মেশিন', link: '/bn/products/filling/anti-theft-cap-sealing-machine' },
      { text: 'সিঙ্গেল হেড সিলিং মেশিন', link: '/bn/products/filling/single-head-sealing-machine' },
      { text: 'অ্যালুমিনিয়াম ক্যাপ সিলিং মেশিন', link: '/bn/products/filling/aluminum-cap-sealing-machine' }
    ]
  },
  {
    text: 'কর্কিং মেশিন সিরিজ',
    collapsed: true,
    items: [
      { text: 'সিরিজ ওভারভিউ', link: '/bn/solutions/corking/' },
      { text: 'অটোম্যাটিক কর্কিং মেশিন', link: '/bn/products/filling/automatic-corking-machine' },
      { text: 'সেমি-অটোম্যাটিক কর্কিং মেশিন', link: '/bn/products/filling/semi-automatic-corking-machine' },
      { text: 'ম্যানুয়াল কর্কিং মেশিন', link: '/bn/products/filling/manual-corking-machine' }
    ]
  },
  {
    text: 'ক্যাপ সঙ্কুচিত মেশিন সিরিজ',
    collapsed: true,
    items: [
      { text: 'সিরিজ ওভারভিউ', link: '/bn/solutions/cap-shrinking/' },
      { text: 'মাল্টি-হেড ক্যাপ শ্রিংকিং মেশিন', link: '/bn/products/filling/multi-head-cap-shrinking-machine' },
      { text: 'সিঙ্গেল-হেড ক্যাপ শ্রিংকিং মেশিন', link: '/bn/products/filling/single-head-cap-shrinking-machine' },
      { text: 'ক্যাপ রোলিং শ্রিংকিং মেশিন', link: '/bn/products/filling/cap-rolling-shrinking-machine' }
    ]
  },
  {
    text: 'শুকানোর মেশিন সিরিজ',
    collapsed: true,
    items: [
      { text: 'সিরিজ ওভারভিউ', link: '/bn/solutions/drying/' },
      { text: 'টার্বো এয়ার নাইফ ড্রায়ার', link: '/bn/products/filling/turbo-air-knife-dryer' },
      { text: 'স্পাইডার আর্ম বোতল ড্রায়ার', link: '/bn/products/filling/spider-arm-bottle-dryer' }
    ]
  },
  {
    text: 'লেবেলিং মেশিন সিরিজ',
    collapsed: true,
    items: [
      { text: 'সিরিজ ওভারভিউ', link: '/bn/solutions/labeling/' },
      { text: 'ডাবল লেবেল অটোম্যাটিক লেবেলিং মেশিন', link: '/bn/products/filling/double-label-automatic-labeling-machine' },
      { text: 'DF-T200 রাউন্ড বোতল লেবেলার', link: '/bn/products/filling/df-t200-round-bottle-labeler' },
      { text: 'সেলফ-অ্যাডহেসিভ লেবেলিং মেশিন', link: '/bn/products/filling/self-adhesive-labeling-machine' }
    ]
  },
  {
    text: 'লেজার কোডিং মেশিন সিরিজ',
    collapsed: true,
    items: [
      { text: 'সিরিজ ওভারভিউ', link: '/bn/solutions/laser-coding/' },
      { text: 'ফাইবার লেজার মার্কিং মেশিন', link: '/bn/products/filling/fiber-laser-marking-machine' },
      { text: 'CO2 লেজার মার্কিং মেশিন', link: '/bn/products/filling/co2-laser-marking-machine' }
    ]
  },
  {
    text: 'প্যাকিং এবং প্যালেটাইজিং',
    collapsed: true,
    items: [
      { text: 'সিরিজ ওভারভিউ', link: '/bn/solutions/packing-palletizing/' },
      { text: 'কার্টন ফর্মিং মেশিন', link: '/bn/products/filling/case-erector-packing-machine' },
      { text: 'কার্টন সিলিং মেশিন', link: '/bn/products/filling/carton-sealing-machine' },
      { text: 'রোবট প্যালেটাইজার', link: '/bn/products/filling/robot-palletizer' }
    ]
  },
  {
    text: 'ফল এবং সবজি প্রাক-প্রক্রিয়াকরণ যন্ত্রপাতি',
    collapsed: true,
    items: [
      { text: 'সিরিজ ওভারভিউ', link: '/bn/solutions/fruit-veg-processing/' },
      { text: 'ফল উত্তোলক', link: '/bn/products/filling/fruit-elevator' }
    ]
  },
  {
    text: 'ফিল্টারিং মেশিন সিরিজ',
    collapsed: true,
    items: [
      { text: 'সিরিজ ওভারভিউ', link: '/bn/solutions/filtering/' },
      { text: 'ফিল্টারিং সরঞ্জাম ওভারভিউ', link: '/bn/products/filtration-equipment' },
      { text: 'পনিউম্যাটিক ফিল্টার প্রেস', link: '/bn/products/pneumatic-filter-press' },
      { text: 'পোস্ট-ট্রিটমেন্ট সরঞ্জাম', link: '/bn/products/post-treatment' }
    ]
  },
  {
    text: 'ব্রিউইং ইকুইপমেন্ট সিরিজ',
    collapsed: true,
    items: [
      { text: 'সিরিজ ওভারভিউ', link: '/bn/solutions/brewing/' },
      { text: 'ওয়াইন রিন্সিং-ফিলিং-কর্কিং মনোব্লক', link: '/bn/products/filling/wine-rinsing-filling-corking-monoblock' },
      { text: 'ফিলিং ও কর্কিং মনোব্লক', link: '/bn/products/filling/filling-corking-monoblock' },
      {
        text: 'লো ভ্যাকুয়াম ফিলিং মেশিন',
        collapsed: true,
        items: [
          { text: 'সিরিজ ওভারভিউ', link: '/bn/products/filling/low-vacuum-filling-machine' },
          { text: 'GFP-12A', link: '/bn/products/filling/gfp-12a-low-vacuum-filling-machine' },
          { text: 'GFP-12B', link: '/bn/products/filling/gfp-12b-low-vacuum-filling-machine' },
          { text: 'GFP-18A', link: '/bn/products/filling/gfp-18a-low-vacuum-filling-machine' },
          { text: 'GFP-24H', link: '/bn/products/filling/gfp-24h-low-vacuum-filling-machine' },
          { text: 'GFP-30H', link: '/bn/products/filling/gfp-30h-low-vacuum-filling-machine' },
          { text: 'GFP-36H', link: '/bn/products/filling/gfp-36h-low-vacuum-filling-machine' },
          { text: 'GFP-40H', link: '/bn/products/filling/gfp-40h-low-vacuum-filling-machine' },
          { text: 'GFP-48H', link: '/bn/products/filling/gfp-48h-low-vacuum-filling-machine' },
          { text: 'GFP-60H', link: '/bn/products/filling/gfp-60h-low-vacuum-filling-machine' }
        ]
      }
    ]
  },
  {
    text: 'দুগ্ধ প্রক্রিয়াকরণ যন্ত্রপাতি',
    collapsed: true,
    items: [
      { text: 'সিরিজ ওভারভিউ', link: '/bn/solutions/dairy-processing/' },
      { text: 'পাস্তুরাইজেশন প্রসেসিং লাইন', link: '/bn/products/filling/pasteurization-processing-line' }
    ]
  }
]

const DUPLICATE_SOLUTION_CATEGORY_PATTERN = 'bottle-washing|brewing|cap-shrinking|corking|dairy-processing|drying|filling|filling-packages|filtering|fruit-veg-processing|labeling|laser-coding|light-inspection|packing-palletizing|sealing'
const DUPLICATE_SOLUTION_DETAIL_RE = new RegExp(`^/(en|zh|fr|ru|vi|bn)/solutions/(${DUPLICATE_SOLUTION_CATEGORY_PATTERN})/([^/]+)$`)

const canonicalizeFillingSidebarItems = (items) => items.map((item) => {
  const normalized = { ...item }
  const match = item.link?.match(DUPLICATE_SOLUTION_DETAIL_RE)
  if (match) normalized.link = `/${match[1]}/products/filling/${match[3]}`
  if (item.items) normalized.items = canonicalizeFillingSidebarItems(item.items)
  return normalized
})

const SITE_URL = 'https://hydraulicoilpressing.opchn.com'
const SITE_NAME = 'Shengshi Hecheng Oil Press'
const CURRENT_YEAR = new Date().getFullYear()
const ORGANIZATION_ID = `${SITE_URL}/#organization`
const WEBSITE_ID = `${SITE_URL}/#website`
const DEFAULT_IMAGE = `${SITE_URL}/images/hero-oil-press.webp`
const DEFAULT_DESCRIPTION = 'Professional Hydraulic Oil Press Manufacturer and One-stop Oil Processing Solutions.'
// Keep hreflang codes aligned with locales.*.lang and sitemap xhtml:link values
const LOCALE_CODES = { en: 'en-US', zh: 'zh-CN', fr: 'fr-FR', ru: 'ru-RU', vi: 'vi-VN', bn: 'bn-BD' }
const OG_LOCALE = { en: 'en_US', zh: 'zh_CN', fr: 'fr_FR', ru: 'ru_RU', vi: 'vi_VN', bn: 'bn_BD' }
// Thin / internal / duplicate pages that should not be indexed
const NOINDEX_ROUTE_PATTERNS = [
  /^\/$/,
  /^\/404$/,
  /\/translation-glossary$/,
  /\/solutions\/peanut1$/,
  DUPLICATE_SOLUTION_DETAIL_RE,
  /Sesame%20Cleaning%20Machine$/,
  /\/products\/peanut$/
]
const PRODUCT_COLLECTION_SLUGS = new Set([
  'supporting',
  'pre-treatment',
  'post-treatment',
  'filtration-equipment',
  'refining-and-dewaxing-equipment',
  'filling-equipment'
])
const PRODUCT_INFO_SLUGS = new Set([
  'instruction-manual',
  'customer-order-shipping-video'
])
const OIL_SOLUTION_DETAIL_SLUGS = new Set([
  'soybean',
  'peanut',
  'sesame',
  'rapeseed',
  'sunflower',
  'flaxseed',
  'tea-seed',
  'walnut',
  'coconut',
  'corn-germ',
  'almond',
  'hazelnut',
  'cashew',
  'avocado',
  'grape-seed',
  'pumpkin-seed',
  'perilla',
  'palm',
  'pistachio',
  'apricot-kernel',
  'peach-kernel',
  'watermelon-seed',
  'cottonseed',
  'chili-seed',
  'castor-seed',
  'rice-bran',
  'buckwheat'
])
const SOLUTION_COLLECTION_SLUGS = new Set([
  'seed-oils',
  'nuts',
  'fruits',
  'special-oils',
  'filling-packages',
  'production-lines',
  'bottle-washing',
  'filling',
  'light-inspection',
  'sealing',
  'corking',
  'cap-shrinking',
  'drying',
  'labeling',
  'laser-coding',
  'packing-palletizing',
  'fruit-veg-processing',
  'filtering',
  'brewing',
  'dairy-processing',
  'elevator-systems'
])

const HOME_LABELS = {
  en: 'Home',
  zh: '首页',
  fr: 'Accueil',
  ru: 'Главная',
  vi: 'Trang chủ',
  bn: 'হোম'
}

const ROUTE_LABELS = {
  en: {
    products: 'Products',
    solutions: 'Solutions',
    news: 'News',
    company: 'Company News',
    industry: 'Industry News',
    technology: 'Technical Knowledge',
    about: 'About Us',
    contact: 'Get Price & Quote',
    advantages: 'Advantages',
    supporting: 'Supporting Equipment',
    'pre-treatment': 'Pre-treatment Equipment',
    'sesame-screening-machine': 'Sesame Screening Machine',
    'post-treatment': 'Post-treatment Equipment',
    'filtration-equipment': 'Oil Filtration Equipment',
    'refining-and-dewaxing-equipment': 'Refining & Dewaxing Equipment',
    'filling-equipment': 'Filling & Packaging Equipment',
    'hydraulic-oil-press': 'Hydraulic Oil Press',
    'seed-oils': 'Seed Oil Solutions',
    nuts: 'Nut Oil Solutions',
    fruits: 'Fruit Oil Solutions',
    'special-oils': 'Special Oil Solutions',
    'filling-packages': 'Filling Packages',
    'production-lines': 'Production Lines',
    'bottle-washing': 'Bottle Washing Machine Series',
    filling: 'Filling Machine Series',
    'light-inspection': 'Light Inspection Series',
    sealing: 'Sealing Machine Series',
    corking: 'Corking Machine Series',
    'cap-shrinking': 'Cap Shrinking Series',
    drying: 'Drying Machine Series',
    labeling: 'Labeling Machine Series',
    'laser-coding': 'Laser Coding Machine Series',
    'packing-palletizing': 'Packing & Palletizing',
    'fruit-veg-processing': 'Fruit & Vegetable Pre-processing',
    filtering: 'Filtering Machine Series',
    brewing: 'Brewing Equipment Series',
    'dairy-processing': 'Dairy Processing Equipment',
    'elevator-systems': 'Elevators & Conveyors'
  },
  zh: {
    products: '产品',
    solutions: '解决方案',
    news: '新闻',
    company: '公司动态',
    industry: '行业资讯',
    technology: '技术知识',
    about: '关于我们',
    contact: '获取价格/报价',
    advantages: '优势',
    supporting: '配套设备',
    'pre-treatment': '预处理设备',
    'sesame-screening-machine': '芝麻筛选机',
    'post-treatment': '后处理设备',
    'filtration-equipment': '过滤设备',
    'refining-and-dewaxing-equipment': '精炼与脱蜡设备',
    'filling-equipment': '灌装包装设备',
    'hydraulic-oil-press': '液压榨油机',
    'seed-oils': '粮油类解决方案',
    nuts: '坚果油解决方案',
    fruits: '果实油解决方案',
    'special-oils': '特种油解决方案',
    'filling-packages': '灌装配套方案',
    'production-lines': '生产线总览',
    'bottle-washing': '冲瓶机系列',
    filling: '灌装机系列',
    'light-inspection': '灯检机系列',
    sealing: '封口机系列',
    corking: '打塞机系列',
    'cap-shrinking': '胶帽热缩机系列',
    drying: '吹干机系列',
    labeling: '贴标机系列',
    'laser-coding': '激光打码机系列',
    'packing-palletizing': '装箱与码垛',
    'fruit-veg-processing': '蔬果前处理设备',
    filtering: '过滤机系列',
    brewing: '酿酒设备系列',
    'dairy-processing': '奶类加工设备',
    'elevator-systems': '提升输送设备'
  },
  fr: {
    products: 'Produits',
    solutions: 'Solutions',
    news: 'Actualités',
    company: 'Actualités de l’entreprise',
    industry: 'Actualités de l’industrie',
    technology: 'Connaissances techniques',
    about: 'À propos',
    contact: 'Obtenir prix & devis',
    advantages: 'Avantages',
    supporting: 'Équipements complémentaires',
    'pre-treatment': 'Équipements de prétraitement',
    'sesame-screening-machine': 'Machine de tamisage du sésame',
    'post-treatment': 'Équipements de post-traitement',
    'filtration-equipment': 'Équipements de filtration',
    'refining-and-dewaxing-equipment': 'Équipements de raffinage et déparaffinage',
    'filling-equipment': 'Équipements de remplissage et d’emballage',
    'hydraulic-oil-press': 'Presse à huile hydraulique',
    'seed-oils': 'Solutions d’huiles de graines',
    nuts: 'Solutions d’huiles de noix',
    fruits: 'Solutions d’huiles de fruits',
    'special-oils': 'Solutions d’huiles spéciales',
    'filling-packages': 'Solutions de remplissage',
    'production-lines': 'Lignes de production',
    'bottle-washing': 'Série de rinçage des bouteilles',
    filling: 'Série de remplissage',
    'light-inspection': 'Série d’inspection lumineuse',
    sealing: 'Série de scellage',
    corking: 'Série de bouchage',
    'cap-shrinking': 'Série de thermorétraction',
    drying: 'Série de séchage',
    labeling: 'Série d’étiquetage',
    'laser-coding': 'Série de codage laser',
    'packing-palletizing': 'Mise en caisse et palettisation',
    'fruit-veg-processing': 'Prétraitement fruits et légumes',
    filtering: 'Série de filtration',
    brewing: 'Équipements de vinification',
    'dairy-processing': 'Équipements laitiers',
    'elevator-systems': 'Élévateurs et convoyeurs'
  },
  ru: {
    products: 'Продукты',
    solutions: 'Решения',
    news: 'Новости',
    company: 'Новости компании',
    industry: 'Новости отрасли',
    technology: 'Технические знания',
    about: 'О нас',
    contact: 'Запросить цену и расчёт',
    advantages: 'Преимущества',
    supporting: 'Вспомогательное оборудование',
    'pre-treatment': 'Оборудование предварительной обработки',
    'sesame-screening-machine': 'Машина для очистки кунжута',
    'post-treatment': 'Оборудование последующей обработки',
    'filtration-equipment': 'Фильтрационное оборудование',
    'refining-and-dewaxing-equipment': 'Оборудование для рафинирования и депарафинизации',
    'filling-equipment': 'Оборудование для розлива и упаковки',
    'hydraulic-oil-press': 'Гидравлический маслопресс',
    'seed-oils': 'Решения для зерновых и семенных масел',
    nuts: 'Решения для ореховых масел',
    fruits: 'Решения для фруктовых масел',
    'special-oils': 'Решения для специальных масел',
    'filling-packages': 'Решения для розлива',
    'production-lines': 'Производственные линии',
    'bottle-washing': 'Серия моек бутылок',
    filling: 'Серия разливочных машин',
    'light-inspection': 'Серия световых инспекционных машин',
    sealing: 'Серия укупорочных машин',
    corking: 'Серия машин для закупорки пробками',
    'cap-shrinking': 'Серия термоусадочных машин для колпачков',
    drying: 'Серия сушильных машин',
    labeling: 'Серия этикетировочных машин',
    'laser-coding': 'Серия лазерных маркировочных машин',
    'packing-palletizing': 'Упаковка и паллетизация',
    'fruit-veg-processing': 'Предварительная обработка фруктов и овощей',
    filtering: 'Серия фильтрационных машин',
    brewing: 'Серия оборудования для виноделия',
    'dairy-processing': 'Оборудование для переработки молока',
    'elevator-systems': 'Элеваторы и конвейеры'
  },
  vi: {
    products: 'Sản phẩm',
    solutions: 'Giải pháp',
    news: 'Tin tức',
    company: 'Tin công ty',
    industry: 'Tin ngành',
    technology: 'Kiến thức kỹ thuật',
    about: 'Về chúng tôi',
    contact: 'Nhận báo giá',
    advantages: 'Ưu điểm',
    supporting: 'Thiết bị hỗ trợ',
    'pre-treatment': 'Thiết bị tiền xử lý',
    'sesame-screening-machine': 'Máy sàng mè',
    'post-treatment': 'Thiết bị hậu xử lý',
    'filtration-equipment': 'Thiết bị lọc dầu',
    'refining-and-dewaxing-equipment': 'Thiết bị tinh luyện và khử sáp',
    'filling-equipment': 'Thiết bị chiết rót và đóng gói',
    'hydraulic-oil-press': 'Máy ép dầu thủy lực',
    'seed-oils': 'Giải pháp dầu hạt',
    nuts: 'Giải pháp dầu hạt cứng',
    fruits: 'Giải pháp dầu từ quả',
    'special-oils': 'Giải pháp dầu đặc biệt',
    'filling-packages': 'Giải pháp chiết rót đồng bộ',
    'production-lines': 'Dây chuyền sản xuất',
    'bottle-washing': 'Dòng máy rửa chai',
    filling: 'Dòng máy chiết rót',
    'light-inspection': 'Dòng máy kiểm tra bằng đèn',
    sealing: 'Dòng máy đóng nắp',
    corking: 'Dòng máy đóng nút bần',
    'cap-shrinking': 'Dòng máy co nhiệt nắp',
    drying: 'Dòng máy sấy khô',
    labeling: 'Dòng máy dán nhãn',
    'laser-coding': 'Dòng máy khắc mã laser',
    'packing-palletizing': 'Đóng thùng và xếp pallet',
    'fruit-veg-processing': 'Thiết bị tiền xử lý rau quả',
    filtering: 'Dòng máy lọc',
    brewing: 'Dòng thiết bị nấu rượu',
    'dairy-processing': 'Thiết bị chế biến sữa',
    'elevator-systems': 'Gàu tải & vít tải'
  },
  bn: {
    products: 'পণ্যসমূহ',
    solutions: 'সমাধান',
    news: 'সংবাদ',
    company: 'কোম্পানি সংবাদ',
    industry: 'শিল্প সংবাদ',
    technology: 'কারিগরি জ্ঞান',
    about: 'আমাদের সম্পর্কে',
    contact: 'দাম ও কোটেশন নিন',
    advantages: 'সুবিধাসমূহ',
    supporting: 'সহায়ক সরঞ্জাম',
    'pre-treatment': 'প্রি-ট্রিটমেন্ট সরঞ্জাম',
    'sesame-screening-machine': 'তিল স্ক্রিনিং মেশিন',
    'post-treatment': 'পোস্ট-ট্রিটমেন্ট সরঞ্জাম',
    'filtration-equipment': 'ফিল্ট্রেশন সরঞ্জাম',
    'refining-and-dewaxing-equipment': 'রিফাইনিং ও ডিওয়াক্সিং সরঞ্জাম',
    'filling-equipment': 'ফিলিং ও প্যাকেজিং সরঞ্জাম',
    'hydraulic-oil-press': 'হাইড্রোলিক অয়েল প্রেস',
    'seed-oils': 'বীজ তেলের সমাধান',
    nuts: 'বাদাম তেলের সমাধান',
    fruits: 'ফলের তেলের সমাধান',
    'special-oils': 'বিশেষ তেলের সমাধান',
    'filling-packages': 'ফিলিং প্যাকেজ সমাধান',
    'production-lines': 'উৎপাদন লাইন',
    'bottle-washing': 'বোতল ধোয়ার মেশিন সিরিজ',
    filling: 'ফিলিং মেশিন সিরিজ',
    'light-inspection': 'লাইট ইন্সপেকশন সিরিজ',
    sealing: 'সিলিং মেশিন সিরিজ',
    corking: 'কর্কিং মেশিন সিরিজ',
    'cap-shrinking': 'ক্যাপ শ্রিংকিং মেশিন সিরিজ',
    drying: 'ড্রাইং মেশিন সিরিজ',
    labeling: 'লেবেলিং মেশিন সিরিজ',
    'laser-coding': 'লেজার কোডিং মেশিন সিরিজ',
    'packing-palletizing': 'প্যাকিং ও প্যালেটাইজিং',
    'fruit-veg-processing': 'ফল ও সবজি প্রি-প্রসেসিং',
    filtering: 'ফিল্টারিং মেশিন সিরিজ',
    brewing: 'ব্রুইং সরঞ্জাম সিরিজ',
    'dairy-processing': 'দুগ্ধ প্রক্রিয়াকরণ সরঞ্জাম',
    'elevator-systems': 'এলিভেটর ও কনভেয়র'
  }
}

const cleanSchemaText = (value = '') => String(value)
  .replace(/<[^>]*>/g, ' ')
  .replace(/&nbsp;/g, ' ')
  .replace(/\s+/g, ' ')
  .trim()

const stripSchemaBrandSuffix = (value = '') => String(value)
  .replace(/\s*(?:\||-)\s*Shengshi Hecheng(?: Oil Press)?\s*$/i, '')
  .replace(/\s*(?:\||-)\s*Shandong Shengshi Hecheng Machinery Co\., Ltd\.?\s*$/i, '')
  .replace(/\s*(?:\||-)\s*山东盛世赫程机械有限公司\s*$/u, '')
  .trim()

const normalizeSchemaTitle = (value = '') => stripSchemaBrandSuffix(cleanSchemaText(value))

const normalizeRoute = (relativePath = 'index.md') => {
  const normalized = relativePath.replace(/\\/g, '/').replace(/\.md$/, '')
  let route = `/${normalized}`

  if (route === '/index') route = '/'
  if (route.endsWith('/index')) route = `${route.slice(0, -6)}/`
  if (route !== '/' && route.endsWith('/')) route = route.slice(0, -1)

  return route
}

const parseLocalizedRoute = (route) => {
  const parts = route.split('/').filter(Boolean)
  const lang = parts[0] && LOCALE_CODES[parts[0]] ? parts[0] : 'en'
  const segments = parts[0] && LOCALE_CODES[parts[0]] ? parts.slice(1) : parts
  return { lang, segments }
}

const humanizeSegment = (segment = '') => {
  if (!segment) return ''
  return decodeURIComponent(segment)
    .replace(/\.(html?)$/i, '')
    .replace(/[-_]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b([a-z])/g, (match) => match.toUpperCase())
}

const getCompanyName = (lang) => lang === 'zh'
  ? '山东盛世赫程机械有限公司'
  : 'Shandong Shengshi Hecheng Machinery Co., Ltd.'

const getRouteLabel = (lang, segment) => {
  if (!segment) return HOME_LABELS[lang] || HOME_LABELS.en
  return ROUTE_LABELS[lang]?.[segment] || ROUTE_LABELS.en?.[segment] || humanizeSegment(segment)
}

const getSeriesLabel = (lang, model) => {
  if (lang === 'zh') return `${model}系列`
  if (lang === 'ru') return `Серия ${model}`
  if (lang === 'fr') return `Série ${model}`
  if (lang === 'vi') return `Dòng ${model}`
  if (lang === 'bn') return `${model} সিরিজ`
  return `${model} Series`
}

const pageNameFallback = (lang, slug, segments = []) => {
  if (!segments.length) return SITE_NAME
  return getRouteLabel(lang, slug) || SITE_NAME
}

const buildLocalizedPath = (lang, path) => {
  const normalized = path.startsWith('/') ? path : `/${path}`
  return lang === 'en' ? `/en${normalized}` : `/${lang}${normalized}`
}

const routeExists = (route = '/') => {
  if (route === '/') return existsSync(new URL('../index.md', import.meta.url))
  const cleaned = route.replace(/\/$/, '')
  const relative = cleaned.replace(/^\//, '')
  if (existsSync(new URL(`../${relative}.md`, import.meta.url))) return true
  if (existsSync(new URL(`../${relative}/index.md`, import.meta.url))) return true
  return false
}

const isNoindexRoute = (route = '/') =>
  NOINDEX_ROUTE_PATTERNS.some((pattern) => pattern.test(route))

const toCanonicalPath = (route = '/') => {
  if (route === '/') return '/'
  // Match vercel trailingSlash:false + cleanUrls — never emit trailing slash
  return route.replace(/\/$/, '')
}

const normalizeSchemaRoute = (route = '/') => {
  if (route !== '/' && route.endsWith('/')) return route.slice(0, -1)
  return route
}

const fileToRoute = (relativeFile) => {
  let route = `/${relativeFile.replace(/\\/g, '/').replace(/\.md$/, '')}`

  if (route === '/index') route = '/'
  if (route.endsWith('/index')) route = route.slice(0, -6)

  return normalizeSchemaRoute(route)
}

const DOCS_ROOT = new URL('../', import.meta.url)

const buildDocTitleIndex = () => {
  const index = new Map()

  const walk = (dirUrl, prefix = '') => {
    for (const entry of readdirSync(dirUrl, { withFileTypes: true })) {
      if (entry.name.startsWith('.') || entry.name === 'public') continue

      if (entry.isDirectory()) {
        walk(new URL(`${entry.name}/`, dirUrl), `${prefix}${entry.name}/`)
        continue
      }

      if (!entry.isFile() || !entry.name.endsWith('.md')) continue

      const relativeFile = `${prefix}${entry.name}`
      const route = fileToRoute(relativeFile)
      const content = readFileSync(new URL(entry.name, dirUrl), 'utf8')
      const frontmatter = content.match(/^---\n([\s\S]*?)\n---/)
      const frontmatterBlock = frontmatter ? frontmatter[1] : ''
      const titleMatch = frontmatterBlock.match(/^title:\s*(.+)$/m)
      const headingMatch = content.match(/^#\s+(.+)$/m)
      const rawTitle = titleMatch ? titleMatch[1].trim() : headingMatch ? headingMatch[1].trim() : ''
      const cleanedTitle = normalizeSchemaTitle(rawTitle.replace(/^['"]|['"]$/g, ''))

      if (cleanedTitle) {
        index.set(route, cleanedTitle)
      }
    }
  }

  walk(DOCS_ROOT)
  return index
}

const DOC_TITLE_INDEX = buildDocTitleIndex()

const COLLECTION_ROUTES = {
  products: {
    root: [
      '/products/300',
      '/products/325',
      '/products/355',
      '/products/400',
      '/products/426',
      '/products/480',
      '/products/500',
      '/products/korean-type-small-hydraulic-oil-press-machine',
      '/products/small-sesame-oil-press-machine',
      '/products/khop-10kg-small-hydraulic-oil-press-machine',
      '/products/khop-15kg-small-hydraulic-oil-press-machine',
      '/products/khop-20kg-small-hydraulic-oil-press-machine',
      '/products/small-screw-oil-press-machine',
      '/products/lyf-501s-small-screw-oil-press-machine',
      '/products/lyf-508t-small-screw-oil-press-machine',
      '/products/lyf-509-small-screw-oil-press-machine',
      '/products/lyf-503-small-screw-oil-press-machine',
      '/products/lyf-505-small-screw-oil-press-machine',
      '/products/lyf-508-small-screw-oil-press-machine',
      '/products/lyf-899-small-screw-oil-press-machine',
      '/products/lyf-t11-small-screw-oil-press-machine',
      '/products/lyf-t12-small-screw-oil-press-machine',
      '/products/lyf-t81-small-screw-oil-press-machine',
      '/products/lyf-t80-small-screw-oil-press-machine',
      '/products/filtration-equipment',
      '/products/refining-and-dewaxing-equipment',
      '/products/filling-equipment',
      '/products/supporting'
    ],
    supporting: [
      '/products/pre-treatment',
      '/products/post-treatment'
    ],
    'pre-treatment': [
      '/products/sesame-screening-machine',
      '/products/11kw-high-speed-pulverizer',
      '/products/27kw-electric-steamer',
      '/products/Hemp-and-flaxseed-grinding-and-stirring-integrated-machine',
      '/products/automatic-drum-roaster',
      '/products/cake-wrapping-machine',
      '/products/feeding-crushing-frying-integrated-machine',
      '/products/heat-conducting-oil-flat-bottom-frying-pan',
      '/products/pre-press-machine',
      '/products/wood-fired-steamer',
      '/products/wood-fired-thermal-oil-flat-bottom-wok'
    ],
    'post-treatment': [
      '/products/pneumatic-filter-press',
      '/products/cake-pulverizer',
      '/products/edible-oil-refining-equipment'
    ],
    'filtration-equipment': [
      '/products/pneumatic-filter-press',
      '/products/post-treatment',
      '/solutions/filtering/'
    ],
    'refining-and-dewaxing-equipment': [
      '/products/edible-oil-refining-equipment'
    ],
    'filling-equipment': [
      '/solutions/filling-packages',
      '/solutions/bottle-washing/',
      '/solutions/filling/',
      '/solutions/light-inspection/',
      '/solutions/sealing/',
      '/solutions/corking/',
      '/solutions/cap-shrinking/',
      '/solutions/drying/',
      '/solutions/labeling/',
      '/solutions/laser-coding/',
      '/solutions/packing-palletizing/',
      '/solutions/fruit-veg-processing/',
      '/solutions/filtering/',
      '/solutions/brewing/',
      '/solutions/dairy-processing/',
      '/products/filling/low-vacuum-filling-machine',
      '/products/filling/smart-filling-machine',
      '/products/filling/plastic-cap-pressing-machine',
      '/products/filling/light-inspection-machine',
      '/products/filling/robot-palletizer'
    ]
  },
  solutions: {
    root: [
      '/solutions/production-lines',
      '/solutions/seed-oils',
      '/solutions/nuts',
      '/solutions/fruits',
      '/solutions/special-oils',
      '/solutions/filling-packages',
      '/solutions/bottle-washing/',
      '/solutions/filling/',
      '/solutions/sealing/',
      '/solutions/brewing/'
    ],
    'seed-oils': [
      '/solutions/soybean',
      '/solutions/peanut',
      '/solutions/sesame',
      '/solutions/rapeseed',
      '/solutions/sunflower',
      '/solutions/cottonseed',
      '/solutions/flaxseed',
      '/solutions/tea-seed',
      '/solutions/perilla'
    ],
    nuts: [
      '/solutions/coconut',
      '/solutions/palm',
      '/solutions/walnut',
      '/solutions/almond',
      '/solutions/hazelnut',
      '/solutions/cashew',
      '/solutions/pistachio'
    ],
    fruits: [
      '/solutions/avocado',
      '/solutions/grape-seed',
      '/solutions/pumpkin-seed',
      '/solutions/watermelon-seed',
      '/solutions/peach-kernel',
      '/solutions/apricot-kernel'
    ],
    'special-oils': [
      '/solutions/rice-bran',
      '/solutions/corn-germ',
      '/solutions/castor-seed',
      '/solutions/chili-seed',
      '/solutions/grape-seed',
      '/solutions/buckwheat'
    ],
    'filling-packages': [
      '/products/filling/cgf-three-in-one-monoblock',
      '/products/filling/gdp36dk-filling-capping-sealing-monoblock',
      '/products/filling/baijiu-filling-capping-monoblock'
    ],
    'bottle-washing': [
      '/products/filling/rotary-bottle-washer',
      '/products/filling/six-wheel-bottle-washer',
      '/products/filling/chain-bottle-washer',
      '/products/filling/intermittent-bottle-washer',
      '/products/filling/flip-bottle-washer'
    ],
    filling: [
      '/products/filling/smart-filling-machine',
      '/products/filling/high-precision-filling-machine',
      '/products/filling/intelligent-quantitative-filling-machine',
      '/products/filling/rotary-drum-filling-machine',
      '/products/filling/linear-filling-machine',
      '/products/filling/pesticide-filling-machine',
      '/products/filling/corrosion-resistant-filling-machine'
    ],
    'light-inspection': [
      '/products/filling/light-inspection-machine'
    ],
    sealing: [
      '/products/filling/aluminum-cap-sealing-machine',
      '/products/filling/anti-theft-cap-sealing-machine',
      '/products/filling/plastic-cap-pressing-machine',
      '/products/filling/pneumatic-capping-machine',
      '/products/filling/single-head-sealing-machine'
    ],
    corking: [
      '/products/filling/automatic-corking-machine',
      '/products/filling/semi-automatic-corking-machine',
      '/products/filling/manual-corking-machine'
    ],
    'cap-shrinking': [
      '/products/filling/cap-rolling-shrinking-machine',
      '/products/filling/multi-head-cap-shrinking-machine',
      '/products/filling/single-head-cap-shrinking-machine'
    ],
    drying: [
      '/products/filling/spider-arm-bottle-dryer',
      '/products/filling/turbo-air-knife-dryer'
    ],
    labeling: [
      '/products/filling/df-t200-round-bottle-labeler',
      '/products/filling/double-label-automatic-labeling-machine',
      '/products/filling/self-adhesive-labeling-machine'
    ],
    'laser-coding': [
      '/products/filling/co2-laser-marking-machine',
      '/products/filling/fiber-laser-marking-machine'
    ],
    'packing-palletizing': [
      '/products/filling/carton-sealing-machine',
      '/products/filling/case-erector-packing-machine',
      '/products/filling/robot-palletizer'
    ],
    'fruit-veg-processing': [
      '/products/filling/fruit-elevator'
    ],
    filtering: [
      '/products/filtration-equipment',
      '/products/pneumatic-filter-press',
      '/products/post-treatment'
    ],
    brewing: [
      '/products/filling/low-vacuum-filling-machine',
      '/products/filling/gfp-12a-low-vacuum-filling-machine',
      '/products/filling/gfp-12b-low-vacuum-filling-machine',
      '/products/filling/gfp-18a-low-vacuum-filling-machine',
      '/products/filling/gfp-24h-low-vacuum-filling-machine',
      '/products/filling/gfp-30h-low-vacuum-filling-machine',
      '/products/filling/gfp-36h-low-vacuum-filling-machine',
      '/products/filling/gfp-40h-low-vacuum-filling-machine',
      '/products/filling/gfp-48h-low-vacuum-filling-machine',
      '/products/filling/gfp-60h-low-vacuum-filling-machine',
      '/products/filling/filling-corking-monoblock',
      '/products/filling/wine-rinsing-filling-corking-monoblock'
    ],
    'dairy-processing': [
      '/products/filling/pasteurization-processing-line'
    ]
  },
  news: {
    root: [
      '/news/company',
      '/news/industry',
      '/news/technology'
    ]
  }
}

const getDocTitleByPath = (lang, path) => {
  const route = normalizeSchemaRoute(buildLocalizedPath(lang, path))
  return DOC_TITLE_INDEX.get(route) || ''
}

const getCollectionKey = (segments) => (segments.length <= 1 ? 'root' : segments[1])

const getCollectionFallbackRoutes = (lang, section, segments) => {
  const collectionRoute = normalizeSchemaRoute(buildLocalizedPath(
    lang,
    `/${[section, ...segments.slice(1)].filter(Boolean).join('/')}`
  ))
  const childDepth = segments.length + 1

  return Array.from(DOC_TITLE_INDEX.keys())
    .filter((route) => route.startsWith(`${collectionRoute}/`))
    .filter((route) => parseLocalizedRoute(route).segments.length === childDepth)
    .sort()
    .map((route) => route.replace(new RegExp(`^/${lang}`), '') || '/')
}

const getCollectionFallbackName = (lang, path) => {
  const normalizedPath = normalizeSchemaRoute(path)
  const { segments } = parseLocalizedRoute(buildLocalizedPath(lang, normalizedPath))
  const slug = segments[segments.length - 1] || ''

  if (/^\d+$/.test(slug)) return getSeriesLabel(lang, slug)
  return getRouteLabel(lang, slug)
}

const getPrimaryPageType = (section, segments) => {
  if (!segments.length) return 'WebPage'
  if (section === 'contact') return 'ContactPage'
  if (section === 'about') return 'AboutPage'
  if (section === 'news' && segments.length <= 2) return 'CollectionPage'
  if (section === 'products' && (segments.length === 1 || (segments.length === 2 && PRODUCT_COLLECTION_SLUGS.has(segments[1])))) {
    return 'CollectionPage'
  }
  if (section === 'solutions' && (segments.length === 1 || (segments.length === 2 && SOLUTION_COLLECTION_SLUGS.has(segments[1])))) {
    return 'CollectionPage'
  }
  return 'WebPage'
}

const getCollectionItemList = (lang, section, segments) => {
  const collectionKey = getCollectionKey(segments)
  const configuredPaths = COLLECTION_ROUTES[section]?.[collectionKey] || []
  const fallbackPaths = configuredPaths.length ? [] : getCollectionFallbackRoutes(lang, section, segments)
  const paths = configuredPaths.length ? configuredPaths : fallbackPaths

  return paths.map((path) => {
    const normalizedPath = normalizeSchemaRoute(path)
    const duplicateSolutionMatch = normalizedPath.match(new RegExp(`^/solutions/(${DUPLICATE_SOLUTION_CATEGORY_PATTERN})/([^/]+)$`))
    const canonicalPath = duplicateSolutionMatch
      ? `/products/filling/${duplicateSolutionMatch[2]}`
      : normalizedPath
    return {
      name: getDocTitleByPath(lang, canonicalPath) || getCollectionFallbackName(lang, canonicalPath),
      url: `${SITE_URL}${buildLocalizedPath(lang, canonicalPath)}`
    }
  })
}


const PAGE_VIDEO_SCHEMA = {
  '/zh/products/325': [
    {
      name: '325型液压榨油机发货实拍视频',
      description: '展示325系列液压榨油机单桶机型装车发货现场，适合比较榨油机价格、厂家供货能力、交期和售后支持的客户参考。',
      slug: '325-hydraulic-oil-press-shipping-demo-20240624',
      uploadDate: '2024-06-24',
      duration: 'PT11S'
    }
  ],
  '/zh/products/500': [
    {
      name: '500型液压榨油机厂家发货视频',
      description: '展示500系列液压榨油机工厂发货实拍，适合核桃油、茶籽油、亚麻籽油、杏仁油等冷榨生产线采购客户参考。',
      slug: '500-hydraulic-oil-press-shipping-demo-20251116',
      uploadDate: '2025-11-16',
      duration: 'PT16S'
    }
  ],
  '/zh/solutions/tea-seed': [
    {
      name: '茶籽油冷榨试机视频',
      description: '展示茶籽粉碎后直接冷榨试机现场，适合茶籽油、山茶油低温物理压榨项目客户评估设备和生产线报价。',
      slug: 'tea-seed-oil-cold-pressing-demo-20260307',
      uploadDate: '2026-03-07',
      duration: 'PT23S'
    }
  ],
  '/zh/solutions/peanut': [
    {
      name: '花生油热榨生产线设备发货视频',
      description: '展示花生油压榨整套设备装车发货现场，包含花生榨油机、电炒锅、预榨机、滤油机等关键设备。',
      slug: 'peanut-oil-pressing-line-shipping-demo-20251105',
      uploadDate: '2025-11-05',
      duration: 'PT28S'
    }
  ],
  '/zh/products/sesame-screening-machine': [
    {
      name: '芝麻筛选机工作视频',
      description: '展示芝麻上料、振动筛选、风力除尘和多出口分离过程，适合比较芝麻筛选机价格、厂家供货和整线采购方案的客户参考。',
      slug: 'sesame-screening-machine-demo-202607',
      uploadDate: '2026-07-12',
      duration: 'PT77S'
    }
  ],
  '/en/products/sesame-screening-machine': [
    {
      name: 'Sesame screening machine working video',
      description: 'Shows sesame feeding, vibration screening, air dust removal and separate discharge for buyers comparing oilseed cleaner price and line configuration.',
      slug: 'sesame-screening-machine-demo-202607',
      uploadDate: '2026-07-12',
      duration: 'PT77S'
    }
  ],
  '/ru/products/sesame-screening-machine': [
    {
      name: 'Видео работы машины для очистки кунжута',
      description: 'Показаны подача кунжута, вибрационное просеивание, воздушное удаление пыли и раздельная выгрузка для выбора модели и расчёта цены.',
      slug: 'sesame-screening-machine-demo-202607',
      uploadDate: '2026-07-12',
      duration: 'PT77S'
    }
  ],
  '/fr/products/sesame-screening-machine': [
    {
      name: 'Vidéo de la machine de tamisage du sésame',
      description: 'Démonstration de l’alimentation, du tamisage vibrant, de l’aspiration des poussières et des sorties séparées pour comparer les modèles et les prix.',
      slug: 'sesame-screening-machine-demo-202607',
      uploadDate: '2026-07-12',
      duration: 'PT77S'
    }
  ],
  '/vi/products/sesame-screening-machine': [
    {
      name: 'Video máy sàng mè hoạt động',
      description: 'Trình bày quá trình cấp mè, sàng rung, hút bụi bằng gió và xả riêng từng loại vật liệu để lựa chọn mẫu máy và nhận báo giá.',
      slug: 'sesame-screening-machine-demo-202607',
      uploadDate: '2026-07-12',
      duration: 'PT77S'
    }
  ],
  '/bn/products/sesame-screening-machine': [
    {
      name: 'তিল স্ক্রিনিং মেশিনের কাজের ভিডিও',
      description: 'তিল ফিডিং, ভাইব্রেশন স্ক্রিনিং, বাতাসে ধুলো অপসারণ ও আলাদা আউটলেট দেখানো হয়েছে, যা মডেল নির্বাচন ও দাম তুলনায় সহায়ক।',
      slug: 'sesame-screening-machine-demo-202607',
      uploadDate: '2026-07-12',
      duration: 'PT77S'
    }
  ],
  '/zh/products/11kw-high-speed-pulverizer': [
    {
      name: '茶籽高速粉碎机实拍视频',
      description: '展示茶籽专用高速粉碎机运行效果，适合茶籽、核桃、杏仁、亚麻籽等冷榨生产线前处理设备采购参考。',
      slug: 'tea-seed-high-speed-pulverizer-demo-20260607',
      uploadDate: '2026-06-07',
      duration: 'PT12S'
    }
  ],
  '/zh/products/pneumatic-filter-press': [
    {
      name: '不锈钢千层滤油机成品视频',
      description: '展示不锈钢千层精滤滤油机成品，适合液压榨油后的毛油澄清过滤、瓶装前过滤和油坊后处理设备采购参考。',
      slug: 'stainless-steel-oil-filter-press-demo-20260605',
      uploadDate: '2026-06-05',
      duration: 'PT9S'
    }
  ]
}

const buildPageVideoSchemas = ({ route, canonical, langCode }) => {
  const videos = PAGE_VIDEO_SCHEMA[route] || []

  return videos.map((video, index) => ({
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    '@id': `${canonical}#video-${index + 1}`,
    name: video.name,
    description: video.description,
    thumbnailUrl: [`${SITE_URL}/videos/oil-press/${video.slug}.jpg`],
    uploadDate: video.uploadDate,
    duration: video.duration,
    contentUrl: `${SITE_URL}/videos/oil-press/${video.slug}.mp4`,
    embedUrl: canonical,
    url: canonical,
    inLanguage: langCode,
    publisher: {
      '@id': ORGANIZATION_ID
    },
    isPartOf: {
      '@id': `${canonical}#webpage`
    }
  }))
}

const buildBreadcrumbSchema = ({ route, canonical, lang, segments, pageName }) => {
  const itemListElement = []

  if (route === '/') {
    itemListElement.push({
      '@type': 'ListItem',
      position: 1,
      name: HOME_LABELS.en,
      item: `${SITE_URL}/`
    })
  } else {
    const homeUrl = `${SITE_URL}${buildLocalizedPath(lang, '/')}`
    itemListElement.push({
      '@type': 'ListItem',
      position: 1,
      name: HOME_LABELS[lang] || HOME_LABELS.en,
      item: homeUrl
    })

    let accumulated = lang === 'en' ? '/en' : `/${lang}`
    segments.forEach((segment, index) => {
      accumulated += `/${segment}`
      const isFillingParent = segments[0] === 'products' && index === 1 && segment === 'filling'
      const itemPath = isFillingParent
        ? `${lang === 'en' ? '/en' : `/${lang}`}/products/filling-equipment`
        : accumulated
      itemListElement.push({
        '@type': 'ListItem',
        position: index + 2,
        name: index === segments.length - 1 && pageName
          ? pageName
          : getRouteLabel(lang, isFillingParent ? 'filling-equipment' : segment),
        item: `${SITE_URL}${itemPath}`
      })
    })
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${canonical}#breadcrumb`,
    itemListElement
  }
}

const buildBasePageSchema = ({ canonical, pageName, description, langCode, pageType, collectionItems = [], mainEntityId = '', image = DEFAULT_IMAGE, includeBreadcrumb = true }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': pageType,
    '@id': `${canonical}#webpage`,
    url: canonical,
    name: pageName,
    inLanguage: langCode,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORGANIZATION_ID },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: absoluteAssetUrl(image)
    }
  }

  if (includeBreadcrumb) schema.breadcrumb = { '@id': `${canonical}#breadcrumb` }

  if (description) schema.description = description

  if (pageType === 'CollectionPage' && collectionItems.length) {
    schema.numberOfItems = collectionItems.length
    schema.mainEntity = {
      '@type': 'ItemList',
      itemListOrder: 'https://schema.org/ItemListOrderAscending',
      numberOfItems: collectionItems.length,
      itemListElement: collectionItems.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        url: item.url
      }))
    }
  } else if (mainEntityId) {
    schema.mainEntity = { '@id': mainEntityId }
  }

  return schema
}

const absoluteAssetUrl = (value = '') => {
  const raw = String(value || '').trim()
  if (!raw) return DEFAULT_IMAGE
  if (/^https?:\/\//i.test(raw)) return raw.split('?')[0]
  const path = raw.startsWith('/') ? raw : `/${raw}`
  return `${SITE_URL}${path.split('?')[0]}`
}

const buildServiceSchema = ({ canonical, pageName, description, langCode, lang }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${canonical}#service`,
    name: pageName,
    url: canonical,
    inLanguage: langCode,
    mainEntityOfPage: {
      '@id': `${canonical}#webpage`
    },
    serviceType: pageName,
    provider: {
      '@id': ORGANIZATION_ID
    }
  }

  if (description) schema.description = description
  if (lang === 'zh') schema.provider.name = getCompanyName(lang)

  return schema
}

const buildArticleSchema = ({ canonical, pageName, description, langCode, date, image = DEFAULT_IMAGE }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${canonical}#article`,
    headline: pageName,
    inLanguage: langCode,
    url: canonical,
    mainEntityOfPage: {
      '@id': `${canonical}#webpage`
    },
    image: [absoluteAssetUrl(image)],
    author: {
      '@id': ORGANIZATION_ID
    },
    publisher: {
      '@id': ORGANIZATION_ID
    }
  }

  if (description) schema.description = description
  if (date) {
    schema.datePublished = date
    schema.dateModified = date
  }

  return schema
}

const buildFaqSchema = (entries = []) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: entries.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: answer
    }
  }))
})

const HOME_FAQ_ENTRIES = {
  zh: [
    {
      question: '设备支持哪些油料原料？',
      answer: '可覆盖大豆、花生、芝麻、油菜籽、向日葵籽、亚麻籽、茶籽、核桃等多种油料。'
    },
    {
      question: '300/325/355/400/426/480/500 系列如何选型？',
      answer: '建议按日产能、原料特性、自动化需求综合评估，我们可根据项目需求提供定制化选型建议。'
    },
    {
      question: '除主机外是否提供整线配套？',
      answer: '提供。我们可提供预处理、后处理、过滤、灌装等配套设备与整线方案。'
    }
  ],
  en: [
    {
      question: 'What oilseeds can your hydraulic presses process?',
      answer: 'Our equipment supports soybean, peanut, sesame, rapeseed, sunflower, flaxseed, tea seed, walnut, and many other oil-bearing materials.'
    },
    {
      question: 'How do I choose between 300/325/355/400/426/480/500 series?',
      answer: 'Selection depends on daily capacity, raw material characteristics, and automation needs. We provide model recommendation based on your project requirements.'
    },
    {
      question: 'Do you provide full line support beyond the main press?',
      answer: 'Yes. We provide pre-treatment, post-treatment, filtering, and filling-line supporting equipment for one-stop oil processing solutions.'
    }
  ],
  fr: [
    {
      question: 'Quelles matières oléagineuses vos presses hydrauliques peuvent-elles traiter ?',
      answer: 'Nos équipements conviennent au soja, à l’arachide, au sésame, au colza, au tournesol, au lin, au théier, à la noix et à d’autres matières riches en huile.'
    },
    {
      question: 'Comment choisir entre les séries 300/325/355/400/426/480/500 ?',
      answer: 'Le choix dépend de la capacité journalière, des caractéristiques de la matière première et du niveau d’automatisation. Nous proposons une recommandation adaptée à chaque projet.'
    },
    {
      question: 'Fournissez-vous une ligne complète en plus de la presse principale ?',
      answer: 'Oui. Nous pouvons fournir les équipements de prétraitement, de post-traitement, de filtration, de remplissage et les solutions de ligne complète.'
    }
  ],
  ru: [
    {
      question: 'Какие масличные культуры могут перерабатывать ваши гидравлические прессы?',
      answer: 'Оборудование подходит для сои, арахиса, кунжута, рапса, подсолнечника, льна, чайного семени, грецкого ореха и других маслосодержащих материалов.'
    },
    {
      question: 'Как выбрать между сериями 300/325/355/400/426/480/500?',
      answer: 'Выбор зависит от суточной производительности, особенностей сырья и уровня автоматизации. Мы подбираем модель под конкретный проект.'
    },
    {
      question: 'Поставляете ли вы полную линию, а не только основной пресс?',
      answer: 'Да. Мы поставляем оборудование для предварительной подготовки, последующей обработки, фильтрации, розлива и комплексные решения под ключ.'
    }
  ],
  vi: [
    {
      question: 'Máy ép dầu thủy lực của bạn có thể xử lý những nguyên liệu dầu nào?',
      answer: 'Thiết bị phù hợp với đậu nành, lạc, mè, hạt cải dầu, hạt hướng dương, hạt lanh, trà, óc chó và nhiều nguyên liệu chứa dầu khác.'
    },
    {
      question: 'Chọn dòng 300/325/355/400/426/480/500 như thế nào?',
      answer: 'Việc chọn model phụ thuộc vào công suất mỗi ngày, đặc tính nguyên liệu và mức độ tự động hóa. Chúng tôi sẽ đề xuất model phù hợp theo dự án thực tế.'
    },
    {
      question: 'Ngoài máy ép chính, bạn có cung cấp giải pháp dây chuyền hoàn chỉnh không?',
      answer: 'Có. Chúng tôi cung cấp thiết bị tiền xử lý, hậu xử lý, lọc dầu, chiết rót và giải pháp dây chuyền đồng bộ trọn gói.'
    }
  ],
  bn: [
    {
      question: 'আপনাদের হাইড্রোলিক অয়েল প্রেস কোন কোন তেলবীজ প্রক্রিয়া করতে পারে?',
      answer: 'আমাদের যন্ত্রপাতি সয়াবিন, চিনাবাদাম, তিল, রেপসিড, সূর্যমুখী বীজ, ফ্ল্যাক্সসিড, চা বীজ, আখরোটসহ বহু তেলসমৃদ্ধ কাঁচামাল প্রক্রিয়া করতে পারে।'
    },
    {
      question: '300/325/355/400/426/480/500 সিরিজের মধ্যে কীভাবে নির্বাচন করব?',
      answer: 'নির্বাচন নির্ভর করে দৈনিক উৎপাদন ক্ষমতা, কাঁচামালের বৈশিষ্ট্য এবং অটোমেশন চাহিদার উপর। আমরা প্রকল্পভিত্তিক উপযুক্ত মডেল সুপারিশ করি।'
    },
    {
      question: 'মূল প্রেসের বাইরে কি সম্পূর্ণ লাইন সাপোর্টও দেন?',
      answer: 'হ্যাঁ। আমরা প্রি-ট্রিটমেন্ট, পোস্ট-ট্রিটমেন্ট, ফিল্ট্রেশন, ফিলিং এবং সম্পূর্ণ তেল প্রক্রিয়াকরণ লাইনের সমাধান দিই।'
    }
  ]
}

const buildHomeFaqSchema = (lang) => {
  const entries = HOME_FAQ_ENTRIES[lang]
  return entries ? buildFaqSchema(entries) : null
}

const SERIES_FAQ_BUILDERS = {
  zh: (model) => [
    {
      question: `${model}系列适合哪些用户？`,
      answer: `${model}系列适合中小型油厂、家庭作坊及初创油料加工项目。`
    },
    {
      question: '是否支持多种油料压榨？',
      answer: '支持大豆、花生、芝麻、油菜籽等多种常见油料，并可按工艺进行冷榨或热榨配置。'
    },
    {
      question: '是否提供安装与售后服务？',
      answer: '提供安装调试、操作培训、备件支持和长期技术服务。'
    }
  ],
  en: (model) => [
    {
      question: `Who is the ${model} series suitable for?`,
      answer: `The ${model} series is suitable for small to medium oil mills, family workshops, and startup oil processing projects.`
    },
    {
      question: 'Can it process multiple oilseed materials?',
      answer: 'Yes. It supports soybean, peanut, sesame, rapeseed and other common oil-bearing materials with hot or cold pressing process options.'
    },
    {
      question: 'Do you provide installation and after-sales support?',
      answer: 'Yes. We provide installation, training, spare parts support, and long-term technical service.'
    }
  ],
  fr: (model) => [
    {
      question: `À quels utilisateurs la série ${model} convient-elle ?`,
      answer: `La série ${model} convient aux petites et moyennes huileries, aux ateliers familiaux et aux projets de transformation en démarrage.`
    },
    {
      question: 'Peut-elle traiter plusieurs matières oléagineuses ?',
      answer: 'Oui. Elle convient au soja, à l’arachide, au sésame, au colza et à d’autres matières courantes, avec configuration possible pour pressage à chaud ou à froid.'
    },
    {
      question: 'Proposez-vous l’installation et le service après-vente ?',
      answer: 'Oui. Nous assurons l’installation, la formation, les pièces de rechange et l’assistance technique à long terme.'
    }
  ],
  ru: (model) => [
    {
      question: `Для кого подходит серия ${model}?`,
      answer: `Серия ${model} подходит для малых и средних маслозаводов, семейных мастерских и новых проектов по переработке масла.`
    },
    {
      question: 'Подходит ли она для разных видов масличного сырья?',
      answer: 'Да. Оборудование работает с соей, арахисом, кунжутом, рапсом и другими распространёнными культурами, с возможностью горячего или холодного прессования.'
    },
    {
      question: 'Предоставляете ли вы монтаж и послепродажную поддержку?',
      answer: 'Да. Мы обеспечиваем монтаж, обучение, поставку запчастей и долгосрочную техническую поддержку.'
    }
  ],
  vi: (model) => [
    {
      question: `Dòng ${model} phù hợp với đối tượng nào?`,
      answer: `Dòng ${model} phù hợp cho các xưởng dầu vừa và nhỏ, hộ gia đình và các dự án chế biến dầu mới khởi động.`
    },
    {
      question: 'Máy có thể ép nhiều loại nguyên liệu dầu không?',
      answer: 'Có. Máy hỗ trợ đậu nành, lạc, mè, cải dầu và nhiều nguyên liệu phổ biến khác, đồng thời có thể cấu hình ép nóng hoặc ép lạnh.'
    },
    {
      question: 'Bạn có cung cấp lắp đặt và dịch vụ sau bán hàng không?',
      answer: 'Có. Chúng tôi cung cấp lắp đặt, đào tạo vận hành, phụ tùng và hỗ trợ kỹ thuật lâu dài.'
    }
  ],
  bn: (model) => [
    {
      question: `${model} সিরিজ কোন ধরনের ব্যবহারকারীর জন্য উপযোগী?`,
      answer: `${model} সিরিজ ছোট ও মাঝারি তেল মিল, পারিবারিক ওয়ার্কশপ এবং নতুন তেল প্রক্রিয়াকরণ প্রকল্পের জন্য উপযুক্ত।`
    },
    {
      question: 'এটি কি একাধিক ধরনের তেলবীজ প্রক্রিয়া করতে পারে?',
      answer: 'হ্যাঁ। এটি সয়াবিন, চিনাবাদাম, তিল, রেপসিডসহ বিভিন্ন সাধারণ তেলসমৃদ্ধ কাঁচামাল গরম বা ঠান্ডা প্রেস কনফিগারেশনে প্রক্রিয়া করতে পারে।'
    },
    {
      question: 'আপনারা কি ইনস্টলেশন ও বিক্রয়োত্তর সেবা দেন?',
      answer: 'হ্যাঁ। আমরা ইনস্টলেশন, অপারেশন প্রশিক্ষণ, স্পেয়ার পার্টস সহায়তা এবং দীর্ঘমেয়াদি প্রযুক্তিগত সেবা দিই।'
    }
  ]
}

const buildSeriesFaqSchema = (lang, model) => {
  const builder = SERIES_FAQ_BUILDERS[lang]
  return builder ? buildFaqSchema(builder(model)) : null
}

const OIL_SOLUTION_FAQ_BUILDERS = {
  zh: (solutionName) => [
    {
      question: `${solutionName}项目适合用液压榨油机吗？`,
      answer: `适合。${solutionName}类项目可结合清理、破碎、蒸炒、压榨、过滤等环节进行整体工艺配置。`
    },
    {
      question: '这类项目通常需要哪些配套设备？',
      answer: '常见配套包括预处理设备、输送设备、过滤设备、精炼设备及灌装包装设备，可按产能和厂房条件组合。'
    },
    {
      question: '能否按日产量做整线定制？',
      answer: '可以。我们可根据原料特性、日产量、油品定位和车间布局提供单机或整线方案。'
    }
  ],
  en: (solutionName) => [
    {
      question: `Is ${solutionName} suitable for a hydraulic oil pressing line?`,
      answer: `${solutionName} projects can be configured with cleaning, crushing, roasting, pressing, filtering, and downstream packaging according to process requirements.`
    },
    {
      question: 'What supporting equipment is usually needed for this type of project?',
      answer: 'Typical supporting equipment includes pre-treatment units, conveying devices, filtration systems, refining equipment, and filling or packaging machines.'
    },
    {
      question: 'Can you customize the line according to daily capacity?',
      answer: 'Yes. We can configure either a single machine or a complete line based on raw material characteristics, daily output, oil positioning, and workshop layout.'
    }
  ],
  fr: (solutionName) => [
    {
      question: `${solutionName} convient-il à une ligne de pressage hydraulique ?`,
      answer: `Les projets ${solutionName} peuvent être configurés avec les étapes de nettoyage, broyage, cuisson, pressage, filtration et conditionnement selon le procédé requis.`
    },
    {
      question: 'Quels équipements complémentaires sont généralement nécessaires ?',
      answer: 'Les équipements courants comprennent les unités de prétraitement, le convoyage, la filtration, le raffinage et les machines de remplissage ou de conditionnement.'
    },
    {
      question: 'Pouvez-vous personnaliser la ligne selon la capacité journalière ?',
      answer: 'Oui. Nous proposons une configuration sur mesure, de la machine seule à la ligne complète, selon le matériau, la capacité, le positionnement du produit et l’atelier.'
    }
  ],
  ru: (solutionName) => [
    {
      question: `Подходит ли ${solutionName} для гидравлической линии отжима масла?`,
      answer: `Проекты по ${solutionName} можно комплектовать участками очистки, дробления, жарки, прессования, фильтрации и последующей упаковки в зависимости от технологии.`
    },
    {
      question: 'Какое вспомогательное оборудование обычно требуется для такого проекта?',
      answer: 'Обычно используются узлы предварительной подготовки, транспортировки, фильтрации, рафинации, а также оборудование для розлива и упаковки.'
    },
    {
      question: 'Можно ли настроить линию под суточную производительность?',
      answer: 'Да. Мы подбираем как отдельную машину, так и полную линию, исходя из сырья, суточного объёма, позиционирования продукта и планировки цеха.'
    }
  ],
  vi: (solutionName) => [
    {
      question: `${solutionName} có phù hợp với dây chuyền ép dầu thủy lực không?`,
      answer: `Các dự án ${solutionName} có thể được cấu hình với các công đoạn làm sạch, nghiền, rang, ép, lọc và đóng gói theo yêu cầu công nghệ.`
    },
    {
      question: 'Loại dự án này thường cần những thiết bị phụ trợ nào?',
      answer: 'Thiết bị thường dùng gồm hệ thống tiền xử lý, băng tải, lọc dầu, tinh luyện và máy chiết rót hoặc đóng gói.'
    },
    {
      question: 'Bạn có thể tùy chỉnh dây chuyền theo công suất mỗi ngày không?',
      answer: 'Có. Chúng tôi có thể cấu hình từ máy đơn đến dây chuyền hoàn chỉnh dựa trên nguyên liệu, sản lượng ngày, định vị sản phẩm dầu và mặt bằng nhà xưởng.'
    }
  ],
  bn: (solutionName) => [
    {
      question: `${solutionName} কি হাইড্রোলিক তেল নিষ্কাশন লাইনের জন্য উপযুক্ত?`,
      answer: `${solutionName} প্রকল্পে প্রয়োজন অনুযায়ী পরিষ্কারকরণ, ভাঙা, ভাজা, প্রেসিং, ফিল্টারিং এবং পরবর্তী প্যাকেজিং ধাপ একসাথে কনফিগার করা যায়।`
    },
    {
      question: 'এই ধরনের প্রকল্পে সাধারণত কোন সহায়ক যন্ত্রপাতি লাগে?',
      answer: 'সাধারণত প্রি-ট্রিটমেন্ট ইউনিট, কনভেয়িং ডিভাইস, ফিল্ট্রেশন সিস্টেম, রিফাইনিং সরঞ্জাম এবং ফিলিং বা প্যাকেজিং মেশিন লাগে।'
    },
    {
      question: 'দৈনিক উৎপাদন ক্ষমতা অনুযায়ী কি লাইন কাস্টমাইজ করা যায়?',
      answer: 'হ্যাঁ। কাঁচামাল, দৈনিক উৎপাদন, তেলের পজিশনিং এবং কারখানার বিন্যাস অনুযায়ী আমরা একক মেশিন থেকে সম্পূর্ণ লাইন পর্যন্ত কাস্টমাইজ করতে পারি।'
    }
  ]
}

const buildOilSolutionFaqSchema = (lang, solutionName) => {
  const builder = OIL_SOLUTION_FAQ_BUILDERS[lang]
  return builder ? buildFaqSchema(builder(solutionName)) : null
}

const PRIMARY_NAV_COPY = {
  en: {
    home: 'Home', products: 'Machines & Pricing', models: 'Hydraulic Press Models', overview: 'All Machines & Prices',
    hot300: '300 Hot-Press Series', hot325: '325 Hot-Press Series', cold355: '355 Cold-Press Series', cold400: '400 Cold-Press Series',
    cold426: '426 Cold-Press Series', cold480: '480 Cold-Press Series', cold500: '500 Cold-Press Series', systems: 'Supporting Systems',
    small: 'Small Shop Oil Presses', smallScrew: 'Small Screw Oil Presses', supporting: 'Pretreatment & Supporting Equipment', filling: 'Filling & Packaging Equipment',
    solutions: 'Processing Solutions', process: 'Oil Processing Routes', solutionsOverview: 'Solutions Overview', lines: 'Complete Production Lines',
    seed: 'Seed Oil Processes', nuts: 'Nut Oil Processes', fruits: 'Fruit Oil Processes', fillingLines: 'Filling Package Solutions',
    guides: 'Buyer Guides', guideOverview: 'Guide Center', technology: 'Technical & Buying Guides', industry: 'Industry Insights', companyNews: 'Company News',
    about: 'Company', quote: 'Get a Quote'
  },
  zh: {
    home: '首页', products: '设备与价格', models: '液压榨油机型号', overview: '全部设备与价格',
    hot300: '300 热榨系列', hot325: '325 热榨系列', cold355: '355 冷榨系列', cold400: '400 冷榨系列',
    cold426: '426 冷榨系列', cold480: '480 冷榨系列', cold500: '500 冷榨系列', systems: '配套系统',
    small: '门店小型榨油机', smallScrew: '小型螺旋榨油机', supporting: '预处理与配套设备', filling: '灌装与包装设备',
    solutions: '加工解决方案', process: '油料加工路线', solutionsOverview: '解决方案概览', lines: '完整生产线',
    seed: '籽类油料工艺', nuts: '坚果油工艺', fruits: '果实油工艺', fillingLines: '灌装配套方案',
    guides: '采购指南', guideOverview: '指南中心', technology: '技术与采购指南', industry: '行业资讯', companyNews: '公司动态',
    about: '公司介绍', quote: '获取报价'
  },
  ru: {
    home: 'Главная', products: 'Оборудование и цены', models: 'Модели гидравлических прессов', overview: 'Все машины и цены',
    hot300: 'Серия 300, горячий отжим', hot325: 'Серия 325, горячий отжим', cold355: 'Серия 355, холодный отжим', cold400: 'Серия 400, холодный отжим',
    cold426: 'Серия 426, холодный отжим', cold480: 'Серия 480, холодный отжим', cold500: 'Серия 500, холодный отжим', systems: 'Вспомогательные системы',
    small: 'Малые прессы для магазина', smallScrew: 'Малые шнековые прессы', supporting: 'Подготовка и вспомогательное оборудование', filling: 'Розлив и упаковка',
    solutions: 'Технологические решения', process: 'Технологии переработки', solutionsOverview: 'Обзор решений', lines: 'Комплектные производственные линии',
    seed: 'Переработка семян', nuts: 'Переработка орехов', fruits: 'Переработка плодового сырья', fillingLines: 'Решения для розлива',
    guides: 'Руководства покупателя', guideOverview: 'Центр руководств', technology: 'Технические руководства', industry: 'Отраслевые материалы', companyNews: 'Новости компании',
    about: 'О компании', quote: 'Запросить КП'
  },
  fr: {
    home: 'Accueil', products: 'Machines et prix', models: 'Modèles de presses hydrauliques', overview: 'Toutes les machines et prix',
    hot300: 'Série 300, pressage à chaud', hot325: 'Série 325, pressage à chaud', cold355: 'Série 355, pressage à froid', cold400: 'Série 400, pressage à froid',
    cold426: 'Série 426, pressage à froid', cold480: 'Série 480, pressage à froid', cold500: 'Série 500, pressage à froid', systems: 'Systèmes complémentaires',
    small: 'Petites presses pour boutique', smallScrew: 'Petites presses à vis', supporting: 'Prétraitement et équipements complémentaires', filling: 'Remplissage et emballage',
    solutions: 'Solutions de procédé', process: 'Procédés de production', solutionsOverview: 'Aperçu des solutions', lines: 'Lignes de production complètes',
    seed: 'Procédés pour graines', nuts: 'Procédés pour noix', fruits: 'Procédés pour fruits', fillingLines: 'Solutions de remplissage',
    guides: "Guides d'achat", guideOverview: 'Centre de guides', technology: 'Guides techniques', industry: 'Analyses du secteur', companyNews: "Actualités de l'entreprise",
    about: "L'entreprise", quote: 'Demander un devis'
  },
  vi: {
    home: 'Trang chủ', products: 'Máy và giá', models: 'Model máy ép thủy lực', overview: 'Tất cả máy và giá',
    hot300: 'Dòng 300 ép nóng', hot325: 'Dòng 325 ép nóng', cold355: 'Dòng 355 ép lạnh', cold400: 'Dòng 400 ép lạnh',
    cold426: 'Dòng 426 ép lạnh', cold480: 'Dòng 480 ép lạnh', cold500: 'Dòng 500 ép lạnh', systems: 'Hệ thống phụ trợ',
    small: 'Máy ép nhỏ cho cửa hàng', smallScrew: 'Máy ép trục vít nhỏ', supporting: 'Tiền xử lý và thiết bị phụ trợ', filling: 'Chiết rót và đóng gói',
    solutions: 'Giải pháp chế biến', process: 'Tuyến công nghệ dầu', solutionsOverview: 'Tổng quan giải pháp', lines: 'Dây chuyền sản xuất hoàn chỉnh',
    seed: 'Quy trình dầu hạt', nuts: 'Quy trình dầu hạt cứng', fruits: 'Quy trình dầu từ quả', fillingLines: 'Giải pháp chiết rót',
    guides: 'Hướng dẫn mua hàng', guideOverview: 'Trung tâm hướng dẫn', technology: 'Hướng dẫn kỹ thuật', industry: 'Thông tin ngành', companyNews: 'Tin công ty',
    about: 'Công ty', quote: 'Nhận báo giá'
  },
  bn: {
    home: 'হোম', products: 'মেশিন ও দাম', models: 'হাইড্রোলিক প্রেস মডেল', overview: 'সব মেশিন ও দাম',
    hot300: '৩০০ হট-প্রেস সিরিজ', hot325: '৩২৫ হট-প্রেস সিরিজ', cold355: '৩৫৫ কোল্ড-প্রেস সিরিজ', cold400: '৪০০ কোল্ড-প্রেস সিরিজ',
    cold426: '৪২৬ কোল্ড-প্রেস সিরিজ', cold480: '৪৮০ কোল্ড-প্রেস সিরিজ', cold500: '৫০০ কোল্ড-প্রেস সিরিজ', systems: 'সহায়ক সিস্টেম',
    small: 'দোকানের ছোট অয়েল প্রেস', smallScrew: 'ছোট স্ক্রু অয়েল প্রেস', supporting: 'প্রি-ট্রিটমেন্ট ও সহায়ক যন্ত্রপাতি', filling: 'ফিলিং ও প্যাকেজিং',
    solutions: 'প্রক্রিয়াকরণ সমাধান', process: 'তেল উৎপাদন প্রক্রিয়া', solutionsOverview: 'সমাধান সারসংক্ষেপ', lines: 'সম্পূর্ণ উৎপাদন লাইন',
    seed: 'বীজ তেলের প্রক্রিয়া', nuts: 'বাদাম তেলের প্রক্রিয়া', fruits: 'ফলজাত তেলের প্রক্রিয়া', fillingLines: 'ফিলিং সমাধান',
    guides: 'ক্রয় নির্দেশিকা', guideOverview: 'গাইড কেন্দ্র', technology: 'প্রযুক্তিগত নির্দেশিকা', industry: 'শিল্প তথ্য', companyNews: 'কোম্পানি সংবাদ',
    about: 'কোম্পানি', quote: 'কোটেশন নিন'
  }
}

const fillingSidebarByLocale = {
  en: enFillingSeriesSidebarItems,
  zh: zhFillingSeriesSidebarItems,
  ru: ruFillingSeriesSidebarItems,
  fr: frFillingSeriesSidebarItems,
  vi: viFillingSeriesSidebarItems,
  bn: bnFillingSeriesSidebarItems
}

const buildFillingOverviewNavItems = (locale) =>
  (fillingSidebarByLocale[locale] || fillingSidebarByLocale.en)
    .map((group) => {
      const overview = group.items?.find((item) => item.link && !item.items)
      return overview ? { text: group.text, link: toCanonicalPath(overview.link) } : null
    })
    .filter(Boolean)

const sidebarTitle = (locale, path) => {
  const title = getDocTitleByPath(locale, path) || getCollectionFallbackName(locale, path)
  return title.split(/\s*[|｜]\s*/)[0].trim()
}

const sidebarLink = (locale, path) => {
  const route = toCanonicalPath(buildLocalizedPath(locale, path))
  const duplicateMatch = route.match(DUPLICATE_SOLUTION_DETAIL_RE)
  return duplicateMatch
    ? `/${duplicateMatch[1]}/products/filling/${duplicateMatch[3]}`
    : route
}

const sidebarItem = (locale, path, text = '') => {
  if (!routeExists(buildLocalizedPath(locale, path))) return null
  return { text: text || sidebarTitle(locale, path), link: sidebarLink(locale, path) }
}

const compactItems = (items) => items.filter(Boolean)

const directChildPaths = (locale, basePath) => {
  const baseRoute = toCanonicalPath(buildLocalizedPath(locale, basePath))
  const baseDepth = parseLocalizedRoute(baseRoute).segments.length
  return Array.from(DOC_TITLE_INDEX.keys())
    .filter((route) => route.startsWith(`${baseRoute}/`))
    .filter((route) => parseLocalizedRoute(route).segments.length === baseDepth + 1)
    .filter((route) => !isNoindexRoute(route))
    .sort((a, b) => (DOC_TITLE_INDEX.get(a) || '').localeCompare(DOC_TITLE_INDEX.get(b) || '', locale))
    .map((route) => route.replace(new RegExp(`^/${locale}`), '') || '/')
}

const sidebarGroup = (text, items, collapsed = true) => ({ text, collapsed, items: compactItems(items) })

const buildUnifiedSidebar = (locale) => {
  const t = PRIMARY_NAV_COPY[locale] || PRIMARY_NAV_COPY.en
  const prefix = `/${locale}`
  const modelPaths = ['300', '325', '355', '400', '426', '480', '500'].map((model) => `/products/${model}`)
  const smallPressPaths = [
    '/products/korean-type-small-hydraulic-oil-press-machine',
    '/products/small-sesame-oil-press-machine',
    '/products/khop-10kg-small-hydraulic-oil-press-machine',
    '/products/khop-15kg-small-hydraulic-oil-press-machine',
    '/products/khop-20kg-small-hydraulic-oil-press-machine'
  ]
  const smallScrewPressPaths = [
    '/products/small-screw-oil-press-machine',
    '/products/lyf-501s-small-screw-oil-press-machine',
    '/products/lyf-508t-small-screw-oil-press-machine',
    '/products/lyf-509-small-screw-oil-press-machine',
    '/products/lyf-503-small-screw-oil-press-machine',
    '/products/lyf-505-small-screw-oil-press-machine',
    '/products/lyf-508-small-screw-oil-press-machine',
    '/products/lyf-899-small-screw-oil-press-machine',
    '/products/lyf-t11-small-screw-oil-press-machine',
    '/products/lyf-t12-small-screw-oil-press-machine',
    '/products/lyf-t81-small-screw-oil-press-machine',
    '/products/lyf-t80-small-screw-oil-press-machine'
  ]
  const reservedProductPaths = new Set([
    ...modelPaths,
    ...smallPressPaths,
    ...smallScrewPressPaths,
    '/products/filling-equipment',
    '/products/filtration-equipment',
    '/products/refining-and-dewaxing-equipment'
  ])
  const supportingPaths = directChildPaths(locale, '/products').filter((path) => !reservedProductPaths.has(path))
  const fillingItems = canonicalizeFillingSidebarItems(fillingSidebarByLocale[locale] || fillingSidebarByLocale.en)

  const processCollections = [
    ['seed-oils', t.seed],
    ['nuts', t.nuts],
    ['fruits', t.fruits],
    ['special-oils', getRouteLabel(locale, 'special-oils')]
  ]
  const processPaths = new Set(['/solutions/production-lines'])
  const processGroups = processCollections.map(([key, label]) => {
    const paths = [`/solutions/${key}`, ...(COLLECTION_ROUTES.solutions[key] || [])]
    paths.forEach((path) => processPaths.add(normalizeSchemaRoute(path)))
    return sidebarGroup(label, paths.map((path) => sidebarItem(locale, path)))
  })
  const fillingCategoryPaths = DUPLICATE_SOLUTION_CATEGORY_PATTERN.split('|').map((category) => `/solutions/${category}`)
  fillingCategoryPaths.forEach((path) => processPaths.add(path))
  const elevatorBasePath = '/solutions/elevator-systems'
  const hasElevatorSection = routeExists(buildLocalizedPath(locale, elevatorBasePath))
  if (hasElevatorSection) processPaths.add(normalizeSchemaRoute(elevatorBasePath))
  const elevatorGroup = hasElevatorSection
    ? sidebarGroup(getRouteLabel(locale, 'elevator-systems'), [
        sidebarItem(locale, elevatorBasePath),
        ...directChildPaths(locale, elevatorBasePath).map((path) => sidebarItem(locale, path))
      ])
    : null
  const otherSolutionPaths = directChildPaths(locale, '/solutions')
    .filter((path) => !processPaths.has(normalizeSchemaRoute(path)))

  const newsGroup = (category, label) => sidebarGroup(label, [
    sidebarItem(locale, `/news/${category}`),
    ...directChildPaths(locale, `/news/${category}`).map((path) => sidebarItem(locale, path))
  ])

  return {
    [`${prefix}/products`]: [
      sidebarGroup(t.products, [
        sidebarItem(locale, '/products', t.overview),
        sidebarGroup(t.models, modelPaths.map((path) => sidebarItem(locale, path))),
        sidebarGroup(t.small, smallPressPaths.map((path) => sidebarItem(locale, path))),
        sidebarGroup(t.smallScrew, smallScrewPressPaths.map((path) => sidebarItem(locale, path))),
        sidebarGroup(t.supporting, [
          sidebarItem(locale, '/products/filtration-equipment'),
          sidebarItem(locale, '/products/refining-and-dewaxing-equipment'),
          ...supportingPaths.map((path) => sidebarItem(locale, path))
        ]),
        sidebarGroup(t.filling, [sidebarItem(locale, '/products/filling-equipment'), ...fillingItems])
      ], false)
    ],
    [`${prefix}/solutions`]: [
      sidebarGroup(t.solutions, [
        sidebarItem(locale, '/solutions', t.solutionsOverview),
        sidebarItem(locale, '/solutions/production-lines', t.lines),
        ...processGroups,
        ...otherSolutionPaths.map((path) => sidebarItem(locale, path)),
        ...(elevatorGroup ? [elevatorGroup] : []),
        sidebarGroup(t.fillingLines, fillingCategoryPaths.map((path) => sidebarItem(locale, path)))
      ], false)
    ],
    [`${prefix}/news`]: [
      sidebarGroup(t.guides, [
        sidebarItem(locale, '/news', t.guideOverview),
        newsGroup('technology', t.technology),
        newsGroup('industry', t.industry),
        newsGroup('company', t.companyNews)
      ], false)
    ],
    [`${prefix}/about`]: [
      sidebarGroup(t.about, [
        sidebarItem(locale, '/about', t.about),
        ...directChildPaths(locale, '/about').map((path) => sidebarItem(locale, path))
      ], false)
    ],
    [`${prefix}/advantages`]: [
      sidebarGroup(getRouteLabel(locale, 'advantages'), [
        sidebarItem(locale, '/advantages', getRouteLabel(locale, 'advantages')),
        ...directChildPaths(locale, '/advantages').map((path) => sidebarItem(locale, path))
      ], false)
    ],
    [`${prefix}/contact`]: [
      sidebarGroup(t.quote, [sidebarItem(locale, '/contact', t.quote)], false)
    ]
  }
}

const buildPrimaryNav = (locale) => {
  const t = PRIMARY_NAV_COPY[locale] || PRIMARY_NAV_COPY.en
  const prefix = `/${locale}`
  const fillingOverviewItems = buildFillingOverviewNavItems(locale)
  return [
    { text: t.home, link: prefix },
    {
      text: t.products,
      items: [
        { text: t.overview, link: `${prefix}/products` },
        {
          text: t.models,
          items: [
            { text: t.hot300, link: `${prefix}/products/300` },
            { text: t.hot325, link: `${prefix}/products/325` },
            { text: t.cold355, link: `${prefix}/products/355` },
            { text: t.cold400, link: `${prefix}/products/400` },
            { text: t.cold426, link: `${prefix}/products/426` },
            { text: t.cold480, link: `${prefix}/products/480` },
            { text: t.cold500, link: `${prefix}/products/500` }
          ]
        },
        {
          text: t.systems,
          items: [
            { text: t.small, link: `${prefix}/products/korean-type-small-hydraulic-oil-press-machine` },
            { text: t.supporting, link: `${prefix}/products/supporting` },
            { text: t.filling, link: `${prefix}/products/filling-equipment` }
          ]
        }
      ]
    },
    {
      text: t.solutions,
      items: [
        { text: t.solutionsOverview, link: `${prefix}/solutions` },
        {
          text: t.process,
          items: [
            { text: t.lines, link: `${prefix}/solutions/production-lines` },
            { text: t.seed, link: `${prefix}/solutions/seed-oils` },
            { text: t.nuts, link: `${prefix}/solutions/nuts` },
            { text: t.fruits, link: `${prefix}/solutions/fruits` },
            { text: t.fillingLines, link: `${prefix}/solutions/filling-packages` }
          ]
        },
        { text: getRouteLabel(locale, 'elevator-systems'), link: `${prefix}/solutions/elevator-systems` },
        {
          text: t.fillingLines,
          items: fillingOverviewItems
        }
      ]
    },
    {
      text: t.guides,
      items: [
        { text: t.guideOverview, link: `${prefix}/news` },
        { text: t.technology, link: `${prefix}/news/technology` },
        { text: t.industry, link: `${prefix}/news/industry` },
        { text: t.companyNews, link: `${prefix}/news/company` }
      ]
    },
    {
      text: t.about,
      items: [
        { text: t.about, link: `${prefix}/about` },
        { text: getRouteLabel(locale, 'advantages'), link: `${prefix}/advantages` }
      ]
    },
    { text: t.quote, link: `${prefix}/contact` }
  ]
}

export default {
  transformHead: ({ pageData }) => {
    const rawRoute = normalizeRoute(pageData.relativePath || 'index.md')
    const route = toCanonicalPath(rawRoute)
    const duplicateSolutionMatch = route.match(DUPLICATE_SOLUTION_DETAIL_RE)
    // Root `/` is a redirect shell — canonical should point at the English home
    const canonicalPath = route === '/'
      ? '/en'
      : duplicateSolutionMatch
        ? `/${duplicateSolutionMatch[1]}/products/filling/${duplicateSolutionMatch[3]}`
        : route
    const canonical = `${SITE_URL}${canonicalPath}`
    const { lang, segments } = parseLocalizedRoute(route === '/' ? '/en' : route)
    const langCode = LOCALE_CODES[lang] || lang
    const section = segments[0] || ''
    const slug = segments[segments.length - 1] || ''
    const pageTitle = cleanSchemaText(pageData.frontmatter?.title || pageData.title || '') || pageNameFallback(lang, slug, segments)
    const pageName = normalizeSchemaTitle(pageTitle) || pageNameFallback(lang, slug, segments)
    const pageDescription = cleanSchemaText(pageData.frontmatter?.description || pageData.description || '') || DEFAULT_DESCRIPTION
    const pageKeywords = cleanSchemaText(pageData.frontmatter?.keywords || '')
    const pageImage = absoluteAssetUrl(pageData.frontmatter?.image || DEFAULT_IMAGE)
    const shouldNoindex = isNoindexRoute(route)
      || pageData.frontmatter?.robots === 'noindex'
      || pageData.frontmatter?.noindex === true

    const allLangs = Object.keys(LOCALE_CODES)
    let routeSuffix = ''
    for (const locale of allLangs) {
      if (route === `/${locale}`) {
        routeSuffix = ''
        break
      }
      if (route.startsWith(`/${locale}/`)) {
        routeSuffix = route.slice(`/${locale}`.length)
        break
      }
    }

    const altHrefs = allLangs
      .map((locale) => {
        // Always no trailing slash to match canonical + vercel trailingSlash:false
        const localizedRoute = toCanonicalPath(routeSuffix ? `/${locale}${routeSuffix}` : `/${locale}`)
        return {
          locale,
          route: localizedRoute,
          hreflang: LOCALE_CODES[locale],
          href: `${SITE_URL}${localizedRoute}`
        }
      })
      .filter(({ route: altRoute }) => routeExists(altRoute))
    const xDefaultRoute = routeSuffix && routeExists(`/en${routeSuffix}`)
      ? toCanonicalPath(`/en${routeSuffix}`)
      : '/en'

    const isHome = segments.length === 0
    const isNewsArticle = section === 'news' && segments.length >= 3
    const isProductCollection = section === 'products' && (segments.length === 1 || (segments.length === 2 && PRODUCT_COLLECTION_SLUGS.has(segments[1])))
    const isProductInfoPage = section === 'products' && segments.length === 2 && PRODUCT_INFO_SLUGS.has(segments[1])
    const isProductDetail = section === 'products' && !isProductCollection && !isProductInfoPage
    const isOilSolutionDetail = section === 'solutions' && segments.length === 2 && OIL_SOLUTION_DETAIL_SLUGS.has(segments[1])
    const primaryPageType = getPrimaryPageType(section, segments)
    const collectionItems = getCollectionItemList(lang, section, segments)
    let mainEntityId = ''

    if (isOilSolutionDetail) mainEntityId = `${canonical}#service`
    if (isNewsArticle) mainEntityId = `${canonical}#article`

    const pageSchemas = [
      buildBasePageSchema({
        canonical,
        pageName,
        description: pageDescription,
        langCode,
        pageType: primaryPageType,
        collectionItems,
        mainEntityId,
        image: pageImage,
        includeBreadcrumb: !isHome && !shouldNoindex
      })
    ]

    if (isHome && route !== '/') {
      const homeFaq = buildHomeFaqSchema(lang)
      if (homeFaq) {
        homeFaq.inLanguage = langCode
        pageSchemas.push(homeFaq)
      }
    }

    if (isProductDetail && /^\d+$/.test(segments[1])) {
      const seriesFaq = buildSeriesFaqSchema(lang, segments[1])
      if (seriesFaq) {
        seriesFaq.inLanguage = langCode
        pageSchemas.push(seriesFaq)
      }
    }

    if (isOilSolutionDetail) {
      pageSchemas.push(buildServiceSchema({
        canonical,
        pageName,
        description: pageDescription,
        langCode,
        lang
      }))

      const solutionFaq = buildOilSolutionFaqSchema(lang, pageName || getRouteLabel(lang, slug))
      if (solutionFaq) {
        solutionFaq.inLanguage = langCode
        pageSchemas.push(solutionFaq)
      }
    }

    if (isNewsArticle) {
      pageSchemas.push(buildArticleSchema({
        canonical,
        pageName,
        description: pageDescription,
        langCode,
        date: pageData.frontmatter?.date || '',
        image: pageImage
      }))
    }

    pageSchemas.push(...buildPageVideoSchemas({ route, canonical, langCode }))

    const breadcrumbSchema = !isHome && !shouldNoindex
      ? buildBreadcrumbSchema({ route, canonical, lang, segments, pageName })
      : null
    const renderedPageSchemas = shouldNoindex ? [] : pageSchemas

    const headTags = [
      // Page-level meta must be injected here: global head description was overwriting SEO
      ['meta', { name: 'description', content: pageDescription }],
      ...(pageKeywords ? [['meta', { name: 'keywords', content: pageKeywords }]] : []),
      ['meta', {
        name: 'robots',
        content: shouldNoindex
          ? 'noindex, nofollow'
          : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
      }],
      // Preload LCP image on locale home pages
      ...((isHome && route !== '/' && pageImage)
        ? [[
          'link',
          {
            rel: 'preload',
            as: 'image',
            href: pageImage,
            ...(pageImage.endsWith('.webp') ? { type: 'image/webp' } : {})
          }
        ]]
        : []),
      ['link', { rel: 'canonical', href: canonical }],
      ['meta', { property: 'og:type', content: isNewsArticle ? 'article' : 'website' }],
      ['meta', { property: 'og:site_name', content: SITE_NAME }],
      ['meta', { property: 'og:url', content: canonical }],
      ['meta', { property: 'og:title', content: pageTitle }],
      ['meta', { property: 'og:description', content: pageDescription }],
      ['meta', { property: 'og:image', content: pageImage }],
      ['meta', { property: 'og:image:alt', content: pageName || SITE_NAME }],
      ['meta', { property: 'og:locale', content: OG_LOCALE[lang] || 'en_US' }],
      ...altHrefs
        .filter(({ locale }) => locale !== lang)
        .map(({ locale }) => ['meta', { property: 'og:locale:alternate', content: OG_LOCALE[locale] || locale }]),
      ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
      ['meta', { name: 'twitter:title', content: pageTitle }],
      ['meta', { name: 'twitter:description', content: pageDescription }],
      ['meta', { name: 'twitter:image', content: pageImage }],
      ...(!shouldNoindex ? altHrefs.map(({ hreflang, href }) => ['link', { rel: 'alternate', hreflang, href }]) : []),
      ...(!shouldNoindex ? [['link', { rel: 'alternate', hreflang: 'x-default', href: `${SITE_URL}${xDefaultRoute}` }]] : []),
      ...(breadcrumbSchema ? [['script', { type: 'application/ld+json' }, JSON.stringify(breadcrumbSchema)]] : []),
      ...renderedPageSchemas.map((schema) => ['script', { type: 'application/ld+json' }, JSON.stringify(schema)])
    ]

    return headTags
  },
  lastUpdated: true,
  sitemap: {
    hostname: 'https://hydraulicoilpressing.opchn.com',
    lastmodDateOnly: false,
    transformItems: (items) => {
      return items
        .filter((item) => {
          try {
            const pathname = new URL(item.url, SITE_URL).pathname.replace(/\/$/, '') || '/'
            if (pathname === '/') return false
            if (isNoindexRoute(pathname)) return false
            if (/%20|%2F|peanut1|translation-glossary/i.test(item.url)) return false
            return true
          } catch {
            return true
          }
        })
        .map((item) => {
          const normalizeSitemapUrl = (value) => {
            if (!value) return value
            const parsed = new URL(value, SITE_URL)
            if (parsed.pathname !== '/') parsed.pathname = parsed.pathname.replace(/\/$/, '')
            return parsed.toString()
          }

          // Normalize trailing slash off for consistency with canonical
          item.url = normalizeSitemapUrl(item.url)
          if (Array.isArray(item.links)) {
            const seenLinks = new Set()
            item.links = item.links
              .map((link) => {
                const key = Object.prototype.hasOwnProperty.call(link, 'url') ? 'url' : 'href'
                return { ...link, [key]: normalizeSitemapUrl(link[key]) }
              })
              .filter((link) => {
                const linkUrl = link.url || link.href
                if (!linkUrl) return false
                const pathname = new URL(linkUrl, SITE_URL).pathname.replace(/\/$/, '') || '/'
                if (pathname === '/' || isNoindexRoute(pathname)) return false
                const signature = `${link.lang || link.hreflang || ''}:${linkUrl}`
                if (seenLinks.has(signature)) return false
                seenLinks.add(signature)
                return true
              })
          }
          // Locale homepages get higher priority
          if (/\/(en|zh|fr|ru|vi|bn)$/.test(item.url || '')) {
            item.priority = 1.0
            item.changefreq = 'daily'
          } else if (/\/(products|solutions)(\/|$)/.test(item.url || '')) {
            item.priority = 0.9
            item.changefreq = 'weekly'
          } else if (/\/news\//.test(item.url || '')) {
            item.priority = 0.6
            item.changefreq = 'monthly'
          }
          return item
        })
    }
  },
  title: 'Shengshi Hecheng Oil Press',
  titleTemplate: ':title',
  description: 'Professional Hydraulic Oil Press Manufacturer and One-stop Oil Processing Solutions.',
  cleanUrls: true,
  metaChunk: true,
  markdown: {
    config: (md) => {
      // Core Web Vitals: async-decode every content image and lazy-load all
      // except the first image of each page (kept eager for LCP).
      const imageCounts = new WeakMap()
      const defaultImageRenderer = md.renderer.rules.image
        || ((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options))
      md.renderer.rules.image = (tokens, idx, options, env, self) => {
        const token = tokens[idx]
        token.attrSet('decoding', 'async')
        const isPageEnv = env && typeof env === 'object'
        const count = isPageEnv ? (imageCounts.get(env) || 0) + 1 : 2
        if (isPageEnv) imageCounts.set(env, count)
        if (count > 1) token.attrSet('loading', 'lazy')
        return defaultImageRenderer(tokens, idx, options, env, self)
      }
    }
  },
  base: '/',
  ignoreDeadLinks: true,
  vite: {
    build: {
      // Locale search indexes are lazy-loaded and currently peak below 1.8 MB.
      chunkSizeWarningLimit: 1900,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('vitepress')) return 'vitepress'
              if (id.includes('@vue')) return 'vue'
              if (id.includes('algolia') || id.includes('minisearch')) return 'search'
              return 'vendor'
            }
          }
        }
      }
    },
    optimizeDeps: {
      include: ['mark.js']
    },
    ssr: {
      noExternal: ['mark.js']
    }
  },
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    // description / keywords / og / twitter / robots are injected per-page in transformHead
    ['meta', { name: 'author', content: 'Shengshi Hecheng' }],
    ['meta', { name: 'theme-color', content: '#e74c3c' }],
    ['meta', { name: 'baidu-site-verification', content: 'codeva-wjCh7UrQj8' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/images/oil-press-300.svg' }],
    ['link', { rel: 'preconnect', href: 'https://www.googletagmanager.com' }],
    ['link', { rel: 'preconnect', href: 'https://embed.tawk.to' }],
    ['link', { rel: 'dns-prefetch', href: 'https://www.youtube.com' }],
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': ORGANIZATION_ID,
      name: 'Shandong Shengshi Hecheng Machinery Co., Ltd.',
      alternateName: ['山东盛世赫程机械有限公司', 'Shengshi Hecheng Oil Press'],
      url: `${SITE_URL}/`,
      logo: DEFAULT_IMAGE,
      image: DEFAULT_IMAGE,
      description: DEFAULT_DESCRIPTION,
      telephone: '+86-19906365856',
      email: 'gavin@oil-pressing-machine.com',
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+86-19906365856',
          email: 'gavin@oil-pressing-machine.com',
          contactType: 'sales',
          availableLanguage: Object.values(LOCALE_CODES)
        },
        {
          '@type': 'ContactPoint',
          email: 'roryshanshan@gmail.com',
          contactType: 'customer support',
          availableLanguage: Object.values(LOCALE_CODES)
        }
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'No. 5888, Yineng Street, Development Zone',
        addressLocality: 'Qingzhou',
        addressRegion: 'Shandong',
        postalCode: '262500',
        addressCountry: 'CN'
      },
      sameAs: [
        'https://www.linkedin.com/newsletters/hydraulic-oil-pressing-machine-7331966128702836736/'
      ]
    })],
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      description: DEFAULT_DESCRIPTION,
      publisher: {
        '@id': ORGANIZATION_ID
      },
      inLanguage: Object.values(LOCALE_CODES)
    })],
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=AW-17559313965' }],
    ['script', {}, `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-17559313965');
    `],
    ['script', {}, `
  // Reuse the existing gtag.js load for GA4.
  gtag('config', 'G-ZQC83SKWK2');
    `],
    ['script', {}, `document.addEventListener('click', function (e) {
        var dom = e.target.closest('button[type="submit"]');
        if (dom === null) return;
        var form = dom.closest('form');
        if (form.checkValidity() === false) return;
        
        gtag('event', 'conversion', {'send_to': 'AW-17559313965/ChGqCP2Il-gbEK2897RB'});
    });
    `],
    ['script', { type: 'text/javascript' }, `
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/68d33e5fa63efd192022fb2b/1j5sina6d';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
    `]
  ],

  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      title: 'Shengshi Hecheng Hydraulic Oil Press',
      description: 'Hydraulic oil press machines, production lines, factory quotes and after-sales support.',
      themeConfig: {
        nav: buildPrimaryNav('en'),
        sidebar: buildUnifiedSidebar('en'),
        legacySidebar: {
          '/en/products': [
            {
              text: 'Products',
              collapsed: false,
              items: [
                { text: 'Product Overview', link: '/en/products/' },
                {
                  text: '300 Series',
                  collapsed: true,
                  items: [
                    { text: 'Series Overview', link: '/en/products/300' }
                  ]
                },
                {
                  text: '325 Series',
                  collapsed: true,
                  items: [
                    { text: 'Series Overview', link: '/en/products/325' }
                  ]
                },
                {
                  text: '355 Series',
                  collapsed: true,
                  items: [
                    { text: 'Series Overview', link: '/en/products/355' }
                  ]
                },
                {
                  text: '400 Series',
                  collapsed: true,
                  items: [
                    { text: 'Series Overview', link: '/en/products/400' }
                  ]
                },
                {
                  text: '426 Series',
                  collapsed: true,
                  items: [
                    { text: 'Series Overview', link: '/en/products/426' }
                  ]
                },
                {
                  text: '480 Series',
                  collapsed: true,
                  items: [
                    { text: 'Series Overview', link: '/en/products/480' }
                  ]
                },
                {
                  text: '500 Series',
                  collapsed: true,
                  items: [
                    { text: 'Series Overview', link: '/en/products/500' }
                  ]
                },
                {
                  text: 'Korean Type Small Hydraulic Oil Press',
                  collapsed: false,
                  items: [
                    { text: 'Overview', link: '/en/products/korean-type-small-hydraulic-oil-press-machine' },
                    { text: 'Small Sesame Oil Press Machine', link: '/en/products/small-sesame-oil-press-machine' },
                    { text: 'KHOP-10KG', link: '/en/products/khop-10kg-small-hydraulic-oil-press-machine' },
                    { text: 'KHOP-15KG', link: '/en/products/khop-15kg-small-hydraulic-oil-press-machine' },
                    { text: 'KHOP-20KG', link: '/en/products/khop-20kg-small-hydraulic-oil-press-machine' }
                  ]
                },
                {
                  text: 'Oil Filtration Equipment',
                  collapsed: false,
                  items: [
                    { text: 'Overview', link: '/en/products/filtration-equipment' },
                    { text: 'Pneumatic Filter Press', link: '/en/products/pneumatic-filter-press' },
                    { text: 'Filtering Machine Series', link: '/en/solutions/filtering/' }
                  ]
                },
                {
                  text: 'Refining & Dewaxing Equipment',
                  collapsed: false,
                  items: [
                    { text: 'Overview', link: '/en/products/refining-and-dewaxing-equipment' },
                    { text: 'Edible Oil Refining Equipment', link: '/en/products/edible-oil-refining-equipment' }
                  ]
                },
                {
                  text: 'Filling & Packaging Equipment',
                  collapsed: false,
                  items: [
                    { text: 'Overview', link: '/en/products/filling-equipment' },
                    { text: 'Filling Packages Overview', link: '/en/solutions/filling-packages' },
                    ...canonicalizeFillingSidebarItems(enFillingSeriesSidebarItems),
                    {
                      text: 'Brewing Equipment Series',
                      collapsed: true,
                      items: [
                        { text: 'Series Page', link: '/en/solutions/brewing/' },
                        {
                          text: 'Low Vacuum Filling Machine',
                          collapsed: true,
                          items: buildLowVacuumModelItems('/en', 'Series Page')
                        }
                      ]
                    }
                  ]
                },
                {
                  text: 'Supporting Equipment',
                  collapsed: false,
                  items: [
                    { text: 'Equipment Overview', link: '/en/products/supporting' },
                    {
                      text: 'Pre-treatment Equipment',
                      collapsed: false,
                      items: [
                        { text: 'Overview', link: '/en/products/pre-treatment' },
                        { text: 'Sesame Screening Machine', link: '/en/products/sesame-screening-machine' },
                        { text: '11kw High Speed Pulverizer', link: '/en/products/11kw-high-speed-pulverizer' },
                        { text: '27kw Electric Steamer', link: '/en/products/27kw-electric-steamer' },
                        { text: 'Flaxseed and Rapeseed Grinding and Stirring Integrated Machine', link: '/en/products/Hemp-and-flaxseed-grinding-and-stirring-integrated-machine' },
                        { text: 'Automatic Drum Roaster', link: '/en/products/automatic-drum-roaster' },
                        { text: 'Cake Wrapping Machine', link: '/en/products/cake-wrapping-machine' },
                        { text: 'Feeding Crushing Frying Integrated Machine', link: '/en/products/feeding-crushing-frying-integrated-machine' },
                        { text: 'Heat Conducting Oil Flat Bottom Frying Pan', link: '/en/products/heat-conducting-oil-flat-bottom-frying-pan' },
                        { text: 'Pre-Press Machine', link: '/en/products/pre-press-machine' },
                        { text: 'Wood Fired Steamer', link: '/en/products/wood-fired-steamer' },
                        { text: 'Wood Fired Thermal Oil Flat Bottom Wok', link: '/en/products/wood-fired-thermal-oil-flat-bottom-wok' }
                      ]
                    },
                    {
                      text: 'Post-treatment Equipment',
                      collapsed: false,
                      items: [
                        { text: 'Overview', link: '/en/products/post-treatment' },
                        { text: 'Pneumatic Filter Press', link: '/en/products/pneumatic-filter-press' },
                        { text: 'Cake Pulverizer', link: '/en/products/cake-pulverizer' },
                        { text: 'Edible Oil Refining Equipment', link: '/en/products/edible-oil-refining-equipment' }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          '/en/solutions': [
            {
              text: 'Solutions',
              collapsed: false,
              items: [
                { text: 'Solutions Overview', link: '/en/solutions/' },
                { text: 'Production Lines Overview', link: '/en/solutions/production-lines' },
                {
                  text: 'By Oil Type',
                  collapsed: true,
                  items: [
                    {
                      text: '🌾 Grain and Seed Oils',
                      collapsed: true,
                      items: [
                        { text: 'Grain and Seed Oils Overview', link: '/en/solutions/seed-oils' },
                        { text: '🌱 Soybean Oil', link: '/en/solutions/soybean' },
                        { text: '🥜 Peanut Oil', link: '/en/solutions/peanut' },
                        { text: '🌰 Sesame Oil', link: '/en/solutions/sesame' },
                        { text: '🌿 Rapeseed Oil', link: '/en/solutions/rapeseed' },
                        { text: '🌻 Sunflower Oil', link: '/en/solutions/sunflower' },
                        { text: '🧵 Cottonseed Oil', link: '/en/solutions/cottonseed' },
                        { text: '🌾 Flaxseed Oil', link: '/en/solutions/flaxseed' },
                        { text: '🍵 Tea Seed Oil', link: '/en/solutions/tea-seed' },
                        { text: '🌱 Perilla Oil', link: '/en/solutions/perilla' }
                      ]
                    },
                    {
                      text: '🥜 Nut Oils',
                      collapsed: true,
                      items: [
                        { text: 'Nut Oils Overview', link: '/en/solutions/nuts' },
                        { text: '🥥 Coconut Oil', link: '/en/solutions/coconut' },
                        { text: '🌴 Palm Oil', link: '/en/solutions/palm' },
                        { text: '🥜 Walnut Oil', link: '/en/solutions/walnut' },
                        { text: '🌰 Almond Oil', link: '/en/solutions/almond' },
                        { text: '🌰 Hazelnut Oil', link: '/en/solutions/hazelnut' },
                        { text: '🥜 Cashew Oil', link: '/en/solutions/cashew' },
                        { text: '🥜 Pistachio Oil', link: '/en/solutions/pistachio' }
                      ]
                    },
                    {
                      text: '🥑 Fruit Oils',
                      collapsed: true,
                      items: [
                        { text: 'Fruit Oils Overview', link: '/en/solutions/fruits' },
                        { text: '🥑 Avocado Oil', link: '/en/solutions/avocado' },
                        { text: '🍇 Grape Seed Oil', link: '/en/solutions/grape-seed' },
                        { text: '🎃 Pumpkin Seed Oil', link: '/en/solutions/pumpkin-seed' },
                        { text: '🍉 Watermelon Seed Oil', link: '/en/solutions/watermelon-seed' },
                        { text: '🍑 Peach Kernel Oil', link: '/en/solutions/peach-kernel' },
                        { text: '🌰 Apricot Kernel Oil', link: '/en/solutions/apricot-kernel' }
                      ]
                    },
                    {
                      text: '⚙️ Other Special Oils',
                      collapsed: true,
                      items: [
                        { text: 'Special Oils Overview', link: '/en/solutions/special-oils' },
                        { text: '🍚 Rice Bran Oil', link: '/en/solutions/rice-bran' },
                        { text: '🌽 Corn Germ Oil', link: '/en/solutions/corn-germ' },
                        { text: '🌿 Castor Seed Oil', link: '/en/solutions/castor-seed' },
                        { text: '🌶️ Chili Seed Oil', link: '/en/solutions/chili-seed' },
                        { text: '🍇 Grape Seed Oil', link: '/en/solutions/grape-seed' },
                        { text: '🌾 Buckwheat Oil', link: '/en/solutions/buckwheat' }
                      ]
                    }
                  ]
                },
                {
                  text: 'Filling & Packaging Solutions',
                  collapsed: false,
                  items: canonicalizeFillingSidebarItems(enFillingSeriesSidebarItems)
                }
              ]
            }
          ],
          '/en/about': [
            {
              text: 'About Us',
              collapsed: false,
              items: [
                { text: 'Company Profile', link: '/en/about/' },
                { text: 'Corporate Culture', link: '/en/about/culture' },
                { text: 'Development History', link: '/en/about/history' },
                { text: 'Honors and Qualifications', link: '/en/about/honors' },
                { text: 'Team Introduction', link: '/en/about/team' }
              ]
            }
          ],
          '/en/advantages': [
            {
              text: 'Company Advantages',
              collapsed: false,
              items: [
                { text: 'Advantages Overview', link: '/en/advantages/' },
                { text: 'Technological Innovation', link: '/en/advantages/innovation' },
                { text: 'Quality Assurance', link: '/en/advantages/quality' },
                { text: 'Service and Support', link: '/en/advantages/service' },
                { text: 'Success Cases', link: '/en/advantages/cases' }
              ]
            }
          ],
          '/en/news': [
            {
              text: 'News',
              collapsed: false,
              items: [
                { text: 'News Center', link: '/en/news/' },
                { text: 'Company News', link: '/en/news/company' },
                { text: 'Industry News', link: '/en/news/industry' },
                {
                  text: 'Technical Knowledge',
                  collapsed: false,
                  items: [
                    { text: 'Best Oilseeds for Hydraulic Oil Press Machines', link: '/en/news/technology/best-oilseeds-for-hydraulic-oil-press-machines' },
                    { text: 'How to Start a Small Cold Pressed Oil Business', link: '/en/news/technology/how-to-start-small-cold-pressed-oil-business' },
                    { text: 'How to Choose a Hydraulic Oil Press Model', link: '/en/news/technology/how-to-choose-hydraulic-oil-press-model' },
                    { text: 'Hydraulic Oil Press ROI Guide', link: '/en/news/technology/hydraulic-oil-press-roi-guide' },
                    { text: 'Edible Oil Production Line Cost Guide', link: '/en/news/technology/edible-oil-production-line-cost-guide' },
                    { text: 'How Many Batches Can a Hydraulic Oil Press Run Per Day?', link: '/en/news/technology/how-many-batches-can-hydraulic-oil-press-run-per-day' },
                    { text: 'How to Choose Hot Press or Cold Press for Different Oilseeds', link: '/en/news/technology/how-to-choose-hot-press-or-cold-press-for-different-oilseeds' },
                    { text: 'How to Choose an Oil Filter for an Edible Oil Line', link: '/en/news/technology/how-to-choose-oil-filter-for-edible-oil-line' },
                    { text: 'Hydraulic Oil Press Troubleshooting Guide', link: '/en/news/technology/hydraulic-oil-press-troubleshooting-guide' },
                    { text: 'Hydraulic Oil Press Maintenance Checklist', link: '/en/news/technology/hydraulic-oil-press-maintenance-checklist' },
                    { text: 'Common Mistakes When Buying an Oil Press Machine', link: '/en/news/technology/common-mistakes-when-buying-oil-press-machine' },
                    { text: 'How to Filter and Package Edible Oil After Pressing', link: '/en/news/technology/how-to-filter-and-package-edible-oil-after-pressing' },
                    { text: 'Sesame Oil Production Line Guide', link: '/en/news/technology/sesame-oil-production-line-guide' },
                    { text: 'Walnut Oil Cold Press Guide', link: '/en/news/technology/walnut-oil-cold-press-guide' },
                    { text: 'Peanut Oil Processing Line Guide', link: '/en/news/technology/peanut-oil-processing-line-guide' },
                    { text: 'Tea Seed Oil Processing Guide', link: '/en/news/technology/tea-seed-oil-processing-guide' },
                    { text: 'Flaxseed Oil Cold Press Guide', link: '/en/news/technology/flaxseed-oil-cold-press-guide' },
                    { text: 'Rapeseed Oil Processing Guide', link: '/en/news/technology/rapeseed-oil-processing-guide' },
                    { text: 'Pumpkin Seed Oil Cold Press Guide', link: '/en/news/technology/pumpkin-seed-oil-cold-press-guide' },
                    { text: 'Grape Seed Oil Processing Guide', link: '/en/news/technology/grape-seed-oil-processing-guide' },
                    { text: 'Hydraulic Oil Press vs Screw Press', link: '/en/news/technology/hydraulic-vs-screw-press' },
                    { text: 'Cold Press vs Hot Press Guide', link: '/en/news/technology/cold-press-vs-hot-press' },
                    { text: 'How to Improve Oil Yield', link: '/en/news/technology/improve-oil-yield' },
                    { text: 'Oil Crops Pressing Processes', link: '/en/news/technology/oil-crops-process' },
                  ]
                }
              ]
            }
          ]
        }
      }
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      title: '盛世赫程液压榨油机',
      description: '专业的榨油设备制造商',
      themeConfig: {
        nav: buildPrimaryNav('zh'),
        sidebar: buildUnifiedSidebar('zh'),
        legacySidebar: {
          '/zh/products': [
            {
              text: '产品',
              collapsed: false,
              items: [
                { text: '产品概览', link: '/zh/products/' },
                {
                  text: '300系列',
                  collapsed: true,
                  items: [
                    { text: '系列概述', link: '/zh/products/300' }
                  ]
                },
                {
                  text: '325系列',
                  collapsed: true,
                  items: [
                    { text: '系列概述', link: '/zh/products/325' }
                  ]
                },
                {
                  text: '355系列',
                  collapsed: true,
                  items: [
                    { text: '系列概述', link: '/zh/products/355' }
                  ]
                },
                {
                  text: '400系列',
                  collapsed: true,
                  items: [
                    { text: '系列概述', link: '/zh/products/400' }
                  ]
                },
                {
                  text: '426系列',
                  collapsed: true,
                  items: [
                    { text: '系列概述', link: '/zh/products/426' }
                  ]
                },
                {
                  text: '480系列',
                  collapsed: true,
                  items: [
                    { text: '系列概述', link: '/zh/products/480' }
                  ]
                },
                {
                  text: '500系列',
                  collapsed: true,
                  items: [
                    { text: '系列概述', link: '/zh/products/500' }
                  ]
                },
                {
                  text: '韩式小型液压榨油机',
                  collapsed: false,
                  items: [
                    { text: '概述', link: '/zh/products/korean-type-small-hydraulic-oil-press-machine' },
                    { text: '小型芝麻榨油机', link: '/zh/products/small-sesame-oil-press-machine' },
                    { text: 'KHOP-10KG', link: '/zh/products/khop-10kg-small-hydraulic-oil-press-machine' },
                    { text: 'KHOP-15KG', link: '/zh/products/khop-15kg-small-hydraulic-oil-press-machine' },
                    { text: 'KHOP-20KG', link: '/zh/products/khop-20kg-small-hydraulic-oil-press-machine' }
                  ]
                },
                {
                  text: '过滤设备',
                  collapsed: false,
                  items: [
                    { text: '概述', link: '/zh/products/filtration-equipment' },
                    { text: '气动千层滤油机', link: '/zh/products/pneumatic-filter-press' },
                    { text: '过滤机系列', link: '/zh/solutions/filtering/' }
                  ]
                },
                {
                  text: '精炼与脱蜡设备',
                  collapsed: false,
                  items: [
                    { text: '概述', link: '/zh/products/refining-and-dewaxing-equipment' },
                    { text: '食用油精炼设备', link: '/zh/products/edible-oil-refining-equipment' }
                  ]
                },
                {
                  text: '灌装包装设备',
                  collapsed: false,
                  items: [
                    { text: '概述', link: '/zh/products/filling-equipment' },
                    { text: '灌装配套方案概览', link: '/zh/solutions/filling-packages' },
                    ...canonicalizeFillingSidebarItems(zhFillingSeriesSidebarItems)
                  ]
                },
                {
                  text: '设备使用说明书',
                  collapsed: false,
                  items: [
                    { text: '概述', link: '/zh/products/instruction-manual' }
                  ]
                },
                {
                  text: '客户定制款液压榨油机',
                  collapsed: false,
                  items: [
                    { text: '概述', link: '/zh/products/customized-hydraulic-oil-press' }
                  ]
                },
                {
                  text: '客户订货发货视频',
                  collapsed: false,
                  items: [
                    { text: '概述', link: '/zh/products/customer-order-shipping-video' }
                  ]
                },
                {
                  text: '配套设备',
                  collapsed: false,
                  items: [
                    { text: '设备概述', link: '/zh/products/supporting' },
                    {
                      text: '预处理设备',
                      collapsed: false,
                      items: [
                        { text: '概述', link: '/zh/products/pre-treatment' },
                        { text: '芝麻筛选机', link: '/zh/products/sesame-screening-machine' },
                        { text: '11kw高速粉碎机', link: '/zh/products/11kw-high-speed-pulverizer' },
                        { text: '27kw电蒸锅', link: '/zh/products/27kw-electric-steamer' },
                        { text: '胡麻亚麻籽研磨搅拌一体机', link: '/zh/products/Hemp-and-flaxseed-grinding-and-stirring-integrated-machine' },
                        { text: '自动滚筒炒锅', link: '/zh/products/automatic-drum-roaster' },
                        { text: '饼粕包饼机', link: '/zh/products/cake-wrapping-machine' },
                        { text: '上料/粉碎/炒制一体机', link: '/zh/products/feeding-crushing-frying-integrated-machine' },
                        { text: '导热油平底煎锅', link: '/zh/products/heat-conducting-oil-flat-bottom-frying-pan' },
                        { text: '预榨机', link: '/zh/products/pre-press-machine' },
                        { text: '燃木蒸锅', link: '/zh/products/wood-fired-steamer' },
                        { text: '燃木导热油平底锅', link: '/zh/products/wood-fired-thermal-oil-flat-bottom-wok' }
                      ]
                    },
                    {
                      text: '后处理设备',
                      collapsed: false,
                      items: [
                        { text: '概述', link: '/zh/products/post-treatment' },
                        { text: '饼粕粉碎机', link: '/zh/products/cake-pulverizer' },
                        { text: '气动千层滤油机', link: '/zh/products/pneumatic-filter-press' },
                        { text: '食用油精炼设备', link: '/zh/products/edible-oil-refining-equipment' }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          '/zh/solutions': [
            {
              text: '解决方案',
              collapsed: false,
              items: [
                { text: '方案概览', link: '/zh/solutions/' },
                { text: '生产线', link: '/zh/solutions/production-lines' },
                {
                  text: '油料解决方案',
                  collapsed: true,
                  items: [
                    {
                      text: '🌾 粮油类（种子类）',
                      collapsed: true,
                      items: [
                        { text: '粮油类概述', link: '/zh/solutions/seed-oils' },
                        { text: '🌱 大豆油', link: '/zh/solutions/soybean' },
                        { text: '🥜 花生油', link: '/zh/solutions/peanut' },
                        { text: '🌰 芝麻油', link: '/zh/solutions/sesame' },
                        { text: '🌿 菜籽油', link: '/zh/solutions/rapeseed' },
                        { text: '🌻 向日葵油', link: '/zh/solutions/sunflower' },
                        { text: '🧵 棉籽油', link: '/zh/solutions/cottonseed' },
                        { text: '🌾 亚麻籽油', link: '/zh/solutions/flaxseed' },
                        { text: '🍵 茶籽油', link: '/zh/solutions/tea-seed' },
                        { text: '🌱 紫苏油', link: '/zh/solutions/perilla' }
                      ]
                    },
                    {
                      text: '🥜 坚果油',
                      collapsed: true,
                      items: [
                        { text: '坚果油概述', link: '/zh/solutions/nuts' },
                        { text: '🥥 椰子油', link: '/zh/solutions/coconut' },
                        { text: '🌴 棕榈油', link: '/zh/solutions/palm' },
                        { text: '🥜 核桃油', link: '/zh/solutions/walnut' },
                        { text: '🌰 巴旦木油', link: '/zh/solutions/almond' },
                        { text: '🌰 榛子油', link: '/zh/solutions/hazelnut' },
                        { text: '🥜 腰果油', link: '/zh/solutions/cashew' },
                        { text: '🥜 开心果油', link: '/zh/solutions/pistachio' }
                      ]
                    },
                    {
                      text: '🥑 水果油',
                      collapsed: true,
                      items: [
                        { text: '水果油概述', link: '/zh/solutions/fruits' },
                        { text: '🥑 牛油果油', link: '/zh/solutions/avocado' },
                        { text: '🍇 葡萄籽油', link: '/zh/solutions/grape-seed' },
                        { text: '🎃 南瓜籽油', link: '/zh/solutions/pumpkin-seed' },
                        { text: '🍉 西瓜籽油', link: '/zh/solutions/watermelon-seed' },
                        { text: '🍑 桃仁油', link: '/zh/solutions/peach-kernel' },
                        { text: '🌰 杏仁油', link: '/zh/solutions/apricot-kernel' }
                      ]
                    },
                    {
                      text: '⚙️ 特种油料',
                      collapsed: true,
                      items: [
                        { text: '特种油料概述', link: '/zh/solutions/special-oils' },
                        { text: '🍚 米糯油', link: '/zh/solutions/rice-bran' },
                        { text: '🌽 玉米胚芽油', link: '/zh/solutions/corn-germ' },
                        { text: '🌿 蓖麻籽油', link: '/zh/solutions/castor-seed' },
                        { text: '🌶️ 辣椒籽油', link: '/zh/solutions/chili-seed' },
                        { text: '🍇 葡萄籽油', link: '/zh/solutions/grape-seed' },
                        { text: '🌾 荔麦油', link: '/zh/solutions/buckwheat' }
                      ]
                    }                  ]
                },
                {
                  text: '灌装包装方案',
                  collapsed: true,
                  items: [
                    { text: '灌装配套方案概览', link: '/zh/solutions/filling-packages' },
                    ...canonicalizeFillingSidebarItems(zhFillingSeriesSidebarItems)
                  ]
                },
                {
                  text: '提升输送设备',
                  collapsed: true,
                  items: [
                    { text: '提升机专题概览', link: '/zh/solutions/elevator-systems/' },
                    { text: 'TD 型皮带斗式提升机', link: '/zh/solutions/elevator-systems/td-belt-bucket-elevator' },
                    { text: 'NE 型板链斗式提升机', link: '/zh/solutions/elevator-systems/ne-plate-chain-bucket-elevator' },
                    { text: 'TH 型环链斗式提升机', link: '/zh/solutions/elevator-systems/th-ring-chain-bucket-elevator' },
                    { text: 'TB 系列垂直提升机', link: '/zh/solutions/elevator-systems/tb-vertical-elevator' },
                    { text: '垂直斗式提升机', link: '/zh/solutions/elevator-systems/vertical-bucket-elevator' },
                    { text: '粮食提升机', link: '/zh/solutions/elevator-systems/grain-elevator' },
                    { text: 'U 型螺旋输送机', link: '/zh/solutions/elevator-systems/u-trough-screw-conveyor' },
                    { text: '刚性星型卸料器', link: '/zh/solutions/elevator-systems/rigid-rotary-airlock' },
                    { text: '不锈钢星型 A 型卸料器', link: '/zh/solutions/elevator-systems/stainless-steel-rotary-airlock' },
                    { text: '防爆耐高温星型卸料器', link: '/zh/solutions/elevator-systems/high-temperature-explosion-proof-rotary-airlock' }
                  ]
                }
              ]
            }
          ],
          '/zh/about': [
            {
              text: '关于我们',
              collapsed: false,
              items: [
                { text: '公司简介', link: '/zh/about/' },
                { text: '企业文化', link: '/zh/about/culture' },
                { text: '发展历程', link: '/zh/about/history' },
                { text: '荣誉资质', link: '/zh/about/honors' },
                { text: '团队介绍', link: '/zh/about/team' }
              ]
            }
          ],
          '/zh/advantages': [
            {
              text: '公司优势',
              collapsed: false,
              items: [
                { text: '优势概览', link: '/zh/advantages/' },
                { text: '技术创新', link: '/zh/advantages/innovation' },
                { text: '质量保证', link: '/zh/advantages/quality' },
                { text: '服务支持', link: '/zh/advantages/service' },
                { text: '成功案例', link: '/zh/advantages/cases' }
              ]
            }
          ],
          '/zh/news': [
            {
              text: '新闻资讯',
              collapsed: false,
              items: [
                { text: '新闻中心', link: '/zh/news/' },
                { text: '公司新闻', link: '/zh/news/company' },
                { text: '行业资讯', link: '/zh/news/industry' },
                {
                  text: '技术知识',
                  collapsed: false,
                  items: [
                    { text: '液压榨油机适合压榨哪些油料', link: '/zh/news/technology/best-oilseeds-for-hydraulic-oil-press-machines' },
                    { text: '如何开展小型冷榨油业务', link: '/zh/news/technology/how-to-start-small-cold-pressed-oil-business' },
                    { text: '如何选择液压榨油机型号', link: '/zh/news/technology/how-to-choose-hydraulic-oil-press-model' },
                    { text: '液压榨油机投资回报率指南', link: '/zh/news/technology/hydraulic-oil-press-roi-guide' },
                    { text: '食用油生产线成本指南', link: '/zh/news/technology/edible-oil-production-line-cost-guide' },
                    { text: '液压榨油机一天能压几锅？批次产能计算指南', link: '/zh/news/technology/how-many-batches-can-hydraulic-oil-press-run-per-day' },
                    { text: '不同油料该选热榨还是冷榨？实用选型指南', link: '/zh/news/technology/how-to-choose-hot-press-or-cold-press-for-different-oilseeds' },
                    { text: '食用油生产线如何选择过滤设备', link: '/zh/news/technology/how-to-choose-oil-filter-for-edible-oil-line' },
                    { text: '液压榨油机常见故障排查指南', link: '/zh/news/technology/hydraulic-oil-press-troubleshooting-guide' },
                    { text: '液压榨油机维护检查清单', link: '/zh/news/technology/hydraulic-oil-press-maintenance-checklist' },
                    { text: '购买榨油机时常见错误', link: '/zh/news/technology/common-mistakes-when-buying-oil-press-machine' },
                    { text: '压榨后如何过滤与包装食用油', link: '/zh/news/technology/how-to-filter-and-package-edible-oil-after-pressing' },
                    { text: '芝麻油生产线配置指南', link: '/zh/news/technology/sesame-oil-production-line-guide' },
                    { text: '核桃油冷榨工艺指南', link: '/zh/news/technology/walnut-oil-cold-press-guide' },
                    { text: '花生油生产线配置指南', link: '/zh/news/technology/peanut-oil-processing-line-guide' },
                    { text: '茶籽油生产线工艺指南', link: '/zh/news/technology/tea-seed-oil-processing-guide' },
                    { text: '亚麻籽油冷榨工艺指南', link: '/zh/news/technology/flaxseed-oil-cold-press-guide' },
                    { text: '菜籽油生产工艺指南', link: '/zh/news/technology/rapeseed-oil-processing-guide' },
                    { text: '南瓜籽油冷榨工艺指南', link: '/zh/news/technology/pumpkin-seed-oil-cold-press-guide' },
                    { text: '葡萄籽油生产工艺指南', link: '/zh/news/technology/grape-seed-oil-processing-guide' },
                    { text: '液压榨油机与螺旋榨油机对比', link: '/zh/news/technology/hydraulic-vs-screw-press' },
                    { text: '冷榨与热榨对比指南', link: '/zh/news/technology/cold-press-vs-hot-press' },
                    { text: '如何提高榨油机出油率', link: '/zh/news/technology/improve-oil-yield' },
                    { text: '不同油料作物最佳榨油工艺', link: '/zh/news/technology/oil-crops-process' },
                  ]
                }
              ]
            }
          ]
        },
        footer: {
          message: '设备选型 · 生产线方案 · <a href="https://hydraulic-oil-press.com/" target="_blank" rel="noopener noreferrer">厂家官网</a>',
          copyright: `© ${CURRENT_YEAR} 山东盛世赫程机械有限公司`
        }
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'Shengshi Hecheng Oil Press',
      description: 'Professional Oil Press Manufacturer',
      themeConfig: {
        nav: buildPrimaryNav('en'),
        sidebar: buildUnifiedSidebar('en'),
        legacySidebar: {
          '/en/products': [
            {
              text: 'Products',
              collapsed: false,
              items: [
                { text: 'Product Overview', link: '/en/products/' },
                {
                  text: '300 Series',
                  collapsed: true,
                  items: [
                    { text: 'Series Overview', link: '/en/products/300' }
                  ]
                },
                {
                  text: '325 Series',
                  collapsed: true,
                  items: [
                    { text: 'Series Overview', link: '/en/products/325' }
                  ]
                },
                {
                  text: '355 Series',
                  collapsed: true,
                  items: [
                    { text: 'Series Overview', link: '/en/products/355' }
                  ]
                },
                {
                  text: '400 Series',
                  collapsed: true,
                  items: [
                    { text: 'Series Overview', link: '/en/products/400' }
                  ]
                },
                {
                  text: '426 Series',
                  collapsed: true,
                  items: [
                    { text: 'Series Overview', link: '/en/products/426' }
                  ]
                },
                {
                  text: '480 Series',
                  collapsed: true,
                  items: [
                    { text: 'Series Overview', link: '/en/products/480' }
                  ]
                },
                {
                  text: '500 Series',
                  collapsed: true,
                  items: [
                    { text: 'Series Overview', link: '/en/products/500' }
                  ]
                },
                {
                  text: 'Korean Type Small Hydraulic Oil Press',
                  collapsed: false,
                  items: [
                    { text: 'Overview', link: '/en/products/korean-type-small-hydraulic-oil-press-machine' },
                    { text: 'Small Sesame Oil Press Machine', link: '/en/products/small-sesame-oil-press-machine' },
                    { text: 'KHOP-10KG', link: '/en/products/khop-10kg-small-hydraulic-oil-press-machine' },
                    { text: 'KHOP-15KG', link: '/en/products/khop-15kg-small-hydraulic-oil-press-machine' },
                    { text: 'KHOP-20KG', link: '/en/products/khop-20kg-small-hydraulic-oil-press-machine' }
                  ]
                },
                {
                  text: 'Oil Filtration Equipment',
                  collapsed: false,
                  items: [
                    { text: 'Overview', link: '/en/products/filtration-equipment' },
                    { text: 'Pneumatic Filter Press', link: '/en/products/pneumatic-filter-press' },
                    { text: 'Filtering Machine Series', link: '/en/solutions/filtering/' }
                  ]
                },
                {
                  text: 'Refining & Dewaxing Equipment',
                  collapsed: false,
                  items: [
                    { text: 'Overview', link: '/en/products/refining-and-dewaxing-equipment' },
                    { text: 'Edible Oil Refining Equipment', link: '/en/products/edible-oil-refining-equipment' }
                  ]
                },
                {
                  text: 'Filling & Packaging Equipment',
                  collapsed: false,
                  items: [
                    { text: 'Overview', link: '/en/products/filling-equipment' },
                    { text: 'Filling Packages Overview', link: '/en/solutions/filling-packages' },
                    ...canonicalizeFillingSidebarItems(enFillingSeriesSidebarItems),
                    {
                      text: 'Brewing Equipment Series',
                      collapsed: true,
                      items: [
                        { text: 'Series Page', link: '/en/solutions/brewing/' },
                        {
                          text: 'Low Vacuum Filling Machine',
                          collapsed: true,
                          items: buildLowVacuumModelItems('/en', 'Series Page')
                        }
                      ]
                    }
                  ]
                },
                {
                  text: 'Equipment Instruction Manual',
                  collapsed: false,
                  items: [
                    { text: 'Overview', link: '/en/products/instruction-manual' }
                  ]
                },
                {
                  text: 'Customized Hydraulic Oil Press',
                  collapsed: false,
                  items: [
                    { text: 'Overview', link: '/en/products/customized-hydraulic-oil-press' }
                  ]
                },
                {
                  text: 'Customer Order Shipping Video',
                  collapsed: false,
                  items: [
                    { text: 'Overview', link: '/en/products/customer-order-shipping-video' }
                  ]
                },
                {
                  text: 'Supporting Equipment',
                  collapsed: false,
                  items: [
                    { text: 'Equipment Overview', link: '/en/products/supporting' },
                    {
                      text: 'Pre-treatment Equipment',
                      collapsed: false,
                      items: [
                        { text: 'Overview', link: '/en/products/pre-treatment' },
                        { text: '11kw High Speed Pulverizer', link: '/en/products/11kw-high-speed-pulverizer' },
                        { text: '27kw Electric Steamer', link: '/en/products/27kw-electric-steamer' },
                        { text: 'Hemp and Flaxseed Grinding and Stirring Integrated Machine', link: '/en/products/Hemp-and-flaxseed-grinding-and-stirring-integrated-machine' },
                        { text: 'Automatic Drum Roaster', link: '/en/products/automatic-drum-roaster' },
                        { text: 'Cake Wrapping Machine', link: '/en/products/cake-wrapping-machine' },
                        { text: 'Feeding Crushing Frying Integrated Machine', link: '/en/products/feeding-crushing-frying-integrated-machine' },
                        { text: 'Heat Conducting Oil Flat Bottom Frying Pan', link: '/en/products/heat-conducting-oil-flat-bottom-frying-pan' },
                        { text: 'Pre-Press Machine', link: '/en/products/pre-press-machine' },
                        { text: 'Wood Fired Steamer', link: '/en/products/wood-fired-steamer' },
                        { text: 'Wood Fired Thermal Oil Flat Bottom Wok', link: '/en/products/wood-fired-thermal-oil-flat-bottom-wok' }
                      ]
                    },
                    {
                      text: 'Post-treatment Equipment',
                      collapsed: false,
                      items: [
                        { text: 'Overview', link: '/en/products/post-treatment' },
                        { text: 'Cake Pulverizer', link: '/en/products/cake-pulverizer' },
                        { text: 'Edible Oil Refining Equipment', link: '/en/products/edible-oil-refining-equipment' }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          '/en/solutions': [
            {
              text: 'Solutions',
              collapsed: false,
              items: [
                { text: 'Solutions Overview', link: '/en/solutions/' },
                { text: 'Production Lines Overview', link: '/en/solutions/production-lines' },
                {
                  text: 'By Oil Type',
                  collapsed: true,
                  items: [
                    {
                      text: '🌾 Grain and Seed Oils',
                      collapsed: true,
                      items: [
                        { text: 'Grain and Seed Oils Overview', link: '/en/solutions/seed-oils' },
                        { text: '🌱 Soybean Oil', link: '/en/solutions/soybean' },
                        { text: '🥜 Peanut Oil', link: '/en/solutions/peanut' },
                        { text: '🌰 Sesame Oil', link: '/en/solutions/sesame' },
                        { text: '🌿 Rapeseed Oil', link: '/en/solutions/rapeseed' },
                        { text: '🌻 Sunflower Oil', link: '/en/solutions/sunflower' },
                        { text: '🧵 Cottonseed Oil', link: '/en/solutions/cottonseed' },
                        { text: '🌾 Flaxseed Oil', link: '/en/solutions/flaxseed' },
                        { text: '🍵 Tea Seed Oil', link: '/en/solutions/tea-seed' },
                        { text: '🌱 Perilla Oil', link: '/en/solutions/perilla' }
                      ]
                    },
                    {
                      text: '🥜 Nut Oils',
                      collapsed: true,
                      items: [
                        { text: 'Nut Oils Overview', link: '/en/solutions/nuts' },
                        { text: '🥥 Coconut Oil', link: '/en/solutions/coconut' },
                        { text: '🌴 Palm Oil', link: '/en/solutions/palm' },
                        { text: '🥜 Walnut Oil', link: '/en/solutions/walnut' },
                        { text: '🌰 Almond Oil', link: '/en/solutions/almond' },
                        { text: '🌰 Hazelnut Oil', link: '/en/solutions/hazelnut' },
                        { text: '🥜 Cashew Oil', link: '/en/solutions/cashew' },
                        { text: '🥜 Pistachio Oil', link: '/en/solutions/pistachio' }
                      ]
                    },
                    {
                      text: '🥑 Fruit Oils',
                      collapsed: true,
                      items: [
                        { text: 'Fruit Oils Overview', link: '/en/solutions/fruits' },
                        { text: '🥑 Avocado Oil', link: '/en/solutions/avocado' },
                        { text: '🍇 Grape Seed Oil', link: '/en/solutions/grape-seed' },
                        { text: '🎃 Pumpkin Seed Oil', link: '/en/solutions/pumpkin-seed' },
                        { text: '🍉 Watermelon Seed Oil', link: '/en/solutions/watermelon-seed' },
                        { text: '🍑 Peach Kernel Oil', link: '/en/solutions/peach-kernel' },
                        { text: '🌰 Apricot Kernel Oil', link: '/en/solutions/apricot-kernel' }
                      ]
                    },
                    {
                      text: '⚙️ Other Special Oils',
                      collapsed: true,
                      items: [
                        { text: 'Special Oils Overview', link: '/en/solutions/special-oils' },
                        { text: '🍚 Rice Bran Oil', link: '/en/solutions/rice-bran' },
                        { text: '🌽 Corn Germ Oil', link: '/en/solutions/corn-germ' },
                        { text: '🌿 Castor Seed Oil', link: '/en/solutions/castor-seed' },
                        { text: '🌶️ Chili Seed Oil', link: '/en/solutions/chili-seed' },
                        { text: '🍇 Grape Seed Oil', link: '/en/solutions/grape-seed' },
                        { text: '🌾 Buckwheat Oil', link: '/en/solutions/buckwheat' }
                      ]
                    }
                  ]
                },
                {
                  text: 'Filling & Packaging Solutions',
                  collapsed: false,
                  items: canonicalizeFillingSidebarItems(enFillingSeriesSidebarItems)
                },
                {
                  text: 'Elevators & Conveyors',
                  collapsed: true,
                  items: [
                    { text: 'Elevator Series Overview', link: '/en/solutions/elevator-systems/' },
                    { text: 'TD Belt Bucket Elevator', link: '/en/solutions/elevator-systems/td-belt-bucket-elevator' },
                    { text: 'NE Plate-Chain Bucket Elevator', link: '/en/solutions/elevator-systems/ne-plate-chain-bucket-elevator' },
                    { text: 'TH Ring-Chain Bucket Elevator', link: '/en/solutions/elevator-systems/th-ring-chain-bucket-elevator' },
                    { text: 'TB Vertical Elevator', link: '/en/solutions/elevator-systems/tb-vertical-elevator' },
                    { text: 'Vertical Bucket Elevator', link: '/en/solutions/elevator-systems/vertical-bucket-elevator' },
                    { text: 'Grain Elevator', link: '/en/solutions/elevator-systems/grain-elevator' },
                    { text: 'U-Trough Screw Conveyor', link: '/en/solutions/elevator-systems/u-trough-screw-conveyor' },
                    { text: 'Rigid Rotary Airlock', link: '/en/solutions/elevator-systems/rigid-rotary-airlock' },
                    { text: 'Stainless Steel Rotary Airlock', link: '/en/solutions/elevator-systems/stainless-steel-rotary-airlock' },
                    { text: 'High-Temp Explosion-Proof Airlock', link: '/en/solutions/elevator-systems/high-temperature-explosion-proof-rotary-airlock' }
                  ]
                }
              ]
            }
          ],
          '/en/about': [
            {
              text: 'About Us',
              collapsed: false,
              items: [
                { text: 'Company Profile', link: '/en/about/' },
                { text: 'Corporate Culture', link: '/en/about/culture' },
                { text: 'Development History', link: '/en/about/history' },
                { text: 'Honors and Qualifications', link: '/en/about/honors' },
                { text: 'Team Introduction', link: '/en/about/team' }
              ]
            }
          ],
          '/en/advantages': [
            {
              text: 'Company Advantages',
              collapsed: false,
              items: [
                { text: 'Advantages Overview', link: '/en/advantages/' },
                { text: 'Technological Innovation', link: '/en/advantages/innovation' },
                { text: 'Quality Assurance', link: '/en/advantages/quality' },
                { text: 'Service and Support', link: '/en/advantages/service' },
                { text: 'Success Cases', link: '/en/advantages/cases' }
              ]
            }
          ],
          '/en/news': [
            {
              text: 'News',
              collapsed: false,
              items: [
                { text: 'News Center', link: '/en/news/' },
                { text: 'Company News', link: '/en/news/company' },
                { text: 'Industry News', link: '/en/news/industry' },
                { text: 'Technical Knowledge', link: '/en/news/technology' }
              ]
            }
          ]
        },
        footer: {
          message: 'Machine Selection · Production Lines · <a href="https://hydraulic-oil-press.com/" target="_blank" rel="noopener noreferrer">Manufacturer Website</a>',
          copyright: `© ${CURRENT_YEAR} Shandong Shengshi Hecheng Machinery Co., Ltd`
        }
      }
    },
    ru: {
      label: 'Русский',
      lang: 'ru-RU',
      title: 'Гидравлический маслобойный пресс Shengshi Hecheng',
      description: 'Профессиональный производитель маслобойных прессов',
      themeConfig: {
        nav: buildPrimaryNav('ru'),
        sidebar: buildUnifiedSidebar('ru'),
        legacySidebar: {
          '/ru/products': [
            {
              text: 'Продукты и',
              collapsed: false,
              items: [
                { text: 'Обзор продукции и', link: '/ru/products/' },
                {
                  text: 'Серия 300',
                  collapsed: true,
                  items: [
                    { text: 'Обзор серии и', link: '/ru/products/300' }
                  ]
                },
                {
                  text: 'Серия 325',
                  collapsed: true,
                  items: [
                    { text: 'Обзор серии и', link: '/ru/products/325' }
                  ]
                },
                {
                  text: 'Серия 355',
                  collapsed: true,
                  items: [
                    { text: 'Обзор серии и', link: '/ru/products/355' }
                  ]
                },
                {
                  text: 'Серия 400',
                  collapsed: true,
                  items: [
                    { text: 'Обзор серии и', link: '/ru/products/400' }
                  ]
                },
                {
                  text: 'Серия 426',
                  collapsed: true,
                  items: [
                    { text: 'Обзор серии и', link: '/ru/products/426' }
                  ]
                },
                {
                  text: 'Серия 480',
                  collapsed: true,
                  items: [
                    { text: 'Обзор серии и', link: '/ru/products/480' }
                  ]
                },
                {
                  text: 'Серия 500',
                  collapsed: true,
                  items: [
                    { text: 'Обзор серии и', link: '/ru/products/500' }
                  ]
                },
                {
                  text: 'Малый гидравлический пресс корейского типа',
                  collapsed: false,
                  items: [
                    { text: 'Обзор', link: '/ru/products/korean-type-small-hydraulic-oil-press-machine' },
                    { text: 'Малая машина для отжима кунжутного масла', link: '/ru/products/small-sesame-oil-press-machine' },
                    { text: 'KHOP-10KG', link: '/ru/products/khop-10kg-small-hydraulic-oil-press-machine' },
                    { text: 'KHOP-15KG', link: '/ru/products/khop-15kg-small-hydraulic-oil-press-machine' },
                    { text: 'KHOP-20KG', link: '/ru/products/khop-20kg-small-hydraulic-oil-press-machine' }
                  ]
                },
                {
                  text: 'Оборудование для розлива и упаковки',
                  collapsed: false,
                  items: [
                    { text: 'Обзор', link: '/ru/products/filling-equipment' },
                    { text: 'Обзор решений по фасовке', link: '/ru/solutions/filling-packages' },
                    ...canonicalizeFillingSidebarItems(ruFillingSeriesSidebarItems),
                    {
                      text: 'Серия оборудования для пивоварения',
                      collapsed: true,
                      items: [
                        { text: 'Страница серии', link: '/ru/solutions/brewing/' },
                        {
                          text: 'Низковакуумная машина розлива',
                          collapsed: true,
                          items: buildLowVacuumModelItems('/ru', 'Страница серии')
                        }
                      ]
                    }
                  ]
                },
                {
                  text: 'Руководство по Эксплуатации Оборудования',
                  collapsed: false,
                  items: [
                    { text: 'Обзор', link: '/ru/products/instruction-manual' }
                  ]
                },
                {
                  text: 'Гидравлический маслопресс на заказ',
                  collapsed: false,
                  items: [
                    { text: 'Обзор', link: '/ru/products/customized-hydraulic-oil-press' }
                  ]
                },
                {
                  text: 'Видео заказа и отгрузки клиента',
                  collapsed: false,
                  items: [
                    { text: 'Обзор', link: '/ru/products/customer-order-shipping-video' }
                  ]
                },
                {
                  text: 'Вспомогательное оборудование',
                  collapsed: false,
                  items: [
                    { text: 'Обзор оборудования', link: '/ru/products/supporting' },
                    {
                      text: 'Оборудование предварительной обработки',
                      collapsed: false,
                      items: [
                        { text: 'Обзор', link: '/ru/products/pre-treatment' },
                        { text: 'Машина для очистки кунжута', link: '/ru/products/sesame-screening-machine' },
                        { text: '11kw Высокоскоростной измельчитель', link: '/ru/products/11kw-high-speed-pulverizer' },
                        { text: '27kw Электрический паровар', link: '/ru/products/27kw-electric-steamer' },
                        { text: 'Интегрированная машина для измельчения и смешивания конопли и льна', link: '/ru/products/Hemp-and-flaxseed-grinding-and-stirring-integrated-machine' },
                        { text: 'Автоматический барабанный обжарщик', link: '/ru/products/automatic-drum-roaster' },
                        { text: 'Машина для упаковки жмыха', link: '/ru/products/cake-wrapping-machine' },
                        { text: 'Интегрированная машина для подачи, дробления и жарки', link: '/ru/products/feeding-crushing-frying-integrated-machine' },
                        { text: 'Плоская сковорода с теплоносителем', link: '/ru/products/heat-conducting-oil-flat-bottom-frying-pan' },
                        { text: 'Пневматический фильтр-пресс', link: '/ru/products/pneumatic-filter-press' },
                        { text: 'Предварительный пресс', link: '/ru/products/pre-press-machine' },
                        { text: 'Дровяной паровар', link: '/ru/products/wood-fired-steamer' },
                        { text: 'Дровяной плоский котел с теплоносителем', link: '/ru/products/wood-fired-thermal-oil-flat-bottom-wok' }
                      ]
                    },
                    {
                      text: 'Оборудование последующей обработки',
                      collapsed: false,
                      items: [
                        { text: 'Обзор', link: '/ru/products/post-treatment' },
                        { text: 'Измельчитель жмыха', link: '/ru/products/cake-pulverizer' },
                        { text: 'Оборудование для рафинирования пищевого масла', link: '/ru/products/edible-oil-refining-equipment' }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          '/ru/solutions': [
            {
              text: 'Решения и',
              collapsed: false,
              items: [
                { text: 'Обзор решений и', link: '/ru/solutions/' },
                {
                  text: 'По типу масла',
                  collapsed: true,
                  items: [
                    {
                      text: '🌾 Масла зерновых и семян',
                      collapsed: true,
                      items: [
                        { text: 'Обзор масел зерновых и семян', link: '/ru/solutions/seed-oils' },
                        { text: '🌱 Соевый масло', link: '/ru/solutions/soybean' },
                        { text: '🥜 Арахисовое масло', link: '/ru/solutions/peanut' },
                        { text: '🌰 Кунжутное масло', link: '/ru/solutions/sesame' },
                        { text: '🌿 Рапсовое масло', link: '/ru/solutions/rapeseed' },
                        { text: '🌻 Подсолнечное масло', link: '/ru/solutions/sunflower' },
                        { text: '🧵 Хлопковое масло', link: '/ru/solutions/cottonseed' },
                        { text: '🌾 Льняное масло', link: '/ru/solutions/flaxseed' },
                        { text: '🍵 Масло чайного семени', link: '/ru/solutions/tea-seed' },
                        { text: '🌱 Масло периллы', link: '/ru/solutions/perilla' }
                      ]
                    },
                    {
                      text: '🥜 Ореховые масла',
                      collapsed: true,
                      items: [
                        { text: 'Обзор ореховых масел', link: '/ru/solutions/nuts' },
                        { text: '🥥 Кокосовое масло', link: '/ru/solutions/coconut' },
                        { text: '🌴 Пальмовое масло', link: '/ru/solutions/palm' },
                        { text: '🥜 Ореховое масло', link: '/ru/solutions/walnut' },
                        { text: '🌰 Миндальное масло', link: '/ru/solutions/almond' },
                        { text: '🌰 Фундуковое масло', link: '/ru/solutions/hazelnut' },
                        { text: '🥜 Кешью масло', link: '/ru/solutions/cashew' },
                        { text: '🥜 Фисташковое масло', link: '/ru/solutions/pistachio' }
                      ]
                    },
                    {
                      text: '🥑 Фруктовые масла',
                      collapsed: true,
                      items: [
                        { text: 'Обзор фруктовых масел', link: '/ru/solutions/fruits' },
                        { text: '🥑 Авокадовое масло', link: '/ru/solutions/avocado' },
                        { text: '🍇 Виноградное масло', link: '/ru/solutions/grape-seed' },
                        { text: '🎃 Тыквенное масло', link: '/ru/solutions/pumpkin-seed' },
                        { text: '🍉 Арбузное масло', link: '/ru/solutions/watermelon-seed' },
                        { text: '🍑 Масло персиковой косточки', link: '/ru/solutions/peach-kernel' },
                        { text: '🌰 Абрикосовое масло', link: '/ru/solutions/apricot-kernel' }
                      ]
                    },
                    {
                      text: '⚙️ Специальные масла',
                      collapsed: true,
                      items: [
                        { text: 'Обзор специальных масел', link: '/ru/solutions/special-oils' },
                        { text: '🍚 Рисовое масло', link: '/ru/solutions/rice-bran' },
                        { text: '🌽 Кукурузное масло', link: '/ru/solutions/corn-germ' },
                        { text: '🌿 Касторовое масло', link: '/ru/solutions/castor-seed' },
                        { text: '🌶️ Перечное масло', link: '/ru/solutions/chili-seed' },
                        { text: '🍇 Виноградное масло', link: '/ru/solutions/grape-seed' },
                        { text: '🌾 Гречишное масло', link: '/ru/solutions/buckwheat' }
                      ]
                    }
                  ]
                },
                {
                  text: 'Решения для наполнения',
                  collapsed: true,
                  items: canonicalizeFillingSidebarItems(ruFillingSeriesSidebarItems)
                },
                {
                  text: 'Элеваторы и конвейеры',
                  collapsed: true,
                  items: [
                    { text: 'Обзор серии элеваторов', link: '/ru/solutions/elevator-systems/' },
                    { text: 'Ленточный ковшовый элеватор TD', link: '/ru/solutions/elevator-systems/td-belt-bucket-elevator' },
                    { text: 'Пластинчато-цепной элеватор NE', link: '/ru/solutions/elevator-systems/ne-plate-chain-bucket-elevator' },
                    { text: 'Круглозвенный элеватор TH', link: '/ru/solutions/elevator-systems/th-ring-chain-bucket-elevator' },
                    { text: 'Вертикальный элеватор TB', link: '/ru/solutions/elevator-systems/tb-vertical-elevator' },
                    { text: 'Вертикальный ковшовый элеватор', link: '/ru/solutions/elevator-systems/vertical-bucket-elevator' },
                    { text: 'Зерновой элеватор', link: '/ru/solutions/elevator-systems/grain-elevator' },
                    { text: 'Шнековый конвейер U-типа', link: '/ru/solutions/elevator-systems/u-trough-screw-conveyor' },
                    { text: 'Жёсткий шлюзовой питатель', link: '/ru/solutions/elevator-systems/rigid-rotary-airlock' },
                    { text: 'Шлюзовой питатель из нерж. стали', link: '/ru/solutions/elevator-systems/stainless-steel-rotary-airlock' },
                    { text: 'Взрывозащищённый питатель', link: '/ru/solutions/elevator-systems/high-temperature-explosion-proof-rotary-airlock' }
                  ]
                }
              ]
            }
          ],
          '/ru/about': [
            {
              text: 'О нас',
              collapsed: false,
              items: [
                { text: 'Профиль компании', link: '/ru/about/' },
                { text: 'Корпоративная культура', link: '/ru/about/culture' },
                { text: 'История развития', link: '/ru/about/history' },
                { text: 'Награды и квалификации', link: '/ru/about/honors' },
                { text: 'Представление команды', link: '/ru/about/team' }
              ]
            }
          ],
          '/ru/advantages': [
            {
              text: 'Преимущества компании',
              collapsed: false,
              items: [
                { text: 'Обзор преимуществ', link: '/ru/advantages/' },
                { text: 'Технологические инновации', link: '/ru/advantages/innovation' },
                { text: 'Гарантия качества', link: '/ru/advantages/quality' },
                { text: 'Сервис и поддержка', link: '/ru/advantages/service' },
                { text: 'Успешные кейсы', link: '/ru/advantages/cases' }
              ]
            }
          ],
          '/ru/news': [
            {
              text: 'Новости',
              collapsed: false,
              items: [
                { text: 'Новостной центр', link: '/ru/news/' },
                { text: 'Новости компании', link: '/ru/news/company' },
                { text: 'Индустриальные новости', link: '/ru/news/industry' },
                {
                  text: 'Технические знания',
                  collapsed: false,
                  items: [
                    { text: 'Какие масличные культуры лучше подходят для гидравлического маслопресса', link: '/ru/news/technology/best-oilseeds-for-hydraulic-oil-press-machines' },
                    { text: 'Как запустить небольшой бизнес по производству масла холодного отжима', link: '/ru/news/technology/how-to-start-small-cold-pressed-oil-business' },
                    { text: 'Как выбрать модель гидравлического маслопресса', link: '/ru/news/technology/how-to-choose-hydraulic-oil-press-model' },
                    { text: 'Руководство по ROI гидравлического маслопресса', link: '/ru/news/technology/hydraulic-oil-press-roi-guide' },
                    { text: 'Руководство по стоимости линии производства пищевого масла', link: '/ru/news/technology/edible-oil-production-line-cost-guide' },
                    { text: 'Сколько партий гидравлический маслопресс может выполнять в день?', link: '/ru/news/technology/how-many-batches-can-hydraulic-oil-press-run-per-day' },
                    { text: 'Как выбрать горячий или холодный отжим для разных масличных культур', link: '/ru/news/technology/how-to-choose-hot-press-or-cold-press-for-different-oilseeds' },
                    { text: 'Как выбрать масляный фильтр для линии пищевого масла', link: '/ru/news/technology/how-to-choose-oil-filter-for-edible-oil-line' },
                    { text: 'Руководство по поиску неисправностей гидравлического маслопресса', link: '/ru/news/technology/hydraulic-oil-press-troubleshooting-guide' },
                    { text: 'Чек-лист по обслуживанию гидравлического маслопресса', link: '/ru/news/technology/hydraulic-oil-press-maintenance-checklist' },
                    { text: 'Распространенные ошибки при покупке маслопресса', link: '/ru/news/technology/common-mistakes-when-buying-oil-press-machine' },
                    { text: 'Как фильтровать и фасовать пищевое масло после отжима', link: '/ru/news/technology/how-to-filter-and-package-edible-oil-after-pressing' },
                    { text: 'Руководство по линии производства кунжутного масла', link: '/ru/news/technology/sesame-oil-production-line-guide' },
                    { text: 'Руководство по холодному отжиму масла грецкого ореха', link: '/ru/news/technology/walnut-oil-cold-press-guide' },
                    { text: 'Руководство по линии производства арахисового масла', link: '/ru/news/technology/peanut-oil-processing-line-guide' },
                    { text: 'Руководство по переработке масла из семян чая', link: '/ru/news/technology/tea-seed-oil-processing-guide' },
                    { text: 'Руководство по холодному отжиму льняного масла', link: '/ru/news/technology/flaxseed-oil-cold-press-guide' },
                    { text: 'Руководство по переработке рапсового масла', link: '/ru/news/technology/rapeseed-oil-processing-guide' },
                    { text: 'Руководство по холодному отжиму масла из семян тыквы', link: '/ru/news/technology/pumpkin-seed-oil-cold-press-guide' },
                    { text: 'Руководство по переработке масла из виноградных косточек', link: '/ru/news/technology/grape-seed-oil-processing-guide' },
                    { text: 'Сравнение гидравлического и шнекового маслопресса', link: '/ru/news/technology/hydraulic-vs-screw-press' },
                    { text: 'Руководство по холодному и горячему отжиму', link: '/ru/news/technology/cold-press-vs-hot-press' },
                    { text: 'Как повысить выход масла', link: '/ru/news/technology/improve-oil-yield' },
                    { text: 'Оптимальные процессы отжима масла для разных масличных культур', link: '/ru/news/technology/oil-crops-process' },
                  ]
                }
              ]
            }
          ]
        },
        footer: {
          message: 'Подбор оборудования · Производственные линии · <a href="https://hydraulic-oil-press.com/" target="_blank" rel="noopener noreferrer">Сайт производителя</a>',
          copyright: `© ${CURRENT_YEAR} Shandong Shengshi Hecheng Machinery Co., Ltd`
        }
      }
    },
    fr: {
      label: 'Français',
      lang: 'fr-FR',
      title: 'Presse à huile Shengshi Hecheng',
      description: 'Fabricant professionnel de presses à huile',
      themeConfig: {
        nav: buildPrimaryNav('fr'),
        sidebar: buildUnifiedSidebar('fr'),
        legacySidebar: {
          '/fr/products': [
            {
              text: 'Produits & Prix',
              collapsed: false,
              items: [
                { text: 'Aperçu produits', link: '/fr/products/' },
                {
                  text: 'Série 300 (prix)',
                  collapsed: true,
                  items: [
                    { text: 'Aperçu de la série', link: '/fr/products/300' }
                  ]
                },
                {
                  text: 'Série 325 (prix)',
                  collapsed: true,
                  items: [
                    { text: 'Aperçu de la série', link: '/fr/products/325' }
                  ]
                },
                {
                  text: 'Série 355 (prix)',
                  collapsed: true,
                  items: [
                    { text: 'Aperçu de la série', link: '/fr/products/355' }
                  ]
                },
                {
                  text: 'Série 400 (prix)',
                  collapsed: true,
                  items: [
                    { text: 'Aperçu de la série', link: '/fr/products/400' }
                  ]
                },
                {
                  text: 'Série 426 (prix)',
                  collapsed: true,
                  items: [
                    { text: 'Aperçu de la série', link: '/fr/products/426' }
                  ]
                },
                {
                  text: 'Série 480 (prix)',
                  collapsed: true,
                  items: [
                    { text: 'Aperçu de la série', link: '/fr/products/480' }
                  ]
                },
                {
                  text: 'Série 500 (prix)',
                  collapsed: true,
                  items: [
                    { text: 'Aperçu de la série', link: '/fr/products/500' }
                  ]
                },
                {
                  text: 'Petite presse hydraulique type coréen (prix)',
                  collapsed: false,
                  items: [
                    { text: 'Aperçu', link: '/fr/products/korean-type-small-hydraulic-oil-press-machine' },
                    { text: 'Machine de pressage d\'huile de sésame', link: '/fr/products/small-sesame-oil-press-machine' },
                    { text: 'KHOP-10KG', link: '/fr/products/khop-10kg-small-hydraulic-oil-press-machine' },
                    { text: 'KHOP-15KG', link: '/fr/products/khop-15kg-small-hydraulic-oil-press-machine' },
                    { text: 'KHOP-20KG', link: '/fr/products/khop-20kg-small-hydraulic-oil-press-machine' }
                  ]
                },
                {
                  text: 'Équipements de remplissage et d\'emballage',
                  collapsed: false,
                  items: [
                    { text: 'Aperçu', link: '/fr/products/filling-equipment' },
                    { text: 'Aperçu des solutions de remplissage', link: '/fr/solutions/filling-packages' },
                    ...canonicalizeFillingSidebarItems(frFillingSeriesSidebarItems),
                    {
                      text: 'Série d\'équipements de brassage',
                      collapsed: true,
                      items: [
                        { text: 'Page série', link: '/fr/solutions/brewing/' },
                        {
                          text: 'Machine de remplissage sous faible vide',
                          collapsed: true,
                          items: buildLowVacuumModelItems('/fr', 'Page série')
                        }
                      ]
                    }
                  ]
                },
                {
                  text: 'Manuel d\'Instructions de l\'Équipement',
                  collapsed: false,
                  items: [
                    { text: 'Aperçu', link: '/fr/products/instruction-manual' }
                  ]
                },
                {
                  text: 'Presse hydraulique sur mesure',
                  collapsed: false,
                  items: [
                    { text: 'Aperçu', link: '/fr/products/customized-hydraulic-oil-press' }
                  ]
                },
                {
                  text: 'Vidéo d\'expédition de commande client',
                  collapsed: false,
                  items: [
                    { text: 'Aperçu', link: '/fr/products/customer-order-shipping-video' }
                  ]
                },
                {
                  text: 'Équipements complémentaires',
                  collapsed: false,
                  items: [
                    { text: 'Aperçu des équipements', link: '/fr/products/supporting' },
                    {
                      text: 'Équipements de prétraitement',
                      collapsed: false,
                      items: [
                        { text: 'Aperçu', link: '/fr/products/pre-treatment' },
                        { text: 'Machine de tamisage du sésame', link: '/fr/products/sesame-screening-machine' },
                        { text: 'Pulvérisateur haute vitesse 11kw', link: '/fr/products/11kw-high-speed-pulverizer' },
                        { text: 'Vapeur électrique 27kw', link: '/fr/products/27kw-electric-steamer' },
                        { text: 'Machine intégrée de broyage et mélange de graines de chanvre et de lin', link: '/fr/products/Hemp-and-flaxseed-grinding-and-stirring-integrated-machine' },
                        { text: 'Rôtisseur à tambour automatique', link: '/fr/products/automatic-drum-roaster' },
                        { text: 'Machine d\'emballage de gâteau', link: '/fr/products/cake-wrapping-machine' },
                        { text: 'Machine intégrée d\'alimentation, concassage et friture', link: '/fr/products/feeding-crushing-frying-integrated-machine' },
                        { text: 'Poêle plate à huile conductrice de chaleur', link: '/fr/products/heat-conducting-oil-flat-bottom-frying-pan' },
                        { text: 'Presse-filtre pneumatique', link: '/fr/products/pneumatic-filter-press' },
                        { text: 'Machine de pré-pression', link: '/fr/products/pre-press-machine' },
                        { text: 'Vapeur à bois', link: '/fr/products/wood-fired-steamer' },
                        { text: 'Wok plat à bois avec huile thermique', link: '/fr/products/wood-fired-thermal-oil-flat-bottom-wok' }
                      ]
                    },
                    {
                      text: 'Équipements de post-traitement',
                      collapsed: false,
                      items: [
                        { text: 'Aperçu', link: '/fr/products/post-treatment' },
                        { text: 'Pulvérisateur de gâteau', link: '/fr/products/cake-pulverizer' },
                        { text: 'Équipement de raffinage d\'huile comestible', link: '/fr/products/edible-oil-refining-equipment' }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          '/fr/solutions': [
            {
              text: 'Solutions',
              collapsed: false,
              items: [
                { text: 'Aperçu des solutions', link: '/fr/solutions/' },
                {
                  text: 'Par type d\'huile',
                  collapsed: true,
                  items: [
                    {
                      text: '🌾 Huiles de céréales et graines',
                      collapsed: true,
                      items: [
                        { text: 'Aperçu des huiles de céréales et graines', link: '/fr/solutions/seed-oils' },
                        { text: '🌱 Huile de soja', link: '/fr/solutions/soybean' },
                        { text: '🥜 Huile d\'arachide', link: '/fr/solutions/peanut' },
                        { text: '🌰 Huile de sésame', link: '/fr/solutions/sesame' },
                        { text: '🌿 Huile de colza', link: '/fr/solutions/rapeseed' },
                        { text: '🌻 Huile de tournesol', link: '/fr/solutions/sunflower' },
                        { text: '🧵 Huile de coton', link: '/fr/solutions/cottonseed' },
                        { text: '🌾 Huile de lin', link: '/fr/solutions/flaxseed' },
                        { text: '🍵 Huile de graines de thé', link: '/fr/solutions/tea-seed' },
                        { text: '🌱 Huile de pérille', link: '/fr/solutions/perilla' }
                      ]
                    },
                    {
                      text: '🥜 Huiles de noix',
                      collapsed: true,
                      items: [
                        { text: 'Aperçu des huiles de noix', link: '/fr/solutions/nuts' },
                        { text: '🥥 Huile de coco', link: '/fr/solutions/coconut' },
                        { text: '🌴 Huile de palme', link: '/fr/solutions/palm' },
                        { text: '🥜 Huile de noix', link: '/fr/solutions/walnut' },
                        { text: '🌰 Huile d\'amande', link: '/fr/solutions/almond' },
                        { text: '🌰 Huile de noisette', link: '/fr/solutions/hazelnut' },
                        { text: '🥜 Huile de cajou', link: '/fr/solutions/cashew' },
                        { text: '🥜 Huile de pistache', link: '/fr/solutions/pistachio' }
                      ]
                    },
                    {
                      text: '🥑 Huiles de fruits',
                      collapsed: true,
                      items: [
                        { text: 'Aperçu des huiles de fruits', link: '/fr/solutions/fruits' },
                        { text: '🥑 Huile d\'avocat', link: '/fr/solutions/avocado' },
                        { text: '🍇 Huile de pépins de raisin', link: '/fr/solutions/grape-seed' },
                        { text: '🎃 Huile de pépins de citrouille', link: '/fr/solutions/pumpkin-seed' },
                        { text: '🍉 Huile de pépins de pastèque', link: '/fr/solutions/watermelon-seed' },
                        { text: '🍑 Huile de noyau de pêche', link: '/fr/solutions/peach-kernel' },
                        { text: '🌰 Huile d\'abricot', link: '/fr/solutions/apricot-kernel' }
                      ]
                    },
                    {
                      text: '⚙️ Huiles spéciales',
                      collapsed: true,
                      items: [
                        { text: 'Aperçu des huiles spéciales', link: '/fr/solutions/special-oils' },
                        { text: '🍚 Huile de son de riz', link: '/fr/solutions/rice-bran' },
                        { text: '🌽 Huile de germe de maïs', link: '/fr/solutions/corn-germ' },
                        { text: '🌿 Huile de ricin', link: '/fr/solutions/castor-seed' },
                        { text: '🌶️ Huile de piments', link: '/fr/solutions/chili-seed' },
                        { text: '🍇 Huile de pépins de raisin', link: '/fr/solutions/grape-seed' },
                        { text: '🌾 Huile de sarrasin', link: '/fr/solutions/buckwheat' }
                      ]
                    }
                  ]
                },
                {
                  text: 'Solutions de remplissage',
                  collapsed: true,
                  items: canonicalizeFillingSidebarItems(frFillingSeriesSidebarItems)
                },
                {
                  text: 'Élévateurs et convoyeurs',
                  collapsed: true,
                  items: [
                    { text: 'Aperçu de la série d’élévateurs', link: '/fr/solutions/elevator-systems/' },
                    { text: 'Élévateur à godets à bande TD', link: '/fr/solutions/elevator-systems/td-belt-bucket-elevator' },
                    { text: 'Élévateur à godets à chaîne NE', link: '/fr/solutions/elevator-systems/ne-plate-chain-bucket-elevator' },
                    { text: 'Élévateur à godets à chaîne TH', link: '/fr/solutions/elevator-systems/th-ring-chain-bucket-elevator' },
                    { text: 'Élévateur vertical TB', link: '/fr/solutions/elevator-systems/tb-vertical-elevator' },
                    { text: 'Élévateur à godets vertical', link: '/fr/solutions/elevator-systems/vertical-bucket-elevator' },
                    { text: 'Élévateur à grains', link: '/fr/solutions/elevator-systems/grain-elevator' },
                    { text: 'Convoyeur à vis en U', link: '/fr/solutions/elevator-systems/u-trough-screw-conveyor' },
                    { text: 'Écluse rotative rigide', link: '/fr/solutions/elevator-systems/rigid-rotary-airlock' },
                    { text: 'Écluse rotative inox', link: '/fr/solutions/elevator-systems/stainless-steel-rotary-airlock' },
                    { text: 'Écluse antidéflagrante haute température', link: '/fr/solutions/elevator-systems/high-temperature-explosion-proof-rotary-airlock' }
                  ]
                }
              ]
            }
          ],
          '/fr/about': [
            {
              text: 'À propos',
              collapsed: false,
              items: [
                { text: 'Profil de l\'entreprise', link: '/fr/about/' },
                { text: 'Culture d\'entreprise', link: '/fr/about/culture' },
                { text: 'Historique de développement', link: '/fr/about/history' },
                { text: 'Honneurs et qualifications', link: '/fr/about/honors' },
                { text: 'Présentation de l\'équipe', link: '/fr/about/team' }
              ]
            }
          ],
          '/fr/advantages': [
            {
              text: 'Avantages de l\'entreprise',
              collapsed: false,
              items: [
                { text: 'Aperçu des avantages', link: '/fr/advantages/' },
                { text: 'Innovation technologique', link: '/fr/advantages/innovation' },
                { text: 'Garantie de qualité', link: '/fr/advantages/quality' },
                { text: 'Service et support', link: '/fr/advantages/service' },
                { text: 'Études de cas', link: '/fr/advantages/cases' }
              ]
            }
          ],
          '/fr/news': [
            {
              text: 'Actualités',
              collapsed: false,
              items: [
                { text: 'Centre d\'actualités', link: '/fr/news/' },
                { text: 'Actualités de l\'entreprise', link: '/fr/news/company' },
                { text: 'Actualités de l\'industrie', link: '/fr/news/industry' },
                {
                  text: 'Connaissances techniques',
                  collapsed: false,
                  items: [
                    { text: 'Quelles graines conviennent le mieux à une presse à huile hydraulique', link: '/fr/news/technology/best-oilseeds-for-hydraulic-oil-press-machines' },
                    { text: 'Comment lancer une petite entreprise d\'huile pressée à froid', link: '/fr/news/technology/how-to-start-small-cold-pressed-oil-business' },
                    { text: 'Comment choisir un modèle de presse à huile hydraulique', link: '/fr/news/technology/how-to-choose-hydraulic-oil-press-model' },
                    { text: 'Guide ROI de la presse à huile hydraulique', link: '/fr/news/technology/hydraulic-oil-press-roi-guide' },
                    { text: 'Guide de coût d\'une ligne de production d\'huile alimentaire', link: '/fr/news/technology/edible-oil-production-line-cost-guide' },
                    { text: 'Combien de lots une presse à huile hydraulique peut-elle produire par jour ?', link: '/fr/news/technology/how-many-batches-can-hydraulic-oil-press-run-per-day' },
                    { text: 'Comment choisir le pressage à chaud ou à froid selon les différentes graines oléagineuses', link: '/fr/news/technology/how-to-choose-hot-press-or-cold-press-for-different-oilseeds' },
                    { text: 'Comment choisir un filtre à huile pour une ligne d\'huile alimentaire', link: '/fr/news/technology/how-to-choose-oil-filter-for-edible-oil-line' },
                    { text: 'Guide de dépannage de la presse à huile hydraulique', link: '/fr/news/technology/hydraulic-oil-press-troubleshooting-guide' },
                    { text: 'Checklist d\'entretien d\'une presse à huile hydraulique', link: '/fr/news/technology/hydraulic-oil-press-maintenance-checklist' },
                    { text: 'Erreurs courantes lors de l\'achat d\'une presse à huile', link: '/fr/news/technology/common-mistakes-when-buying-oil-press-machine' },
                    { text: 'Filtration et conditionnement de l\'huile alimentaire après pressage', link: '/fr/news/technology/how-to-filter-and-package-edible-oil-after-pressing' },
                    { text: 'Guide de ligne de production d\'huile de sésame', link: '/fr/news/technology/sesame-oil-production-line-guide' },
                    { text: 'Guide de pressage à froid de l\'huile de noix', link: '/fr/news/technology/walnut-oil-cold-press-guide' },
                    { text: 'Guide de ligne de production d\'huile d\'arachide', link: '/fr/news/technology/peanut-oil-processing-line-guide' },
                    { text: 'Guide de production de l\'huile de graines de thé', link: '/fr/news/technology/tea-seed-oil-processing-guide' },
                    { text: 'Guide de pressage à froid de l\'huile de lin', link: '/fr/news/technology/flaxseed-oil-cold-press-guide' },
                    { text: 'Guide de production de l\'huile de colza', link: '/fr/news/technology/rapeseed-oil-processing-guide' },
                    { text: 'Guide de pressage à froid de l\'huile de graines de courge', link: '/fr/news/technology/pumpkin-seed-oil-cold-press-guide' },
                    { text: 'Guide de production de l\'huile de pépins de raisin', link: '/fr/news/technology/grape-seed-oil-processing-guide' },
                    { text: 'Comparatif presse hydraulique et presse à vis', link: '/fr/news/technology/hydraulic-vs-screw-press' },
                    { text: 'Guide pressage à froid vs à chaud', link: '/fr/news/technology/cold-press-vs-hot-press' },
                    { text: 'Comment améliorer le rendement de la presse à huile', link: '/fr/news/technology/improve-oil-yield' },
                    { text: 'Processus optimaux d\'extraction d\'huile pour différentes cultures oléagineuses', link: '/fr/news/technology/oil-crops-process' },
                  ]
                }
              ]
            }
          ]
        },
        footer: {
          message: 'Choix des machines · Lignes de production · <a href="https://hydraulic-oil-press.com/" target="_blank" rel="noopener noreferrer">Site du fabricant</a>',
          copyright: `© ${CURRENT_YEAR} Shandong Shengshi Hecheng Machinery Co., Ltd`
        }
      }
    },
    vi: {
      label: 'Tiếng Việt',
      lang: 'vi-VN',
      title: 'Shengshi Hecheng Oil Press',
      description: 'Nhà sản xuất máy ép dầu chuyên nghiệp',
      themeConfig: {
        nav: buildPrimaryNav('vi'),
        sidebar: buildUnifiedSidebar('vi'),
        legacySidebar: {
          '/vi/products': [
            {
              text: 'Sản phẩm',
              collapsed: false,
              items: [
                { text: 'Tổng quan sản phẩm', link: '/vi/products/' },
                {
                  text: 'Dòng 300',
                  collapsed: true,
                  items: [
                    { text: 'Tổng quan dòng', link: '/vi/products/300' }
                  ]
                },
                {
                  text: 'Dòng 325',
                  collapsed: true,
                  items: [
                    { text: 'Tổng quan dòng', link: '/vi/products/325' }
                  ]
                },
                {
                  text: 'Dòng 355',
                  collapsed: true,
                  items: [
                    { text: 'Tổng quan dòng', link: '/vi/products/355' }
                  ]
                },
                {
                  text: 'Dòng 400',
                  collapsed: true,
                  items: [
                    { text: 'Tổng quan dòng', link: '/vi/products/400' }
                  ]
                },
                {
                  text: 'Dòng 426',
                  collapsed: true,
                  items: [
                    { text: 'Tổng quan dòng', link: '/vi/products/426' }
                  ]
                },
                {
                  text: 'Dòng 480',
                  collapsed: true,
                  items: [
                    { text: 'Tổng quan dòng', link: '/vi/products/480' }
                  ]
                },
                {
                  text: 'Dòng 500',
                  collapsed: true,
                  items: [
                    { text: 'Tổng quan dòng', link: '/vi/products/500' }
                  ]
                },
                {
                  text: 'Máy ép dầu thủy lực cỡ nhỏ kiểu Hàn Quốc',
                  collapsed: false,
                  items: [
                    { text: 'Tổng quan', link: '/vi/products/korean-type-small-hydraulic-oil-press-machine' },
                    { text: 'Máy ép dầu mè cỡ nhỏ', link: '/vi/products/small-sesame-oil-press-machine' },
                    { text: 'KHOP-10KG', link: '/vi/products/khop-10kg-small-hydraulic-oil-press-machine' },
                    { text: 'KHOP-15KG', link: '/vi/products/khop-15kg-small-hydraulic-oil-press-machine' },
                    { text: 'KHOP-20KG', link: '/vi/products/khop-20kg-small-hydraulic-oil-press-machine' }
                  ]
                },
                {
                  text: 'Thiết bị chiết rót và đóng gói',
                  collapsed: false,
                  items: [
                    { text: 'Tổng quan', link: '/vi/products/filling-equipment' },
                    { text: 'Giải pháp bao bì lắp đặt toàn diện', link: '/vi/solutions/filling-packages' },
                    ...canonicalizeFillingSidebarItems(viFillingSeriesSidebarItems),
                    {
                      text: 'Dòng thiết bị brewing',
                      collapsed: true,
                      items: [
                        { text: 'Trang series', link: '/vi/solutions/brewing/' },
                        {
                          text: 'Máy chiết rót chân không thấp',
                          collapsed: true,
                          items: buildLowVacuumModelItems('/vi', 'Trang series')
                        }
                      ]
                    }
                  ]
                },
                {
                  text: 'Thiết bị hỗ trợ',
                  collapsed: false,
                  items: [
                    { text: 'Tổng quan thiết bị', link: '/vi/products/supporting' },
                    {
                      text: 'Thiết bị tiền xử lý',
                      collapsed: false,
                      items: [
                        { text: 'Tổng quan', link: '/vi/products/pre-treatment' },
                        { text: 'Máy sàng mè', link: '/vi/products/sesame-screening-machine' },
                        { text: '11kw High Speed Pulverizer', link: '/vi/products/11kw-high-speed-pulverizer' },
                        { text: '27kw Electric Steamer', link: '/vi/products/27kw-electric-steamer' },
                        { text: 'Hemp and Flaxseed Grinding and Stirring Integrated Machine', link: '/vi/products/Hemp-and-flaxseed-grinding-and-stirring-integrated-machine' },
                        { text: 'Automatic Drum Roaster', link: '/vi/products/automatic-drum-roaster' },
                        { text: 'Cake Wrapping Machine', link: '/vi/products/cake-wrapping-machine' },
                        { text: 'Edible Oil Refining Equipment', link: '/vi/products/edible-oil-refining-equipment' },
                        { text: 'Feeding Crushing Frying Integrated Machine', link: '/vi/products/feeding-crushing-frying-integrated-machine' },
                        { text: 'Heat Conducting Oil Flat Bottom Frying Pan', link: '/vi/products/heat-conducting-oil-flat-bottom-frying-pan' },
                        { text: 'Pneumatic Filter Press', link: '/vi/products/pneumatic-filter-press' },
                        { text: 'Pre-Press Machine', link: '/vi/products/pre-press-machine' },
                        { text: 'Wood Fired Steamer', link: '/vi/products/wood-fired-steamer' },
                        { text: 'Wood Fired Thermal Oil Flat Bottom Wok', link: '/vi/products/wood-fired-thermal-oil-flat-bottom-wok' }
                      ]
                    },
                    {
                      text: 'Thiết bị sau xử lý',
                      collapsed: false,
                      items: [
                        { text: 'Tổng quan', link: '/vi/products/post-treatment' },
                        { text: 'Cake Pulverizer', link: '/vi/products/cake-pulverizer' },
                        { text: 'Edible Oil Refining Equipment', link: '/vi/products/edible-oil-refining-equipment' }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          '/vi/solutions': [
            {
              text: 'Giải pháp',
              collapsed: false,
              items: [
                { text: 'Tổng quan giải pháp', link: '/vi/solutions/' },
                {
                  text: 'Theo loại dầu',
                  collapsed: true,
                  items: [
                    { text: 'Tổng quan', link: '/vi/solutions/seed-oils' },
                    { text: 'Dầu đậu nành', link: '/vi/solutions/soybean' },
                    { text: 'Dầu lạc', link: '/vi/solutions/peanut' },
                    { text: 'Dầu vừng', link: '/vi/solutions/sesame' },
                    { text: 'Dầu cải', link: '/vi/solutions/rapeseed' },
                    { text: 'Dầu hướng dương', link: '/vi/solutions/sunflower' }
                  ]
                },
                {
                  text: 'Giải pháp chiết rót đồng bộ',
                  collapsed: true,
                  items: canonicalizeFillingSidebarItems(viFillingSeriesSidebarItems)
                },
                {
                  text: 'Gàu tải & vít tải',
                  collapsed: true,
                  items: [
                    { text: 'Tổng quan dòng gàu tải', link: '/vi/solutions/elevator-systems/' },
                    { text: 'Gàu tải băng TD', link: '/vi/solutions/elevator-systems/td-belt-bucket-elevator' },
                    { text: 'Gàu tải xích bản NE', link: '/vi/solutions/elevator-systems/ne-plate-chain-bucket-elevator' },
                    { text: 'Gàu tải xích vòng TH', link: '/vi/solutions/elevator-systems/th-ring-chain-bucket-elevator' },
                    { text: 'Gàu tải thẳng đứng TB', link: '/vi/solutions/elevator-systems/tb-vertical-elevator' },
                    { text: 'Gàu tải gàu thẳng đứng', link: '/vi/solutions/elevator-systems/vertical-bucket-elevator' },
                    { text: 'Gàu tải ngũ cốc', link: '/vi/solutions/elevator-systems/grain-elevator' },
                    { text: 'Vít tải máng U', link: '/vi/solutions/elevator-systems/u-trough-screw-conveyor' },
                    { text: 'Van xoay xả liệu cứng', link: '/vi/solutions/elevator-systems/rigid-rotary-airlock' },
                    { text: 'Van xoay inox', link: '/vi/solutions/elevator-systems/stainless-steel-rotary-airlock' },
                    { text: 'Van xoay chống nổ nhiệt cao', link: '/vi/solutions/elevator-systems/high-temperature-explosion-proof-rotary-airlock' }
                  ]
                }
              ]
            }
          ],
          '/vi/about': [
            {
              text: 'Về chúng tôi',
              collapsed: false,
              items: [
                { text: 'Giới thiệu', link: '/vi/about/' },
                { text: 'Văn hóa', link: '/vi/about/culture' },
                { text: 'Lịch sử phát triển', link: '/vi/about/history' },
                { text: 'Danh hiệu', link: '/vi/about/honors' },
                { text: 'Đội ngũ', link: '/vi/about/team' }
              ]
            }
          ],
          '/vi/advantages': [
            {
              text: 'Ưu điểm',
              collapsed: false,
              items: [
                { text: 'Tổng quan', link: '/vi/advantages/' },
                { text: 'Đổi mới công nghệ', link: '/vi/advantages/innovation' },
                { text: 'Chất lượng', link: '/vi/advantages/quality' },
                { text: 'Dịch vụ', link: '/vi/advantages/service' },
                { text: 'Trường hợp thành công', link: '/vi/advantages/cases' }
              ]
            }
          ],
          '/vi/news': [
            {
              text: 'Tin tức',
              collapsed: false,
              items: [
                { text: 'Tin tức', link: '/vi/news/' },
                { text: 'Tin công ty', link: '/vi/news/company' },
                { text: 'Tin ngành', link: '/vi/news/industry' },
                {
                  text: 'Kiến thức kỹ thuật',
                  collapsed: false,
                  items: [
                    { text: 'Nguyên liệu nào phù hợp nhất với máy ép dầu thủy lực', link: '/vi/news/technology/best-oilseeds-for-hydraulic-oil-press-machines' },
                    { text: 'Cách bắt đầu kinh doanh dầu ép lạnh quy mô nhỏ', link: '/vi/news/technology/how-to-start-small-cold-pressed-oil-business' },
                    { text: 'Cách chọn model máy ép dầu thủy lực', link: '/vi/news/technology/how-to-choose-hydraulic-oil-press-model' },
                    { text: 'Hướng dẫn ROI máy ép dầu thủy lực', link: '/vi/news/technology/hydraulic-oil-press-roi-guide' },
                    { text: 'Hướng dẫn chi phí dây chuyền sản xuất dầu ăn', link: '/vi/news/technology/edible-oil-production-line-cost-guide' },
                    { text: 'Một máy ép dầu thủy lực có thể chạy bao nhiêu mẻ mỗi ngày?', link: '/vi/news/technology/how-many-batches-can-hydraulic-oil-press-run-per-day' },
                    { text: 'Cách chọn ép nóng hay ép lạnh cho từng loại nguyên liệu dầu', link: '/vi/news/technology/how-to-choose-hot-press-or-cold-press-for-different-oilseeds' },
                    { text: 'Cách chọn bộ lọc dầu cho dây chuyền dầu ăn', link: '/vi/news/technology/how-to-choose-oil-filter-for-edible-oil-line' },
                    { text: 'Hướng dẫn xử lý sự cố máy ép dầu thủy lực', link: '/vi/news/technology/hydraulic-oil-press-troubleshooting-guide' },
                    { text: 'Danh sách bảo dưỡng máy ép dầu thủy lực', link: '/vi/news/technology/hydraulic-oil-press-maintenance-checklist' },
                    { text: 'Những sai lầm phổ biến khi mua máy ép dầu', link: '/vi/news/technology/common-mistakes-when-buying-oil-press-machine' },
                    { text: 'Cách lọc và đóng gói dầu ăn sau khi ép', link: '/vi/news/technology/how-to-filter-and-package-edible-oil-after-pressing' },
                    { text: 'Hướng dẫn dây chuyền sản xuất dầu mè', link: '/vi/news/technology/sesame-oil-production-line-guide' },
                    { text: 'Hướng dẫn ép lạnh dầu óc chó', link: '/vi/news/technology/walnut-oil-cold-press-guide' },
                    { text: 'Hướng dẫn dây chuyền sản xuất dầu lạc', link: '/vi/news/technology/peanut-oil-processing-line-guide' },
                    { text: 'Hướng dẫn chế biến dầu hạt trà', link: '/vi/news/technology/tea-seed-oil-processing-guide' },
                    { text: 'Hướng dẫn ép lạnh dầu hạt lanh', link: '/vi/news/technology/flaxseed-oil-cold-press-guide' },
                    { text: 'Hướng dẫn chế biến dầu hạt cải', link: '/vi/news/technology/rapeseed-oil-processing-guide' },
                    { text: 'Hướng dẫn ép lạnh dầu hạt bí', link: '/vi/news/technology/pumpkin-seed-oil-cold-press-guide' },
                    { text: 'Hướng dẫn chế biến dầu hạt nho', link: '/vi/news/technology/grape-seed-oil-processing-guide' },
                    { text: 'So sánh máy ép dầu thủy lực và máy ép trục vít', link: '/vi/news/technology/hydraulic-vs-screw-press' },
                    { text: 'Hướng dẫn so sánh ép lạnh và ép nóng', link: '/vi/news/technology/cold-press-vs-hot-press' },
                    { text: 'Cách tăng tỷ lệ thu dầu', link: '/vi/news/technology/improve-oil-yield' },
                    { text: 'Quy trình ép tốt nhất cho từng loại nguyên liệu', link: '/vi/news/technology/oil-crops-process' },
                  ]
                }
              ]
            }
          ]
        },
        footer: {
          message: 'Chọn máy · Dây chuyền sản xuất · <a href="https://hydraulic-oil-press.com/" target="_blank" rel="noopener noreferrer">Website nhà sản xuất</a>',
          copyright: `© ${CURRENT_YEAR} Shandong Shengshi Hecheng Machinery Co., Ltd`
        }
      }
    },
    bn: {
      label: 'বাংলা',
      lang: 'bn-BD',
      title: 'শেংশি হেচেং হাইড্রোলিক অয়েল প্রেস',
      description: 'পেশাদার অয়েল প্রেস ম্যানুফ্যাকচারার',
      themeConfig: {
        nav: buildPrimaryNav('bn'),
        sidebar: buildUnifiedSidebar('bn'),
        legacySidebar: {
          '/bn/products': [
            {
              text: 'পণ্য ও দর',
              collapsed: false,
              items: [
                { text: 'পণ্যের সারসংক্ষেপ ও দর', link: '/bn/products/' },
                {
                  text: '৩০০ সিরিজ দর',
                  collapsed: true,
                  items: [
                    { text: 'সিরিজ ওভারভিউ ও দর', link: '/bn/products/300' }
                  ]
                },
                {
                  text: '৩২৫ সিরিজ দর',
                  collapsed: true,
                  items: [
                    { text: 'সিরিজ ওভারভিউ ও দর', link: '/bn/products/325' }
                  ]
                },
                {
                  text: '৩৫৫ সিরিজ দর',
                  collapsed: true,
                  items: [
                    { text: 'সিরিজ ওভারভিউ ও দর', link: '/bn/products/355' }
                  ]
                },
                {
                  text: '৪০০ সিরিজ দর',
                  collapsed: true,
                  items: [
                    { text: 'সিরিজ ওভারভিউ ও দর', link: '/bn/products/400' }
                  ]
                },
                {
                  text: '৪২৬ সিরিজ দর',
                  collapsed: true,
                  items: [
                    { text: 'সিরিজ ওভারভিউ ও দর', link: '/bn/products/426' }
                  ]
                },
                {
                  text: '৪৮০ সিরিজ দর',
                  collapsed: true,
                  items: [
                    { text: 'সিরিজ ওভারভিউ ও দর', link: '/bn/products/480' }
                  ]
                },
                {
                  text: '৫০০ সিরিজ দর',
                  collapsed: true,
                  items: [
                    { text: 'সিরিজ ওভারভিউ ও দর', link: '/bn/products/500' }
                  ]
                },
                {
                  text: 'কোরিয়ান টাইপ ছোট হাইড্রোলিক অয়েল প্রেস দর',
                  collapsed: false,
                  items: [
                    { text: 'ওভারভিউ', link: '/bn/products/korean-type-small-hydraulic-oil-press-machine' },
                    { text: 'ছোট তিল অয়েল প্রেস মেশিন', link: '/bn/products/small-sesame-oil-press-machine' },
                    { text: 'KHOP-10KG', link: '/bn/products/khop-10kg-small-hydraulic-oil-press-machine' },
                    { text: 'KHOP-15KG', link: '/bn/products/khop-15kg-small-hydraulic-oil-press-machine' },
                    { text: 'KHOP-20KG', link: '/bn/products/khop-20kg-small-hydraulic-oil-press-machine' }
                  ]
                },
                {
                  text: 'ফিলিং ও প্যাকেজিং যন্ত্রপাতি দর',
                  collapsed: false,
                  items: [
                    { text: 'ওভারভিউ', link: '/bn/products/filling-equipment' },
                    { text: 'বোতলজাতকরণ সাপোর্টিং সলিউশন ওভারভিউ', link: '/bn/solutions/filling-packages' },
                    ...canonicalizeFillingSidebarItems(bnFillingSeriesSidebarItems),
                    {
                      text: 'ব্রুইং যন্ত্রপাতি সিরিজ',
                      collapsed: true,
                      items: [
                        { text: 'সিরিজ পৃষ্ঠা', link: '/bn/solutions/brewing/' },
                        {
                          text: 'লো ভ্যাকুয়াম ফিলিং মেশিন',
                          collapsed: true,
                          items: buildLowVacuumModelItems('/bn', 'সিরিজ পৃষ্ঠা')
                        }
                      ]
                    }
                  ]
                },
                {
                  text: 'যন্ত্রপাতি ব্যবহারের নির্দেশিকা',
                  collapsed: false,
                  items: [
                    { text: 'ওভারভিউ', link: '/bn/products/instruction-manual' }
                  ]
                },
                {
                  text: 'কাস্টমাইজড হাইড্রোলিক অয়েল প্রেস',
                  collapsed: false,
                  items: [
                    { text: 'ওভারভিউ', link: '/bn/products/customized-hydraulic-oil-press' }
                  ]
                },
                {
                  text: 'গ্রাহক অর্ডার শিপিং ভিডিও',
                  collapsed: false,
                  items: [
                    { text: 'ওভারভিউ', link: '/bn/products/customer-order-shipping-video' }
                  ]
                },
                {
                  text: 'সহায়ক যন্ত্রপাতি দর',
                  collapsed: false,
                  items: [
                    { text: 'যন্ত্রপাতি ওভারভিউ', link: '/bn/products/supporting' },
                    {
                      text: 'প্রাক-প্রক্রিয়াকরণ যন্ত্রপাতি',
                      collapsed: false,
                      items: [
                        { text: 'ওভারভিউ', link: '/bn/products/pre-treatment' },
                        { text: 'তিল স্ক্রিনিং মেশিন', link: '/bn/products/sesame-screening-machine' },
                        { text: '১১কিলোওয়াট উচ্চ গতির পিষক', link: '/bn/products/11kw-high-speed-pulverizer' },
                        { text: '২৭কিলোওয়াট বৈদ্যুতিক স্টিমার', link: '/bn/products/27kw-electric-steamer' },
                        { text: 'শণ এবং তিসি বীজ পিষণ এবং মিশ্রণ ইন্টিগ্রেটেড মেশিন', link: '/bn/products/Hemp-and-flaxseed-grinding-and-stirring-integrated-machine' },
                        { text: 'স্বয়ংক্রিয় ড্রাম রোস্টার', link: '/bn/products/automatic-drum-roaster' },
                        { text: 'কেক মোড়ানো মেশিন', link: '/bn/products/cake-wrapping-machine' },
                        { text: 'ফিডিং ক্রাশিং ফ্রাইং ইন্টিগ্রেটেড মেশিন', link: '/bn/products/feeding-crushing-frying-integrated-machine' },
                        { text: 'তাপ পরিবাহী তেল ফ্ল্যাট বটম ফ্রাইং প্যান', link: '/bn/products/heat-conducting-oil-flat-bottom-frying-pan' },
                        { text: 'নিউম্যাটিক ফিল্টার প্রেস', link: '/bn/products/pneumatic-filter-press' },
                        { text: 'প্রি-প্রেস মেশিন', link: '/bn/products/pre-press-machine' },
                        { text: 'কাঠের আগুনের স্টিমার', link: '/bn/products/wood-fired-steamer' },
                        { text: 'কাঠের আগুনের তাপীয় তেল ফ্ল্যাট বটম ওয়াক', link: '/bn/products/wood-fired-thermal-oil-flat-bottom-wok' }
                      ]
                    },
                    {
                      text: 'পোস্ট-প্রক্রিয়াকরণ যন্ত্রপাতি',
                      collapsed: false,
                      items: [
                        { text: 'ওভারভিউ', link: '/bn/products/post-treatment' },
                        { text: 'কেক পিষক', link: '/bn/products/cake-pulverizer' },
                        { text: 'ভোজ্য তেল পরিশোধন যন্ত্রপাতি', link: '/bn/products/edible-oil-refining-equipment' }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          '/bn/solutions': [
            {
              text: 'সমাধান ও দর',
              collapsed: false,
              items: [
                { text: 'সমাধান ওভারভিউ ও দর', link: '/bn/solutions/' },
                {
                  text: 'তেলের ধরন অনুসারে (দর)',
                  collapsed: true,
                  items: [
                    {
                      text: '🌾 শস্য এবং বীজ তেল',
                      collapsed: true,
                      items: [
                        { text: 'শস্য এবং বীজ তেল ওভারভিউ', link: '/bn/solutions/seed-oils' },
                        { text: '🌱 সয়াবিন তেল', link: '/bn/solutions/soybean' },
                        { text: '🥜 চিনাবাদাম তেল', link: '/bn/solutions/peanut' },
                        { text: '🌰 তিলের তেল', link: '/bn/solutions/sesame' },
                        { text: '🌿 রেপসিড তেল', link: '/bn/solutions/rapeseed' },
                        { text: '🌻 সূর্যমুখী তেল', link: '/bn/solutions/sunflower' },
                        { text: '🧵 তুলাবীজ তেল', link: '/bn/solutions/cottonseed' },
                        { text: '🌾 তিসি বীজ তেল', link: '/bn/solutions/flaxseed' },
                        { text: '🍵 চা বীজ তেল', link: '/bn/solutions/tea-seed' },
                        { text: '🌱 পেরিলা তেল', link: '/bn/solutions/perilla' }
                      ]
                    },
                    {
                      text: '🥜 বাদাম তেল',
                      collapsed: true,
                      items: [
                        { text: 'বাদাম তেল ওভারভিউ', link: '/bn/solutions/nuts' },
                        { text: '🥥 নারকেল তেল', link: '/bn/solutions/coconut' },
                        { text: '🌴 পাম তেল', link: '/bn/solutions/palm' },
                        { text: '🥜 আখরোট তেল', link: '/bn/solutions/walnut' },
                        { text: '🌰 বাদাম তেল', link: '/bn/solutions/almond' },
                        { text: '🌰 হ্যাজেলনাট তেল', link: '/bn/solutions/hazelnut' },
                        { text: '🥜 কাজু তেল', link: '/bn/solutions/cashew' },
                        { text: '🥜 পেস্তা তেল', link: '/bn/solutions/pistachio' }
                      ]
                    },
                    {
                      text: '🥑 ফলের তেল',
                      collapsed: true,
                      items: [
                        { text: 'ফলের তেল ওভারভিউ', link: '/bn/solutions/fruits' },
                        { text: '🥑 অ্যাভোকাডো তেল', link: '/bn/solutions/avocado' },
                        { text: '🍇 আঙ্গুর বীজ তেল', link: '/bn/solutions/grape-seed' },
                        { text: '🎃 কুমড়া বীজ তেল', link: '/bn/solutions/pumpkin-seed' },
                        { text: '🍉 তরমুজ বীজ তেল', link: '/bn/solutions/watermelon-seed' },
                        { text: '🍑 পীচ কার্নেল তেল', link: '/bn/solutions/peach-kernel' },
                        { text: '🌰 এপ্রিকট কার্নেল তেল', link: '/bn/solutions/apricot-kernel' }
                      ]
                    },
                    {
                      text: '⚙️ বিশেষ তেল',
                      collapsed: true,
                      items: [
                        { text: 'বিশেষ তেল ওভারভিউ', link: '/bn/solutions/special-oils' },
                        { text: '🍚 চালের ভুসি তেল', link: '/bn/solutions/rice-bran' },
                        { text: '🌽 ভুট্টা জীবাণু তেল', link: '/bn/solutions/corn-germ' },
                        { text: '🌿 ক্যাস্টর বীজ তেল', link: '/bn/solutions/castor-seed' },
                        { text: '🌶️ মরিচ বীজ তেল', link: '/bn/solutions/chili-seed' },
                        { text: '🍇 আঙ্গুর বীজ তেল', link: '/bn/solutions/grape-seed' },
                        { text: '🌾 বাকউইট তেল', link: '/bn/solutions/buckwheat' }
                      ]
                    }
                  ]
                },
                {
                  text: 'ফিলিং সহায়ক সমাধান (দর)',
                  collapsed: true,
                  items: canonicalizeFillingSidebarItems(bnFillingSeriesSidebarItems)
                },
                {
                  text: 'এলিভেটর ও কনভেয়র',
                  collapsed: true,
                  items: [
                    { text: 'এলিভেটর সিরিজ ওভারভিউ', link: '/bn/solutions/elevator-systems/' },
                    { text: 'TD বেল্ট বাকেট এলিভেটর', link: '/bn/solutions/elevator-systems/td-belt-bucket-elevator' },
                    { text: 'NE প্লেট-চেইন এলিভেটর', link: '/bn/solutions/elevator-systems/ne-plate-chain-bucket-elevator' },
                    { text: 'TH রিং-চেইন এলিভেটর', link: '/bn/solutions/elevator-systems/th-ring-chain-bucket-elevator' },
                    { text: 'TB ভার্টিক্যাল এলিভেটর', link: '/bn/solutions/elevator-systems/tb-vertical-elevator' },
                    { text: 'ভার্টিক্যাল বাকেট এলিভেটর', link: '/bn/solutions/elevator-systems/vertical-bucket-elevator' },
                    { text: 'শস্য এলিভেটর', link: '/bn/solutions/elevator-systems/grain-elevator' },
                    { text: 'U-ট্রফ স্ক্রু কনভেয়র', link: '/bn/solutions/elevator-systems/u-trough-screw-conveyor' },
                    { text: 'রিজিড রোটারি এয়ারলক', link: '/bn/solutions/elevator-systems/rigid-rotary-airlock' },
                    { text: 'স্টেইনলেস স্টিল এয়ারলক', link: '/bn/solutions/elevator-systems/stainless-steel-rotary-airlock' },
                    { text: 'উচ্চ-তাপ বিস্ফোরণ-প্রতিরোধী এয়ারলক', link: '/bn/solutions/elevator-systems/high-temperature-explosion-proof-rotary-airlock' }
                  ]
                }
              ]
            }
          ],
          '/bn/about': [
            {
              text: 'আমাদের সম্পর্কে',
              collapsed: false,
              items: [
                { text: 'কোমপানি প্রোফাইল', link: '/bn/about/' },
                { text: 'কর্পোরেট কালচার', link: '/bn/about/culture' },
                { text: 'উন্নয়ন ইতিহাস', link: '/bn/about/history' },
                { text: 'সম্মান এবং যোগ্যতা', link: '/bn/about/honors' },
                { text: 'টিম পরিচিতি', link: '/bn/about/team' }
              ]
            }
          ],
          '/bn/advantages': [
            {
              text: 'কোমপানির সুবিধাসমূহ',
              collapsed: false,
              items: [
                { text: 'সুবিধা ওভারভিউ', link: '/bn/advantages/' },
                { text: 'প্রযুক্তিগত উদ্ভাবন', link: '/bn/advantages/innovation' },
                { text: 'গুণমান নিশ্চিতি', link: '/bn/advantages/quality' },
                { text: 'সেবা এবং সহায়তা', link: '/bn/advantages/service' },
                { text: 'সাফল্যের কেস', link: '/bn/advantages/cases' }
              ]
            }
          ],
          '/bn/news': [
            {
              text: 'সংবাদ',
              collapsed: false,
              items: [
                { text: 'সংবাদ কেন্দ্র', link: '/bn/news/' },
                { text: 'কোমপানি সংবাদ', link: '/bn/news/company' },
                { text: 'শিল্প সংবাদ', link: '/bn/news/industry' },
                {
                  text: 'প্রযুক্তিগত জ্ঞান',
                  collapsed: false,
                  items: [
                    { text: 'হাইড্রোলিক অয়েল প্রেসের জন্য কোন তেলবীজ সবচেয়ে উপযুক্ত', link: '/bn/news/technology/best-oilseeds-for-hydraulic-oil-press-machines' },
                    { text: 'কীভাবে ছোট কোল্ড-প্রেসড তেল ব্যবসা শুরু করবেন', link: '/bn/news/technology/how-to-start-small-cold-pressed-oil-business' },
                    { text: 'কীভাবে হাইড্রোলিক অয়েল প্রেস মডেল নির্বাচন করবেন', link: '/bn/news/technology/how-to-choose-hydraulic-oil-press-model' },
                    { text: 'হাইড্রোলিক অয়েল প্রেস ROI গাইড', link: '/bn/news/technology/hydraulic-oil-press-roi-guide' },
                    { text: 'ভোজ্য তেল উৎপাদন লাইন খরচ গাইড', link: '/bn/news/technology/edible-oil-production-line-cost-guide' },
                    { text: 'একটি হাইড্রোলিক অয়েল প্রেস দিনে কত ব্যাচ চালাতে পারে?', link: '/bn/news/technology/how-many-batches-can-hydraulic-oil-press-run-per-day' },
                    { text: 'বিভিন্ন তেলবীজের জন্য হট প্রেস না কোল্ড প্রেস কীভাবে নির্বাচন করবেন', link: '/bn/news/technology/how-to-choose-hot-press-or-cold-press-for-different-oilseeds' },
                    { text: 'ভোজ্য তেল লাইনের জন্য অয়েল ফিল্টার কীভাবে নির্বাচন করবেন', link: '/bn/news/technology/how-to-choose-oil-filter-for-edible-oil-line' },
                    { text: 'হাইড্রোলিক অয়েল প্রেস ট্রাবলশুটিং গাইড', link: '/bn/news/technology/hydraulic-oil-press-troubleshooting-guide' },
                    { text: 'হাইড্রোলিক অয়েল প্রেস মেইনটেন্যান্স চেকলিস্ট', link: '/bn/news/technology/hydraulic-oil-press-maintenance-checklist' },
                    { text: 'অয়েল প্রেস মেশিন কেনার সময় সাধারণ ভুল', link: '/bn/news/technology/common-mistakes-when-buying-oil-press-machine' },
                    { text: 'প্রেসের পর ভোজ্য তেল কীভাবে ফিল্টার ও প্যাকেজ করবেন', link: '/bn/news/technology/how-to-filter-and-package-edible-oil-after-pressing' },
                    { text: 'তিলের তেল উৎপাদন লাইন গাইড', link: '/bn/news/technology/sesame-oil-production-line-guide' },
                    { text: 'আখরোট তেলের কোল্ড প্রেস গাইড', link: '/bn/news/technology/walnut-oil-cold-press-guide' },
                    { text: 'চিনাবাদাম তেল প্রসেসিং লাইন গাইড', link: '/bn/news/technology/peanut-oil-processing-line-guide' },
                    { text: 'চা বীজ তেল প্রক্রিয়াকরণ গাইড', link: '/bn/news/technology/tea-seed-oil-processing-guide' },
                    { text: 'তিসি তেলের কোল্ড প্রেস গাইড', link: '/bn/news/technology/flaxseed-oil-cold-press-guide' },
                    { text: 'রেপসিড তেল প্রক্রিয়াকরণ গাইড', link: '/bn/news/technology/rapeseed-oil-processing-guide' },
                    { text: 'কুমড়োর বীজ তেলের কোল্ড প্রেস গাইড', link: '/bn/news/technology/pumpkin-seed-oil-cold-press-guide' },
                    { text: 'আঙুর বীজ তেল প্রক্রিয়াকরণ গাইড', link: '/bn/news/technology/grape-seed-oil-processing-guide' },
                    { text: 'হাইড্রোলিক অয়েল প্রেস বনাম স্ক্রু প্রেস', link: '/bn/news/technology/hydraulic-vs-screw-press' },
                    { text: 'কোল্ড প্রেস বনাম হট প্রেস গাইড', link: '/bn/news/technology/cold-press-vs-hot-press' },
                    { text: 'কীভাবে অয়েল ইয়েল্ড বাড়ানো যায়', link: '/bn/news/technology/improve-oil-yield' },
                    { text: 'বিভিন্ন অয়েল ক্রপের সর্বোত্তম অয়েল প্রেস প্রক্রিয়া', link: '/bn/news/technology/oil-crops-process' },
                  ]
                }
              ]
            }
          ]
        },
        footer: {
          message: 'মেশিন নির্বাচন · উৎপাদন লাইন · <a href="https://hydraulic-oil-press.com/" target="_blank" rel="noopener noreferrer">প্রস্তুতকারকের ওয়েবসাইট</a>',
          copyright: `© ${CURRENT_YEAR} Shandong Shengshi Hecheng Machinery Co., Ltd`
        }
      }
    }
  },

  themeConfig: {
    // 全局搜索配置
    search: {
      provider: 'local'
    },
    // 社交 ссылки - уже удалены, используем иконки в пользовательском макете
    socialLinks: [],
    // Custom locale switchers only preserve the current route when a translated page exists.
    i18nRouting: false,
    // 启用完整的TOC（目录）
    outline: {
      level: [2, 6],
      label: 'On this page'
    }
  }
}
