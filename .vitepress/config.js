import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Qianlong Oil Press',
  description: 'Professional hydraulic oil press manufacturer',
  sitemap: {
    hostname: 'https://hydraulicoilpressing.opchn.com/',
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: 0.8,
    excludeRoutes: [
      '/404',
      '/search'
    ],
    transformItems: (items) => {
      return items.map((item) => {
        // 首页最高优先级
        if (item.url === '/' || item.url.match(/^\/(en|zh|fr|ru|bn|vi)\/$/)) {
          item.priority = 1.0
          item.changefreq = 'daily'
        }
        // 产品页高优先级
        else if (item.url.includes('/products/')) {
          item.priority = 0.9
          item.changefreq = 'weekly'
        }
        // 解决方案页高优先级
        else if (item.url.includes('/solutions/')) {
          item.priority = 0.9
          item.changefreq = 'weekly'
        }
        // 新闻页中等优先级
        else if (item.url.includes('/news/')) {
          item.priority = 0.7
          item.changefreq = 'weekly'
        }
        return item
      })
    }
  },
  vite: {
    build: {
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('@vercel')) {
                return 'vercel-vendor'
              }
              if (id.includes('vitepress')) {
                return 'vitepress-vendor'
              }
              return 'vendor'
            }
          }
        }
      },
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
          pure_funcs: ['console.log']
        }
      },
      cssCodeSplit: true
    },
    server: {
      host: '127.0.0.1',
      port: 5173,
      open: false,
      cors: true
    }
  },
  themeConfig: {
    locales: {
      root: { label: 'English', lang: 'en', link: '/' },
      zh: { label: '中文', lang: 'zh-CN', link: '/zh/' },
      fr: { label: 'Français', lang: 'fr', link: '/fr/' },
      ru: { label: 'Русский', lang: 'ru', link: '/ru/' },
      bn: { label: 'বাংলা', lang: 'bn', link: '/bn/' },
      vi: { label: 'Tiếng Việt', lang: 'vi', link: '/vi/' }
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Products', link: '/products/' },
      { text: 'Solutions', link: '/solutions/' },
      { text: 'Advantages', link: '/advantages/' },
      { text: 'News', link: '/news/' },
      { text: 'Contact', link: '/contact/' }
    ],
    sidebar: {
      '/products/': [
        { text: 'Product Overview', link: '/products/' },
        { text: '300 Series', link: '/products/300' },
        { text: '325 Series', link: '/products/325' },
        { text: '355 Series', link: '/products/355' },
        { text: '400 Series', link: '/products/400' },
        { text: '426 Series', link: '/products/426' },
        { text: '480 Series', link: '/products/480' },
        { text: '500 Series', link: '/products/500' }
      ],
      '/solutions/': [
        { text: 'Solutions Overview', link: '/solutions/' },
        { text: 'Oil Crops', link: '/solutions/oil-crops' },
        { text: 'Special Oils', link: '/solutions/special-oils' },
        { text: 'Seed Oils', link: '/solutions/seed-oils' }
      ]
    }
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      head: [
        ['meta', { property: 'og:title', content: 'Shengshi Hecheng Oil Press - Professional Hydraulic Oil Press Manufacturer' }],
        ['meta', { property: 'og:description', content: '15+ years of expertise in hydraulic oil press equipment. 300-500 series for peanut, sesame, rapeseed, walnut, and 30+ oilseeds.' }],
        ['meta', { property: 'og:image', content: 'https://hydraulicoilpressing.opchn.com/images/hero-oil-press.webp' }],
        ['meta', { property: 'og:image:width', content: '1200' }],
        ['meta', { property: 'og:image:height', content: '630' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:locale', content: 'en_US' }],
        ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
        ['meta', { name: 'twitter:title', content: 'Shengshi Hecheng Oil Press' }],
        ['meta', { name: 'twitter:description', content: 'Professional hydraulic oil press manufacturer since 2008' }]
      ],
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Products', link: '/products/' },
        ],
        sidebar: {
          '/products/': [
            { text: 'Product Overview', link: '/products/' },
            { text: '300 Series', link: '/products/300' },
            { text: '325 Series', link: '/products/325' },
            { text: '355 Series', link: '/products/355' },
            { text: '400 Series', link: '/products/400' },
            { text: '426 Series', link: '/products/426' },
            { text: '480 Series', link: '/products/480' },
            { text: '500 Series', link: '/products/500' }
          ],
          '/solutions/': [
            { text: 'Solutions Overview', link: '/solutions/' },
            { text: 'Oil Crops', link: '/solutions/oil-crops' },
            { text: 'Special Oils', link: '/solutions/special-oils' },
            { text: 'Seed Oils', link: '/solutions/seed-oils' }
          ]
        }
      }
    },
    zh: {
      label: '中文',
      lang: 'zh-CN',
      link: '/zh/',
      head: [
        ['meta', { property: 'og:title', content: '盛世合成榨油机 - 专业液压榨油设备制造商' }],
        ['meta', { property: 'og:description', content: '15年以上液压榨油设备专业经验，300-500系列适用于花生、芝麻、菜籽、核桃等30多种油料。' }],
        ['meta', { property: 'og:image', content: 'https://hydraulicoilpressing.opchn.com/images/hero-oil-press.webp' }],
        ['meta', { property: 'og:image:width', content: '1200' }],
        ['meta', { property: 'og:image:height', content: '630' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:locale', content: 'zh_CN' }],
        ['meta', { name: 'twitter:card', content: 'summary_large_image' }]
      ],
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '产品', link: '/zh/products/' },
          { text: '解决方案', link: '/zh/solutions/' },
          { text: '优势', link: '/zh/advantages/' },
          { text: '新闻', link: '/zh/news/' },
          { text: '联系', link: '/zh/contact/' }
        ],
        sidebar: {
          '/zh/products/': [
            { text: '产品概览', link: '/zh/products/' },
            { text: '300系列', link: '/zh/products/300' },
            { text: '325系列', link: '/zh/products/325' },
            { text: '355系列', link: '/zh/products/355' },
            { text: '400系列', link: '/zh/products/400' },
            { text: '426系列', link: '/zh/products/426' },
            { text: '480系列', link: '/zh/products/480' },
            { text: '500系列', link: '/zh/products/500' }
          ],
          '/zh/solutions/': [
            { text: '解决方案概览', link: '/zh/solutions/' },
            { text: '油料作物', link: '/zh/solutions/oil-crops' },
            { text: '特种油脂', link: '/zh/solutions/special-oils' },
            { text: '种子油脂', link: '/zh/solutions/seed-oils' }
          ]
        }
      }
    },
    fr: {
      label: 'Français',
      lang: 'fr',
      link: '/fr/',
      head: [
        ['meta', { property: 'og:title', content: 'Presse à huile Qianlong - Fabricant professionnel de presses hydrauliques' }],
        ['meta', { property: 'og:description', content: "Plus de 15 ans d'expertise dans les équipements de presse hydraulique. Séries 300-500 pour arachide, sésame, colza, noix et plus de 30 graines oléagineuses." }],
        ['meta', { property: 'og:image', content: 'https://hydraulicoilpressing.opchn.com/images/hero-oil-press.webp' }],
        ['meta', { property: 'og:image:width', content: '1200' }],
        ['meta', { property: 'og:image:height', content: '630' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:locale', content: 'fr_FR' }],
        ['meta', { name: 'twitter:card', content: 'summary_large_image' }]
      ],
      themeConfig: {
        nav: [
          { text: 'Accueil', link: '/fr/' },
          { text: 'Produits', link: '/fr/products/' },
          { text: 'Solutions', link: '/fr/solutions/' },
          { text: 'Avantages', link: '/fr/advantages/' },
          { text: 'Actualités', link: '/fr/news/' },
          { text: 'Contact', link: '/fr/contact/' }
        ],
        sidebar: {
          '/fr/products/': [
            { text: "Vue d'ensemble des produits", link: '/fr/products/' },
            { text: 'Série 300', link: '/fr/products/300' },
            { text: 'Série 325', link: '/fr/products/325' },
            { text: 'Série 355', link: '/fr/products/355' },
            { text: 'Série 400', link: '/fr/products/400' },
            { text: 'Série 426', link: '/fr/products/426' },
            { text: 'Série 480', link: '/fr/products/480' },
            { text: 'Série 500', link: '/fr/products/500' }
          ],
          '/fr/solutions/': [
            { text: "Vue d'ensemble des solutions", link: '/fr/solutions/' },
            { text: 'Graines oléagineuses', link: '/fr/solutions/oil-crops' },
            { text: 'Huiles spéciales', link: '/fr/solutions/special-oils' },
            { text: 'Huiles de graines', link: '/fr/solutions/seed-oils' }
          ]
        }
      }
    },
    ru: {
      label: 'Русский',
      lang: 'ru',
      link: '/ru/',
      head: [
        ['meta', { property: 'og:title', content: 'Маслопресс Qianlong - Профессиональный производитель гидравлических маслопрессов' }],
        ['meta', { property: 'og:description', content: 'Более 15 лет опыта в оборудовании для гидравлического прессования масла. Серии 300-500 для арахиса, кунжута, рапса, грецких орехов и более 30 масличных культур.' }],
        ['meta', { property: 'og:image', content: 'https://hydraulicoilpressing.opchn.com/images/hero-oil-press.webp' }],
        ['meta', { property: 'og:image:width', content: '1200' }],
        ['meta', { property: 'og:image:height', content: '630' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:locale', content: 'ru_RU' }],
        ['meta', { name: 'twitter:card', content: 'summary_large_image' }]
      ],
      themeConfig: {
        nav: [
          { text: 'Главная', link: '/ru/' },
          { text: 'Продукты', link: '/ru/products/' },
          { text: 'Решения', link: '/ru/solutions/' },
          { text: 'Преимущества', link: '/ru/advantages/' },
          { text: 'Новости', link: '/ru/news/' },
          { text: 'Контакт', link: '/ru/contact/' }
        ],
        sidebar: {
          '/ru/products/': [
            { text: 'Обзор продукции', link: '/ru/products/' },
            { text: 'Серия 300', link: '/ru/products/300' },
            { text: 'Серия 325', link: '/ru/products/325' },
            { text: 'Серия 355', link: '/ru/products/355' },
            { text: 'Серия 400', link: '/ru/products/400' },
            { text: 'Серия 426', link: '/ru/products/426' },
            { text: 'Серия 480', link: '/ru/products/480' },
            { text: 'Серия 500', link: '/ru/products/500' }
          ],
          '/ru/solutions/': [
            { text: 'Обзор решений', link: '/ru/solutions/' },
            { text: 'Масличные культуры', link: '/ru/solutions/oil-crops' },
            { text: 'Специальные масла', link: '/ru/solutions/special-oils' },
            { text: 'Семенные масла', link: '/ru/solutions/seed-oils' }
          ]
        }
      }
    },
    bn: {
      label: 'বাংলা',
      lang: 'bn',
      link: '/bn/',
      head: [
        ['meta', { property: 'og:title', content: 'Qianlong তেল প্রেস - পেশাদার হাইড্রোলিক তেল প্রেস প্রস্তুতকারক' }],
        ['meta', { property: 'og:description', content: 'হাইড্রোলিক তেল প্রেস সরঞ্জামে 15+ বছরের অভিজ্ঞতা। বাদাম, তিল, সরষে, আখরোট এবং 30+ তেলযুক্ত বীজের জন্য 300-500 সিরিজ।' }],
        ['meta', { property: 'og:image', content: 'https://hydraulicoilpressing.opchn.com/images/hero-oil-press.webp' }],
        ['meta', { property: 'og:image:width', content: '1200' }],
        ['meta', { property: 'og:image:height', content: '630' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:locale', content: 'bn_BD' }],
        ['meta', { name: 'twitter:card', content: 'summary_large_image' }]
      ],
      themeConfig: {
        nav: [
          { text: 'হোম', link: '/bn/' },
          { text: 'পণ্য', link: '/bn/products/' },
          { text: 'সমাধান', link: '/bn/solutions/' },
          { text: 'সুবিধা', link: '/bn/advantages/' },
          { text: 'সংবাদ', link: '/bn/news/' },
          { text: 'যোগাযোগ', link: '/bn/contact/' }
        ],
        sidebar: {
          '/bn/products/': [
            { text: 'পণ্যের সারসংক্ষেপ', link: '/bn/products/' },
            { text: '300 সিরিজ', link: '/bn/products/300' },
            { text: '325 সিরিজ', link: '/bn/products/325' },
            { text: '355 সিরিজ', link: '/bn/products/355' },
            { text: '400 সিরিজ', link: '/bn/products/400' },
            { text: '426 সিরিজ', link: '/bn/products/426' },
            { text: '480 সিরিজ', link: '/bn/products/480' },
            { text: '500 সিরিজ', link: '/bn/products/500' }
          ],
          '/bn/solutions/': [
            { text: 'সমাধান সারসংক্ষেপ', link: '/bn/solutions/' },
            { text: 'তেলযুক্ত ফসল', link: '/bn/solutions/oil-crops' },
            { text: 'বিশেষ তেল', link: '/bn/solutions/special-oils' },
            { text: 'বীজের তেল', link: '/bn/solutions/seed-oils' }
          ]
        }
      }
    },
    vi: {
      label: 'Tiếng Việt',
      lang: 'vi',
      link: '/vi/',
      head: [
        ['meta', { property: 'og:title', content: 'Máy Ép Dầu Qianlong - Nhà sản xuất máy ép dầu thủy lực chuyên nghiệp' }],
        ['meta', { property: 'og:description', content: 'Hơn 15 năm kinh nghiệm trong thiết bị ép dầu thủy lực. Dòng 300-500 cho đậu phộng, mè, cải dầu, óc chó và hơn 30 loại hạt có dầu.' }],
        ['meta', { property: 'og:image', content: 'https://hydraulicoilpressing.opchn.com/images/hero-oil-press.webp' }],
        ['meta', { property: 'og:image:width', content: '1200' }],
        ['meta', { property: 'og:image:height', content: '630' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:locale', content: 'vi_VN' }],
        ['meta', { name: 'twitter:card', content: 'summary_large_image' }]
      ],
      themeConfig: {
        nav: [
          { text: 'Trang chủ', link: '/vi/' },
          { text: 'Sản phẩm', link: '/vi/products/' },
          { text: 'Giải pháp', link: '/vi/solutions/' },
          { text: 'Ưu điểm', link: '/vi/advantages/' },
          { text: 'Tin tức', link: '/vi/news/' },
          { text: 'Liên hệ', link: '/vi/contact/' }
        ],
        sidebar: {
          '/vi/products/': [
            { text: 'Tổng quan sản phẩm', link: '/vi/products/' },
            { text: 'Dòng 300', link: '/vi/products/300' },
            { text: 'Dòng 325', link: '/vi/products/325' },
            { text: 'Dòng 355', link: '/vi/products/355' },
            { text: 'Dòng 400', link: '/vi/products/400' },
            { text: 'Dòng 426', link: '/vi/products/426' },
            { text: 'Dòng 480', link: '/vi/products/480' },
            { text: 'Dòng 500', link: '/vi/products/500' }
          ],
          '/vi/solutions/': [
            { text: 'Tổng quan giải pháp', link: '/vi/solutions/' },
            { text: 'Cây lấy dầu', link: '/vi/solutions/oil-crops' },
            { text: 'Dầu đặc biệt', link: '/vi/solutions/special-oils' },
            { text: 'Dầu hạt', link: '/vi/solutions/seed-oils' }
          ]
        }
      }
    }
  }
})