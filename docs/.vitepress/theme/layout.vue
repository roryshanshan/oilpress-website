<template>
  <Layout>
    <template #nav-bar-content-before>
      <div v-if="isMobile" class="mobile-nav-before-spacer"></div>
    </template>
    <template #nav-bar-content-after>
      <div v-if="isMobile" class="mobile-top-actions">
        <div class="mobile-lang-switcher">
          <div class="lang-dropdown">
            <button
              type="button"
              class="lang-trigger-btn"
              :aria-expanded="showDropdown ? 'true' : 'false'"
              :aria-label="mobileLangButtonLabel"
              @click.stop="toggleDropdown"
            >
              <div class="lang-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/>
                </svg>
              </div>
              <div class="lang-trigger-copy">
                <span class="lang-trigger-label">{{ mobileLangButtonLabel }}</span>
                <span class="lang-trigger-value">{{ currentLanguageShort }}</span>
              </div>
              <svg class="lang-trigger-arrow" :class="{ 'open': showDropdown }" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6,9 12,15 18,9"></polyline>
              </svg>
            </button>
            <div class="lang-options" :class="{ 'show': showDropdown }">
              <button type="button" class="lang-option" @click.stop="switchToLanguage('zh')" :class="{ 'active': currentLang === 'zh' }">
                <span>{{ localizedLanguageLabel('zh') }}</span>
              </button>
              <button type="button" class="lang-option" @click.stop="switchToLanguage('en')" :class="{ 'active': currentLang === 'en' }">
                <span>{{ localizedLanguageLabel('en') }}</span>
              </button>
              <button type="button" class="lang-option" @click.stop="switchToLanguage('bn')" :class="{ 'active': currentLang === 'bn' }">
                <span>{{ localizedLanguageLabel('bn') }}</span>
              </button>
              <button type="button" class="lang-option" @click.stop="switchToLanguage('ru')" :class="{ 'active': currentLang === 'ru' }">
                <span>{{ localizedLanguageLabel('ru') }}</span>
              </button>
              <button type="button" class="lang-option" @click.stop="switchToLanguage('fr')" :class="{ 'active': currentLang === 'fr' }">
                <span>{{ localizedLanguageLabel('fr') }}</span>
              </button>
              <button type="button" class="lang-option" @click.stop="switchToLanguage('vi')" :class="{ 'active': currentLang === 'vi' }">
                <span>{{ localizedLanguageLabel('vi') }}</span>
              </button>
            </div>
          </div>
        </div>

        <button
          type="button"
          class="mobile-menu-button"
          aria-controls="mobile-nav-dialog"
          :aria-expanded="showMobileMenu ? 'true' : 'false'"
          :aria-label="mobileMenuButtonLabel"
          @click.stop="toggleMobileMenu"
        >
          <div class="menu-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span class="mobile-menu-label">{{ mobileMenuButtonLabel }}</span>
        </button>
      </div>

      <div v-else class="social-icons">
        <a href="https://wa.me/8619906365856" target="_blank" rel="noopener noreferrer" class="social-icon whatsapp-conversion" data-position="header" style="color: #25D366;">
          <svg width="20" height="20" viewBox="0 0 1024 1024" fill="currentColor">
            <path d="M511.872427 0h0.256C794.45376 0 1024.000427 229.674667 1024.000427 512s-229.589333 512-511.872 512c-104.106667 0-200.704-31.018667-281.6-84.565333L33.707093 1002.325333l63.786667-190.250666A508.245333 508.245333 0 0 1 0.000427 512C0.000427 229.674667 229.58976 0 511.872427 0zM365.39776 281.429333c-9.770667-23.338667-17.194667-24.234667-32-24.832A285.525333 285.525333 0 0 0 316.50176 256c-19.285333 0-39.424 5.632-51.626667 18.048C250.155093 289.109333 213.33376 324.266667 213.33376 396.501333c0 72.149333 52.778667 141.952 59.861333 151.722667 7.424 9.728 102.912 160 251.093334 221.226667 115.925333 47.914667 150.314667 43.477333 176.725333 37.845333 38.528-8.277333 86.826667-36.693333 98.986667-70.954667 12.16-34.346667 12.16-63.616 8.618666-69.845333-3.584-6.186667-13.354667-9.728-28.16-17.152-14.848-7.381333-86.869333-42.88-100.522666-47.616-13.354667-4.992-26.069333-3.242667-36.138667 10.965333-14.250667 19.797333-28.16 39.936-39.466667 52.053334-8.874667 9.472-23.424 10.666667-35.541333 5.632-16.298667-6.826667-61.952-22.784-118.314667-72.789334-43.562667-38.741333-73.216-86.954667-81.792-101.418666-8.618667-14.805333-0.896-23.381333 5.930667-31.36 7.381333-9.173333 14.506667-15.658667 21.930667-24.234667 7.424-8.576 11.52-13.013333 16.298666-23.082667 5.034667-9.770667 1.493333-19.84-2.090666-27.221333-3.541333-7.381333-33.194667-79.573333-45.354667-108.8z"/>
          </svg>
        </a>

       
        
        <div class="wechat-container">
          <a href="#" @click.prevent="toggleWechatQR" class="social-icon" style="color: #07C160;">
            <svg width="20" height="20" viewBox="0 0 1024 1024" fill="currentColor">
              <path d="M337.387283 341.82659c-17.757225 0-35.514451 11.83815-35.514451 29.595375s17.757225 29.595376 35.514451 29.595376 29.595376-11.83815 29.595376-29.595376c0-18.49711-11.83815-29.595376-29.595376-29.595375zM577.849711 513.479769c-11.83815 0-22.936416 12.578035-22.936416 23.6763 0 12.578035 11.83815 23.676301 22.936416 23.676301 17.757225 0 29.595376-11.83815 29.595376-23.676301s-11.83815-23.676301-29.595376-23.6763zM501.641618 401.017341c17.757225 0 29.595376-12.578035 29.595376-29.595376 0-17.757225-11.83815-29.595376-29.595376-29.595375s-35.514451 11.83815-35.51445 29.595375 17.757225 29.595376 35.51445 29.595376zM706.589595 513.479769c-11.83815 0-22.936416 12.578035-22.936416 23.6763 0 12.578035 11.83815 23.676301 22.936416 23.676301 17.757225 0 29.595376-11.83815 29.595376-23.676301s-11.83815-23.676301-29.595376-23.6763z"/>
              <path d="M510.520231 2.959538C228.624277 2.959538 0 231.583815 0 513.479769s228.624277 510.520231 510.520231 510.520231 510.520231-228.624277 510.520231-510.520231-228.624277-510.520231-510.520231-510.520231zM413.595376 644.439306c-29.595376 0-53.271676-5.919075-81.387284-12.578034l-81.387283 41.433526 22.936416-71.768786c-58.450867-41.433526-93.965318-95.445087-93.965317-159.815029 0-113.202312 105.803468-201.988439 233.803468-201.98844 114.682081 0 216.046243 71.028902 236.023121 166.473989-7.398844-0.739884-14.797688-1.479769-22.196532-1.479769-110.982659 1.479769-198.289017 85.086705-198.289017 188.67052 0 17.017341 2.959538 33.294798 7.398844 49.572255-7.398844 0.739884-15.537572 1.479769-22.936416 1.479768z m346.265896 82.867052l17.757225 59.190752-63.630058-35.514451c-22.936416 5.919075-46.612717 11.83815-70.289017 11.83815-111.722543 0-199.768786-76.947977-199.768786-172.393063-0.739884-94.705202 87.306358-171.653179 198.289017-171.65318 105.803468 0 199.028902 77.687861 199.028902 172.393064 0 53.271676-34.774566 100.624277-81.387283 136.138728z"/>
            </svg>
          </a>
          <div class="wechat-qr" :class="{ 'show': showWechatQR }">
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

  <!-- WhatsApp 悬浮按钮 - 右下角固定 -->
  <a href="https://api.whatsapp.com/send/?phone=8619906365856" target="_blank" rel="noopener noreferrer" class="whatsapp-floating-btn whatsapp-conversion" data-position="floating-main" title="Chat with us on WhatsApp">
    <svg width="28" height="28" viewBox="0 0 1024 1024" fill="currentColor">
      <path d="M511.872427 0h0.256C794.45376 0 1024.000427 229.674667 1024.000427 512s-229.589333 512-511.872 512c-104.106667 0-200.704-31.018667-281.6-84.565333L33.707093 1002.325333l63.786667-190.250666A508.245333 508.245333 0 0 1 0.000427 512C0.000427 229.674667 229.58976 0 511.872427 0zM365.39776 281.429333c-9.770667-23.338667-17.194667-24.234667-32-24.832A285.525333 285.525333 0 0 0 316.50176 256c-19.285333 0-39.424 5.632-51.626667 18.048C250.155093 289.109333 213.33376 324.266667 213.33376 396.501333c0 72.149333 52.778667 141.952 59.861333 151.722667 7.424 9.728 102.912 160 251.093334 221.226667 115.925333 47.914667 150.314667 43.477333 176.725333 37.845333 38.528-8.277333 86.826667-36.693333 98.986667-70.954667 12.16-34.346667 12.16-63.616 8.618666-69.845333-3.584-6.186667-13.354667-9.728-28.16-17.152-14.848-7.381333-86.869333-42.88-100.522666-47.616-13.354667-4.992-26.069333-3.242667-36.138667 10.965333-14.250667 19.797333-28.16 39.936-39.466667 52.053334-8.874667 9.472-23.424 10.666667-35.541333 5.632-16.298667-6.826667-61.952-22.784-118.314667-72.789334-43.562667-38.741333-73.216-86.954667-81.792-101.418666-8.618667-14.805333-0.896-23.381333 5.930667-31.36 7.381333-9.173333 14.506667-15.658667 21.930667-24.234667 7.424-8.576 11.52-13.013333 16.298666-23.082667 5.034667-9.770667 1.493333-19.84-2.090666-27.221333-3.541333-7.381333-33.194667-79.573333-45.354667-108.8z"/>
    </svg>
  </a>

  <!-- 第二个 WhatsApp 按钮（+86 15615763222） -->
  <a href="https://api.whatsapp.com/send/?phone=8615615763222" target="_blank" rel="noopener noreferrer" class="whatsapp-floating-btn secondary whatsapp-conversion" data-position="floating-secondary" title="Chat with us on WhatsApp">
    <svg width="28" height="28" viewBox="0 0 1024 1024" fill="currentColor">
      <path d="M511.872427 0h0.256C794.45376 0 1024.000427 229.674667 1024.000427 512s-229.589333 512-511.872 512c-104.106667 0-200.704-31.018667-281.6-84.565333L33.707093 1002.325333l63.786667-190.250666A508.245333 508.245333 0 0 1 0.000427 512C0.000427 229.674667 229.58976 0 511.872427 0zM365.39776 281.429333c-9.770667-23.338667-17.194667-24.234667-32-24.832A285.525333 285.525333 0 0 0 316.50176 256c-19.285333 0-39.424 5.632-51.626667 18.048C250.155093 289.109333 213.33376 324.266667 213.33376 396.501333c0 72.149333 52.778667 141.952 59.861333 151.722667 7.424 9.728 102.912 160 251.093334 221.226667 115.925333 47.914667 150.314667 43.477333 176.725333 37.845333 38.528-8.277333 86.826667-36.693333 98.986667-70.954667 12.16-34.346667 12.16-63.616 8.618666-69.845333-3.584-6.186667-13.354667-9.728-28.16-17.152-14.848-7.381333-86.869333-42.88-100.522666-47.616-13.354667-4.992-26.069333-3.242667-36.138667 10.965333-14.250667 19.797333-28.16 39.936-39.466667 52.053334-8.874667 9.472-23.424 10.666667-35.541333 5.632-16.298667-6.826667-61.952-22.784-118.314667-72.789334-43.562667-38.741333-73.216-86.954667-81.792-101.418666-8.618667-14.805333-0.896-23.381333 5.930667-31.36 7.381333-9.173333 14.506667-15.658667 21.930667-24.234667 7.424-8.576 11.52-13.013333 16.298666-23.082667 5.034667-9.770667 1.493333-19.84-2.090666-27.221333-3.541333-7.381333-33.194667-79.573333-45.354667-108.8z"/>
    </svg>
  </a>

  <!-- 自定义移动端菜单内容 - 直接放在Layout外部 -->
  <div class="custom-mobile-menu" v-if="showMobileMenu" @click.self="toggleMobileMenu">
    <div id="mobile-nav-dialog" class="mobile-nav-content" @click.stop>
      <div class="mobile-nav-header">
        <h3>{{ currentLang === 'zh' ? '菜单' : currentLang === 'ru' ? 'Меню' : currentLang === 'fr' ? 'Menu' : currentLang === 'bn' ? 'মেনু' : currentLang === 'vi' ? 'Danh mục' : 'Menu' }}</h3>
        <button class="close-btn" @click.stop="toggleMobileMenu">×</button>
      </div>

      <div class="mobile-menu-languages">
        <div class="mobile-menu-languages-title">{{ mobileLanguageSectionLabel }}</div>
        <div class="mobile-menu-language-grid">
          <button type="button" class="mobile-menu-language-chip" :class="{ 'active': currentLang === 'zh' }" @click="switchToLanguage('zh')">{{ localizedLanguageLabel('zh') }}</button>
          <button type="button" class="mobile-menu-language-chip" :class="{ 'active': currentLang === 'en' }" @click="switchToLanguage('en')">{{ localizedLanguageLabel('en') }}</button>
          <button type="button" class="mobile-menu-language-chip" :class="{ 'active': currentLang === 'bn' }" @click="switchToLanguage('bn')">{{ localizedLanguageLabel('bn') }}</button>
          <button type="button" class="mobile-menu-language-chip" :class="{ 'active': currentLang === 'ru' }" @click="switchToLanguage('ru')">{{ localizedLanguageLabel('ru') }}</button>
          <button type="button" class="mobile-menu-language-chip" :class="{ 'active': currentLang === 'fr' }" @click="switchToLanguage('fr')">{{ localizedLanguageLabel('fr') }}</button>
          <button type="button" class="mobile-menu-language-chip" :class="{ 'active': currentLang === 'vi' }" @click="switchToLanguage('vi')">{{ localizedLanguageLabel('vi') }}</button>
        </div>
      </div>
      
      <div class="mobile-nav-menu">
        <!-- 首页 -->
        <a :href="localizedPath('/')" class="mobile-nav-link" @click="closeMobileMenu">
          {{ currentLang === 'zh' ? '首页' : currentLang === 'ru' ? 'Главная' : currentLang === 'fr' ? 'Accueil' : currentLang === 'bn' ? 'হোম' : currentLang === 'vi' ? 'Trang chủ' : 'Home' }}
        </a>

        <!-- 产品系列 -->
        <div class="mobile-nav-item">
          <div class="mobile-nav-link has-submenu" @click="toggleSubmenu('products')">
            <span>{{ currentLang === 'zh' ? '产品系列' : currentLang === 'ru' ? 'Продукты' : currentLang === 'fr' ? 'Produits' : currentLang === 'bn' ? 'পণ্যসমূহ' : currentLang === 'vi' ? 'Sản phẩm' : 'Products' }}</span>
            <svg class="submenu-icon" :class="{ 'rotated': expandedMenus.products }" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6,9 12,15 18,9"></polyline>
            </svg>
          </div>
          <div class="mobile-submenu" v-show="expandedMenus.products">
            <a :href="localizedPath('/products/')" class="mobile-nav-sublink" @click="closeMobileMenu">
              {{ currentLang === 'zh' ? '产品概览' : currentLang === 'ru' ? 'Обзор продуктов' : currentLang === 'fr' ? 'Aperçu des produits' : currentLang === 'bn' ? 'পণ্য সংক্ষিপ্ত বিবরণ' : currentLang === 'vi' ? 'Tổng quan sản phẩm' : 'Product Overview' }}
            </a>
            <a :href="localizedPath('/products/300')" class="mobile-nav-sublink" @click="closeMobileMenu">
              {{ currentLang === 'zh' ? '300系列' : currentLang === 'ru' ? 'Серия 300' : currentLang === 'fr' ? 'Série 300' : currentLang === 'bn' ? '৩০০ সিরিজ' : currentLang === 'vi' ? 'Dòng 300' : '300 Series' }}
            </a>
            <a :href="localizedPath('/products/325')" class="mobile-nav-sublink" @click="closeMobileMenu">
              {{ currentLang === 'zh' ? '325系列' : currentLang === 'ru' ? 'Серия 325' : currentLang === 'fr' ? 'Série 325' : currentLang === 'bn' ? '৩২৫ সিরিজ' : currentLang === 'vi' ? 'Dòng 325' : '325 Series' }}
            </a>
            <a :href="localizedPath('/products/355')" class="mobile-nav-sublink" @click="closeMobileMenu">
              {{ currentLang === 'zh' ? '355系列' : currentLang === 'ru' ? 'Серия 355' : currentLang === 'fr' ? 'Série 355' : currentLang === 'bn' ? '৩৫৫ সিরিজ' : currentLang === 'vi' ? 'Dòng 355' : '355 Series' }}
            </a>
            <a :href="localizedPath('/products/400')" class="mobile-nav-sublink" @click="closeMobileMenu">
              {{ currentLang === 'zh' ? '400系列' : currentLang === 'ru' ? 'Серия 400' : currentLang === 'fr' ? 'Série 400' : currentLang === 'bn' ? '৪০০ সিরিজ' : currentLang === 'vi' ? 'Dòng 400' : '400 Series' }}
            </a>
            <a :href="localizedPath('/products/426')" class="mobile-nav-sublink" @click="closeMobileMenu">
              {{ currentLang === 'zh' ? '426系列' : currentLang === 'ru' ? 'Серия 426' : currentLang === 'fr' ? 'Série 426' : currentLang === 'bn' ? '৪২৬ সিরিজ' : currentLang === 'vi' ? 'Dòng 426' : '426 Series' }}
            </a>
            <a :href="localizedPath('/products/480')" class="mobile-nav-sublink" @click="closeMobileMenu">
              {{ currentLang === 'zh' ? '480系列' : currentLang === 'ru' ? 'Серия 480' : currentLang === 'fr' ? 'Série 480' : currentLang === 'bn' ? '৪৮০ সিরিজ' : currentLang === 'vi' ? 'Dòng 480' : '480 Series' }}
            </a>
            <a :href="localizedPath('/products/500')" class="mobile-nav-sublink" @click="closeMobileMenu">
              {{ currentLang === 'zh' ? '500系列' : currentLang === 'ru' ? 'Серия 500' : currentLang === 'fr' ? 'Série 500' : currentLang === 'bn' ? '৫০০ সিরিজ' : currentLang === 'vi' ? 'Dòng 500' : '500 Series' }}
            </a>
            <div class="mobile-nav-subitem">
              <div class="mobile-nav-sublink has-nested-submenu" @click="toggleNestedSubmenu('supporting')">
                <span>{{ currentLang === 'zh' ? '↳ 配套设备详情' : currentLang === 'ru' ? '↳ Вспомогательное оборудование' : currentLang === 'fr' ? '↳ Équipements complémentaires' : currentLang === 'bn' ? '↳ সহায়ক সরঞ্জামের বিবরণ' : currentLang === 'vi' ? '↳ Chi tiết thiết bị hỗ trợ' : 'Supporting Equipment Details' }}</span>
                <svg class="nested-submenu-icon" :class="{ 'rotated': nestedExpandedMenus.supporting }" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="6,9 12,15 18,9"></polyline>
                </svg>
              </div>
              <div class="mobile-nested-submenu" v-show="nestedExpandedMenus.supporting">
                <a :href="localizedPath('/products/supporting')" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '配套设备概览' : currentLang === 'ru' ? 'Обзор оборудования' : currentLang === 'fr' ? 'Aperçu des équipements' : currentLang === 'vi' ? 'Tổng quan thiết bị hỗ trợ' : 'Supporting Equipment Overview' }}
                </a>
                <div class="mobile-nav-subitem">
                  <div class="mobile-nav-sublink has-nested-submenu" @click="toggleNestedSubmenu('pre-treatment')">
                    <span>{{ currentLang === 'zh' ? '↳ 预处理设备详情' : currentLang === 'ru' ? '↳ Оборудование предварительной обработки' : currentLang === 'fr' ? '↳ Équipements de prétraitement' : currentLang === 'vi' ? '↳ Chi tiết thiết bị tiền xử lý' : 'Pre-treatment Equipment Details' }}</span>
                    <svg class="nested-submenu-icon" :class="{ 'rotated': nestedExpandedMenus['pre-treatment'] }" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <polyline points="6,9 12,15 18,9"></polyline>
                    </svg>
                  </div>
                  <div class="mobile-nested-submenu" v-show="nestedExpandedMenus['pre-treatment']">
                    <a :href="localizedPath('/products/pre-treatment')" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                      {{ currentLang === 'zh' ? '概述' : currentLang === 'ru' ? 'Обзор' : currentLang === 'fr' ? 'Aperçu' : currentLang === 'vi' ? 'Tổng quan' : 'Overview' }}
                    </a>
                    <a :href="currentLang === 'zh' ? '/zh/products/11kw-high-speed-pulverizer' : currentLang === 'vi' ? '/vi/products/11kw-high-speed-pulverizer' : '/en/products/11kw-high-speed-pulverizer'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                      {{ currentLang === 'zh' ? '11kw高速粉碎机' : currentLang === 'vi' ? 'Máy nghiền tốc độ cao 11kw' : '11kw High Speed Pulverizer' }}
                    </a>
                    <a :href="currentLang === 'zh' ? '/zh/products/27kw-electric-steamer' : currentLang === 'vi' ? '/vi/products/27kw-electric-steamer' : '/en/products/27kw-electric-steamer'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                      {{ currentLang === 'zh' ? '27kw电蒸锅' : currentLang === 'vi' ? 'Nồi hấp điện 27kw' : '27kw Electric Steamer' }}
                    </a>
                    <a :href="currentLang === 'zh' ? '/zh/products/Hemp-and-flaxseed-grinding-and-stirring-integrated-machine' : currentLang === 'vi' ? '/vi/products/Hemp-and-flaxseed-grinding-and-stirring-integrated-machine' : '/en/products/Hemp-and-flaxseed-grinding-and-stirring-integrated-machine'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                      {{ currentLang === 'zh' ? '胡麻亚麻籽研磨搅拌一体机' : currentLang === 'vi' ? 'Máy nghiền và khuấy tích hợp hạt gai dầu và hạt lanh' : 'Hemp and Flaxseed Grinding and Stirring Integrated Machine' }}
                    </a>
                    <a :href="currentLang === 'zh' ? '/zh/products/automatic-drum-roaster' : currentLang === 'bn' ? '/bn/products/automatic-drum-roaster' : currentLang === 'vi' ? '/vi/products/automatic-drum-roaster' : '/en/products/automatic-drum-roaster'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                      {{ currentLang === 'zh' ? '自动滚筒炒锅' : currentLang === 'bn' ? 'স্বয়ংক্রিয় ড্রাম রোস্টার' : currentLang === 'vi' ? 'Máy rang trống tự động' : 'Automatic Drum Roaster' }}
                    </a>
                    <a :href="currentLang === 'zh' ? '/zh/products/cake-wrapping-machine' : currentLang === 'vi' ? '/vi/products/cake-wrapping-machine' : '/en/products/cake-wrapping-machine'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                      {{ currentLang === 'zh' ? '饼粕包饼机' : currentLang === 'vi' ? 'Máy bọc bánh dầu' : 'Cake Wrapping Machine' }}
                    </a>
                    <a :href="currentLang === 'zh' ? '/zh/products/feeding-crushing-frying-integrated-machine' : currentLang === 'vi' ? '/vi/products/feeding-crushing-frying-integrated-machine' : '/en/products/feeding-crushing-frying-integrated-machine'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                      {{ currentLang === 'zh' ? '上料/粉碎/炒制一体机' : currentLang === 'vi' ? 'Máy cấp liệu nghiền rang tích hợp' : 'Feeding Crushing Frying Integrated Machine' }}
                    </a>
                    <a :href="currentLang === 'zh' ? '/zh/products/heat-conducting-oil-flat-bottom-frying-pan' : currentLang === 'vi' ? '/vi/products/heat-conducting-oil-flat-bottom-frying-pan' : '/en/products/heat-conducting-oil-flat-bottom-frying-pan'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                      {{ currentLang === 'zh' ? '导热油平底煎锅' : currentLang === 'vi' ? 'Chảo đáy phẳng dầu tải nhiệt' : 'Heat Conducting Oil Flat Bottom Frying Pan' }}
                    </a>
                    <a :href="currentLang === 'zh' ? '/zh/products/pneumatic-filter-press' : currentLang === 'vi' ? '/vi/products/pneumatic-filter-press' : '/en/products/pneumatic-filter-press'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                      {{ currentLang === 'zh' ? '气动滤油机' : currentLang === 'vi' ? 'Máy ép lọc khí nén' : 'Pneumatic Filter Press' }}
                    </a>
                    <a :href="currentLang === 'zh' ? '/zh/products/pre-press-machine' : currentLang === 'vi' ? '/vi/products/pre-press-machine' : '/en/products/pre-press-machine'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                      {{ currentLang === 'zh' ? '预榨机' : currentLang === 'vi' ? 'Máy ép sơ bộ' : 'Pre-Press Machine' }}
                    </a>
                    <a :href="currentLang === 'zh' ? '/zh/products/wood-fired-steamer' : currentLang === 'vi' ? '/vi/products/wood-fired-steamer' : '/en/products/wood-fired-steamer'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                      {{ currentLang === 'zh' ? '燃木蒸锅' : currentLang === 'vi' ? 'Nồi hấp đốt củi' : 'Wood Fired Steamer' }}
                    </a>
                    <a :href="currentLang === 'zh' ? '/zh/products/wood-fired-thermal-oil-flat-bottom-wok' : currentLang === 'vi' ? '/vi/products/wood-fired-thermal-oil-flat-bottom-wok' : '/en/products/wood-fired-thermal-oil-flat-bottom-wok'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                      {{ currentLang === 'zh' ? '燃木导热油平底锅' : currentLang === 'vi' ? 'Chảo đáy phẳng dầu tải nhiệt đốt củi' : 'Wood Fired Thermal Oil Flat Bottom Wok' }}
                    </a>
                  </div>
                </div>
                <div class="mobile-nav-subitem">
                  <div class="mobile-nav-sublink has-nested-submenu" @click="toggleNestedSubmenu('post-treatment')">
                    <span>{{ currentLang === 'zh' ? '↳ 后处理设备详情' : currentLang === 'ru' ? '↳ Оборудование последующей обработки' : currentLang === 'fr' ? '↳ Équipements de post-traitement' : currentLang === 'bn' ? '↳ পোস্ট-ট্রিটমেন্ট সরঞ্জামের বিবরণ' : currentLang === 'vi' ? '↳ Chi tiết thiết bị hậu xử lý' : 'Post-treatment Equipment Details' }}</span>
                    <svg class="nested-submenu-icon" :class="{ 'rotated': nestedExpandedMenus['post-treatment'] }" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <polyline points="6,9 12,15 18,9"></polyline>
                    </svg>
                  </div>
                  <div class="mobile-nested-submenu" v-show="nestedExpandedMenus['post-treatment']">
                    <a :href="localizedPath('/products/post-treatment')" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                      {{ currentLang === 'zh' ? '概述' : currentLang === 'ru' ? 'Обзор' : currentLang === 'fr' ? 'Aperçu' : currentLang === 'bn' ? 'সংক্ষিপ্ত বিবরণ' : currentLang === 'vi' ? 'Tổng quan' : 'Overview' }}
                    </a>
                    <a :href="currentLang === 'zh' ? '/zh/products/cake-pulverizer' : currentLang === 'ru' ? '/ru/products/cake-pulverizer' : currentLang === 'fr' ? '/fr/products/cake-pulverizer' : currentLang === 'bn' ? '/bn/products/cake-pulverizer' : currentLang === 'vi' ? '/vi/products/cake-pulverizer' : '/en/products/cake-pulverizer'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                      {{ currentLang === 'zh' ? '饼粕粉碎机' : currentLang === 'ru' ? 'Измельчитель жмыха' : currentLang === 'fr' ? 'Pulvérisateur de gâteau' : currentLang === 'bn' ? 'কেক পালভারাইজার' : currentLang === 'vi' ? 'Máy nghiền bánh dầu' : 'Cake Pulverizer' }}
                    </a>
                    <a :href="currentLang === 'zh' ? '/zh/products/edible-oil-refining-equipment' : currentLang === 'ru' ? '/ru/products/edible-oil-refining-equipment' : currentLang === 'fr' ? '/fr/products/edible-oil-refining-equipment' : currentLang === 'bn' ? '/bn/products/edible-oil-refining-equipment' : currentLang === 'vi' ? '/vi/products/edible-oil-refining-equipment' : '/en/products/edible-oil-refining-equipment'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                      {{ currentLang === 'zh' ? '食用油精炼设备' : currentLang === 'ru' ? 'Оборудование для рафинирования пищевого масла' : currentLang === 'fr' ? 'Équipement de raffinage d\'huile comestible' : currentLang === 'bn' ? 'খাদ্য তেল রিফাইনিং যন্ত্রপাতি' : currentLang === 'vi' ? 'Thiết bị tinh luyện dầu ăn' : 'Edible Oil Refining Equipment' }}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 解决方案 -->
        <div class="mobile-nav-item">
          <div class="mobile-nav-link has-submenu" @click="toggleSubmenu('solutions')">
            <span>{{ currentLang === 'zh' ? '解决方案' : currentLang === 'ru' ? 'Решения' : currentLang === 'fr' ? 'Solutions' : currentLang === 'bn' ? 'সমাধান' : currentLang === 'vi' ? 'Giải pháp' : 'Solutions' }}</span>
            <svg class="submenu-icon" :class="{ 'rotated': expandedMenus.solutions }" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6,9 12,15 18,9"></polyline>
            </svg>
          </div>
          <div class="mobile-submenu" v-show="expandedMenus.solutions">
            <a :href="localizedPath('/solutions/')" class="mobile-nav-sublink" @click="closeMobileMenu">
              {{ currentLang === 'zh' ? '方案概览' : currentLang === 'ru' ? 'Обзор решений' : currentLang === 'fr' ? 'Aperçu des solutions' : currentLang === 'bn' ? 'সমাধানের সংক্ষিপ্ত বিবরণ' : currentLang === 'vi' ? 'Tổng quan giải pháp' : 'Overview' }}
            </a>
            <!-- 主要类别及其二级菜单 -->
            <div class="mobile-nav-subitem">
              <div class="mobile-nav-sublink has-nested-submenu" @click="toggleNestedSubmenu('grain-seed-oils')">
                <span>{{ currentLang === 'zh' ? '🌾 粮油类（种子类）解决方案' : currentLang === 'ru' ? '🌾 Решения для зерновых и семенных масел' : currentLang === 'fr' ? '🌾 Solutions d\'huile de graines' : currentLang === 'bn' ? '🌾 শস্য ও বীজের তেলের সমাধান' : currentLang === 'vi' ? '🌾 Giải pháp dầu hạt và ngũ cốc' : '🌾 Grain and Seed Oils Solutions' }}</span>
                <svg class="nested-submenu-icon" :class="{ 'rotated': nestedExpandedMenus['grain-seed-oils'] }" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="6,9 12,15 18,9"></polyline>
                </svg>
              </div>
              <div class="mobile-nested-submenu" v-show="nestedExpandedMenus['grain-seed-oils']">
                <a :href="localizedPath('/solutions/seed-oils')" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '粮油类概述' : currentLang === 'bn' ? 'শস্য ও বীজের তেল সংক্ষিপ্ত বিবরণ' : currentLang === 'vi' ? 'Tổng quan dầu hạt và ngũ cốc' : 'Grain and Seed Oils Overview' }}
                </a>
                <a :href="currentLang === 'zh' ? '/zh/solutions/soybean' : currentLang === 'bn' ? '/bn/solutions/soybean' : currentLang === 'vi' ? '/vi/solutions/soybean' : '/en/solutions/soybean'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '🌱 大豆油' : currentLang === 'bn' ? '🌱 সয়াবিন তেল' : currentLang === 'vi' ? '🌱 Dầu đậu nành' : '🌱 Soybean Oil' }}
                </a>
                <a :href="currentLang === 'zh' ? '/zh/solutions/peanut' : currentLang === 'bn' ? '/bn/solutions/peanut' : currentLang === 'vi' ? '/vi/solutions/peanut' : '/en/solutions/peanut'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '🥜 花生油' : currentLang === 'bn' ? '🥜 চিনাবাদাম তেল' : currentLang === 'vi' ? '🥜 Dầu lạc' : '🥜 Peanut Oil' }}
                </a>
                <a :href="currentLang === 'zh' ? '/zh/solutions/sesame' : currentLang === 'vi' ? '/vi/solutions/sesame' : '/en/solutions/sesame'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '🌰 芝麻油' : currentLang === 'bn' ? '🌰 তিলের তেল' : currentLang === 'vi' ? '🌰 Dầu mè' : '🌰 Sesame Oil' }}
                </a>
                <a :href="currentLang === 'zh' ? '/zh/solutions/rapeseed' : currentLang === 'vi' ? '/vi/solutions/rapeseed' : '/en/solutions/rapeseed'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '🌿 菜籽油' : currentLang === 'bn' ? '🌿 সরিষার তেল' : currentLang === 'vi' ? '🌿 Dầu cải dầu' : '🌿 Rapeseed Oil' }}
                </a>
                <a :href="currentLang === 'zh' ? '/zh/solutions/sunflower' : currentLang === 'vi' ? '/vi/solutions/sunflower' : '/en/solutions/sunflower'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '🌻 向日葵油' : currentLang === 'bn' ? '🌻 সূর্যমুখী তেল' : currentLang === 'vi' ? '🌻 Dầu hướng dương' : '🌻 Sunflower Oil' }}
                </a>
                <a :href="currentLang === 'zh' ? '/zh/solutions/cottonseed' : currentLang === 'vi' ? '/vi/solutions/cottonseed' : '/en/solutions/cottonseed'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '🧵 棉籽油' : currentLang === 'bn' ? '🧵 তুলার বীজের তেল' : currentLang === 'vi' ? '🧵 Dầu hạt bông' : '🧵 Cottonseed Oil' }}
                </a>
                <a :href="currentLang === 'zh' ? '/zh/solutions/flaxseed' : currentLang === 'vi' ? '/vi/solutions/flaxseed' : '/en/solutions/flaxseed'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '🌾 亚麻籽油' : currentLang === 'bn' ? '🌾 তিসির তেল' : currentLang === 'vi' ? '🌾 Dầu hạt lanh' : '🌾 Flaxseed Oil' }}
                </a>
                <a :href="currentLang === 'zh' ? '/zh/solutions/tea-seed' : currentLang === 'vi' ? '/vi/solutions/tea-seed' : '/en/solutions/tea-seed'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '🍵 茶籽油' : currentLang === 'bn' ? '🍵 চা বীজের তেল' : currentLang === 'vi' ? '🍵 Dầu hạt trà' : '🍵 Tea Seed Oil' }}
                </a>
                <a :href="currentLang === 'zh' ? '/zh/solutions/perilla' : currentLang === 'vi' ? '/vi/solutions/perilla' : '/en/solutions/perilla'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '🌱 紫苏油' : currentLang === 'bn' ? '🌱 পেরিলা তেল' : currentLang === 'vi' ? '🌱 Dầu tía tô' : '🌱 Perilla Oil' }}
                </a>
              </div>
            </div>

            <div class="mobile-nav-subitem">
              <div class="mobile-nav-sublink has-nested-submenu" @click="toggleNestedSubmenu('nut-oils')">
                <span>{{ currentLang === 'zh' ? '🥜 坚果类油料解决方案' : currentLang === 'ru' ? '🥜 Решения для ореховых масел' : currentLang === 'fr' ? '🥜 Solutions d\'huile de noix' : currentLang === 'bn' ? '🥜 বাদামের তেলের সমাধান' : currentLang === 'vi' ? '🥜 Giải pháp dầu hạt cứng' : '🥜 Nut Oils Solutions' }}</span>
                <svg class="nested-submenu-icon" :class="{ 'rotated': nestedExpandedMenus['nut-oils'] }" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="6,9 12,15 18,9"></polyline>
                </svg>
              </div>
              <div class="mobile-nested-submenu" v-show="nestedExpandedMenus['nut-oils']">
                <a :href="localizedPath('/solutions/nuts')" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '坚果油概述' : currentLang === 'bn' ? 'বাদামের তেলের সংক্ষিপ্ত বিবরণ' : currentLang === 'vi' ? 'Tổng quan dầu hạt cứng' : 'Nut Oils Overview' }}
                </a>
                <a :href="currentLang === 'zh' ? '/zh/solutions/walnut' : currentLang === 'vi' ? '/vi/solutions/walnut' : '/en/solutions/walnut'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '🌰 核桃油' : currentLang === 'bn' ? '🌰 আখরোট তেল' : currentLang === 'vi' ? '🌰 Dầu óc chó' : '🌰 Walnut Oil' }}
                </a>
                <a :href="currentLang === 'zh' ? '/zh/solutions/hazelnut' : currentLang === 'vi' ? '/vi/solutions/hazelnut' : '/en/solutions/hazelnut'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '🌰 榛子油' : currentLang === 'bn' ? '🌰 হেজেলনাট তেল' : currentLang === 'vi' ? '🌰 Dầu hạt phỉ' : '🌰 Hazelnut Oil' }}
                </a>
                <a :href="currentLang === 'zh' ? '/zh/solutions/apricot-kernel' : currentLang === 'vi' ? '/vi/solutions/apricot-kernel' : '/en/solutions/apricot-kernel'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '🌰 杏仁油' : currentLang === 'bn' ? '🌰 খুবানি শাঁসের তেল' : currentLang === 'vi' ? '🌰 Dầu nhân hạt mơ' : '🌰 Apricot Kernel Oil' }}
                </a>
                <a :href="currentLang === 'zh' ? '/zh/solutions/coconut' : currentLang === 'vi' ? '/vi/solutions/coconut' : '/en/solutions/coconut'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '🥥 椰子油' : currentLang === 'bn' ? '🥥 নারিকেল তেল' : currentLang === 'vi' ? '🥥 Dầu dừa' : '🥥 Coconut Oil' }}
                </a>
                <a :href="currentLang === 'zh' ? '/zh/solutions/cashew' : currentLang === 'vi' ? '/vi/solutions/cashew' : '/en/solutions/cashew'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '🥜 腰果油' : currentLang === 'bn' ? '🥜 কাজু বাদামের তেল' : currentLang === 'vi' ? '🥜 Dầu điều' : '🥜 Cashew Oil' }}
                </a>
                <a :href="currentLang === 'zh' ? '/zh/solutions/pistachio' : currentLang === 'vi' ? '/vi/solutions/pistachio' : '/en/solutions/pistachio'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '🥜 开心果油' : currentLang === 'bn' ? '🥜 পেস্তা বাদামের তেল' : currentLang === 'vi' ? '🥜 Dầu hồ trăn' : '🥜 Pistachio Oil' }}
                </a>
              </div>
            </div>

            <div class="mobile-nav-subitem">
              <div class="mobile-nav-sublink has-nested-submenu" @click="toggleNestedSubmenu('fruit-oils')">
                <span>{{ currentLang === 'zh' ? '🥑 果实类油料解决方案' : currentLang === 'ru' ? '🥑 Решения для фруктовых масел' : currentLang === 'fr' ? '🥑 Solutions d\'huile de fruits' : currentLang === 'bn' ? '🥑 ফলের তেলের সমাধান' : currentLang === 'vi' ? '🥑 Giải pháp dầu từ quả' : '🥑 Fruit Oils Solutions' }}</span>
                <svg class="nested-submenu-icon" :class="{ 'rotated': nestedExpandedMenus['fruit-oils'] }" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="6,9 12,15 18,9"></polyline>
                </svg>
              </div>
              <div class="mobile-nested-submenu" v-show="nestedExpandedMenus['fruit-oils']">
                <a :href="localizedPath('/solutions/fruits')" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '水果油概述' : currentLang === 'bn' ? 'ফলের তেলের সংক্ষিপ্ত বিবরণ' : currentLang === 'vi' ? 'Tổng quan dầu từ quả' : 'Fruit Oils Overview' }}
                </a>
                <a :href="currentLang === 'zh' ? '/zh/solutions/avocado' : currentLang === 'vi' ? '/vi/solutions/avocado' : '/en/solutions/avocado'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '🥑 鳄梨油' : currentLang === 'bn' ? '🥑 এভোকাডো তেল' : currentLang === 'vi' ? '🥑 Dầu bơ' : '🥑 Avocado Oil' }}
                </a>
                <a :href="currentLang === 'zh' ? '/zh/solutions/grape-seed' : currentLang === 'vi' ? '/vi/solutions/grape-seed' : '/en/solutions/grape-seed'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '🍇 葡萄籽油' : currentLang === 'bn' ? '🍇 আঙ্গুর বীজের তেল' : currentLang === 'vi' ? '🍇 Dầu hạt nho' : '🍇 Grape Seed Oil' }}
                </a>
                <a :href="currentLang === 'zh' ? '/zh/solutions/pumpkin-seed' : currentLang === 'vi' ? '/vi/solutions/pumpkin-seed' : '/en/solutions/pumpkin-seed'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '🎃 南瓜籽油' : currentLang === 'bn' ? '🎃 কুমড়ার বীজের তেল' : currentLang === 'vi' ? '🎃 Dầu hạt bí' : '🎃 Pumpkin Seed Oil' }}
                </a>
                <a :href="currentLang === 'zh' ? '/zh/solutions/watermelon-seed' : currentLang === 'vi' ? '/vi/solutions/watermelon-seed' : '/en/solutions/watermelon-seed'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '🍉 西瓜籽油' : currentLang === 'bn' ? '🍉 তরমুজের বীজের তেল' : currentLang === 'vi' ? '🍉 Dầu hạt dưa hấu' : '🍉 Watermelon Seed Oil' }}
                </a>
              </div>
            </div>

            <div class="mobile-nav-subitem">
              <div class="mobile-nav-sublink has-nested-submenu" @click="toggleNestedSubmenu('special-oils')">
                <span>{{ currentLang === 'zh' ? '⚙️ 其他特殊油料解决方案' : currentLang === 'ru' ? '⚙️ Решения для специальных масел' : currentLang === 'fr' ? '⚙️ Solutions d\'huiles spéciales' : currentLang === 'bn' ? '⚙️ বিশেষ তেলের সমাধান' : currentLang === 'vi' ? '⚙️ Giải pháp dầu đặc biệt' : '⚙️ Special Oils Solutions' }}</span>
                <svg class="nested-submenu-icon" :class="{ 'rotated': nestedExpandedMenus['special-oils'] }" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="6,9 12,15 18,9"></polyline>
                </svg>
              </div>
              <div class="mobile-nested-submenu" v-show="nestedExpandedMenus['special-oils']">
                <a :href="localizedPath('/solutions/special-oils')" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '特种油料概述' : currentLang === 'bn' ? 'বিশেষ তেলের সংক্ষিপ্ত বিবরণ' : currentLang === 'vi' ? 'Tổng quan dầu đặc biệt' : 'Special Oils Overview' }}
                </a>
                <a :href="currentLang === 'zh' ? '/zh/solutions/rice-bran' : currentLang === 'vi' ? '/vi/solutions/rice-bran' : '/en/solutions/rice-bran'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '🌾 米糠油' : currentLang === 'bn' ? '🌾 চালের কুঁড়োর তেল' : currentLang === 'vi' ? '🌾 Dầu cám gạo' : '🌾 Rice Bran Oil' }}
                </a>
                <a :href="currentLang === 'zh' ? '/zh/solutions/corn-germ' : currentLang === 'vi' ? '/vi/solutions/corn-germ' : '/en/solutions/corn-germ'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '🌽 玉米胚芽油' : currentLang === 'bn' ? '🌽 ভুট্টার অঙ্কুর তেল' : currentLang === 'vi' ? '🌽 Dầu mầm ngô' : '🌽 Corn Germ Oil' }}
                </a>
                <a :href="currentLang === 'zh' ? '/zh/solutions/castor-seed' : currentLang === 'vi' ? '/vi/solutions/castor-seed' : '/en/solutions/castor-seed'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '🌱 蓖麻籽油' : currentLang === 'bn' ? '🌱 ভেরেন্ডা বীজের তেল' : currentLang === 'vi' ? '🌱 Dầu hạt thầu dầu' : '🌱 Castor Seed Oil' }}
                </a>
                <a :href="currentLang === 'zh' ? '/zh/solutions/chili-seed' : currentLang === 'vi' ? '/vi/solutions/chili-seed' : '/en/solutions/chili-seed'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '🌶️ 辣椒籽油' : currentLang === 'bn' ? '🌶️ মরিচের বীজের তেল' : currentLang === 'vi' ? '🌶️ Dầu hạt ớt' : '🌶️ Chili Seed Oil' }}
                </a>
              </div>
            </div>
            <div class="mobile-nav-subitem">
              <div class="mobile-nav-sublink has-nested-submenu" @click="toggleNestedSubmenu('filling')">
                <span>{{ currentLang === 'zh' ? '↳ 灌装配套方案详情' : currentLang === 'bn' ? '↳ ফিলিং সহায়ক সমাধানের বিবরণ' : currentLang === 'vi' ? '↳ Chi tiết giải pháp chiết rót đồng bộ' : 'Filling Supporting Solutions Details' }}</span>
                <svg class="nested-submenu-icon" :class="{ 'rotated': nestedExpandedMenus.filling }" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="6,9 12,15 18,9"></polyline>
                </svg>
              </div>
              <div class="mobile-nested-submenu" v-show="nestedExpandedMenus.filling">
                <div
                  v-for="item in fillingSupportingMenuItems"
                  :key="item.key"
                  class="mobile-nav-subitem"
                >
                  <div
                    v-if="item.children"
                    class="mobile-nav-nestedlink has-nested-submenu"
                    @click="toggleNestedSubmenu(item.key)"
                  >
                    <span>{{ item.label }}</span>
                    <svg class="nested-submenu-icon" :class="{ 'rotated': nestedExpandedMenus[item.key] }" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <polyline points="6,9 12,15 18,9"></polyline>
                    </svg>
                  </div>
                  <a
                    v-else
                    :href="item.href"
                    class="mobile-nav-nestedlink"
                    @click="closeMobileMenu"
                  >
                    {{ item.label }}
                  </a>
                  <div
                    v-if="item.children"
                    class="mobile-nested-submenu"
                    v-show="nestedExpandedMenus[item.key]"
                  >
                    <a
                      v-for="child in item.children"
                      :key="child.href"
                      :href="child.href"
                      class="mobile-nav-nestedlink"
                      @click="closeMobileMenu"
                    >
                      {{ child.label }}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 公司优势 -->
        <div class="mobile-nav-item">
          <div class="mobile-nav-link has-submenu" @click="toggleSubmenu('advantages')">
            <span>{{ currentLang === 'zh' ? '公司优势' : currentLang === 'ru' ? 'Преимущества' : currentLang === 'fr' ? 'Avantages' : currentLang === 'bn' ? 'সুবিধাসমূহ' : currentLang === 'vi' ? 'Ưu điểm' : 'Advantages' }}</span>
            <svg class="submenu-icon" :class="{ 'rotated': expandedMenus.advantages }" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6,9 12,15 18,9"></polyline>
            </svg>
          </div>
          <div class="mobile-submenu" v-show="expandedMenus.advantages">
            <a :href="localizedPath('/advantages/')" class="mobile-nav-sublink" @click="closeMobileMenu">
              {{ currentLang === 'zh' ? '优势概览' : currentLang === 'ru' ? 'Обзор преимуществ' : currentLang === 'fr' ? 'Aperçu des avantages' : currentLang === 'bn' ? 'সুবিধার সংক্ষিপ্ত বিবরণ' : currentLang === 'vi' ? 'Tổng quan ưu điểm' : 'Overview' }}
            </a>
            <a :href="localizedPath('/advantages/innovation')" class="mobile-nav-sublink" @click="closeMobileMenu">
              {{ currentLang === 'zh' ? '技术创新' : currentLang === 'bn' ? 'কারিগরি উদ্ভাবন' : currentLang === 'vi' ? 'Đổi mới công nghệ' : 'Technical Innovation' }}
            </a>
            <a :href="localizedPath('/advantages/quality')" class="mobile-nav-sublink" @click="closeMobileMenu">
              {{ currentLang === 'zh' ? '质量保证' : currentLang === 'bn' ? 'মানের নিশ্চয়তা' : currentLang === 'vi' ? 'Đảm bảo chất lượng' : 'Quality Assurance' }}
            </a>
            <a :href="localizedPath('/advantages/service')" class="mobile-nav-sublink" @click="closeMobileMenu">
              {{ currentLang === 'zh' ? '服务支持' : currentLang === 'bn' ? 'সেবা সহায়তা' : currentLang === 'vi' ? 'Hỗ trợ dịch vụ' : 'Service Support' }}
            </a>
            <a :href="localizedPath('/advantages/cases')" class="mobile-nav-sublink" @click="closeMobileMenu">
              {{ currentLang === 'zh' ? '成功案例' : currentLang === 'bn' ? 'সফল কেস স্টাডি' : currentLang === 'vi' ? 'Ca thành công' : 'Success Cases' }}
            </a>
          </div>
        </div>

        <!-- 新闻资讯 -->
        <div class="mobile-nav-item">
          <div class="mobile-nav-link has-submenu" @click="toggleSubmenu('news')">
            <span>{{ currentLang === 'zh' ? '新闻资讯' : currentLang === 'ru' ? 'Новости' : currentLang === 'fr' ? 'Actualités' : currentLang === 'bn' ? 'সংবাদ' : currentLang === 'vi' ? 'Tin tức' : 'News' }}</span>
            <svg class="submenu-icon" :class="{ 'rotated': expandedMenus.news }" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6,9 12,15 18,9"></polyline>
            </svg>
          </div>
          <div class="mobile-submenu" v-show="expandedMenus.news">
            <a :href="localizedPath('/news/')" class="mobile-nav-sublink" @click="closeMobileMenu">
              {{ currentLang === 'zh' ? '新闻中心' : currentLang === 'ru' ? 'Новостной центр' : currentLang === 'fr' ? 'Centre d\'actualités' : currentLang === 'bn' ? 'সংবাদ কেন্দ্র' : currentLang === 'vi' ? 'Trung tâm tin tức' : 'News Center' }}
            </a>
            <a :href="localizedPath('/news/company')" class="mobile-nav-sublink" @click="closeMobileMenu">
              {{ currentLang === 'zh' ? '公司动态' : currentLang === 'ru' ? 'Новости компании' : currentLang === 'fr' ? 'Actualités de l\'entreprise' : currentLang === 'bn' ? 'কোম্পানি সংবাদ' : currentLang === 'vi' ? 'Tin công ty' : 'Company News' }}
            </a>
            <a :href="localizedPath('/news/industry')" class="mobile-nav-sublink" @click="closeMobileMenu">
              {{ currentLang === 'zh' ? '行业资讯' : currentLang === 'ru' ? 'Индустриальные новости' : currentLang === 'fr' ? 'Actualités de l\'industrie' : currentLang === 'bn' ? 'শিল্প সংবাদ' : currentLang === 'vi' ? 'Tin ngành' : 'Industry News' }}
            </a>
            <a :href="localizedPath('/news/technology')" class="mobile-nav-sublink" @click="closeMobileMenu">
              {{ currentLang === 'zh' ? '技术知识' : currentLang === 'ru' ? 'Технические знания' : currentLang === 'fr' ? 'Connaissances techniques' : currentLang === 'bn' ? 'কারিগরি জ্ঞান' : currentLang === 'vi' ? 'Kiến thức kỹ thuật' : 'Technical Knowledge' }}
            </a>
          </div>
        </div>

        <!-- 关于我们 -->
        <div class="mobile-nav-item">
          <div class="mobile-nav-link has-submenu" @click="toggleSubmenu('about')">
            <span>{{ currentLang === 'zh' ? '关于我们' : currentLang === 'ru' ? 'О нас' : currentLang === 'fr' ? 'À propos' : currentLang === 'bn' ? 'আমাদের সম্পর্কে' : currentLang === 'vi' ? 'Về chúng tôi' : 'About' }}</span>
            <svg class="submenu-icon" :class="{ 'rotated': expandedMenus.about }" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6,9 12,15 18,9"></polyline>
            </svg>
          </div>
          <div class="mobile-submenu" v-show="expandedMenus.about">
            <a :href="localizedPath('/about/')" class="mobile-nav-sublink" @click="closeMobileMenu">
              {{ currentLang === 'zh' ? '公司简介' : currentLang === 'ru' ? 'Профиль компании' : currentLang === 'fr' ? 'Profil de l\'entreprise' : currentLang === 'bn' ? 'কোম্পানি প্রোফাইল' : currentLang === 'vi' ? 'Hồ sơ công ty' : 'Company Profile' }}
            </a>
            <a :href="localizedPath('/about/culture')" class="mobile-nav-sublink" @click="closeMobileMenu">
              {{ currentLang === 'zh' ? '企业文化' : currentLang === 'ru' ? 'Корпоративная культура' : currentLang === 'fr' ? 'Culture d\'entreprise' : currentLang === 'bn' ? 'প্রাতিষ্ঠানিক সংস্কৃতি' : currentLang === 'vi' ? 'Văn hóa doanh nghiệp' : 'Corporate Culture' }}
            </a>
            <a :href="localizedPath('/about/history')" class="mobile-nav-sublink" @click="closeMobileMenu">
              {{ currentLang === 'zh' ? '发展历程' : currentLang === 'ru' ? 'История развития' : currentLang === 'fr' ? 'Historique de développement' : currentLang === 'bn' ? 'উন্নয়নের ইতিহাস' : currentLang === 'vi' ? 'Lịch sử phát triển' : 'Development History' }}
            </a>
            <a :href="localizedPath('/about/honors')" class="mobile-nav-sublink" @click="closeMobileMenu">
              {{ currentLang === 'zh' ? '荣誉资质' : currentLang === 'ru' ? 'Награды и квалификации' : currentLang === 'fr' ? 'Honneurs et qualifications' : currentLang === 'bn' ? 'সম্মান ও সনদপত্র' : currentLang === 'vi' ? 'Danh hiệu và chứng nhận' : 'Honors & Certifications' }}
            </a>
            <a :href="localizedPath('/about/team')" class="mobile-nav-sublink" @click="closeMobileMenu">
              {{ currentLang === 'zh' ? '团队介绍' : currentLang === 'ru' ? 'Представление команды' : currentLang === 'fr' ? 'Présentation de l\'équipe' : currentLang === 'bn' ? 'আমাদের টিম' : currentLang === 'vi' ? 'Đội ngũ của chúng tôi' : 'Our Team' }}
            </a>
          </div>
        </div>

        <!-- 设备使用说明书 -->
        <a :href="localizedPath('/products/instruction-manual')" class="mobile-nav-link" @click="closeMobileMenu">
          {{ currentLang === 'zh' ? '设备使用说明书' : currentLang === 'bn' ? 'যন্ত্রপাতির ব্যবহার নির্দেশিকা' : currentLang === 'vi' ? 'Hướng dẫn sử dụng thiết bị' : 'Instruction Manual' }}
        </a>

        <!-- 客户定制款液压榨油机 -->
        <a :href="localizedPath('/products/customized-hydraulic-oil-press')" class="mobile-nav-link" @click="closeMobileMenu">
          {{ currentLang === 'zh' ? '客户定制款液压榨油机' : currentLang === 'bn' ? 'কাস্টমাইজড হাইড্রোলিক অয়েল প্রেস' : currentLang === 'vi' ? 'Máy ép dầu thủy lực tùy chỉnh' : 'Customized Hydraulic Oil Press' }}
        </a>

        <!-- 客户订货发货视频 -->
        <a :href="localizedPath('/products/customer-order-shipping-video')" class="mobile-nav-link" @click="closeMobileMenu">
          {{ currentLang === 'zh' ? '客户订货发货视频' : currentLang === 'bn' ? 'গ্রাহক অর্ডার শিপিং ভিডিও' : currentLang === 'vi' ? 'Video đơn hàng và giao hàng' : 'Customer Order Shipping Video' }}
        </a>

        <!-- 联系我们 -->
        <a :href="localizedPath('/contact/')" class="mobile-nav-link" @click="closeMobileMenu">
          {{ currentLang === 'zh' ? '联系我们' : currentLang === 'ru' ? 'Контакты' : currentLang === 'fr' ? 'Contact' : currentLang === 'bn' ? 'যোগাযোগ' : currentLang === 'vi' ? 'Liên hệ' : 'Contact' }}
        </a>
      </div>
      
      <div class="mobile-social-icons">
        <a href="https://wa.me/8619906365856" target="_blank" rel="noopener noreferrer" class="mobile-social-icon" style="color: #25D366;">
          <svg width="20" height="20" viewBox="0 0 1024 1024" fill="currentColor">
            <path d="M511.872427 0h0.256C794.45376 0 1024.000427 229.674667 1024.000427 512s-229.589333 512-511.872 512c-104.106667 0-200.704-31.018667-281.6-84.565333L33.707093 1002.325333l63.786667-190.250666A508.245333 508.245333 0 0 1 0.000427 512C0.000427 229.674667 229.58976 0 511.872427 0zM365.39776 281.429333c-9.770667-23.338667-17.194667-24.234667-32-24.832A285.525333 285.525333 0 0 0 316.50176 256c-19.285333 0-39.424 5.632-51.626667 18.048C250.155093 289.109333 213.33376 324.266667 213.33376 396.501333c0 72.149333 52.778667 141.952 59.861333 151.722667 7.424 9.728 102.912 160 251.093334 221.226667 115.925333 47.914667 150.314667 43.477333 176.725333 37.845333 38.528-8.277333 86.826667-36.693333 98.986667-70.954667 12.16-34.346667 12.16-63.616 8.618666-69.845333-3.584-6.186667-13.354667-9.728-28.16-17.152-14.848-7.381333-86.869333-42.88-100.522666-47.616-13.354667-4.992-26.069333-3.242667-36.138667 10.965333-14.250667 19.797333-28.16 39.936-39.466667 52.053334-8.874667 9.472-23.424 10.666667-35.541333 5.632-16.298667-6.826667-61.952-22.784-118.314667-72.789334-43.562667-38.741333-73.216-86.954667-81.792-101.418666-8.618667-14.805333-0.896-23.381333 5.930667-31.36 7.381333-9.173333 14.506667-15.658667 21.930667-24.234667 7.424-8.576 11.52-13.013333 16.298666-23.082667 5.034667-9.770667 1.493333-19.84-2.090666-27.221333-3.541333-7.381333-33.194667-79.573333-45.354667-108.8z"/>
          </svg>
        </a>
        
        <div class="wechat-container">
          <a href="#" @click.prevent="toggleMobileWechatQR" class="mobile-social-icon" style="color: #07C160;">
            <svg width="20" height="20" viewBox="0 0 1024 1024" fill="currentColor">
              <path d="M337.387283 341.82659c-17.757225 0-35.514451 11.83815-35.514451 29.595375s17.757225 29.595376 35.514451 29.595376 29.595376-11.83815 29.595376-29.595376c0-18.49711-11.83815-29.595376-29.595376-29.595375zM577.849711 513.479769c-11.83815 0-22.936416 12.578035-22.936416 23.6763 0 12.578035 11.83815 23.676301 22.936416 23.676301 17.757225 0 29.595376-11.83815 29.595376-23.676301s-11.83815-23.676301-29.595376-23.6763zM501.641618 401.017341c17.757225 0 29.595376-12.578035 29.595376-29.595376 0-17.757225-11.83815-29.595376-29.595376-29.595375s-35.514451 11.83815-35.51445 29.595375 17.757225 29.595376 35.51445 29.595376zM706.589595 513.479769c-11.83815 0-22.936416 12.578035-22.936416 23.6763 0 12.578035 11.83815 23.676301 22.936416 23.676301 17.757225 0 29.595376-11.83815 29.595376-23.676301s-11.83815-23.676301-29.595376-23.6763z"/>
              <path d="M510.520231 2.959538C228.624277 2.959538 0 231.583815 0 513.479769s228.624277 510.520231 510.520231 510.520231 510.520231-228.624277 510.520231-510.520231-228.624277-510.520231-510.520231-510.520231zM413.595376 644.439306c-29.595376 0-53.271676-5.919075-81.387284-12.578034l-81.387283 41.433526 22.936416-71.768786c-58.450867-41.433526-93.965318-95.445087-93.965317-159.815029 0-113.202312 105.803468-201.988439 233.803468-201.98844 114.682081 0 216.046243 71.028902 236.023121 166.473989-7.398844-0.739884-14.797688-1.479769-22.196532-1.479769-110.982659 1.479769-198.289017 85.086705-198.289017 188.67052 0 17.017341 2.959538 33.294798 7.398844 49.572255-7.398844 0.739884-15.537572 1.479769-22.936416 1.479768z m346.265896 82.867052l17.757225 59.190752-63.630058-35.514451c-22.936416 5.919075-46.612717 11.83815-70.289017 11.83815-111.722543 0-199.768786-76.947977-199.768786-172.393063-0.739884-94.705202 87.306358-171.653179 198.289017-171.65318 105.803468 0 199.028902 77.687861 199.028902 172.393064 0 53.271676-34.774566 100.624277-81.387283 136.138728z"/>
            </svg>
          </a>
          <div class="wechat-qr" :class="{ 'show': showMobileWechatQR }">
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

  <BackToTop />
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { injectSpeedInsights } from '@vercel/speed-insights'
import { inject } from '@vercel/analytics'
import BackToTop from './components/BackToTop.vue'

