<template>
  <Layout>
    <template #nav-bar-content-before>
      <!-- 移动端语言切换按钮 -->
      <div class="mobile-lang-switcher">
        <div class="lang-dropdown" @click="toggleDropdown">
          <div class="lang-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/>
            </svg>
          </div>
          <!-- 下拉菜单 -->
          <div class="lang-options" :class="{ 'show': showDropdown }">
            <div class="lang-option" @click.stop="switchToLanguage('zh')" :class="{ 'active': currentLang === 'zh' }">
              <span>中文</span>
            </div>
            <div class="lang-option" @click.stop="switchToLanguage('en')" :class="{ 'active': currentLang === 'en' }">
              <span>English</span>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template #nav-bar-content-after>
      <!-- 移动端菜单按钮 -->
      <div class="mobile-menu-button" @click.stop="toggleMobileMenu">
        <div class="menu-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      
      <div class="social-icons">
        <a href="https://wa.me/8619906365856" target="_blank" rel="noopener noreferrer" class="social-icon" style="color: #25D366;">
          <svg width="20" height="20" viewBox="0 0 1024 1024" fill="currentColor">
            <path d="M511.872427 0h0.256C794.45376 0 1024.000427 229.674667 1024.000427 512s-229.589333 512-511.872 512c-104.106667 0-200.704-31.018667-281.6-84.565333L33.707093 1002.325333l63.786667-190.250666A508.245333 508.245333 0 0 1 0.000427 512C0.000427 229.674667 229.58976 0 511.872427 0zM365.39776 281.429333c-9.770667-23.338667-17.194667-24.234667-32-24.832A285.525333 285.525333 0 0 0 316.50176 256c-19.285333 0-39.424 5.632-51.626667 18.048C250.155093 289.109333 213.33376 324.266667 213.33376 396.501333c0 72.149333 52.778667 141.952 59.861333 151.722667 7.424 9.728 102.912 160 251.093334 221.226667 115.925333 47.914667 150.314667 43.477333 176.725333 37.845333 38.528-8.277333 86.826667-36.693333 98.986667-70.954667 12.16-34.346667 12.16-63.616 8.618666-69.845333-3.584-6.186667-13.354667-9.728-28.16-17.152-14.848-7.381333-86.869333-42.88-100.522666-47.616-13.354667-4.992-26.069333-3.242667-36.138667 10.965333-14.250667 19.797333-28.16 39.936-39.466667 52.053334-8.874667 9.472-23.424 10.666667-35.541333 5.632-16.298667-6.826667-61.952-22.784-118.314667-72.789334-43.562667-38.741333-73.216-86.954667-81.792-101.418666-8.618667-14.805333-0.896-23.381333 5.930667-31.36 7.381333-9.173333 14.506667-15.658667 21.930667-24.234667 7.424-8.576 11.52-13.013333 16.298666-23.082667 5.034667-9.770667 1.493333-19.84-2.090666-27.221333-3.541333-7.381333-33.194667-79.573333-45.354667-108.8z"/>
          </svg>
        </a>
        
        <div class="wechat-container">
          <a href="#" class="social-icon" style="color: #07C160;">
            <svg width="20" height="20" viewBox="0 0 1024 1024" fill="currentColor">
              <path d="M337.387283 341.82659c-17.757225 0-35.514451 11.83815-35.514451 29.595375s17.757225 29.595376 35.514451 29.595376 29.595376-11.83815 29.595376-29.595376c0-18.49711-11.83815-29.595376-29.595376-29.595375zM577.849711 513.479769c-11.83815 0-22.936416 12.578035-22.936416 23.6763 0 12.578035 11.83815 23.676301 22.936416 23.676301 17.757225 0 29.595376-11.83815 29.595376-23.676301s-11.83815-23.676301-29.595376-23.6763zM501.641618 401.017341c17.757225 0 29.595376-12.578035 29.595376-29.595376 0-17.757225-11.83815-29.595376-29.595376-29.595375s-35.514451 11.83815-35.51445 29.595375 17.757225 29.595376 35.51445 29.595376zM706.589595 513.479769c-11.83815 0-22.936416 12.578035-22.936416 23.6763 0 12.578035 11.83815 23.676301 22.936416 23.676301 17.757225 0 29.595376-11.83815 29.595376-23.676301s-11.83815-23.676301-29.595376-23.6763z"/>
              <path d="M510.520231 2.959538C228.624277 2.959538 0 231.583815 0 513.479769s228.624277 510.520231 510.520231 510.520231 510.520231-228.624277 510.520231-510.520231-228.624277-510.520231-510.520231-510.520231zM413.595376 644.439306c-29.595376 0-53.271676-5.919075-81.387284-12.578034l-81.387283 41.433526 22.936416-71.768786c-58.450867-41.433526-93.965318-95.445087-93.965317-159.815029 0-113.202312 105.803468-201.988439 233.803468-201.98844 114.682081 0 216.046243 71.028902 236.023121 166.473989-7.398844-0.739884-14.797688-1.479769-22.196532-1.479769-110.982659 1.479769-198.289017 85.086705-198.289017 188.67052 0 17.017341 2.959538 33.294798 7.398844 49.572255-7.398844 0.739884-15.537572 1.479769-22.936416 1.479768z m346.265896 82.867052l17.757225 59.190752-63.630058-35.514451c-22.936416 5.919075-46.612717 11.83815-70.289017 11.83815-111.722543 0-199.768786-76.947977-199.768786-172.393063-0.739884-94.705202 87.306358-171.653179 198.289017-171.65318 105.803468 0 199.028902 77.687861 199.028902 172.393064 0 53.271676-34.774566 100.624277-81.387283 136.138728z"/>
            </svg>
          </a>
          <div class="wechat-qr">
              <img src="https://i.postimg.cc/fzV3PSKV/202508260948733.png?dl=1" alt="微信二维码" width="200" height="200">
              <p>扫码添加微信</p>
            </div>
        </div>
        
        <a href="https://www.linkedin.com/newsletters/hydraulic-oil-pressing-machine-7331966128702836736/" target="_blank" rel="noopener noreferrer" class="social-icon" style="color: #0073B1;">
          <svg width="20" height="20" viewBox="0 0 1024 1024" fill="currentColor">
            <path d="M512 1024C229.2224 1024 0 794.7776 0 512 0 229.2224 229.2224 0 512 0c282.7776 0 512 229.2224 512 512 0 282.7776-229.2224 512-512 512z m-137.762133-286.378667V397.380267h-102.4V737.621333h102.4z m-51.2-488.448c-33.024 0-54.5792 22.954667-53.9136 53.589334-0.682667 29.218133 20.8896 52.872533 53.248 52.872533 33.672533 0 55.2448-23.6544 55.2448-52.8896-0.682667-30.6176-21.572267-53.572267-54.5792-53.572267z m133.410133 488.448h102.4V541.405867c0-9.728 1.365333-20.1728 4.061867-26.453334 6.724267-19.456 23.569067-39.645867 51.882666-39.645866 37.034667 0 51.882667 29.917867 51.882667 73.762133V737.621333h102.4V535.842133c0-100.181333-50.517333-146.1248-117.9136-146.1248-54.562133 0-88.251733 32.7168-101.7344 54.272h-2.030933l-4.7104-46.609066h-88.9344c1.348267 29.917867 2.696533 66.0992 2.696533 108.544V737.621333z"/>
          </svg>
        </a>
      </div>
    </template>
  </Layout>
  
  <!-- 自定义移动端菜单内容 - 直接放在Layout外部 -->
  <div class="custom-mobile-menu" v-if="showMobileMenu" @click.self="toggleMobileMenu">
    <div class="mobile-nav-content" @click.stop>
      <div class="mobile-nav-header">
        <h3>{{ currentLang === 'zh' ? '菜单' : 'Menu' }}</h3>
        <button class="close-btn" @click.stop="toggleMobileMenu">×</button>
      </div>
      
      <div class="mobile-nav-menu">
        <a :href="currentLang === 'zh' ? '/zh/' : '/en/'" class="mobile-nav-link" @click="closeMobileMenu">
          {{ currentLang === 'zh' ? '首页' : 'Home' }}
        </a>
        <a :href="currentLang === 'zh' ? '/zh/products/' : '/en/products/'" class="mobile-nav-link" @click="closeMobileMenu">
          {{ currentLang === 'zh' ? '产品系列' : 'Products' }}
        </a>
        <a :href="currentLang === 'zh' ? '/zh/solutions/' : '/en/solutions/'" class="mobile-nav-link" @click="closeMobileMenu">
          {{ currentLang === 'zh' ? '解决方案' : 'Solutions' }}
        </a>
        <a :href="currentLang === 'zh' ? '/zh/advantages/' : '/en/advantages/'" class="mobile-nav-link" @click="closeMobileMenu">
          {{ currentLang === 'zh' ? '公司优势' : 'Advantages' }}
        </a>
        <a :href="currentLang === 'zh' ? '/zh/news/' : '/en/news/'" class="mobile-nav-link" @click="closeMobileMenu">
          {{ currentLang === 'zh' ? '新闻资讯' : 'News' }}
        </a>
        <a :href="currentLang === 'zh' ? '/zh/about/' : '/en/about/'" class="mobile-nav-link" @click="closeMobileMenu">
          {{ currentLang === 'zh' ? '关于我们' : 'About' }}
        </a>
        <a :href="currentLang === 'zh' ? '/zh/contact/' : '/en/contact/'" class="mobile-nav-link" @click="closeMobileMenu">
          {{ currentLang === 'zh' ? '联系我们' : 'Contact' }}
        </a>
      </div>
      
      <div class="mobile-social-icons">
        <a href="https://wa.me/8619906365856" target="_blank" rel="noopener noreferrer" class="mobile-social-icon" style="color: #25D366;">
          <svg width="20" height="20" viewBox="0 0 1024 1024" fill="currentColor">
            <path d="M511.872427 0h0.256C794.45376 0 1024.000427 229.674667 1024.000427 512s-229.589333 512-511.872 512c-104.106667 0-200.704-31.018667-281.6-84.565333L33.707093 1002.325333l63.786667-190.250666A508.245333 508.245333 0 0 1 0.000427 512C0.000427 229.674667 229.58976 0 511.872427 0zM365.39776 281.429333c-9.770667-23.338667-17.194667-24.234667-32-24.832A285.525333 285.525333 0 0 0 316.50176 256c-19.285333 0-39.424 5.632-51.626667 18.048C250.155093 289.109333 213.33376 324.266667 213.33376 396.501333c0 72.149333 52.778667 141.952 59.861333 151.722667 7.424 9.728 102.912 160 251.093334 221.226667 115.925333 47.914667 150.314667 43.477333 176.725333 37.845333 38.528-8.277333 86.826667-36.693333 98.986667-70.954667 12.16-34.346667 12.16-63.616 8.618666-69.845333-3.584-6.186667-13.354667-9.728-28.16-17.152-14.848-7.381333-86.869333-42.88-100.522666-47.616-13.354667-4.992-26.069333-3.242667-36.138667 10.965333-14.250667 19.797333-28.16 39.936-39.466667 52.053334-8.874667 9.472-23.424 10.666667-35.541333 5.632-16.298667-6.826667-61.952-22.784-118.314667-72.789334-43.562667-38.741333-73.216-86.954667-81.792-101.418666-8.618667-14.805333-0.896-23.381333 5.930667-31.36 7.381333-9.173333 14.506667-15.658667 21.930667-24.234667 7.424-8.576 11.52-13.013333 16.298666-23.082667 5.034667-9.770667 1.493333-19.84-2.090666-27.221333-3.541333-7.381333-33.194667-79.573333-45.354667-108.8z"/>
          </svg>
        </a>
        
        <div class="wechat-container">
          <a href="#" class="mobile-social-icon" style="color: #07C160;">
            <svg width="20" height="20" viewBox="0 0 1024 1024" fill="currentColor">
              <path d="M337.387283 341.82659c-17.757225 0-35.514451 11.83815-35.514451 29.595375s17.757225 29.595376 35.514451 29.595376 29.595376-11.83815 29.595376-29.595376c0-18.49711-11.83815-29.595376-29.595376-29.595375zM577.849711 513.479769c-11.83815 0-22.936416 12.578035-22.936416 23.6763 0 12.578035 11.83815 23.676301 22.936416 23.676301 17.757225 0 29.595376-11.83815 29.595376-23.676301s-11.83815-23.676301-29.595376-23.6763zM501.641618 401.017341c17.757225 0 29.595376-12.578035 29.595376-29.595376 0-17.757225-11.83815-29.595376-29.595376-29.595375s-35.514451 11.83815-35.51445 29.595375 17.757225 29.595376 35.51445 29.595376zM706.589595 513.479769c-11.83815 0-22.936416 12.578035-22.936416 23.6763 0 12.578035 11.83815 23.676301 22.936416 23.676301 17.757225 0 29.595376-11.83815 29.595376-23.676301s-11.83815-23.676301-29.595376-23.6763z"/>
              <path d="M510.520231 2.959538C228.624277 2.959538 0 231.583815 0 513.479769s228.624277 510.520231 510.520231 510.520231 510.520231-228.624277 510.520231-510.520231-228.624277-510.520231-510.520231-510.520231zM413.595376 644.439306c-29.595376 0-53.271676-5.919075-81.387284-12.578034l-81.387283 41.433526 22.936416-71.768786c-58.450867-41.433526-93.965318-95.445087-93.965317-159.815029 0-113.202312 105.803468-201.988439 233.803468-201.98844 114.682081 0 216.046243 71.028902 236.023121 166.473989-7.398844-0.739884-14.797688-1.479769-22.196532-1.479769-110.982659 1.479769-198.289017 85.086705-198.289017 188.67052 0 17.017341 2.959538 33.294798 7.398844 49.572255-7.398844 0.739884-15.537572 1.479769-22.936416 1.479768z m346.265896 82.867052l17.757225 59.190752-63.630058-35.514451c-22.936416 5.919075-46.612717 11.83815-70.289017 11.83815-111.722543 0-199.768786-76.947977-199.768786-172.393063-0.739884-94.705202 87.306358-171.653179 198.289017-171.65318 105.803468 0 199.028902 77.687861 199.028902 172.393064 0 53.271676-34.774566 100.624277-81.387283 136.138728z"/>
            </svg>
          </a>
          <div class="wechat-qr">
            <img src="https://i.postimg.cc/fzV3PSKV/202508260948733.png?dl=1" alt="微信二维码" width="200" height="200">
            <p>扫码添加微信</p>
          </div>
        </div>
        
        <a href="https://www.linkedin.com/newsletters/hydraulic-oil-pressing-machine-7331966128702836736/" target="_blank" rel="noopener noreferrer" class="mobile-social-icon" style="color: #0073B1;">
          <svg width="20" height="20" viewBox="0 0 1024 1024" fill="currentColor">
            <path d="M512 1024C229.2224 1024 0 794.7776 0 512 0 229.2224 229.2224 0 512 0c282.7776 0 512 229.2224 512 512 0 282.7776-229.2224 512-512 512z m-137.762133-286.378667V397.380267h-102.4V737.621333h102.4z m-51.2-488.448c-33.024 0-54.5792 22.954667-53.9136 53.589334-0.682667 29.218133 20.8896 52.872533 53.248 52.872533 33.672533 0 55.2448-23.6544 55.2448-52.8896-0.682667-30.6176-21.572267-53.572267-54.5792-53.572267z m133.410133 488.448h102.4V541.405867c0-9.728 1.365333-20.1728 4.061867-26.453334 6.724267-19.456 23.569067-39.645867 51.882666-39.645866 37.034667 0 51.882667 29.917867 51.882667 73.762133V737.621333h102.4V535.842133c0-100.181333-50.517333-146.1248-117.9136-146.1248-54.562133 0-88.251733 32.7168-101.7344 54.272h-2.030933l-4.7104-46.609066h-88.9344c1.348267 29.917867 2.696533 66.0992 2.696533 108.544V737.621333z"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import { computed, ref, onMounted, onUnmounted } from 'vue'

