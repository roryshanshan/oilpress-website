# VitePress网站优化方案

## 📊 当前状态分析

### 项目信息
- **框架**: VitePress 2.0.0-alpha.12
- **语言版本**: 6种（en, zh, fr, ru, vi, bn）
- **内容规模**: 约116MB文档
- **部署**: Vercel

### ✅ 已优化项
1. **SEO配置完善**
   - Canonical标签
   - Hreflang多语言标签
   - Schema.org结构化数据（产品、FAQ、文章、组织等）
   - Google Analytics集成
   - Google Ads转化跟踪

2. **多语言支持完整**
   - 6种语言版本齐全
   - 路由配置规范
   - 导航和侧边栏本地化

## 🚀 优化建议（按优先级排序）

### 优先级1：性能优化（立即执行）

#### 1.1 升级VitePress版本
```bash
# 升级到最新稳定版
npm install vitepress@latest

# 或指定版本
npm install vitepress@^2.0.0
```

**原因**: alpha版本不稳定，建议使用稳定版

#### 1.2 优化构建配置

在 `docs/.vitepress/config.js` 中添加：

```javascript
export default {
  // ...现有配置

  vite: {
    build: {
      // 代码分割优化
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          // 更细粒度的代码分割
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
      // 压缩优化
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true, // 移除console.log
          drop_debugger: true, // 移除debugger
          pure_funcs: ['console.log']
        }
      },
      // CSS优化
      cssCodeSplit: true
    },

    // 开发服务器优化
    server: {
      host: '127.0.0.1',
      port: 5173,
      open: false,
      cors: true
    }
  }
}
```

#### 1.3 图片优化

**步骤1**: 安装图片优化插件
```bash
npm install -D vite-plugin-imagemin
```

**步骤2**: 配置图片优化
```javascript
import viteImagemin from 'vite-plugin-imagemin'

export default {
  vite: {
    plugins: [
      viteImagemin({
        gifsicle: { optimizationLevel: 3 },
        optipng: { optimizationLevel: 7 },
        mozjpeg: { quality: 80, progressive: true },
        svgo: {
          plugins: [
            { name: 'removeViewBox', active: false },
            { name: 'removeEmptyAttrs', active: true }
          ]
        },
        webp: { quality: 80 }
      })
    ]
  }
}
```

**步骤3**: 重命名中文文件名
```bash
cd docs/public/images

# 批量重命名示例（创建脚本）
cat > rename-images.sh << 'EOF'
#!/bin/bash
# 重命名含中文的图片文件

declare -A rename_map=(
  ["菜籽热榨工艺.png"]="rapeseed-hot-pressing-process.png"
  ["茶籽热榨工艺.png"]="tea-seed-hot-pressing-process.png"
  ["大豆热榨工艺.png"]="soybean-hot-pressing-process.png"
  ["花生热榨工艺.png"]="peanut-hot-pressing-process.png"
  ["芝麻热榨工艺.png"]="sesame-hot-pressing-process.png"
  ["核桃冷榨工艺.png"]="walnut-cold-pressing-process.png"
)

for old_name in "${!rename_map[@]}"; do
  new_name="${rename_map[$old_name]}"
  if [ -f "$old_name" ]; then
    mv "$old_name" "$new_name"
    echo "Renamed: $old_name -> $new_name"
  fi
done
EOF

chmod +x rename-images.sh
./rename-images.sh
```

**步骤4**: 添加图片懒加载
在所有markdown文件中，给图片添加懒加载属性：
```html
<img src="/images/example.webp" alt="Example" loading="lazy" decoding="async" />
```

### 优先级2：SEO优化（本周完成）

#### 2.1 优化Sitemap配置

```javascript
export default {
  sitemap: {
    hostname: 'https://hydraulicoilpressing.opchn.com/',
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: 0.8,

    // 优化：排除不需要索引的页面
    excludeRoutes: [
      '/404',
      '/search'
    ],

    // 优化：为不同类型页面设置不同优先级
    transformItems: (items) => {
      return items.map((item) => {
        // 首页最高优先级
        if (item.url === '/' || item.url.match(/^\/(en|zh)\/$/)) {
          item.priority = 1.0
          item.changefreq = 'daily'
        }
        // 产品页高优先级
        else if (item.url.includes('/products/')) {
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
  }
}
```

#### 2.2 添加robots.txt优化

创建 `docs/public/robots.txt`:
```
User-agent: *
Allow: /

# Sitemap
Sitemap: https://hydraulicoilpressing.opchn.com/sitemap.xml

# 禁止索引的路径
Disallow: /404
Disallow: /search

# 爬虫延迟（可选）
Crawl-delay: 1
```

#### 2.3 优化Meta标签

在每个语言的首页添加完整的Open Graph标签：

