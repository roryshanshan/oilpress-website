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
      lang: 'en'
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      title: '盛世赫程液压榨油机',
      description: '专业的榨油设备制造商',
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '产品系列', link: '/zh/products/' },
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
                  text: '300/325系列',
                  collapsed: true,
                  items: [
                    { text: '系列概述', link: '/zh/products/300-325' },
                    { text: '300型椰汁压榨机', link: '/zh/products/300-coconut' },
                    { text: '325型母子双桶榨油机', link: '/zh/products/325-double-barrel' },
                    { text: '325型扩展双桶榨油机', link: '/zh/products/325-extended-double' },
                    { text: '325型芝麻专用榨油机', link: '/zh/products/325-sesame' },
                    { text: '325型标准单桶榨油机', link: '/zh/products/325-standard' },
                    { text: '325型特大顶饼榨油机', link: '/zh/products/325-large-cake' }
                  ]
                },
                {
                  text: '355/400系列',
                  collapsed: true,
                  items: [
                    { text: '系列概述', link: '/zh/products/355-400' },
                    { text: '355型扩展双桶榨油机', link: '/zh/products/355-double' },
                    { text: '400型工业级榨油机', link: '/zh/products/400-industrial' }
                  ]
                },
                {
                  text: '426/480/500系列',
                  collapsed: true,
                  items: [
                    { text: '系列概述', link: '/zh/products/426-480-500' },
                    { text: '426型大型工业榨油机', link: '/zh/products/426-large' },
                    { text: '480型超大型工业榨油机', link: '/zh/products/480-xlarge' },
                    { text: '500型特大型工业榨油机', link: '/zh/products/500-xxlarge' }
                  ]
                },
                {
                  text: '配套设备',
                  collapsed: true,
                  items: [
                    { text: '设备概述', link: '/zh/products/supporting' },
                    { text: '预处理设备', link: '/zh/products/pretreatment' },
                    { text: '后处理设备', link: '/zh/products/posttreatment' }
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
                        { text: '🌱 大豆（豆油）', link: '/zh/solutions/soybean' },
                        { text: '🥜 花生（花生油）', link: '/zh/solutions/peanut' },
                        { text: '🌰 芝麻（芝麻油）', link: '/zh/solutions/sesame' },
                        { text: '🌿 油菜籽（菜籽油）', link: '/zh/solutions/rapeseed' },
                        { text: '🌻 向日葵籽（葵花籽油）', link: '/zh/solutions/sunflower' },
                        { text: '🧵 棉籽（棉籽油）', link: '/zh/solutions/cottonseed' },
                        { text: '🌾 亚麻籽（亚麻籽油）', link: '/zh/solutions/flaxseed' },
                        { text: '🍵 茶籽（茶籽油）', link: '/zh/solutions/tea-seed' },
                        { text: '🌱 苏子（苏子油）', link: '/zh/solutions/perilla' }
                      ]
                    },
                    {
                      text: '🥜 坚果类',
                      collapsed: true,
                      items: [
                        { text: '坚果类概述', link: '/zh/solutions/nuts' },
                        { text: '🥥 椰子（椰子油）', link: '/zh/solutions/coconut' },
                        { text: '🌴 棕榈（棕榈油）', link: '/zh/solutions/palm' },
                        { text: '🥜 核桃（核桃油）', link: '/zh/solutions/walnut' },
                        { text: '🌰 杏仁（杏仁油）', link: '/zh/solutions/almond' },
                        { text: '🌰 榛子（榛子油）', link: '/zh/solutions/hazelnut' },
                        { text: '🥜 腰果（腰果油）', link: '/zh/solutions/cashew' },
                        { text: '🥜 开心果（开心果油）', link: '/zh/solutions/pistachio' }
                      ]
                    },
                    {
                      text: '🥑 果实类',
                      collapsed: true,
                      items: [
                        { text: '果实类概述', link: '/zh/solutions/fruits' },
                        { text: '🥑 鳄梨（牛油果油）', link: '/zh/solutions/avocado' },
                        { text: '🍇 葡萄籽（葡萄籽油）', link: '/zh/solutions/grape-seed' },
                        { text: '🎃 南瓜籽（南瓜籽油）', link: '/zh/solutions/pumpkin-seed' },
                        { text: '🍉 西瓜籽（西瓜籽油）', link: '/zh/solutions/watermelon-seed' },
                        { text: '🍑 桃核仁（核仁油）', link: '/zh/solutions/peach-kernel' },
                        { text: '🌰 杏核仁（核仁油）', link: '/zh/solutions/apricot-kernel' }
                      ]
                    },
                    {
                      text: '⚙️ 其他特殊油料',
                      collapsed: true,
                      items: [
                        { text: '特殊油料概述', link: '/zh/solutions/special-oils' },
                        { text: '🍚 米糠（米糠油）', link: '/zh/solutions/rice-bran' },
                        { text: '🌽 玉米胚芽（玉米油）', link: '/zh/solutions/corn-germ' },
                        { text: '🌿 蓖麻籽（蓖麻油）', link: '/zh/solutions/castor-seed' },
                        { text: '🌶️ 辣椒籽（辣椒籽油）', link: '/zh/solutions/chili-seed' },
                        { text: '🍇 葡萄籽（葡萄籽油）', link: '/zh/solutions/grape-seed' },
                        { text: '🌾 荞麦籽（荞麦油）', link: '/zh/solutions/buckwheat' }
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
                { text: '公司动态', link: '/zh/news/company' },
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
          { text: 'Products', link: '/en/products/' },
          { text: 'Solutions', link: '/en/solutions/' },
          { text: 'Advantages', link: '/en/advantages/' },
          { text: 'News', link: '/en/news/' },
          { text: 'About', link: '/en/about/' },
          { text: 'Contact', link: '/en/contact/' }
        ],
        sidebar: {
          '/en/products/': [
            {
              text: 'Products',
              collapsed: false,
              items: [
                { text: 'Overview', link: '/en/products/' },
                {
                  text: '300/325 Series',
                  collapsed: true,
                  items: [
                    { text: 'Series Overview', link: '/en/products/300-325' },
                    { text: '300 Coconut Press', link: '/en/products/300-coconut' },
                    { text: '325 Double Barrel Press', link: '/en/products/325-double-barrel' },
                    { text: '325 Extended Double Press', link: '/en/products/325-extended-double' },
                    { text: '325 Sesame Special Press', link: '/en/products/325-sesame' },
                    { text: '325 Standard Press', link: '/en/products/325-standard' },
                    { text: '325 Large Cake Press', link: '/en/products/325-large-cake' }
                  ]
                },
                {
                  text: '355/400 Series',
                  collapsed: true,
                  items: [
                    { text: 'Series Overview', link: '/en/products/355-400' },
                    { text: '355 Extended Double Press', link: '/en/products/355-double' },
                    { text: '400 Industrial Press', link: '/en/products/400-industrial' }
                  ]
                },
                {
                  text: '425/480 Series',
                  collapsed: true,
                  items: [
                    { text: 'Series Overview', link: '/en/products/425-480' },
                    { text: '425 Large Industrial Press', link: '/en/products/425-large' },
                    { text: '480 Extra Large Press', link: '/en/products/480-xlarge' }
                  ]
                },
                {
                  text: 'Supporting Equipment',
                  collapsed: true,
                  items: [
                    { text: 'Equipment Overview', link: '/en/products/supporting' },
                    { text: 'Pre-treatment Equipment', link: '/en/products/pretreatment' },
                    { text: 'Post-treatment Equipment', link: '/en/products/posttreatment' }
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
                { text: 'Overview', link: '/en/solutions/' },
                {
                  text: 'By Oil Material Type',
                  collapsed: true,
                  items: [
                    {
                      text: '🌾 Seed Oils',
                      collapsed: true,
                      items: [
                        { text: 'Seed Oils Overview', link: '/en/solutions/seed-oils' },
                        { text: '🌱 Soybean (Soybean Oil)', link: '/en/solutions/soybean' },
                        { text: '🥜 Peanut (Peanut Oil)', link: '/en/solutions/peanut' },
                        { text: '🌰 Sesame (Sesame Oil)', link: '/en/solutions/sesame' },
                        { text: '🌿 Rapeseed (Rapeseed Oil)', link: '/en/solutions/rapeseed' },
                        { text: '🌻 Sunflower Seed (Sunflower Oil)', link: '/en/solutions/sunflower' },
                        { text: '🧵 Cottonseed (Cottonseed Oil)', link: '/en/solutions/cottonseed' },
                        { text: '🌾 Flaxseed (Flaxseed Oil)', link: '/en/solutions/flaxseed' },
                        { text: '🍵 Tea Seed (Tea Seed Oil)', link: '/en/solutions/tea-seed' },
                        { text: '🌱 Perilla Seed (Perilla Oil)', link: '/en/solutions/perilla' }
                      ]
                    },
                    {
                      text: '🥜 Nut Oils',
                      collapsed: true,
                      items: [
                        { text: 'Nut Oils Overview', link: '/en/solutions/nuts' },
                        { text: '🥥 Coconut (Coconut Oil)', link: '/en/solutions/coconut' },
                        { text: '🌴 Palm (Palm Oil)', link: '/en/solutions/palm' },
                        { text: '🥜 Walnut (Walnut Oil)', link: '/en/solutions/walnut' },
                        { text: '🌰 Almond (Almond Oil)', link: '/en/solutions/almond' },
                        { text: '🌰 Hazelnut (Hazelnut Oil)', link: '/en/solutions/hazelnut' },
                        { text: '🥜 Cashew (Cashew Oil)', link: '/en/solutions/cashew' },
                        { text: '🥜 Pistachio (Pistachio Oil)', link: '/en/solutions/pistachio' }
                      ]
                    },
                    {
                      text: '🥑 Fruit Oils',
                      collapsed: true,
                      items: [
                        { text: 'Fruit Oils Overview', link: '/en/solutions/fruits' },
                        { text: '🥑 Avocado (Avocado Oil)', link: '/en/solutions/avocado' },
                        { text: '🍇 Grape Seed (Grape Seed Oil)', link: '/en/solutions/grape-seed' },
                        { text: '🎃 Pumpkin Seed (Pumpkin Seed Oil)', link: '/en/solutions/pumpkin-seed' },
                        { text: '🍉 Watermelon Seed (Watermelon Seed Oil)', link: '/en/solutions/watermelon-seed' },
                        { text: '🍑 Peach Kernel (Kernel Oil)', link: '/en/solutions/peach-kernel' },
                        { text: '🌰 Apricot Kernel (Kernel Oil)', link: '/en/solutions/apricot-kernel' }
                      ]
                    },
                    {
                      text: '⚙️ Special Oils',
                      collapsed: true,
                      items: [
                        { text: 'Special Oils Overview', link: '/en/solutions/special-oils' },
                        { text: '🍚 Rice Bran (Rice Bran Oil)', link: '/en/solutions/rice-bran' },
                        { text: '🌽 Corn Germ (Corn Oil)', link: '/en/solutions/corn-germ' },
                        { text: '🌿 Castor Seed (Castor Oil)', link: '/en/solutions/castor-seed' },
                        { text: '🌶️ Chili Seed (Chili Seed Oil)', link: '/en/solutions/chili-seed' },
                        { text: '🍇 Grape Seed (Grape Seed Oil)', link: '/en/solutions/grape-seed' },
                        { text: '🌾 Buckwheat (Buckwheat Oil)', link: '/en/solutions/buckwheat' }
                      ]
                    }
                  ]
                },
                {
                  text: 'By Scale',
                  collapsed: true,
                  items: [
                    { text: '🏠 Small Workshop Solution', link: '/en/solutions/small-workshop' },
                    { text: '🏭 Medium Factory Solution', link: '/en/solutions/medium-factory' },
                    { text: '🏢 Large Industrial Solution', link: '/en/solutions/large-industrial' },
                    { text: '🔬 Special Oil Processing', link: '/en/solutions/special-oil' }
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
                { text: 'Honors & Certifications', link: '/en/about/honors' },
                { text: 'Our Team', link: '/en/about/team' }
              ]
            }
          ],
          '/en/advantages/': [
            {
              text: 'Our Advantages',
              collapsed: false,
              items: [
                { text: 'Overview', link: '/en/advantages/' },
                { text: 'Technical Innovation', link: '/en/advantages/innovation' },
                { text: 'Quality Assurance', link: '/en/advantages/quality' },
                { text: 'Service Support', link: '/en/advantages/service' },
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