const { Layout } = DefaultTheme
const { frontmatter, site, page } = useData()

// 下拉菜单状态
const showDropdown = ref(false)
// 移动端菜单状态 - 确保初始状态为 false
const showMobileMenu = ref(false)

// 获取当前语言
const currentLang = computed(() => {
  const path = page.value.relativePath
  if (path.startsWith('zh/')) {
    return 'zh'
  }
  return 'en'
})

// 切换下拉菜单显示
const toggleDropdown = (event) => {
  event.stopPropagation()
  showDropdown.value = !showDropdown.value
}

// 切换移动端菜单
const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
}

// 关闭移动端菜单
const closeMobileMenu = () => {
  showMobileMenu.value = false
}

// 切换到指定语言
const switchToLanguage = (lang) => {
  showDropdown.value = false
  const currentPath = page.value.relativePath
  let newPath = ''
  
  console.log('Current path:', currentPath) // 调试信息
  
  if (lang === 'zh') {
    // 切换到中文
    if (currentLang.value === 'en') {
      if (currentPath === 'index.md' || currentPath === '' || currentPath === 'en/index.md') {
        newPath = '/zh/'
      } else if (currentPath.startsWith('en/')) {
        // 移除.md扩展名并替换语言前缀
        const pathWithoutLang = currentPath.replace(/^en\//, '').replace(/\.md$/, '')
        if (pathWithoutLang === 'index' || pathWithoutLang === '') {
          newPath = '/zh/'
        } else {
          newPath = `/zh/${pathWithoutLang}/`
        }
      } else {
        newPath = '/zh/'
      }
    } else {
      return // 已经是中文，不需要切换
    }
  } else {
    // 切换到英文
    if (currentLang.value === 'zh') {
      if (currentPath === 'zh/index.md' || currentPath === 'zh/' || currentPath === 'index.md' || currentPath === '') {
        newPath = '/en/'
      } else if (currentPath.startsWith('zh/')) {
        // 移除.md扩展名并替换语言前缀
        const pathWithoutLang = currentPath.replace(/^zh\//, '').replace(/\.md$/, '')
        if (pathWithoutLang === 'index' || pathWithoutLang === '') {
          newPath = '/en/'
        } else {
          newPath = `/en/${pathWithoutLang}/`
        }
      } else {
        newPath = '/en/'
      }
    } else {
      return // 已经是英文，不需要切换
    }
  }
  
  console.log('New path:', newPath) // 调试信息
  
  // 使用 window.location.href 进行导航
  if (newPath) {
    window.location.href = newPath
  }
}

// 点击页面其他地方关闭下拉菜单和移动端菜单
const handleClickOutside = (event) => {
  // 检查点击是否在移动端菜单内部
  const mobileMenuContent = event.target.closest('.mobile-nav-content')
  const mobileMenuButton = event.target.closest('.mobile-menu-button')
  
  // 检查点击是否在语言切换器内部
  const langDropdown = event.target.closest('.mobile-lang-switcher')
  
  // 如果点击的不是菜单内容和菜单按钮，则关闭菜单
  if (!mobileMenuContent && !mobileMenuButton && showMobileMenu.value) {
    showMobileMenu.value = false
  }
  
  // 如果点击的不是语言切换器，则关闭下拉菜单
  if (!langDropdown && showDropdown.value) {
    showDropdown.value = false
  }
}

onMounted(() => {
  // 确保初始状态为关闭
  showMobileMenu.value = false
  showDropdown.value = false
  
  document.addEventListener('click', handleClickOutside)
  
  // 添加ESC键关闭菜单
  const handleEscKey = (event) => {
    if (event.key === 'Escape') {
      showMobileMenu.value = false
      showDropdown.value = false
    }
  }
  document.addEventListener('keydown', handleEscKey)
  
  // 在组件卸载时清理事件监听
  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
    document.removeEventListener('keydown', handleEscKey)
  })
})
</script>