const { Layout } = DefaultTheme
const { frontmatter, site, page } = useData()
// 下拉菜单状态
const showDropdown = ref(false)
// 移动端菜单状态 - 确保初始状态为 false
const showMobileMenu = ref(false)
// 移动端子菜单展开状态
const expandedMenus = ref({
  products: false,
  solutions: false,
  advantages: false,
  news: false,
  about: false
})

// 移动端嵌套子菜单展开状态
const nestedExpandedMenus = ref({
  'seed-oils': false,
  'grain-and-seed-oils': false, // 添加这一行用于中文和英文的粮油类油料
  'nut-oils': false,
  'fruit-oils': false,
  'special-oils': false,
  'series-300': false,
  'series-325': false,
  'series-355': false,
  'series-400': false,
  'series-426': false,
  'series-480': false,
  'series-500': false,
  supporting: false,
  'pre-treatment': false,
  'post-treatment': false,
  filling: false,
  'filling-machines': false
})

// 微信二维码显示状态
const showWechatQR = ref(false)
const showMobileWechatQR = ref(false)

// 获取当前语言
const currentLang = computed(() => {
  const path = page.value.relativePath
  if (path.startsWith('zh/')) {
    return 'zh'
  } else if (path.startsWith('ru/')) {
    return 'ru'
  } else if (path.startsWith('fr/')) {
    return 'fr'
  } else if (path.startsWith('bn/')) {
    return 'bn'
  } else if (path.startsWith('vi/')) {
    return 'vi'
  }
  return 'en'
})