```javascript
// 在locales配置中
en: {
  head: [
    ['meta', { property: 'og:title', content: 'Shengshi Hecheng Oil Press - Professional Hydraulic Oil Press Manufacturer' }],
    ['meta', { property: 'og:description', content: '15+ years of expertise in hydraulic oil press equipment. 300-500 series for peanut, sesame, rapeseed, walnut, and 30+ oilseeds.' }],
    ['meta', { property: 'og:image', content: 'https://hydraulicoilpressing.opchn.com/images/hero-oil-press.webp' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en_US' }],
    // Twitter卡片
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@yourtwitter' }],
    ['meta', { name: 'twitter:title', content: 'Shengshi Hecheng Oil Press' }],
    ['meta', { name: 'twitter:description', content: 'Professional hydraulic oil press manufacturer since 2008' }]
  ]
}
```

### 优先级3：用户体验优化（下周完成）

#### 3.1 添加回到顶部按钮

创建 `docs/.vitepress/theme/index.js`:
```javascript
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import BackToTop from './components/BackToTop.vue'

export default {
  ...DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(BackToTop)
    })
  }
}
```

创建 `docs/.vitepress/theme/components/BackToTop.vue`:
```vue
<template>
  <Transition name="fade">
    <button
      v-show="showButton"
      class="back-to-top"
      @click="scrollToTop"
      aria-label="Back to top"
    >
      ↑
    </button>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showButton = ref(false)

const checkScroll = () => {
  showButton.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>

<style scoped>
.back-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: var(--vp-c-brand);
  color: white;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s;
  z-index: 999;
}

.back-to-top:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
```

#### 3.2 优化页面加载速度

创建 `docs/.vitepress/theme/index.js`（如果还没有）:
```javascript
import DefaultTheme from 'vitepress/theme'

// 预加载关键资源
if (typeof window !== 'undefined') {
  // 预连接到外部域名
  const preconnectDomains = [
    'https://www.googletagmanager.com',
    'https://embed.tawk.to',
    'https://www.youtube.com'
  ]

  preconnectDomains.forEach(domain => {
    const link = document.createElement('link')
    link.rel = 'preconnect'
    link.href = domain
    document.head.appendChild(link)
  })
}

export default DefaultTheme
```

#### 3.3 添加加载动画

在 `docs/.vitepress/theme/index.js` 中添加：
```javascript
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default DefaultTheme
```

创建 `docs/.vitepress/theme/custom.css`:
```css
/* 页面加载动画 */
.vp-page {
  opacity: 0;
  animation: fadeIn 0.3s ease-in-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 图片懒加载占位符 */
img[loading="lazy"] {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

/* 平滑滚动 */
html {
  scroll-behavior: smooth;
}

/* 自定义滚动条 */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: var(--vp-c-brand);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--vp-c-brand-dark);
}
```

### 优先级4：内容优化（持续进行）

#### 4.1 优化产品图片
- 所有产品图片使用WebP格式
- 添加图片alt标签
- 图片尺寸规范化

#### 4.2 优化内链结构
- 相关产品推荐
- 解决方案交叉链接
- 新闻到产品的链接

#### 4.3 添加FAQ页面
创建常见问题页面，增强SEO

## 📈 预期优化效果

### 性能指标提升预期
| 指标 | 当前 | 目标 |
|------|------|------|
| 首页加载时间 | ~3-4秒 | <2秒 |
| Lighthouse性能分数 | ~60-70 | >85 |
| 首次内容渲染(FCP) | ~2秒 | <1.5秒 |
| 最大内容渲染(LCP) | ~4秒 | <2.5秒 |
| 累积布局偏移(CLS) | ~0.1 | <0.05 |

### SEO提升预期
- 搜索引擎收录率提升 20-30%
- 页面加载速度提升 40-50%
- 移动端体验评分提升至优秀

## 🛠️ 实施计划

### 第1周
- [ ] 升级VitePress版本
- [ ] 配置构建优化
- [ ] 图片文件重命名
- [ ] 添加图片懒加载

### 第2周
- [ ] 优化Sitemap
- [ ] 添加robots.txt
- [ ] 优化Meta标签
- [ ] 添加回到顶部按钮

### 第3周
- [ ] 优化页面加载速度
- [ ] 添加加载动画
- [ ] 优化内链结构
- [ ] 创建FAQ页面

### 持续优化
- [ ] 定期检查性能指标
- [ ] 更新内容
- [ ] 监控SEO表现

## 📝 注意事项

1. **备份**: 执行任何修改前，先备份整个项目
2. **测试**: 本地充分测试后再部署
3. **渐进式**: 逐步实施，每次改动后测试效果
4. **监控**: 使用Google Search Console监控SEO表现

## 🔧 快速开始

执行以下命令开始优化：

```bash
# 1. 进入项目目录
cd "/Volumes/jd5/Qoder临终版/oilpress 20260305最新版本"

# 2. 升级依赖
npm update

# 3. 安装优化插件
npm install -D vite-plugin-imagemin

# 4. 测试构建
npm run docs:build

# 5. 预览效果
npm run docs:preview
```

## 📚 参考资源

- [VitePress官方文档](https://vitepress.dev/)
- [Vite性能优化](https://vitejs.dev/guide/build.html)
- [Google Core Web Vitals](https://web.dev/vitals/)
- [Schema.org文档](https://schema.org/)

---

**优化完成后，预期整体性能提升30-50%，SEO表现提升20-30%**