<style scoped>
  /* 移动端语言切换按钮 */
  .mobile-lang-switcher {
    display: none;
  }
  
  .mobile-menu-button {
    display: none;
  }
  
  /* 自定义移动端菜单样式 */
  .custom-mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    backdrop-filter: blur(4px);
    overflow-y: auto;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 60px 16px 16px;
  }
  
  .mobile-nav-content {
    background: white;
    border-radius: 12px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
    max-width: 400px;
    width: 100%;
    max-height: calc(100vh - 120px);
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  
  .mobile-nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid #eee;
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    border-radius: 12px 12px 0 0;
  }
  
  .mobile-nav-header h3 {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    color: var(--vp-c-brand);
  }
  
  .close-btn {
    background: none;
    border: none;
    font-size: 28px;
    color: #666;
    cursor: pointer;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    transition: all 0.3s ease;
    font-weight: bold;
  }
  
  .close-btn:hover {
    background: rgba(231, 76, 60, 0.1);
    color: var(--vp-c-brand);
    transform: scale(1.1);
  }
  
  .mobile-nav-menu {
    background: white;
    padding: 16px 0;
    flex: 1;
    overflow-y: auto;
  }
  
  .mobile-nav-link {
    display: block;
    padding: 16px 24px;
    font-size: 16px;
    font-weight: 500;
    color: var(--vp-c-text-1);
    text-decoration: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    position: relative;
    min-height: 54px;
    display: flex;
    align-items: center;
  }
  
  .mobile-nav-link:hover,
  .mobile-nav-link:active {
    background: linear-gradient(135deg, rgba(231, 76, 60, 0.08) 0%, rgba(231, 76, 60, 0.12) 100%);
    color: var(--vp-c-brand);
    transform: translateX(8px);
    border-left: 4px solid var(--vp-c-brand);
    padding-left: 20px;
  }
  
  .mobile-nav-link:last-child {
    border-bottom: none;
  }