const currentLanguageShort = computed(() => {
  const labels = {
    zh: '中文',
    en: 'EN',
    bn: 'BN',
    ru: 'RU',
    fr: 'FR',
    vi: 'VI'
  }

  return labels[currentLang.value] || 'EN'
})

const localizedLanguageLabel = (lang) => {
  const nativeLabels = {
    zh: '中文',
    en: 'English',
    bn: 'বাংলা',
    ru: 'Русский',
    fr: 'Français',
    vi: 'Tiếng Việt'
  }

  return nativeLabels[lang] || lang.toUpperCase()
}

const mobileLangButtonLabel = computed(() => {
  return currentLang.value === 'zh' ? '语言' : currentLang.value === 'vi' ? 'Ngôn ngữ' : 'Lang'
})

const mobileMenuButtonLabel = computed(() => {
  return currentLang.value === 'zh' ? '菜单' : currentLang.value === 'vi' ? 'Danh mục' : 'Menu'
})

const mobileLanguageSectionLabel = computed(() => {
  return currentLang.value === 'zh' ? '快速切换语言' : currentLang.value === 'vi' ? 'Chuyển ngôn ngữ' : 'Language'
})

const localizedPath = (path) => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return currentLang.value === 'en' ? `/en${normalizedPath}` : `/${currentLang.value}${normalizedPath}`
}

