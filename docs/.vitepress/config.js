export default {
  lastUpdated: true,
  sitemap: {
    hostname: 'https://hydraulicoilpressing.opchn.com/',
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: 0.8,
    urls: [
      // 确保包含所有语言版本的首页
      { url: '/', changefreq: 'daily', priority: 1.0 },
      { url: '/zh/', changefreq: 'daily', priority: 1.0 },
      { url: '/en/', changefreq: 'daily', priority: 1.0 },
      { url: '/ru/', changefreq: 'daily', priority: 1.0 },
      { url: '/fr/', changefreq: 'daily', priority: 1.0 },
      { url: '/bn/', changefreq: 'daily', priority: 1.0 },
      { url: '/vi/', changefreq: 'daily', priority: 1.0 }
    ]
  },
  title: 'Shengshi Hecheng Oil Press',
  description: 'Professional Oil Press Manufacturer',
  cleanUrls: true,
  base: '/',
  ignoreDeadLinks: true,
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: undefined
        }
      }
    }
  },
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ['meta', { name: 'description', content: 'Professional Oil Press Manufacturer - Shengshi Hecheng' }],
    ['meta', { name: 'keywords', content: 'oil press, hydraulic press, oil extraction, oil press machine' }],
    ['meta', { name: 'author', content: 'Shengshi Hecheng' }],
    ['meta', { name: 'baidu-site-verification', content: 'codeva-wjCh7UrQj8' }],
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=AW-17559313965' }],
    ['script', {}, `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-17559313965');
    `],
    // GA4 - Google Analytics 4
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-ZQC83SKWK2' }],
    ['script', {}, `
  // If gtag already initialized above (for AW), simply configure GA4
  gtag('config', 'G-ZQC83SKWK2');
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
      lang: 'en',
      themeConfig: {
        nav: [
          { text: '🏠 Home', link: '/en/' },
          {
            text: '🛠️ Products',
            link: '/en/products/',
            items: [
              { text: '📋 Product Overview', link: '/en/products/' },
              { text: '300 Series', link: '/en/products/300' },
              { text: '325 Series', link: '/en/products/325' },
              { text: '355 Series', link: '/en/products/355' },
              { text: '400 Series', link: '/en/products/400' },
              { text: '426 Series', link: '/en/products/426' },
              { text: '480 Series', link: '/en/products/480' },
              { text: '500 Series', link: '/en/products/500' },
              { text: '🔧 Supporting Equipment', link: '/en/products/supporting' }
            ]
          },
          {
            text: '💡 Solutions',
            link: '/en/solutions/',
            items: [
              { text: '📚 Solutions Overview', link: '/en/solutions/' },
              { text: '🌾 By Oil Type', link: '/en/solutions/seed-oils' },
              { text: '📏 By Scale', link: '/en/solutions/small-workshop' },
              { text: '🏭 Filling Supporting Solutions', link: '/en/solutions/filling' }
            ]
          },
          { text: '⭐ Advantages', link: '/en/advantages/' },
          { text: '📰 News', link: '/en/news/' },
          { text: '👥 About Us', link: '/en/about/' },
          { text: '📞 Contact Us', link: '/en/contact/' }
        ],
        sidebar: {
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
                        { text: 'Flaxseed and Rapeseed Grinding and Stirring Integrated Machine', link: '/en/products/Flaxseed-and-rapeseed-grinding-and-stirring-integrated-machine' },
                        { text: 'Automatic Drum Roaster', link: '/en/products/automatic-drum-roaster' },
                        { text: 'Cake Wrapping Machine', link: '/en/products/cake-wrapping-machine' },
                        { text: 'Edible Oil Refining Equipment', link: '/en/products/edible-oil-refining-equipment' },
                        { text: 'Feeding Crushing Frying Integrated Machine', link: '/en/products/feeding-crushing-frying-integrated-machine' },
                        { text: 'Heat Conducting Oil Flat Bottom Frying Pan', link: '/en/products/heat-conducting-oil-flat-bottom-frying-pan' },
                        { text: 'Pneumatic Filter Press', link: '/en/products/pneumatic-filter-press' },
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
                        { text: 'Cake Pulverizer', link: '/en/products/cake-pulverizer' }
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
                  text: 'By Scale',
                  collapsed: true,
                  items: [
                    { text: '🏠 Small Oil Mill Solution', link: '/en/solutions/small-workshop' },
                    { text: '🏭 Medium Oil Factory Solution', link: '/en/solutions/medium-factory' },
                    { text: '🏢 Large Industrial Solution', link: '/en/solutions/large-industrial' },
                    { text: '🔬 Special Oil Processing Solution', link: '/en/solutions/special-oil' }
                  ]
                },
                {
                  text: 'Filling Supporting Solutions',
                  collapsed: true,
                  items: [
                    { text: 'Filling Packages Overview', link: '/en/solutions/filling-packages' },
                    { text: 'Bottle Washing Machine Series', link: '/en/solutions/bottle-washing/' },
                    { text: 'Filling Machine Series', link: '/en/solutions/filling/' },
                    { text: 'Light Inspection Machine Series', link: '/en/solutions/light-inspection/' },
                    { text: 'Sealing Machine Series', link: '/en/solutions/sealing/' },
                    { text: 'Corking Machine Series', link: '/en/solutions/corking/' },
                    { text: 'Cap Shrinking Machine Series', link: '/en/solutions/cap-shrinking/' },
                    { text: 'Drying Machine Series', link: '/en/solutions/drying/' },
                    { text: 'Labeling Machine Series', link: '/en/solutions/labeling/' },
                    { text: 'Laser Coding Machine Series', link: '/en/solutions/laser-coding/' },
                    { text: 'Packing and Palletizing', link: '/en/solutions/packing-palletizing/' },
                    { text: 'Fruit and Vegetable Pre-processing Equipment', link: '/en/solutions/fruit-veg-processing/' },
                    { text: 'Filtering Machine Series', link: '/en/solutions/filtering/' },
                    { text: 'Brewing Equipment Series', link: '/en/solutions/brewing/' },
                    { text: 'Dairy Processing Equipment', link: '/en/solutions/dairy-processing/' }
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
                { text: 'Company News', link: '/en/news/company' }
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
        nav: [
          { text: '首页', link: '/zh/' },
          {
            text: '产品系列',
            link: '/zh/products/',
            items: [
              { text: '产品概览', link: '/zh/products/' },
              { text: '300系列', link: '/zh/products/300' },
              { text: '325系列', link: '/zh/products/325' },
              { text: '355系列', link: '/zh/products/355' },
              { text: '400系列', link: '/zh/products/400' },
              { text: '426系列', link: '/zh/products/426' },
              { text: '480系列', link: '/zh/products/480' },
              { text: '500系列', link: '/zh/products/500' },
              { text: '设备使用说明书', link: '/zh/products/instruction-manual' },
              { text: '客户定制款液压榨油机', link: '/zh/products/customized-hydraulic-oil-press' },
              { text: '客户订货发货视频', link: '/zh/products/customer-order-shipping-video' },
              { text: '配套设备', link: '/zh/products/supporting' }
            ]
          },
          {
            text: '解决方案',
            link: '/zh/solutions/',
            items: [
              { text: '方案概览', link: '/zh/solutions/' },
              { text: '按油料类型', link: '/zh/solutions/seed-oils' },
              { text: '灌装配套方案', link: '/zh/solutions/filling' }
            ]
          },
          { text: '公司优势', link: '/zh/advantages/' },
          { text: '新闻资讯', link: '/zh/news/' },
          { text: '关于我们', link: '/zh/about/' },
          { text: '联系我们', link: '/zh/contact/' }
        ],
        sidebar: {
          '/zh/products': [
            {
              text: '产品系列',
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
                        { text: '11kw高速粉碎机', link: '/zh/products/11kw-high-speed-pulverizer' },
                        { text: '27kw电蒸锅', link: '/zh/products/27kw-electric-steamer' },
                        { text: '胡麻亚麻籽研磨搅拌一体机', link: '/zh/products/Hemp-and-flaxseed-grinding-and-stirring-integrated-machine' },
                        { text: '自动滚筒炒锅', link: '/zh/products/automatic-drum-roaster' },
                        { text: '饼粕包饼机', link: '/zh/products/cake-wrapping-machine' },
                        { text: '上料/粉碎/炒制一体机', link: '/zh/products/feeding-crushing-frying-integrated-machine' },
                        { text: '导热油平底煎锅', link: '/zh/products/heat-conducting-oil-flat-bottom-frying-pan' },
                        { text: '气动滤油机', link: '/zh/products/pneumatic-filter-press' },
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
                {
                  text: '按油料类型',
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
                  text: '灌装配套方案',
                  collapsed: true,
                  items: [
                    { text: '灌装配套方案概览', link: '/zh/solutions/filling-packages' },
                    { text: '冲瓶机系列', link: '/zh/solutions/bottle-washing/' },
                    { text: '灌装机系列', link: '/zh/solutions/filling/' },
                    { text: '灯检机系列', link: '/zh/solutions/light-inspection/' },
                    { text: '封口机系列', link: '/zh/solutions/sealing/' },
                    { text: '打塞机系列', link: '/zh/solutions/corking/' },
                    { text: '胶帽热缩机系列', link: '/zh/solutions/cap-shrinking/' },
                    { text: '吹干机系列', link: '/zh/solutions/drying/' },
                    { text: '贴标机系列', link: '/zh/solutions/labeling/' },
                    { text: '激光打码机系列', link: '/zh/solutions/laser-coding/' },
                    { text: '装箱、码垛', link: '/zh/solutions/packing-palletizing/' },
                    { text: '蔬果类前期处理设备', link: '/zh/solutions/fruit-veg-processing/' },
                    { text: '过滤机系列', link: '/zh/solutions/filtering/' },
                    { text: '酿酒设备系列', link: '/zh/solutions/brewing/' },
                    { text: '奶类加工设备', link: '/zh/solutions/dairy-processing/' }
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
                { text: '技术知识', link: '/zh/news/technology' }
              ]
            }
          ]
        },
        footer: {
          message: '专业制造 · 值得信赖',
          copyright: '© 2025 山东盛世赫程机械有限公司'
        }
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'Shengshi Hecheng Oil Press',
      description: 'Professional Oil Press Manufacturer',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          {
            text: 'Products',
            link: '/en/products/',
            items: [
              { text: 'Product Overview', link: '/en/products/' },
              { text: '300 Series', link: '/en/products/300' },
              { text: '325 Series', link: '/en/products/325' },
              { text: '355 Series', link: '/en/products/355' },
              { text: '400 Series', link: '/en/products/400' },
              { text: '426 Series', link: '/en/products/426' },
              { text: '480 Series', link: '/en/products/480' },
              { text: '500 Series', link: '/en/products/500' },
              { text: 'Equipment Instruction Manual', link: '/en/products/instruction-manual' },
              { text: 'Customized Hydraulic Oil Press', link: '/en/products/customized-hydraulic-oil-press' },
              { text: 'Customer Order Shipping Video', link: '/en/products/customer-order-shipping-video' },
              { text: 'Supporting Equipment', link: '/en/products/supporting' }
            ]
          },
          {
            text: 'Solutions',
            link: '/en/solutions/',
            items: [
              { text: 'Solutions Overview', link: '/en/solutions/' },
              { text: 'By Oil Type', link: '/en/solutions/seed-oils' },
              { text: 'Filling Supporting Solutions', link: '/en/solutions/filling' }
            ]
          },
          { text: 'Advantages', link: '/en/advantages/' },
          { text: 'News', link: '/en/news/' },
          { text: 'About Us', link: '/en/about/' },
          { text: 'Contact Us', link: '/en/contact/' }
        ],
        sidebar: {
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
                        { text: 'Pneumatic Filter Press', link: '/en/products/pneumatic-filter-press' },
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
                  text: 'Filling supporting solution',
                  collapsed: true,
                  items: [
                    { text: 'Bottle Washing Machine Series', link: '/en/solutions/bottle-washing/' },
                    { text: 'Filling Machine Series', link: '/en/solutions/filling/' },
                    { text: 'Light Inspection Machine Series', link: '/en/solutions/light-inspection/' },
                    { text: 'Sealing Machine Series', link: '/en/solutions/sealing/' },
                    { text: 'Corking Machine Series', link: '/en/solutions/corking/' },
                    { text: 'Cap Shrinking Machine Series', link: '/en/solutions/cap-shrinking/' },
                    { text: 'Drying Machine Series', link: '/en/solutions/drying/' },
                    { text: 'Labeling Machine Series', link: '/en/solutions/labeling/' },
                    { text: 'Laser Coding Machine Series', link: '/en/solutions/laser-coding/' },
                    { text: 'Packing and Palletizing', link: '/en/solutions/packing-palletizing/' },
                    { text: 'Fruit and Vegetable Pre-processing Equipment', link: '/en/solutions/fruit-veg-processing/' },
                    { text: 'Filtering Machine Series', link: '/en/solutions/filtering/' },
                    { text: 'Brewing Equipment Series', link: '/en/solutions/brewing/' },
                    { text: 'Dairy Processing Equipment', link: '/en/solutions/dairy-processing/' }
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
          message: 'Professional Manufacturing · Trustworthy Quality',
          copyright: '© 2025 Shandong Shengshi Hecheng Machinery Co., Ltd'
        }
      }
    },
    ru: {
      label: 'Русский',
      lang: 'ru-RU',
      title: 'Гидравлический маслобойный пресс Shengshi Hecheng',
      description: 'Профессиональный производитель маслобойных прессов',
      themeConfig: {
        nav: [
          { text: 'Главная', link: '/ru/' },
          {
            text: 'Продукты',
            link: '/ru/products/',
            items: [
              { text: 'Обзор продуктов', link: '/ru/products/' },
              { text: 'Серия 300', link: '/ru/products/300' },
              { text: 'Серия 325', link: '/ru/products/325' },
              { text: 'Серия 355', link: '/ru/products/355' },
              { text: 'Серия 400', link: '/ru/products/400' },
              { text: 'Серия 426', link: '/ru/products/426' },
              { text: 'Серия 480', link: '/ru/products/480' },
              { text: 'Серия 500', link: '/ru/products/500' },
              { text: 'Руководство по Эксплуатации Оборудования', link: '/ru/products/instruction-manual' },
              { text: 'Гидравлический маслопресс на заказ', link: '/ru/products/customized-hydraulic-oil-press' },
              { text: 'Видео заказа и отгрузки клиента', link: '/ru/products/customer-order-shipping-video' },
              { text: 'Вспомогательное оборудование', link: '/ru/products/supporting' }
            ]
          },
          {
            text: 'Решения',
            link: '/ru/solutions/',
            items: [
              { text: 'Обзор решений', link: '/ru/solutions/' },
              { text: 'По типу масла', link: '/ru/solutions/seed-oils' },
              { text: 'Решения для наполнения', link: '/ru/solutions/filling' }
            ]
          },
          { text: 'Преимущества', link: '/ru/advantages/' },
          { text: 'Новости', link: '/ru/news/' },
          { text: 'О нас', link: '/ru/about/' },
          { text: 'Контакты', link: '/ru/contact/' }
        ],
        sidebar: {
          '/ru/products': [
            {
              text: 'Продукты',
              collapsed: false,
              items: [
                { text: 'Обзор продуктов', link: '/ru/products/' },
                {
                  text: 'Серия 300',
                  collapsed: true,
                  items: [
                    { text: 'Обзор серии', link: '/ru/products/300' }
                  ]
                },
                {
                  text: 'Серия 325',
                  collapsed: true,
                  items: [
                    { text: 'Обзор серии', link: '/ru/products/325' }
                  ]
                },
                {
                  text: 'Серия 355',
                  collapsed: true,
                  items: [
                    { text: 'Обзор серии', link: '/ru/products/355' }
                  ]
                },
                {
                  text: 'Серия 400',
                  collapsed: true,
                  items: [
                    { text: 'Обзор серии', link: '/ru/products/400' }
                  ]
                },
                {
                  text: 'Серия 426',
                  collapsed: true,
                  items: [
                    { text: 'Обзор серии', link: '/ru/products/426' }
                  ]
                },
                {
                  text: 'Серия 480',
                  collapsed: true,
                  items: [
                    { text: 'Обзор серии', link: '/ru/products/480' }
                  ]
                },
                {
                  text: 'Серия 500',
                  collapsed: true,
                  items: [
                    { text: 'Обзор серии', link: '/ru/products/500' }
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
              text: 'Решения',
              collapsed: false,
              items: [
                { text: 'Обзор решений', link: '/ru/solutions/' },
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
                  items: [
                    { text: 'Серия машин для мытья бутылок', link: '/ru/solutions/bottle-washing/' },
                    { text: 'Серия наливных машин', link: '/ru/solutions/filling/' },
                    { text: 'Серия машин для световой инспекции', link: '/ru/solutions/light-inspection/' },
                    { text: 'Серия укупорочных машин', link: '/ru/solutions/sealing/' },
                    { text: 'Серия машин для укупоривания пробками', link: '/ru/solutions/corking/' },
                    { text: 'Серия машин для усадки колпачков', link: '/ru/solutions/cap-shrinking/' },
                    { text: 'Серия сушильных машин', link: '/ru/solutions/drying/' },
                    { text: 'Серия этикетировочных машин', link: '/ru/solutions/labeling/' },
                    { text: 'Серия лазерных кодировщиков', link: '/ru/solutions/laser-coding/' },
                    { text: 'Упаковка и паллетизация', link: '/ru/solutions/packing-palletizing/' },
                    { text: 'Оборудование для предварительной обработки фруктов и овощей', link: '/ru/solutions/fruit-veg-processing/' },
                    { text: 'Серия фильтровальных машин', link: '/ru/solutions/filtering/' },
                    { text: 'Серия оборудования для пивоварения', link: '/ru/solutions/brewing/' },
                    { text: 'Оборудование для молочной промышленности', link: '/ru/solutions/dairy-processing/' }
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
                { text: 'Технические знания', link: '/ru/news/technology' }
              ]
            }
          ]
        },
        footer: {
          message: 'Профессиональное производство · Надежное качество',
          copyright: '© 2025 Shandong Shengshi Hecheng Machinery Co., Ltd'
        }
      }
    },
    fr: {
      label: 'Français',
      lang: 'fr-FR',
      title: 'Presse à huile Shengshi Hecheng',
      description: 'Fabricant professionnel de presses à huile',
      themeConfig: {
        nav: [
          { text: 'Accueil', link: '/fr/' },
          {
            text: 'Produits',
            link: '/fr/products/',
            items: [
              { text: 'Aperçu des produits', link: '/fr/products/' },
              { text: 'Série 300', link: '/fr/products/300' },
              { text: 'Série 325', link: '/fr/products/325' },
              { text: 'Série 355', link: '/fr/products/355' },
              { text: 'Série 400', link: '/fr/products/400' },
              { text: 'Série 426', link: '/fr/products/426' },
              { text: 'Série 480', link: '/fr/products/480' },
              { text: 'Série 500', link: '/fr/products/500' },
              { text: 'Manuel d\'Instructions de l\'Équipement', link: '/fr/products/instruction-manual' },
              { text: 'Presse hydraulique sur mesure', link: '/fr/products/customized-hydraulic-oil-press' },
              { text: 'Vidéo d\'expédition de commande client', link: '/fr/products/customer-order-shipping-video' },
              { text: 'Équipements complémentaires', link: '/fr/products/supporting' }
            ]
          },
          {
            text: 'Solutions',
            link: '/fr/solutions/',
            items: [
              { text: 'Aperçu des solutions', link: '/fr/solutions/' },
              { text: 'Par type d\'huile', link: '/fr/solutions/seed-oils' },
              { text: 'Solutions de remplissage', link: '/fr/solutions/filling' }
            ]
          },
          { text: 'Avantages', link: '/fr/advantages/' },
          { text: 'Actualités', link: '/fr/news/' },
          { text: 'À propos', link: '/fr/about/' },
          { text: 'Contact', link: '/fr/contact/' }
        ],
        sidebar: {
          '/fr/products': [
            {
              text: 'Produits',
              collapsed: false,
              items: [
                { text: 'Aperçu des produits', link: '/fr/products/' },
                {
                  text: 'Série 300',
                  collapsed: true,
                  items: [
                    { text: 'Aperçu de la série', link: '/fr/products/300' }
                  ]
                },
                {
                  text: 'Série 325',
                  collapsed: true,
                  items: [
                    { text: 'Aperçu de la série', link: '/fr/products/325' }
                  ]
                },
                {
                  text: 'Série 355',
                  collapsed: true,
                  items: [
                    { text: 'Aperçu de la série', link: '/fr/products/355' }
                  ]
                },
                {
                  text: 'Série 400',
                  collapsed: true,
                  items: [
                    { text: 'Aperçu de la série', link: '/fr/products/400' }
                  ]
                },
                {
                  text: 'Série 426',
                  collapsed: true,
                  items: [
                    { text: 'Aperçu de la série', link: '/fr/products/426' }
                  ]
                },
                {
                  text: 'Série 480',
                  collapsed: true,
                  items: [
                    { text: 'Aperçu de la série', link: '/fr/products/480' }
                  ]
                },
                {
                  text: 'Série 500',
                  collapsed: true,
                  items: [
                    { text: 'Aperçu de la série', link: '/fr/products/500' }
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
                  items: [
                    { text: 'Aperçu des solutions de remplissage', link: '/fr/solutions/filling-packages' },
                    { text: 'Série de machines à laver les bouteilles', link: '/fr/solutions/bottle-washing/' },
                    { text: 'Série de machines de remplissage', link: '/fr/solutions/filling/' },
                    { text: 'Série de machines d\'inspection lumineuse', link: '/fr/solutions/light-inspection/' },
                    { text: 'Série de machines de scellement', link: '/fr/solutions/sealing/' },
                    { text: 'Série de machines de bouchage', link: '/fr/solutions/corking/' },
                    { text: 'Série de machines de rétrécissement de bouchons', link: '/fr/solutions/cap-shrinking/' },
                    { text: 'Série de machines de séchage', link: '/fr/solutions/drying/' },
                    { text: 'Série de machines d\'étiquetage', link: '/fr/solutions/labeling/' },
                    { text: 'Série de codeurs laser', link: '/fr/solutions/laser-coding/' },
                    { text: 'Emballage et palettisation', link: '/fr/solutions/packing-palletizing/' },
                    { text: 'Équipement de prétraitement des fruits et légumes', link: '/fr/solutions/fruit-veg-processing/' },
                    { text: 'Série de machines de filtration', link: '/fr/solutions/filtering/' },
                    { text: 'Série d\'équipements de brassage', link: '/fr/solutions/brewing/' },
                    { text: 'Équipement de transformation laitière', link: '/fr/solutions/dairy-processing/' }
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
                { text: 'Connaissances techniques', link: '/fr/news/technology' }
              ]
            }
          ]
        },
        footer: {
          message: 'Fabrication professionnelle · Qualité fiable',
          copyright: '© 2025 Shandong Shengshi Hecheng Machinery Co., Ltd'
        }
      }
    },
    vi: {
      label: 'Tiếng Việt',
      lang: 'vi-VN',
      title: 'Shengshi Hecheng Oil Press',
      description: 'Nhà sản xuất máy ép dầu chuyên nghiệp',
      themeConfig: {
        nav: [
          { text: 'Trang chủ', link: '/vi/' },
          { text: 'Sản phẩm', link: '/vi/products/' },
          { text: 'Giải pháp', link: '/vi/solutions/' },
          { text: 'Ưu điểm', link: '/vi/advantages/' },
          { text: 'Tin tức', link: '/vi/news/' },
          { text: 'Về chúng tôi', link: '/vi/about/' },
          { text: 'Liên hệ', link: '/vi/contact/' }
        ],
        sidebar: {
          '/vi/products': [
            {
              text: 'Sản phẩm',
              collapsed: false,
              items: [
                { text: 'Tổng quan sản phẩm', link: '/vi/products/' },
                {
                  text: '300 Series',
                  collapsed: true,
                  items: [
                    { text: 'Tổng quan Series', link: '/vi/products/300' }
                  ]
                },
                {
                  text: '325 Series',
                  collapsed: true,
                  items: [
                    { text: 'Tổng quan Series', link: '/vi/products/325' }
                  ]
                },
                {
                  text: '355 Series',
                  collapsed: true,
                  items: [
                    { text: 'Tổng quan Series', link: '/vi/products/355' }
                  ]
                },
                {
                  text: '400 Series',
                  collapsed: true,
                  items: [
                    { text: 'Tổng quan Series', link: '/vi/products/400' }
                  ]
                },
                {
                  text: '426 Series',
                  collapsed: true,
                  items: [
                    { text: 'Tổng quan Series', link: '/vi/products/426' }
                  ]
                },
                {
                  text: '480 Series',
                  collapsed: true,
                  items: [
                    { text: 'Tổng quan Series', link: '/vi/products/480' }
                  ]
                },
                {
                  text: '500 Series',
                  collapsed: true,
                  items: [
                    { text: 'Tổng quan Series', link: '/vi/products/500' }
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
                { text: 'Tin công ty', link: '/vi/news/company' }
              ]
            }
          ]
        }
      }
    },
    bn: {
      label: 'বাংলা',
      lang: 'bn-BD',
      title: 'শেংশি হেচেং হাইড্রোলিক অয়েল প্রেস',
      description: 'পেশাদার অয়েল প্রেস ম্যানুফ্যাকচারার',
      themeConfig: {
        nav: [
          { text: 'হোম', link: '/bn/' },
          {
            text: 'পণ্যসমূহ',
            link: '/bn/products/',
            items: [
              { text: 'পণ্য ওভারভিউ', link: '/bn/products/' },
              { text: '৩০০ সিরিজ', link: '/bn/products/300' },
              { text: '৩২৫ সিরিজ', link: '/bn/products/325' },
              { text: '৩৫৫ সিরিজ', link: '/bn/products/355' },
              { text: '৪০০ সিরিজ', link: '/bn/products/400' },
              { text: '৪২৬ সিরিজ', link: '/bn/products/426' },
              { text: '৪৮০ সিরিজ', link: '/bn/products/480' },
              { text: '৫০০ সিরিজ', link: '/bn/products/500' },
              { text: 'যন্ত্রপাতি ব্যবহারের নির্দেশিকা', link: '/bn/products/instruction-manual' },
              { text: 'কাস্টমাইজড হাইড্রোলিক অয়েল প্রেস', link: '/bn/products/customized-hydraulic-oil-press' },
              { text: 'গ্রাহক অর্ডার শিপিং ভিডিও', link: '/bn/products/customer-order-shipping-video' },
              { text: 'সহায়ক যন্ত্রপাতি', link: '/bn/products/supporting' }
            ]
          },
          {
            text: 'সমাধানসমূহ',
            link: '/bn/solutions/',
            items: [
              { text: 'সমাধান ওভারভিউ', link: '/bn/solutions/' },
              { text: 'তেলের ধরন অনুসারে', link: '/bn/solutions/seed-oils' },
              { text: 'ফিলিং সহায়ক সমাধান', link: '/bn/solutions/filling' }
            ]
          },
          { text: 'সুবিধাসমূহ', link: '/bn/advantages/' },
          { text: 'সংবাদ', link: '/bn/news/' },
          { text: 'আমাদের সম্পর্কে', link: '/bn/about/' },
          { text: 'যোগাযোগ', link: '/bn/contact/' }
        ],
        sidebar: {
          '/bn/products': [
            {
              text: 'পণ্যসমূহ',
              collapsed: false,
              items: [
                { text: 'পণ্য ওভারভিউ', link: '/bn/products/' },
                {
                  text: '৩০০ সিরিজ',
                  collapsed: true,
                  items: [
                    { text: 'সিরিজ ওভারভিউ', link: '/bn/products/300' }
                  ]
                },
                {
                  text: '৩২৫ সিরিজ',
                  collapsed: true,
                  items: [
                    { text: 'সিরিজ ওভারভিউ', link: '/bn/products/325' }
                  ]
                },
                {
                  text: '৩৫৫ সিরিজ',
                  collapsed: true,
                  items: [
                    { text: 'সিরিজ ওভারভিউ', link: '/bn/products/355' }
                  ]
                },
                {
                  text: '৪০০ সিরিজ',
                  collapsed: true,
                  items: [
                    { text: 'সিরিজ ওভারভিউ', link: '/bn/products/400' }
                  ]
                },
                {
                  text: '৪২৬ সিরিজ',
                  collapsed: true,
                  items: [
                    { text: 'সিরিজ ওভারভিউ', link: '/bn/products/426' }
                  ]
                },
                {
                  text: '৪৮০ সিরিজ',
                  collapsed: true,
                  items: [
                    { text: 'সিরিজ ওভারভিউ', link: '/bn/products/480' }
                  ]
                },
                {
                  text: '৫০০ সিরিজ',
                  collapsed: true,
                  items: [
                    { text: 'সিরিজ ওভারভিউ', link: '/bn/products/500' }
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
                  text: 'সহায়ক যন্ত্রপাতি',
                  collapsed: false,
                  items: [
                    { text: 'যন্ত্রপাতি ওভারভিউ', link: '/bn/products/supporting' },
                    {
                      text: 'প্রাক-প্রক্রিয়াকরণ যন্ত্রপাতি',
                      collapsed: false,
                      items: [
                        { text: 'ওভারভিউ', link: '/bn/products/pre-treatment' },
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
              text: 'সমাধানসমূহ',
              collapsed: false,
              items: [
                { text: 'সমাধান ওভারভিউ', link: '/bn/solutions/' },
                {
                  text: 'তেলের ধরন অনুসারে',
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
                  text: 'ফিলিং সহায়ক সমাধান',
                  collapsed: true,
                  items: [
                    { text: 'ফিলিং প্যাকেজ ওভারভিউ', link: '/bn/solutions/filling-packages' },
                    { text: 'বোতল ধোয়ার মেশিন সিরিজ', link: '/bn/solutions/bottle-washing/' },
                    { text: 'ফিলিং মেশিন সিরিজ', link: '/bn/solutions/filling/' },
                    { text: 'আলো পরিদর্শন মেশিন সিরিজ', link: '/bn/solutions/light-inspection/' },
                    { text: 'সিলিং মেশিন সিরিজ', link: '/bn/solutions/sealing/' },
                    { text: 'কর্কিং মেশিন সিরিজ', link: '/bn/solutions/corking/' },
                    { text: 'ক্যাপ সঙ্কুচিত মেশিন সিরিজ', link: '/bn/solutions/cap-shrinking/' },
                    { text: 'শুকানোর মেশিন সিরিজ', link: '/bn/solutions/drying/' },
                    { text: 'লেবেলিং মেশিন সিরিজ', link: '/bn/solutions/labeling/' },
                    { text: 'লেজার কোডিং মেশিন সিরিজ', link: '/bn/solutions/laser-coding/' },
                    { text: 'প্যাকিং এবং প্যালেটাইজিং', link: '/bn/solutions/packing-palletizing/' },
                    { text: 'ফল এবং সবজি প্রাক-প্রক্রিয়াকরণ যন্ত্রপাতি', link: '/bn/solutions/fruit-veg-processing/' },
                    { text: 'ফিল্টারিং মেশিন সিরিজ', link: '/bn/solutions/filtering/' },
                    { text: 'ব্রুইং যন্ত্রপাতি সিরিজ', link: '/bn/solutions/brewing/' },
                    { text: 'দুগ্ধ প্রক্রিয়াকরণ যন্ত্রপাতি', link: '/bn/solutions/dairy-processing/' }
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
                { text: 'প্রযুক্তিগত জ্ঞান', link: '/bn/news/technology' }
              ]
            }
          ]
        },
        footer: {
          message: 'পেশাদার উৎপাদন · বিশ্বস্ত গুণমান',
          copyright: '© 2025 Shandong Shengshi Hecheng Machinery Co., Ltd'
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
    // 启用多语言路由
    i18nRouting: true,
    // 启用完整的TOC（目录）
    outline: {
      level: [2, 6],
      label: 'On this page'
    }
  }
}