/* 移动端社交图标样式 */
.mobile-social-icons {
  padding: 20px;
  background: #f8f9fa;
  border-radius: 0 0 12px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.mobile-social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: white;
  border: 2px solid var(--vp-c-brand);
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(231, 76, 60, 0.15);
  text-decoration: none;
  position: relative;
}

.mobile-social-icon:hover,
.mobile-social-icon:active {
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 4px 16px rgba(231, 76, 60, 0.25);
  background: var(--vp-c-brand);
  color: white;
}

.mobile-social-icon svg {
  width: 22px;
  height: 22px;
  transition: color 0.3s ease;
}

.mobile-social-icon:hover svg,
.mobile-social-icon:active svg {
  color: white;
}

/* 移动端微信二维码样式 */
.mobile-social-icons .wechat-container {
  position: relative;
}

.mobile-social-icons .wechat-qr {
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  border: 2px solid var(--vp-c-brand);
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  text-align: center;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 10000;
  min-width: 200px;
}

.mobile-social-icons .wechat-container:hover .wechat-qr {
  opacity: 1;
  visibility: visible;
}

.mobile-social-icons .wechat-qr img {
  width: 150px;
  height: 150px;
  border-radius: 8px;
}

.mobile-social-icons .wechat-qr p {
  margin: 12px 0 0 0;
  font-size: 14px;
  color: var(--vp-c-text-2);
  font-weight: 500;
}