const fillingSupportingMenuItems = computed(() => {
  const zh = currentLang.value === 'zh'
  const vi = currentLang.value === 'vi'
  const item = (key, zhLabel, enLabel, viLabel, path, children = null) => ({
    key,
    label: zh ? zhLabel : vi ? viLabel : enLabel,
    href: localizedPath(path),
    children: children
      ? children.map(([childZh, childEn, childVi, childPath]) => ({
          label: zh ? childZh : vi ? childVi : childEn,
          href: localizedPath(childPath)
        }))
      : null
  })

  return [
    item('bottle-washing-series', '冲瓶机系列', 'Bottle Washing Machine Series', 'Dòng máy rửa chai', '/solutions/bottle-washing/', [
      ['冲瓶机系列概览', 'Bottle Washing Overview', 'Tổng quan dòng máy rửa chai', '/solutions/bottle-washing/'],
      ['回转式冲瓶机', 'Rotary Bottle Washer', 'Máy rửa chai quay', '/solutions/bottle-washing/rotary-bottle-washer'],
      ['六轮式冲瓶机', 'Six-Wheel Bottle Washer', 'Máy rửa chai sáu bánh', '/solutions/bottle-washing/six-wheel-bottle-washer'],
      ['链轨式冲瓶机', 'Chain Bottle Washer', 'Máy rửa chai kiểu xích', '/solutions/bottle-washing/chain-bottle-washer'],
      ['间歇式冲瓶机', 'Intermittent Bottle Washer', 'Máy rửa chai gián đoạn', '/solutions/bottle-washing/intermittent-bottle-washer'],
      ['翻转式冲瓶机', 'Flip Bottle Washer', 'Máy rửa chai lật', '/solutions/bottle-washing/flip-bottle-washer']
    ]),
    item('filling-machines', '灌装机系列', 'Filling Machine Series', 'Dòng máy chiết rót', '/solutions/filling/', [
      ['灌装机系列概览', 'Filling Machine Series Overview', 'Tổng quan dòng máy chiết rót', '/solutions/filling/'],
      ['系列智能型灌装机', 'Series Intelligent Filling Machine', 'Dòng máy chiết rót thông minh', '/solutions/filling/smart-filling-machine'],
      ['高精度定量灌装机', 'High-Precision Quantitative Filling Machine', 'Máy chiết rót định lượng độ chính xác cao', '/solutions/filling/high-precision-filling-machine'],
      ['智能定量灌装机', 'Intelligent Quantitative Filling Machine', 'Máy chiết rót định lượng thông minh', '/solutions/filling/intelligent-quantitative-filling-machine'],
      ['回转式大桶灌装机', 'Rotary Drum Filling Machine', 'Máy chiết rót thùng quay', '/solutions/filling/rotary-drum-filling-machine'],
      ['直线式灌装机', 'Linear Filling Machine', 'Máy chiết rót tuyến tính', '/solutions/filling/linear-filling-machine'],
      ['农药灌装机', 'Pesticide Filling Machine', 'Máy chiết rót thuốc trừ sâu', '/solutions/filling/pesticide-filling-machine'],
      ['耐酸碱腐蚀灌装机', 'Corrosion-Resistant Filling Machine', 'Máy chiết rót chống ăn mòn axit và kiềm', '/solutions/filling/corrosion-resistant-filling-machine']
    ]),
    item('light-inspection-series', '灯检机系列', 'Light Inspection Machine Series', 'Dòng máy kiểm tra bằng đèn', '/solutions/light-inspection/', [
      ['灯检机系列概览', 'Light Inspection Overview', 'Tổng quan máy kiểm tra bằng đèn', '/solutions/light-inspection/'],
      ['灯检机', 'Light Inspection Machine', 'Máy kiểm tra bằng đèn', '/solutions/light-inspection/light-inspection-machine']
    ]),
    item('sealing-series', '封口机系列', 'Sealing Machine Series', 'Dòng máy đóng nắp', '/solutions/sealing/', [
      ['封口机系列概览', 'Sealing Overview', 'Tổng quan dòng máy đóng nắp', '/solutions/sealing/'],
      ['铝盖封口机', 'Aluminum Cap Sealing Machine', 'Máy đóng nắp nhôm', '/solutions/sealing/aluminum-cap-sealing-machine'],
      ['防盗盖封口机', 'Anti-Theft Cap Sealing Machine', 'Máy đóng nắp chống trộm', '/solutions/sealing/anti-theft-cap-sealing-machine'],
      ['塑盖压盖机', 'Plastic Cap Pressing Machine', 'Máy ép nắp nhựa', '/solutions/sealing/plastic-cap-pressing-machine'],
      ['气动旋盖机', 'Pneumatic Capping Machine', 'Máy xoáy nắp khí nén', '/solutions/sealing/pneumatic-capping-machine'],
      ['单头封口机', 'Single-Head Sealing Machine', 'Máy đóng nắp một đầu', '/solutions/sealing/single-head-sealing-machine']
    ]),
    item('corking-series', '打塞机系列', 'Corking Machine Series', 'Dòng máy đóng nút bần', '/solutions/corking/', [
      ['打塞机系列概览', 'Corking Overview', 'Tổng quan dòng máy đóng nút bần', '/solutions/corking/'],
      ['全自动打塞机', 'Automatic Corking Machine', 'Máy đóng nút bần tự động', '/solutions/corking/automatic-corking-machine'],
      ['半自动打塞机', 'Semi-Automatic Corking Machine', 'Máy đóng nút bần bán tự động', '/solutions/corking/semi-automatic-corking-machine'],
      ['手动打塞机', 'Manual Corking Machine', 'Máy đóng nút bần thủ công', '/solutions/corking/manual-corking-machine']
    ]),
    item('cap-shrinking-series', '胶帽热缩机系列', 'Cap Shrinking Machine Series', 'Dòng máy co nhiệt nắp', '/solutions/cap-shrinking/', [
      ['胶帽热缩机系列概览', 'Cap Shrinking Overview', 'Tổng quan máy co nhiệt nắp', '/solutions/cap-shrinking/'],
      ['滚盖热缩一体机', 'Cap Rolling Shrinking Machine', 'Máy lăn nắp co nhiệt', '/solutions/cap-shrinking/cap-rolling-shrinking-machine'],
      ['多头胶帽热缩机', 'Multi-Head Cap Shrinking Machine', 'Máy co nhiệt nắp nhiều đầu', '/solutions/cap-shrinking/multi-head-cap-shrinking-machine'],
      ['单头胶帽热缩机', 'Single-Head Cap Shrinking Machine', 'Máy co nhiệt nắp một đầu', '/solutions/cap-shrinking/single-head-cap-shrinking-machine']
    ]),
    item('drying-series', '吹干机系列', 'Drying Machine Series', 'Dòng máy sấy khô', '/solutions/drying/', [
      ['吹干机系列概览', 'Drying Overview', 'Tổng quan máy sấy khô', '/solutions/drying/'],
      ['蜘蛛手节能吹干机', 'Spider Arm Bottle Dryer', 'Máy sấy chai tay nhện', '/solutions/drying/spider-arm-bottle-dryer'],
      ['涡轮风刀吹干机', 'Turbo Air Knife Dryer', 'Máy sấy dao gió turbo', '/solutions/drying/turbo-air-knife-dryer']
    ]),
    item('labeling-series', '贴标机系列', 'Labeling Machine Series', 'Dòng máy dán nhãn', '/solutions/labeling/', [
      ['贴标机系列概览', 'Labeling Overview', 'Tổng quan máy dán nhãn', '/solutions/labeling/'],
      ['DF-T200圆瓶贴标机', 'DF-T200 Round Bottle Labeler', 'Máy dán nhãn chai tròn DF-T200', '/solutions/labeling/df-t200-round-bottle-labeler'],
      ['双标全自动贴标机', 'Double-Label Automatic Labeling Machine', 'Máy dán nhãn kép tự động', '/solutions/labeling/double-label-automatic-labeling-machine'],
      ['自粘贴标机', 'Self-Adhesive Labeling Machine', 'Máy dán nhãn tự dính', '/solutions/labeling/self-adhesive-labeling-machine']
    ]),
    item('laser-coding-series', '激光打码机系列', 'Laser Coding Machine Series', 'Dòng máy khắc mã laser', '/solutions/laser-coding/', [
      ['激光打码机系列概览', 'Laser Coding Overview', 'Tổng quan máy khắc mã laser', '/solutions/laser-coding/'],
      ['CO2激光打码机', 'CO2 Laser Marking Machine', 'Máy khắc laser CO2', '/solutions/laser-coding/co2-laser-marking-machine'],
      ['光纤激光打码机', 'Fiber Laser Marking Machine', 'Máy khắc laser sợi quang', '/solutions/laser-coding/fiber-laser-marking-machine']
    ]),
    item('packing-palletizing-series', '装箱、码垛', 'Packing and Palletizing', 'Đóng thùng và xếp pallet', '/solutions/packing-palletizing/', [
      ['装箱、码垛概览', 'Packing and Palletizing Overview', 'Tổng quan đóng thùng và xếp pallet', '/solutions/packing-palletizing/'],
      ['自动折盖封箱机', 'Carton Sealing Machine', 'Máy dán thùng carton', '/solutions/packing-palletizing/carton-sealing-machine'],
      ['开箱装箱一体机', 'Case Erector Packing Machine', 'Máy dựng và đóng thùng', '/solutions/packing-palletizing/case-erector-packing-machine'],
      ['机器人码垛机', 'Robot Palletizer', 'Robot xếp pallet', '/solutions/packing-palletizing/robot-palletizer']
    ]),
    item('fruit-veg-processing-series', '蔬果类前期处理设备', 'Fruit and Vegetable Pre-processing Equipment', 'Thiết bị tiền xử lý rau quả', '/solutions/fruit-veg-processing/', [
      ['蔬果类前期处理概览', 'Fruit and Vegetable Pre-processing Overview', 'Tổng quan tiền xử lý rau quả', '/solutions/fruit-veg-processing/'],
      ['果蔬提升机', 'Fruit Elevator', 'Máy nâng rau quả', '/solutions/fruit-veg-processing/fruit-elevator']
    ]),
    item('filtering-series', '过滤机系列', 'Filtering Machine Series', 'Dòng máy lọc', '/solutions/filtering/'),
    item('brewing-series', '酿酒设备系列', 'Brewing Equipment Series', 'Dòng thiết bị nấu rượu', '/solutions/brewing/', [
      ['酿酒设备系列概览', 'Brewing Equipment Overview', 'Tổng quan thiết bị nấu rượu', '/solutions/brewing/'],
      ['低真空灌装机', 'Low Vacuum Filling Machine', 'Máy chiết rót chân không thấp', '/solutions/brewing/low-vacuum-filling-machine'],
      ['GFP-12A低真空灌装机', 'GFP-12A Low Vacuum Filling Machine', 'Máy chiết rót chân không thấp GFP-12A', '/solutions/brewing/gfp-12a-low-vacuum-filling-machine'],
      ['GFP-12B低真空灌装机', 'GFP-12B Low Vacuum Filling Machine', 'Máy chiết rót chân không thấp GFP-12B', '/solutions/brewing/gfp-12b-low-vacuum-filling-machine'],
      ['GFP-18A低真空灌装机', 'GFP-18A Low Vacuum Filling Machine', 'Máy chiết rót chân không thấp GFP-18A', '/solutions/brewing/gfp-18a-low-vacuum-filling-machine'],
      ['GFP-24H低真空灌装机', 'GFP-24H Low Vacuum Filling Machine', 'Máy chiết rót chân không thấp GFP-24H', '/solutions/brewing/gfp-24h-low-vacuum-filling-machine'],
      ['GFP-30H低真空灌装机', 'GFP-30H Low Vacuum Filling Machine', 'Máy chiết rót chân không thấp GFP-30H', '/solutions/brewing/gfp-30h-low-vacuum-filling-machine'],
      ['GFP-36H低真空灌装机', 'GFP-36H Low Vacuum Filling Machine', 'Máy chiết rót chân không thấp GFP-36H', '/solutions/brewing/gfp-36h-low-vacuum-filling-machine'],
      ['GFP-40H低真空灌装机', 'GFP-40H Low Vacuum Filling Machine', 'Máy chiết rót chân không thấp GFP-40H', '/solutions/brewing/gfp-40h-low-vacuum-filling-machine'],
      ['GFP-48H低真空灌装机', 'GFP-48H Low Vacuum Filling Machine', 'Máy chiết rót chân không thấp GFP-48H', '/solutions/brewing/gfp-48h-low-vacuum-filling-machine'],
      ['GFP-60H低真空灌装机', 'GFP-60H Low Vacuum Filling Machine', 'Máy chiết rót chân không thấp GFP-60H', '/solutions/brewing/gfp-60h-low-vacuum-filling-machine'],
      ['灌装打塞一体机', 'Filling Corking Monoblock', 'Máy chiết rót và đóng nút bần liền khối', '/solutions/brewing/filling-corking-monoblock'],
      ['冲洗灌装打塞三合一', 'Wine Rinsing Filling Corking Monoblock', 'Máy súc rửa chiết rót đóng nút bần 3 trong 1', '/solutions/brewing/wine-rinsing-filling-corking-monoblock']
    ]),
    item('dairy-processing-series', '奶类加工设备', 'Dairy Processing Equipment', 'Thiết bị chế biến sữa', '/solutions/dairy-processing/', [
      ['奶类加工设备概览', 'Dairy Processing Overview', 'Tổng quan thiết bị chế biến sữa', '/solutions/dairy-processing/'],
      ['巴氏杀菌生产线', 'Pasteurization Processing Line', 'Dây chuyền thanh trùng', '/solutions/dairy-processing/pasteurization-processing-line']
    ])
  ]
})

