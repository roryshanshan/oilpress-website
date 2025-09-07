export default {
  lastUpdated: true,
  sitemap: {
    hostname: 'https://hyraulicoilpressing.opchn.com/'
  },
  title: 'Shengshi Hecheng Oil Press',
  description: 'Professional Oil Press Manufacturer',
  cleanUrls: true,
  ignoreDeadLinks: true,
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ['meta', { name: 'description', content: 'Professional Oil Press Manufacturer - Shengshi Hecheng' }],
    ['meta', { name: 'keywords', content: 'oil press, hydraulic press, oil extraction, oil press machine' }],
    ['meta', { name: 'author', content: 'Shengshi Hecheng' }],
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  ],

  locales: {
    root: {
      lang: 'en',
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
              { text: 'Supporting Equipment', link: '/en/products/supporting' }
            ]
          },
          { text: 'Solutions', link: '/en/solutions/' },
          { text: 'Advantages', link: '/en/advantages/' },
          { text: 'News', link: '/en/news/' },
          { text: 'About Us', link: '/en/about/' },
          { text: 'Contact Us', link: '/en/contact/' }
        ],
        sidebar: {
          '/en/products/': [
            {
              text: 'Products',
              collapsed: false,
              items: [
                { text: 'Product Overview', link: '/en/products/' },
                {
                  text: '300 Series',
                  collapsed: true,
                  items: [
                    { text: 'Series Overview', link: '/en/products/300' },
                    { text: '300 Coconut Oil Press', link: '/en/products/300-coconut' }
                  ]
                },
                {
                  text: '325 Series',
                  collapsed: true,
                  items: [
                    { text: 'Series Overview', link: '/en/products/325' },
                    { text: '325 Double Barrel Oil Press', link: '/en/products/325-double-barrel' },
                    { text: '325 Extended Double Barrel Oil Press', link: '/en/products/325-extended-double' },
                    { text: '325 Sesame Oil Press', link: '/en/products/325-sesame' },
                    { text: '325 Standard Single Barrel Oil Press', link: '/en/products/325-standard' },
                    { text: '325 Large Cake Oil Press', link: '/en/products/325-large-cake' }
                  ]
                },
                {
                  text: '355 Series',
                  collapsed: true,
                  items: [
                    { text: 'Series Overview', link: '/en/products/355' },
                    { text: '355 Double Barrel Oil Press', link: '/en/products/355-double' }
                  ]
                },
                {
                  text: '400 Series',
                  collapsed: true,
                  items: [
                    { text: 'Series Overview', link: '/en/products/400' },
                    { text: '400 Automatic Oil Press', link: '/en/products/400-auto' },
                    { text: '400 Smart Oil Press', link: '/en/products/400-smart' }
                  ]
                },
                {
                  text: '426 Series',
                  collapsed: true,
                  items: [
                    { text: 'Series Overview', link: '/en/products/426' },
                    { text: '426 Large Industrial Oil Press', link: '/en/products/426-large' },
                    { text: '426 Single Barrel Oil Press', link: '/en/products/426-single' },
                    { text: '426 Standard Oil Press', link: '/en/products/426-standard' }
                  ]
                },
                {
                  text: '480 Series',
                  collapsed: true,
                  items: [
                    { text: 'Series Overview', link: '/en/products/480' },
                    { text: '480 Smart Oil Press', link: '/en/products/480-smart' },
                    { text: '480 Ultra Oil Press', link: '/en/products/480-ultra' },
                    { text: '480 X-Large Industrial Oil Press', link: '/en/products/480-xlarge' }
                  ]
                },
                {
                  text: '500 Series',
                  collapsed: true,
                  items: [
                    { text: 'Series Overview', link: '/en/products/500' },
                    { text: '500 Extended Oil Press', link: '/en/products/500-extended' },
                    { text: '500 Mega Oil Press', link: '/en/products/500-mega' },
                    { text: '500 X-Large Oil Press', link: '/en/products/500-xlarge' },
                    { text: '500 XX-Large Industrial Oil Press', link: '/en/products/500-xxlarge' }
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
          '/en/solutions/': [
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
                }
              ]
            }
          ],
          '/en/about/': [
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
          '/en/advantages/': [
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
          '/en/news/': [
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
              { text: '配套设备', link: '/zh/products/supporting' }
            ]
          },
          { text: '解决方案', link: '/zh/solutions/' },
          { text: '公司优势', link: '/zh/advantages/' },
          { text: '新闻资讯', link: '/zh/news/' },
          { text: '关于我们', link: '/zh/about/' },
          { text: '联系我们', link: '/zh/contact/' }
        ],
        sidebar: {
          '/zh/products/': [
            {
              text: '产品系列',
              collapsed: false,
              items: [
                { text: '产品概览', link: '/zh/products/' },
                {
                  text: '300系列',
                  collapsed: true,
                  items: [
                    { text: '系列概述', link: '/zh/products/300' },
                    { text: '300型椰汁压榨机', link: '/zh/products/300-coconut' }
                  ]
                },
                {
                  text: '325系列',
                  collapsed: true,
                  items: [
                    { text: '系列概述', link: '/zh/products/325' },
                    { text: '325型母子双桶榨油机', link: '/zh/products/325-double-barrel' },
                    { text: '325型扩展双桶榨油机', link: '/zh/products/325-extended-double' },
                    { text: '325型芝麻专用榨油机', link: '/zh/products/325-sesame' },
                    { text: '325型标准单桶榨油机', link: '/zh/products/325-standard' },
                    { text: '325型特大顶饼榨油机', link: '/zh/products/325-large-cake' }
                  ]
                },
                {
                  text: '355系列',
                  collapsed: true,
                  items: [
                    { text: '系列概述', link: '/zh/products/355' },
                    { text: '355型扩展双桶榨油机', link: '/zh/products/355-double' }
                  ]
                },
                {
                  text: '400系列',
                  collapsed: true,
                  items: [
                    { text: '系列概述', link: '/zh/products/400' },
                    { text: '400型工业级榨油机', link: '/zh/products/400-industrial' }
                  ]
                },
                {
                  text: '426系列',
                  collapsed: true,
                  items: [
                    { text: '系列概述', link: '/zh/products/426' },
                    { text: '426型大型工业榨油机', link: '/zh/products/426-large' }
                  ]
                },
                {
                  text: '480系列',
                  collapsed: true,
                  items: [
                    { text: '系列概述', link: '/zh/products/480' },
                    { text: '480型超大型工业榨油机', link: '/zh/products/480-xlarge' }
                  ]
                },
                {
                  text: '500系列',
                  collapsed: true,
                  items: [
                    { text: '系列概述', link: '/zh/products/500' },
                    { text: '500型特大型工业榨油机', link: '/zh/products/500-xxlarge' }
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
                        { text: '亚麻籽菜籽研磨搅拌一体机', link: '/zh/products/Flaxseed-and-rapeseed-grinding-and-stirring-integrated-machine' },
                        { text: '自动滚筒炒锅', link: '/zh/products/automatic-drum-roaster' },
                        { text: '饼粕包衣机', link: '/zh/products/cake-wrapping-machine' },
                        { text: '食用油精炼设备', link: '/zh/products/edible-oil-refining-equipment' },
                        { text: '喂料破碎煎炸一体机', link: '/zh/products/feeding-crushing-frying-integrated-machine' },
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
                        { text: '饼粕粉碎机', link: '/zh/products/cake-pulverizer' }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          '/zh/solutions/': [
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
                  text: '按规模分类',
                  collapsed: true,
                  items: [
                    { text: '🏠 小型榨油坊方案', link: '/zh/solutions/small-workshop' },
                    { text: '🏭 中型油厂方案', link: '/zh/solutions/medium-factory' },
                    { text: '🏢 大型工业化方案', link: '/zh/solutions/large-industrial' },
                    { text: '🔬 特种油料加工方案', link: '/zh/solutions/special-oil' }
                  ]
                }
              ]
            }
          ],
          '/zh/about/': [
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
          '/zh/advantages/': [
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
          '/zh/news/': [
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
              { text: 'Supporting Equipment', link: '/en/products/supporting' }
            ]
          },
          {
            text: 'Solutions',
            link: '/en/solutions/',
            items: [
              { text: 'Solutions Overview', link: '/en/solutions/' },
              { text: 'By Oil Type', link: '/en/solutions/by-type' },
              { text: 'By Scale', link: '/en/solutions/by-scale' }
            ]
          },
          { text: 'Advantages', link: '/en/advantages/' },
          { text: 'News', link: '/en/news/' },
          { text: 'About Us', link: '/en/about/' },
          { text: 'Contact Us', link: '/en/contact/' }
        ],
        sidebar: {
          '/en/products/': [
            {
              text: 'Products',
              collapsed: false,
              items: [
                { text: 'Product Overview', link: '/en/products/' },
                {
                  text: '300 Series',
                  collapsed: true,
                  items: [
                    { text: 'Series Overview', link: '/en/products/300' },
                    { text: '300 Coconut Oil Press', link: '/en/products/300-coconut' }
                  ]
                },
                {
                  text: '325 Series',
                  collapsed: true,
                  items: [
                    { text: 'Series Overview', link: '/en/products/325' },
                    { text: '325 Double Barrel Oil Press', link: '/en/products/325-double-barrel' },
                    { text: '325 Extended Double Barrel Oil Press', link: '/en/products/325-extended-double' },
                    { text: '325 Sesame Oil Press', link: '/en/products/325-sesame' },
                    { text: '325 Standard Single Barrel Oil Press', link: '/en/products/325-standard' },
                    { text: '325 Large Cake Oil Press', link: '/en/products/325-large-cake' }
                  ]
                },
                {
                  text: '355 Series',
                  collapsed: true,
                  items: [
                    { text: 'Series Overview', link: '/en/products/355' },
                    { text: '355 Double Barrel Oil Press', link: '/en/products/355-double' }
                  ]
                },
                {
                  text: '400 Series',
                  collapsed: true,
                  items: [
                    { text: 'Series Overview', link: '/en/products/400' },
                    { text: '400 Automatic Oil Press', link: '/en/products/400-auto' },
                    { text: '400 Smart Oil Press', link: '/en/products/400-smart' }
                  ]
                },
                {
                  text: '426 Series',
                  collapsed: true,
                  items: [
                    { text: 'Series Overview', link: '/en/products/426' },
                    { text: '426 Large Industrial Oil Press', link: '/en/products/426-large' },
                    { text: '426 Single Barrel Oil Press', link: '/en/products/426-single' },
                    { text: '426 Standard Oil Press', link: '/en/products/426-standard' }
                  ]
                },
                {
                  text: '480 Series',
                  collapsed: true,
                  items: [
                    { text: 'Series Overview', link: '/en/products/480' },
                    { text: '480 Smart Oil Press', link: '/en/products/480-smart' },
                    { text: '480 Ultra Oil Press', link: '/en/products/480-ultra' },
                    { text: '480 X-Large Industrial Oil Press', link: '/en/products/480-xlarge' }
                  ]
                },
                {
                  text: '500 Series',
                  collapsed: true,
                  items: [
                    { text: 'Series Overview', link: '/en/products/500' },
                    { text: '500 Extended Oil Press', link: '/en/products/500-extended' },
                    { text: '500 Mega Oil Press', link: '/en/products/500-mega' },
                    { text: '500 X-Large Oil Press', link: '/en/products/500-xlarge' },
                    { text: '500 XX-Large Industrial Oil Press', link: '/en/products/500-xxlarge' }
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
          '/en/solutions/': [
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
                }
              ]
            }
          ],
          '/en/about/': [
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
          '/en/advantages/': [
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
          '/en/news/': [
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
    }
  },

  themeConfig: {
    // 社交链接 - 已移除，使用自定义布局中的图标
    socialLinks: []
  }
}