@media (max-width: 768px) {
  .mobile-lang-switcher {
    display: flex !important;
    align-items: center;
    margin-right: 12px;
    position: relative;
  }
  
  .mobile-menu-button {
    display: flex !important;
    align-items: center;
    margin-left: 12px;
    cursor: pointer;
    padding: 8px;
    border-radius: 6px;
    background: rgba(231, 76, 60, 0.1);
    border: 1px solid var(--vp-c-brand);
    transition: all 0.3s ease;
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
  }
  
  .mobile-menu-button:hover,
  .mobile-menu-button:active {
    background: var(--vp-c-brand);
    transform: scale(1.05);
  }
  
  .menu-icon {
    width: 24px;
    height: 18px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .menu-icon span {
    display: block;
    height: 3px;
    width: 100%;
    background: var(--vp-c-brand);
    border-radius: 2px;
    transition: all 0.3s ease;
  }
  
  .mobile-menu-button:hover .menu-icon span,
  .mobile-menu-button:active .menu-icon span {
    background: white;
  }
  
  .lang-dropdown {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    background: rgba(231, 76, 60, 0.1);
    border: 2px solid var(--vp-c-brand);
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease;
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
  }
  
  .lang-dropdown:hover,
  .lang-dropdown:active {
    background: var(--vp-c-brand);
    color: white;
    transform: scale(1.05);
    box-shadow: 0 2px 8px rgba(231, 76, 60, 0.3);
  }
  
  .lang-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
  }
  
  .lang-icon svg {
    width: 18px;
    height: 18px;
    color: var(--vp-c-brand);
    transition: color 0.3s ease;
  }
  
  .lang-dropdown:hover .lang-icon svg,
  .lang-dropdown:active .lang-icon svg {
    color: white;
  }
  
  /* 下拉菜单样式 */
  .lang-options {
    position: absolute;
    top: 48px;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    border: 2px solid var(--vp-c-brand);
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    min-width: 100px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
  }
  
  .lang-options.show {
    opacity: 1;
    visibility: visible;
  }
  
  .lang-options::before {
    content: '';
    position: absolute;
    top: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid var(--vp-c-brand);
  }
  
  .lang-option {
    padding: 8px 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    border-bottom: 1px solid rgba(231, 76, 60, 0.1);
    color: #333;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    min-width: 60px;
  }
  
  .lang-option:last-child {
    border-bottom: none;
  }
  
  .lang-option:hover {
    background: rgba(231, 76, 60, 0.1);
    color: var(--vp-c-brand);
  }
  
  .lang-option.active {
    background: var(--vp-c-brand);
    color: white;
    font-weight: 600;
  }
  
  .lang-option span {
    white-space: nowrap;
  }
  
  /* 小屏幕设备优化 */
  .custom-mobile-menu {
    padding: 40px 12px 12px;
  }
  
  .mobile-nav-content {
    max-height: calc(100vh - 80px);
  }
  
  .mobile-nav-header {
    padding: 16px 20px;
  }
  
  .mobile-nav-menu {
    max-height: calc(50vh);
    overflow-y: auto;
  }
  
  .mobile-social-icons {
    padding: 16px;
    gap: 12px;
  }
  
  .mobile-social-icon {
    width: 44px;
    height: 44px;
  }
  
  .mobile-social-icon svg {
    width: 20px;
    height: 20px;
  }
}

.social-icons {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: 16px;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: transparent;
  border: 1px solid #e2e8f0;
  color: #64748b;
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-icon:hover {
  background: #f8fafc;
  border-color: #3b82f6;
  color: #3b82f6;
  transform: translateY(-1px);
}

.social-icons.mobile {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  padding: 16px 0;
  margin: 16px 0;
  justify-content: center;
  background: rgba(231, 76, 60, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(231, 76, 60, 0.1);
}

.social-icons.mobile .social-icon {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  justify-content: center;
  padding: 0;
  gap: 0;
  background: white;
  border: 2px solid var(--vp-c-brand);
  box-shadow: 0 2px 8px rgba(231, 76, 60, 0.2);
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
}

.social-icons.mobile .social-icon:hover,
.social-icons.mobile .social-icon:active {
  background: var(--vp-c-brand);
  color: white;
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 4px 12px rgba(231, 76, 60, 0.3);
}

.social-icons.mobile .social-icon svg {
  width: 20px;
  height: 20px;
  transition: color 0.3s ease;
}

.social-icons.mobile .social-icon:hover svg,
.social-icons.mobile .social-icon:active svg {
  color: white;
}

@media (max-width: 768px) {
  .social-icons {
    display: none;
  }
}
</style>