// 检测是否为移动端
const isMobile = ref(false)

// 更新移动端状态
const updateMobileState = () => {
  if (typeof window !== 'undefined') {
    isMobile.value = window.innerWidth <= 768
  }
}

// 切换下拉菜单显示
const toggleDropdown = () => {
  if (!showDropdown.value) {
    showMobileMenu.value = false
  }
  showDropdown.value = !showDropdown.value
}

// 切换移动端菜单
const toggleMobileMenu = () => {
  showDropdown.value = false
  showMobileMenu.value = !showMobileMenu.value
}

// 关闭移动端菜单
const closeMobileMenu = () => {
  showMobileMenu.value = false
}

// 切换子菜单显示
const toggleSubmenu = (menuKey) => {
  expandedMenus.value[menuKey] = !expandedMenus.value[menuKey]
}

// 切换嵌套子菜单显示
const toggleNestedSubmenu = (nestedMenuKey) => {
  nestedExpandedMenus.value[nestedMenuKey] = !nestedExpandedMenus.value[nestedMenuKey]
}

// 切换微信二维码显示
const toggleWechatQR = () => {
  showWechatQR.value = !showWechatQR.value
}

const toggleMobileWechatQR = () => {
  showMobileWechatQR.value = !showMobileWechatQR.value
}

// 切换到指定语言 - 修复核心问题
const switchToLanguage = (lang) => {
  showDropdown.value = false
  showMobileMenu.value = false

  // 使用 VitePress 的相对路径，移除 .md 扩展名
  const currentPath = page.value.relativePath.replace(/\.md$/, '')

  // 提取内容路径和当前语言
  let contentPath = currentPath
  let currentLang = 'en' // 默认英文

  const langPrefixes = ['zh', 'en', 'ru', 'fr', 'bn', 'vi']

  for (const prefix of langPrefixes) {
    if (contentPath.startsWith(`${prefix}/`)) {
      currentLang = prefix
      contentPath = contentPath.substring(prefix.length + 1)
      break
    } else if (contentPath === prefix) {
      currentLang = prefix
      contentPath = ''
      break
    }
  }

  // 如果是根路径或 index，认为是英文
  if (currentPath === '' || currentPath === 'index') {
    currentLang = 'en'
    contentPath = ''
  }

  // 如果已经在目标语言，不切换
  if (currentLang === lang) {
    return
  }

  // 清理内容路径
  contentPath = contentPath.replace(/^\/+|\/+$/g, '')
  if (contentPath === 'index' || contentPath.endsWith('/index')) {
    contentPath = contentPath.replace(/\/index$/, '')
  }

  // 构建目标路径
  let targetPath = ''
  if (lang === 'en') {
    // 英文加前缀
    targetPath = contentPath === '' ? '/en/' : `/en/${contentPath}/`
  } else {
    // 其他语言加前缀
    targetPath = contentPath === '' ? `/${lang}/` : `/${lang}/${contentPath}/`
  }

  const normalizePath = (value) => value.replace(/\/+$/, '') || '/'
  const currentBrowserPath = typeof window !== 'undefined'
    ? normalizePath(window.location.pathname)
    : normalizePath(`/${currentPath}`)
  const normalizedTargetPath = normalizePath(targetPath)

  if (targetPath && currentBrowserPath !== normalizedTargetPath && typeof window !== 'undefined') {
    window.location.assign(targetPath)
  }
}

// 点击页面其他地方关闭下拉菜单和移动端菜单
const handleClickOutside = (event) => {
  // 检查点击是否在移动端菜单内部
  const mobileMenuContent = event.target.closest('.mobile-nav-content')
  const mobileMenuButton = event.target.closest('.mobile-menu-button')

  // 检查点击是否在语言切换器内部
  const langDropdown = event.target.closest('.mobile-lang-switcher')

  // 检查点击是否在微信容器内部
  const wechatContainer = event.target.closest('.wechat-container')

  // 如果点击的不是菜单内容和菜单按钮，则关闭菜单
  if (!mobileMenuContent && !mobileMenuButton && showMobileMenu.value) {
    showMobileMenu.value = false
  }

  // 如果点击的不是语言切换器，则关闭下拉菜单
  if (!langDropdown && showDropdown.value) {
    showDropdown.value = false
  }

  // 如果点击的不是微信容器，则关闭微信二维码
  if (!wechatContainer) {
    showWechatQR.value = false
    showMobileWechatQR.value = false
  }
}

onMounted(() => {
  // 确保初始状态为关闭
  showMobileMenu.value = false
  showDropdown.value = false

  // 初始化移动端状态
  updateMobileState()

  // 注入Vercel Speed Insights
  injectSpeedInsights()

  // 注入Vercel Analytics
  inject()

  document.addEventListener('click', handleClickOutside)

  // 添加窗口大小变化监听
  window.addEventListener('resize', updateMobileState)

  // 添加ESC键关闭菜单
  const handleEscKey = (event) => {
    if (event.key === 'Escape') {
      showMobileMenu.value = false
      showDropdown.value = false
      showWechatQR.value = false
      showMobileWechatQR.value = false
    }
  }
  document.addEventListener('keydown', handleEscKey)

  // 在组件卸载时清理事件监听
  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
    document.removeEventListener('keydown', handleEscKey)
    window.removeEventListener('resize', updateMobileState)
  })
})

</script>

<style scoped>
  /* 移动端语言切换按钮 - 桌面端隐藏 */
  .mobile-lang-switcher {
    display: none;
  }

  .mobile-menu-button {
    display: none;
  }

  .mobile-top-actions,
  .mobile-lang-switcher,
  .mobile-nav-before-spacer {
    display: none;
  }
  
  /* 自定义移动端菜单样式 */
  .custom-mobile-menu {
    position: fixed;
    top: var(--vp-layout-top-height, 60px);
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
    position: relative;
  }

  .mobile-nav-header::before {
    content: '';
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    width: 32px;
    height: 32px;
    background-image: url('/images/oil-press-hero.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.8;
  }
  
  .mobile-nav-header h3 {
    margin: 0 0 0 44px;
    font-size: 18px;
    font-weight: 700;
    color: #e74c3c;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    letter-spacing: 0.5px;
    z-index: 10;
    position: relative;
  }

  .mobile-menu-languages {
    padding: 16px 20px 12px;
    background: linear-gradient(180deg, rgba(231, 76, 60, 0.06) 0%, rgba(231, 76, 60, 0.02) 100%);
    border-bottom: 1px solid rgba(231, 76, 60, 0.1);
  }

  .mobile-menu-languages-title {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--vp-c-brand);
    margin-bottom: 10px;
  }

  .mobile-menu-language-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .mobile-menu-language-chip {
    appearance: none;
    border: 1px solid rgba(231, 76, 60, 0.2);
    background: #fff;
    color: var(--vp-c-text-2);
    border-radius: 999px;
    padding: 8px 12px;
    font-size: 13px;
    font-weight: 600;
    line-height: 1;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .mobile-menu-language-chip:hover,
  .mobile-menu-language-chip:active {
    border-color: var(--vp-c-brand);
    color: var(--vp-c-brand);
    background: rgba(231, 76, 60, 0.06);
  }

  .mobile-menu-language-chip.active {
    background: var(--vp-c-brand);
    color: #fff;
    border-color: var(--vp-c-brand);
    box-shadow: 0 8px 18px rgba(231, 76, 60, 0.2);
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
  
  .mobile-nav-item {
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }

  .mobile-nav-link {
    display: block;
    padding: 16px 24px;
    font-size: 16px;
    font-weight: 500;
    color: var(--vp-c-text-1);
    text-decoration: none;
    transition: all 0.3s ease;
    position: relative;
    min-height: 54px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .mobile-nav-link:hover,
  .mobile-nav-link:active {
    background: linear-gradient(135deg, rgba(231, 76, 60, 0.08) 0%, rgba(231, 76, 60, 0.12) 100%);
    color: var(--vp-c-brand);
    transform: translateX(8px);
    border-left: 4px solid var(--vp-c-brand);
    padding-left: 20px;
  }

  .mobile-nav-link.has-submenu {
    cursor: pointer;
  }

  .mobile-nav-link.has-submenu:hover {
    background: linear-gradient(135deg, rgba(231, 76, 60, 0.08) 0%, rgba(231, 76, 60, 0.12) 100%);
    color: var(--vp-c-brand);
  }

  .submenu-icon {
    transition: transform 0.3s ease;
    color: var(--vp-c-text-2);
  }

  .submenu-icon.rotated {
    transform: rotate(180deg);
  }

  .mobile-submenu {
    background: rgba(248, 249, 250, 0.8);
    border-left: 3px solid var(--vp-c-brand);
    margin-left: 16px;
    margin-right: 16px;
    border-radius: 0 8px 8px 0;
    overflow: hidden;
    animation: slideDown 0.3s ease;
  }

  .mobile-submenu-group {
    padding: 8px 0;
  }

  .mobile-submenu-title {
    padding: 8px 16px;
    font-size: 14px;
    font-weight: 600;
    color: var(--vp-c-brand);
    background: rgba(231, 76, 60, 0.05);
    border-bottom: 1px solid rgba(231, 76, 60, 0.1);
  }

  .mobile-nav-sublink {
    display: block;
    padding: 12px 16px 12px 24px;
    font-size: 14px;
    font-weight: 400;
    color: var(--vp-c-text-2);
    text-decoration: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.03);
    transition: all 0.3s ease;
    position: relative;
  }

  .mobile-nav-sublink:hover,
  .mobile-nav-sublink:active {
    background: rgba(231, 76, 60, 0.06);
    color: var(--vp-c-brand);
    padding-left: 28px;
  }

  .mobile-nav-sublink:last-child {
    border-bottom: none;
  }

  .mobile-nav-subitem {
    border-bottom: 1px solid rgba(0, 0, 0, 0.03);
  }

  .mobile-nav-sublink.has-nested-submenu {
    cursor: pointer;
    font-weight: 500;
    color: var(--vp-c-text-1);
    justify-content: space-between;
    padding-left: 20px;
  }

  .mobile-nav-sublink.has-nested-submenu:hover {
    background: rgba(231, 76, 60, 0.04);
    color: var(--vp-c-brand);
  }

  .mobile-nav-nestedlink.has-nested-submenu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    font-weight: 500;
    color: var(--vp-c-text-1);
  }

  .mobile-nav-nestedlink.has-nested-submenu:hover {
    background: rgba(231, 76, 60, 0.04);
    color: var(--vp-c-brand);
  }

  .nested-submenu-icon {
    transition: transform 0.3s ease;
    color: var(--vp-c-text-2);
  }

  .nested-submenu-icon.rotated {
    transform: rotate(180deg);
  }

  .mobile-nested-submenu {
    background: rgba(248, 249, 250, 0.6);
    border-left: 2px solid var(--vp-c-brand);
    margin-left: 20px;
    margin-right: 16px;
    border-radius: 0 6px 6px 0;
    overflow: hidden;
    animation: slideDownNested 0.3s ease;
  }

  .mobile-nav-nestedlink {
    display: block;
    padding: 10px 16px 10px 20px;
    font-size: 13px;
    font-weight: 400;
    color: var(--vp-c-text-2);
    text-decoration: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.02);
    transition: all 0.3s ease;
    position: relative;
  }

  .mobile-nav-nestedlink:hover,
  .mobile-nav-nestedlink:active {
    background: rgba(231, 76, 60, 0.03);
    color: var(--vp-c-brand);
    padding-left: 24px;
  }

  .mobile-nav-nestedlink:last-child {
    border-bottom: none;
  }

  @keyframes slideDown {
    from {
      max-height: 0;
      opacity: 0;
    }
    to {
      max-height: 1000px;
      opacity: 1;
    }
  }

  @keyframes slideDownNested {
    from {
      max-height: 0;
      opacity: 0;
    }
    to {
      max-height: 800px;
      opacity: 1;
    }
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
  position: fixed;
  bottom: 120px;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  border: 2px solid var(--vp-c-brand);
  border-radius: 12px;
  padding: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  text-align: center;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 10002;
  min-width: 180px;
  max-width: 85vw;
  margin: 0 auto;
}

.mobile-social-icons .wechat-container:hover .wechat-qr,
.mobile-social-icons .wechat-qr.show {
  opacity: 1;
  visibility: visible;
}

.mobile-social-icons .wechat-qr img {
  width: 120px;
  height: 120px;
  border-radius: 8px;
  max-width: 100%;
  height: auto;
  object-fit: contain;
}

.mobile-social-icons .wechat-qr p {
  margin: 12px 0 0 0;
  font-size: 14px;
  color: var(--vp-c-text-2);
  font-weight: 500;
}

  @media (max-width: 768px) {
  /* 确保导航栏使用flex布局 */
  .VPNavBar .content {
    display: flex !important;
    align-items: center;
    justify-content: space-between;
  }

  .VPNavBar .content-body {
    display: flex !important;
    align-items: center;
    flex: 1;
    min-width: 0;
  }

  .mobile-top-actions {
    display: flex !important;
    align-items: center;
    gap: 6px;
    margin-left: auto;
    flex-shrink: 0;
    max-width: calc(100vw - 116px);
    min-width: 0;
  }

  .mobile-lang-switcher {
    display: flex !important;
    align-items: center;
    position: relative;
    flex-shrink: 0;
    min-width: 0;
  }

  .mobile-menu-button {
    display: flex !important;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    min-height: 38px;
    padding: 7px 10px;
    border-radius: 999px;
    background: rgba(231, 76, 60, 0.12);
    border: 1px solid var(--vp-c-brand);
    box-shadow: 0 4px 12px rgba(231, 76, 60, 0.14);
    transition: all 0.3s ease;
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
    flex-shrink: 0;
    appearance: none;
  }
  
  .mobile-menu-button:hover,
  .mobile-menu-button:active {
    background: var(--vp-c-brand);
    transform: translateY(-1px);
  }
  
  .menu-icon {
    width: 16px;
    height: 12px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-shrink: 0;
  }
  
  .menu-icon span {
    display: block;
    height: 2px;
    width: 100%;
    background: var(--vp-c-brand);
    border-radius: 2px;
    transition: all 0.3s ease;
  }
  
  .mobile-menu-button:hover .menu-icon span,
  .mobile-menu-button:active .menu-icon span {
    background: white;
  }

  .mobile-menu-label {
    font-size: 12px;
    font-weight: 700;
    line-height: 1;
    color: var(--vp-c-brand);
    white-space: nowrap;
    transition: color 0.3s ease;
  }

  .mobile-menu-button:hover .mobile-menu-label,
  .mobile-menu-button:active .mobile-menu-label {
    color: #fff;
  }
  
  .lang-dropdown {
    position: relative;
    min-width: 0;
  }

  .lang-trigger-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    min-height: 38px;
    padding: 7px 10px;
    background: rgba(231, 76, 60, 0.12);
    border: 1px solid var(--vp-c-brand);
    border-radius: 999px;
    box-shadow: 0 4px 12px rgba(231, 76, 60, 0.14);
    cursor: pointer;
    transition: all 0.3s ease;
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
    appearance: none;
    max-width: 92px;
    min-width: 0;
  }

  .lang-trigger-btn:hover,
  .lang-trigger-btn:active {
    background: var(--vp-c-brand);
    color: white;
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(231, 76, 60, 0.3);
  }
  
  .lang-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
  }
  
  .lang-icon svg {
    width: 16px;
    height: 16px;
    color: var(--vp-c-brand);
    transition: color 0.3s ease;
  }
  
  .lang-trigger-btn:hover .lang-icon svg,
  .lang-trigger-btn:active .lang-icon svg {
    color: white;
  }

  .lang-trigger-copy {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1px;
    line-height: 1.05;
    min-width: 0;
  }

  .lang-trigger-label {
    display: none;
  }

  .lang-trigger-value {
    font-size: 12px;
    font-weight: 700;
    color: var(--vp-c-text-1);
    white-space: nowrap;
  }

  .lang-trigger-arrow {
    color: var(--vp-c-brand);
    transition: transform 0.3s ease, color 0.3s ease;
    flex-shrink: 0;
  }

  .lang-trigger-arrow.open {
    transform: rotate(180deg);
  }

  .lang-trigger-btn:hover .lang-trigger-label,
  .lang-trigger-btn:hover .lang-trigger-value,
  .lang-trigger-btn:hover .lang-trigger-arrow,
  .lang-trigger-btn:active .lang-trigger-label,
  .lang-trigger-btn:active .lang-trigger-value,
  .lang-trigger-btn:active .lang-trigger-arrow {
    color: #fff;
  }

  /* 下拉菜单样式 */
  .lang-options {
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    background: white;
    border: 2px solid var(--vp-c-brand);
    border-radius: 12px;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.16);
    min-width: 120px;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-6px);
    transition: all 0.3s ease;
    z-index: 1002;
  }
  
  .lang-options.show {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  
  .lang-options::before {
    content: '';
    position: absolute;
    top: -6px;
    right: 18px;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid var(--vp-c-brand);
  }
  
  .lang-option {
    display: block;
    width: 100%;
    border: none;
    background: transparent;
    appearance: none;
    padding: 11px 14px;
    cursor: pointer;
    transition: all 0.3s ease;
    border-bottom: 1px solid rgba(231, 76, 60, 0.1);
    color: #333;
    font-size: 14px;
    font-weight: 500;
    text-align: left;
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

  .mobile-menu-languages {
    padding: 14px 16px 10px;
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

/* 桌面版微信二维码样式 */
.social-icons .wechat-container {
  position: relative;
}

.social-icons .wechat-qr {
  position: absolute;
  top: 50px;
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

.social-icons .wechat-container:hover .wechat-qr,
.social-icons .wechat-qr.show {
  opacity: 1;
  visibility: visible;
}

.social-icons .wechat-qr img {
  width: 150px;
  height: 150px;
  border-radius: 8px;
}

.social-icons .wechat-qr p {
  margin: 12px 0 0 0;
  font-size: 14px;
  color: var(--vp-c-text-2);
  font-weight: 500;
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

/* WhatsApp 悬浮按钮 - 右下角固定，在 tawk 上方 */
.whatsapp-floating-btn {
  position: fixed;
  /* 顶部（更靠上）按钮，保持为最上边的 WhatsApp（19906365856） */
  bottom: 160px;
  right: 24px;
  width: 56px;
  height: 56px;
  background: #25D366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  box-shadow: 0 4px 16px rgba(37, 211, 102, 0.4);
  transition: all 0.3s ease;
  z-index: 1000;
  border: none;
  cursor: pointer;
}

/* 次级按钮样式（靠近底部一点） */
.whatsapp-floating-btn.secondary {
  bottom: 100px;
}

.whatsapp-floating-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 24px rgba(37, 211, 102, 0.5);
  background: #1fbc1f;
}

.whatsapp-floating-btn:active {
  transform: scale(0.95);
}

.whatsapp-floating-btn svg {
  width: 28px;
  height: 28px;
  fill: white;
  transition: transform 0.3s ease;
}

.whatsapp-floating-btn:hover svg {
  transform: scale(1.1);
}

/* 移动端调整 */
@media (max-width: 768px) {
  .whatsapp-floating-btn {
    bottom: 140px;
    right: 20px;
    width: 50px;
    height: 50px;
  }

  .whatsapp-floating-btn.secondary {
    bottom: 80px;
  }

  .whatsapp-floating-btn svg {
    width: 24px;
    height: 24px;
  }
}

@media (max-width: 768px) {
  .social-icons {
    display: none;
  }

  /* 确保搜索按钮在移动端显示 */
  .VPNavBarSearch {
    display: block !important;
  }

  .VPNavBarSearch .search {
    display: block !important;
  }
}
</style>
