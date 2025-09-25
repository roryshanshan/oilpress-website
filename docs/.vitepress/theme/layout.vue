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
            <div class="lang-option" @click.stop="switchToLanguage('ru')" :class="{ 'active': currentLang === 'ru' }">
              <span>Русский</span>
            </div>
            <div class="lang-option" @click.stop="switchToLanguage('fr')" :class="{ 'active': currentLang === 'fr' }">
              <span>Français</span>
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
  
  <!-- 自定义移动端菜单内容 - 直接放在Layout外部 -->
  <div class="custom-mobile-menu" v-if="showMobileMenu" @click.self="toggleMobileMenu">
    <div class="mobile-nav-content" @click.stop>
      <div class="mobile-nav-header">
        <h3>{{ currentLang === 'zh' ? '菜单' : currentLang === 'ru' ? 'Меню' : currentLang === 'fr' ? 'Menu' : 'Menu' }}</h3>
        <button class="close-btn" @click.stop="toggleMobileMenu">×</button>
      </div>
      
      <div class="mobile-nav-menu">
        <!-- 首页 -->
        <a :href="currentLang === 'zh' ? '/zh/' : currentLang === 'ru' ? '/ru/' : currentLang === 'fr' ? '/fr/' : '/en/'" class="mobile-nav-link" @click="closeMobileMenu">
          {{ currentLang === 'zh' ? '首页' : currentLang === 'ru' ? 'Главная' : currentLang === 'fr' ? 'Accueil' : 'Home' }}
        </a>

        <!-- 产品系列 -->
        <div class="mobile-nav-item">
          <div class="mobile-nav-link has-submenu" @click="toggleSubmenu('products')">
            <span>{{ currentLang === 'zh' ? '产品系列' : currentLang === 'ru' ? 'Продукты' : currentLang === 'fr' ? 'Produits' : 'Products' }}</span>
            <svg class="submenu-icon" :class="{ 'rotated': expandedMenus.products }" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6,9 12,15 18,9"></polyline>
            </svg>
          </div>
          <div class="mobile-submenu" v-show="expandedMenus.products">
            <a :href="currentLang === 'zh' ? '/zh/products/' : currentLang === 'ru' ? '/ru/products/' : currentLang === 'fr' ? '/fr/products/' : '/en/products/'" class="mobile-nav-sublink" @click="closeMobileMenu">
              {{ currentLang === 'zh' ? '产品概览' : currentLang === 'ru' ? 'Обзор продуктов' : currentLang === 'fr' ? 'Aperçu des produits' : 'Product Overview' }}
            </a>
            <a :href="currentLang === 'zh' ? '/zh/products/300' : currentLang === 'ru' ? '/ru/products/300' : currentLang === 'fr' ? '/fr/products/300' : '/en/products/300'" class="mobile-nav-sublink" @click="closeMobileMenu">
              {{ currentLang === 'zh' ? '300系列' : currentLang === 'ru' ? 'Серия 300' : currentLang === 'fr' ? 'Série 300' : '300 Series' }}
            </a>
            <a :href="currentLang === 'zh' ? '/zh/products/325' : currentLang === 'ru' ? '/ru/products/325' : currentLang === 'fr' ? '/fr/products/325' : '/en/products/325'" class="mobile-nav-sublink" @click="closeMobileMenu">
              {{ currentLang === 'zh' ? '325系列' : currentLang === 'ru' ? 'Серия 325' : currentLang === 'fr' ? 'Série 325' : '325 Series' }}
            </a>
            <a :href="currentLang === 'zh' ? '/zh/products/355' : currentLang === 'ru' ? '/ru/products/355' : currentLang === 'fr' ? '/fr/products/355' : '/en/products/355'" class="mobile-nav-sublink" @click="closeMobileMenu">
              {{ currentLang === 'zh' ? '355系列' : currentLang === 'ru' ? 'Серия 355' : currentLang === 'fr' ? 'Série 355' : '355 Series' }}
            </a>
            <a :href="currentLang === 'zh' ? '/zh/products/400' : currentLang === 'ru' ? '/ru/products/400' : currentLang === 'fr' ? '/fr/products/400' : '/en/products/400'" class="mobile-nav-sublink" @click="closeMobileMenu">
              {{ currentLang === 'zh' ? '400系列' : currentLang === 'ru' ? 'Серия 400' : currentLang === 'fr' ? 'Série 400' : '400 Series' }}
            </a>
            <a :href="currentLang === 'zh' ? '/zh/products/426' : currentLang === 'ru' ? '/ru/products/426' : currentLang === 'fr' ? '/fr/products/426' : '/en/products/426'" class="mobile-nav-sublink" @click="closeMobileMenu">
              {{ currentLang === 'zh' ? '426系列' : currentLang === 'ru' ? 'Серия 426' : currentLang === 'fr' ? 'Série 426' : '426 Series' }}
            </a>
            <a :href="currentLang === 'zh' ? '/zh/products/480' : currentLang === 'ru' ? '/ru/products/480' : currentLang === 'fr' ? '/fr/products/480' : '/en/products/480'" class="mobile-nav-sublink" @click="closeMobileMenu">
              {{ currentLang === 'zh' ? '480系列' : currentLang === 'ru' ? 'Серия 480' : currentLang === 'fr' ? 'Série 480' : '480 Series' }}
            </a>
            <a :href="currentLang === 'zh' ? '/zh/products/500' : currentLang === 'ru' ? '/ru/products/500' : currentLang === 'fr' ? '/fr/products/500' : '/en/products/500'" class="mobile-nav-sublink" @click="closeMobileMenu">
              {{ currentLang === 'zh' ? '500系列' : currentLang === 'ru' ? 'Серия 500' : currentLang === 'fr' ? 'Série 500' : '500 Series' }}
            </a>
            <div class="mobile-nav-subitem">
              <div class="mobile-nav-sublink has-nested-submenu" @click="toggleNestedSubmenu('supporting')">
                <span>{{ currentLang === 'zh' ? '↳ 配套设备详情' : currentLang === 'ru' ? '↳ Вспомогательное оборудование' : currentLang === 'fr' ? '↳ Équipements complémentaires' : 'Supporting Equipment Details' }}</span>
                <svg class="nested-submenu-icon" :class="{ 'rotated': nestedExpandedMenus.supporting }" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="6,9 12,15 18,9"></polyline>
                </svg>
              </div>
              <div class="mobile-nested-submenu" v-show="nestedExpandedMenus.supporting">
                <a :href="currentLang === 'zh' ? '/zh/products/supporting' : currentLang === 'ru' ? '/ru/products/supporting' : currentLang === 'fr' ? '/fr/products/supporting' : '/en/products/supporting'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '配套设备概览' : currentLang === 'ru' ? 'Обзор оборудования' : currentLang === 'fr' ? 'Aperçu des équipements' : 'Supporting Equipment Overview' }}
                </a>
                <div class="mobile-nav-subitem">
                  <div class="mobile-nav-sublink has-nested-submenu" @click="toggleNestedSubmenu('pre-treatment')">
                    <span>{{ currentLang === 'zh' ? '↳ 预处理设备详情' : currentLang === 'ru' ? '↳ Оборудование предварительной обработки' : currentLang === 'fr' ? '↳ Équipements de prétraitement' : 'Pre-treatment Equipment Details' }}</span>
                    <svg class="nested-submenu-icon" :class="{ 'rotated': nestedExpandedMenus['pre-treatment'] }" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <polyline points="6,9 12,15 18,9"></polyline>
                    </svg>
                  </div>
                  <div class="mobile-nested-submenu" v-show="nestedExpandedMenus['pre-treatment']">
                    <a :href="currentLang === 'zh' ? '/zh/products/pre-treatment' : currentLang === 'ru' ? '/ru/products/pre-treatment' : currentLang === 'fr' ? '/fr/products/pre-treatment' : '/en/products/pre-treatment'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                      {{ currentLang === 'zh' ? '概述' : currentLang === 'ru' ? 'Обзор' : currentLang === 'fr' ? 'Aperçu' : 'Overview' }}
                    </a>
                    <a :href="currentLang === 'zh' ? '/zh/products/11kw-high-speed-pulverizer' : '/en/products/11kw-high-speed-pulverizer'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                      {{ currentLang === 'zh' ? '11kw高速粉碎机' : '11kw High Speed Pulverizer' }}
                    </a>
                    <a :href="currentLang === 'zh' ? '/zh/products/27kw-electric-steamer' : '/en/products/27kw-electric-steamer'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                      {{ currentLang === 'zh' ? '27kw电蒸锅' : '27kw Electric Steamer' }}
                    </a>
                    <a :href="currentLang === 'zh' ? '/zh/products/Flaxseed-and-rapeseed-grinding-and-stirring-integrated-machine' : '/en/products/Flaxseed-and-rapeseed-grinding-and-stirring-integrated-machine'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                      {{ currentLang === 'zh' ? '亚麻籽菜籽研磨搅拌一体机' : 'Flaxseed and Rapeseed Grinding and Stirring Integrated Machine' }}
                    </a>
                    <a :href="currentLang === 'zh' ? '/zh/products/automatic-drum-roaster' : '/en/products/automatic-drum-roaster'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                      {{ currentLang === 'zh' ? '自动滚筒炒锅' : 'Automatic Drum Roaster' }}
                    </a>
                    <a :href="currentLang === 'zh' ? '/zh/products/cake-wrapping-machine' : '/en/products/cake-wrapping-machine'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                      {{ currentLang === 'zh' ? '饼粕包饼机' : 'Cake Wrapping Machine' }}
                    </a>
                    <a :href="currentLang === 'zh' ? '/zh/products/feeding-crushing-frying-integrated-machine' : '/en/products/feeding-crushing-frying-integrated-machine'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                      {{ currentLang === 'zh' ? '上料/粉碎/炒制一体机' : 'Feeding Crushing Frying Integrated Machine' }}
                    </a>
                    <a :href="currentLang === 'zh' ? '/zh/products/heat-conducting-oil-flat-bottom-frying-pan' : '/en/products/heat-conducting-oil-flat-bottom-frying-pan'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                      {{ currentLang === 'zh' ? '导热油平底煎锅' : 'Heat Conducting Oil Flat Bottom Frying Pan' }}
                    </a>
                    <a :href="currentLang === 'zh' ? '/zh/products/pneumatic-filter-press' : '/en/products/pneumatic-filter-press'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                      {{ currentLang === 'zh' ? '气动滤油机' : 'Pneumatic Filter Press' }}
                    </a>
                    <a :href="currentLang === 'zh' ? '/zh/products/pre-press-machine' : '/en/products/pre-press-machine'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                      {{ currentLang === 'zh' ? '预榨机' : 'Pre-Press Machine' }}
                    </a>
                    <a :href="currentLang === 'zh' ? '/zh/products/wood-fired-steamer' : '/en/products/wood-fired-steamer'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                      {{ currentLang === 'zh' ? '燃木蒸锅' : 'Wood Fired Steamer' }}
                    </a>
                    <a :href="currentLang === 'zh' ? '/zh/products/wood-fired-thermal-oil-flat-bottom-wok' : '/en/products/wood-fired-thermal-oil-flat-bottom-wok'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                      {{ currentLang === 'zh' ? '燃木导热油平底锅' : 'Wood Fired Thermal Oil Flat Bottom Wok' }}
                    </a>
                  </div>
                </div>
                <div class="mobile-nav-subitem">
                  <div class="mobile-nav-sublink has-nested-submenu" @click="toggleNestedSubmenu('post-treatment')">
                    <span>{{ currentLang === 'zh' ? '↳ 后处理设备详情' : currentLang === 'ru' ? '↳ Оборудование последующей обработки' : currentLang === 'fr' ? '↳ Équipements de post-traitement' : 'Post-treatment Equipment Details' }}</span>
                    <svg class="nested-submenu-icon" :class="{ 'rotated': nestedExpandedMenus['post-treatment'] }" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <polyline points="6,9 12,15 18,9"></polyline>
                    </svg>
                  </div>
                  <div class="mobile-nested-submenu" v-show="nestedExpandedMenus['post-treatment']">
                    <a :href="currentLang === 'zh' ? '/zh/products/post-treatment' : currentLang === 'ru' ? '/ru/products/post-treatment' : currentLang === 'fr' ? '/fr/products/post-treatment' : '/en/products/post-treatment'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                      {{ currentLang === 'zh' ? '概述' : currentLang === 'ru' ? 'Обзор' : currentLang === 'fr' ? 'Aperçu' : 'Overview' }}
                    </a>
                    <a :href="currentLang === 'zh' ? '/zh/products/cake-pulverizer' : currentLang === 'ru' ? '/ru/products/cake-pulverizer' : currentLang === 'fr' ? '/fr/products/cake-pulverizer' : '/en/products/cake-pulverizer'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                      {{ currentLang === 'zh' ? '饼粕粉碎机' : currentLang === 'ru' ? 'Измельчитель жмыха' : currentLang === 'fr' ? 'Pulvérisateur de gâteau' : 'Cake Pulverizer' }}
                    </a>
                    <a :href="currentLang === 'zh' ? '/zh/products/edible-oil-refining-equipment' : currentLang === 'ru' ? '/ru/products/edible-oil-refining-equipment' : currentLang === 'fr' ? '/fr/products/edible-oil-refining-equipment' : '/en/products/edible-oil-refining-equipment'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                      {{ currentLang === 'zh' ? '食用油精炼设备' : currentLang === 'ru' ? 'Оборудование для рафинирования пищевого масла' : currentLang === 'fr' ? 'Équipement de raffinage d\'huile comestible' : 'Edible Oil Refining Equipment' }}
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
            <span>{{ currentLang === 'zh' ? '解决方案' : currentLang === 'ru' ? 'Решения' : currentLang === 'fr' ? 'Solutions' : 'Solutions' }}</span>
            <svg class="submenu-icon" :class="{ 'rotated': expandedMenus.solutions }" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6,9 12,15 18,9"></polyline>
            </svg>
          </div>
          <div class="mobile-submenu" v-show="expandedMenus.solutions">
            <a :href="currentLang === 'zh' ? '/zh/solutions/' : currentLang === 'ru' ? '/ru/solutions/' : currentLang === 'fr' ? '/fr/solutions/' : '/en/solutions/'" class="mobile-nav-sublink" @click="closeMobileMenu">
              {{ currentLang === 'zh' ? '方案概览' : currentLang === 'ru' ? 'Обзор решений' : currentLang === 'fr' ? 'Aperçu des solutions' : 'Overview' }}
            </a>
            <!-- 主要类别及其二级菜单 -->
            <div class="mobile-nav-subitem">
              <div class="mobile-nav-sublink has-nested-submenu" @click="toggleNestedSubmenu('grain-seed-oils')">
                <span>{{ currentLang === 'zh' ? '🌾 粮油类（种子类）解决方案' : currentLang === 'ru' ? '🌾 Решения для зерновых и семенных масел' : currentLang === 'fr' ? '🌾 Solutions d\'huile de graines' : '🌾 Grain and Seed Oils Solutions' }}</span>
                <svg class="nested-submenu-icon" :class="{ 'rotated': nestedExpandedMenus['grain-seed-oils'] }" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="6,9 12,15 18,9"></polyline>
                </svg>
              </div>
              <div class="mobile-nested-submenu" v-show="nestedExpandedMenus['grain-seed-oils']">
                <a :href="currentLang === 'zh' ? '/zh/solutions/seed-oils' : '/en/solutions/seed-oils'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '粮油类概述' : 'Grain and Seed Oils Overview' }}
                </a>
                <a :href="currentLang === 'zh' ? '/zh/solutions/soybean' : '/en/solutions/soybean'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '🌱 大豆油' : '🌱 Soybean Oil' }}
                </a>
                <a :href="currentLang === 'zh' ? '/zh/solutions/peanut' : '/en/solutions/peanut'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '🥜 花生油' : '🥜 Peanut Oil' }}
                </a>
                <a :href="currentLang === 'zh' ? '/zh/solutions/sesame' : '/en/solutions/sesame'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '🌰 芝麻油' : '🌰 Sesame Oil' }}
                </a>
                <a :href="currentLang === 'zh' ? '/zh/solutions/rapeseed' : '/en/solutions/rapeseed'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '🌿 菜籽油' : '🌿 Rapeseed Oil' }}
                </a>
                <a :href="currentLang === 'zh' ? '/zh/solutions/sunflower' : '/en/solutions/sunflower'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '🌻 向日葵油' : '🌻 Sunflower Oil' }}
                </a>
                <a :href="currentLang === 'zh' ? '/zh/solutions/cottonseed' : '/en/solutions/cottonseed'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '🧵 棉籽油' : '🧵 Cottonseed Oil' }}
                </a>
                <a :href="currentLang === 'zh' ? '/zh/solutions/flaxseed' : '/en/solutions/flaxseed'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '🌾 亚麻籽油' : '🌾 Flaxseed Oil' }}
                </a>
                <a :href="currentLang === 'zh' ? '/zh/solutions/tea-seed' : '/en/solutions/tea-seed'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '🍵 茶籽油' : '🍵 Tea Seed Oil' }}
                </a>
                <a :href="currentLang === 'zh' ? '/zh/solutions/perilla' : '/en/solutions/perilla'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '🌱 紫苏油' : '🌱 Perilla Oil' }}
                </a>
              </div>
            </div>

            <div class="mobile-nav-subitem">
              <div class="mobile-nav-sublink has-nested-submenu" @click="toggleNestedSubmenu('nut-oils')">
                <span>{{ currentLang === 'zh' ? '🥜 坚果类油料解决方案' : currentLang === 'ru' ? '🥜 Решения для ореховых масел' : currentLang === 'fr' ? '🥜 Solutions d\'huile de noix' : '🥜 Nut Oils Solutions' }}</span>
                <svg class="nested-submenu-icon" :class="{ 'rotated': nestedExpandedMenus['nut-oils'] }" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="6,9 12,15 18,9"></polyline>
                </svg>
              </div>
              <div class="mobile-nested-submenu" v-show="nestedExpandedMenus['nut-oils']">
                <a :href="currentLang === 'zh' ? '/zh/solutions/nuts' : '/en/solutions/nuts'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '坚果油概述' : 'Nut Oils Overview' }}
                </a>
                <a :href="currentLang === 'zh' ? '/zh/solutions/walnut' : '/en/solutions/walnut'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '🌰 核桃油' : '🌰 Walnut Oil' }}
                </a>
                <a :href="currentLang === 'zh' ? '/zh/solutions/hazelnut' : '/en/solutions/hazelnut'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '🌰 榛子油' : '🌰 Hazelnut Oil' }}
                </a>
                <a :href="currentLang === 'zh' ? '/zh/solutions/apricot-kernel' : '/en/solutions/apricot-kernel'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '🌰 杏仁油' : '🌰 Apricot Kernel Oil' }}
                </a>
                <a :href="currentLang === 'zh' ? '/zh/solutions/coconut' : '/en/solutions/coconut'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '🥥 椰子油' : '🥥 Coconut Oil' }}
                </a>
                <a :href="currentLang === 'zh' ? '/zh/solutions/cashew' : '/en/solutions/cashew'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '🥜 腰果油' : '🥜 Cashew Oil' }}
                </a>
                <a :href="currentLang === 'zh' ? '/zh/solutions/pistachio' : '/en/solutions/pistachio'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '🥜 开心果油' : '🥜 Pistachio Oil' }}
                </a>
              </div>
            </div>

            <div class="mobile-nav-subitem">
              <div class="mobile-nav-sublink has-nested-submenu" @click="toggleNestedSubmenu('fruit-oils')">
                <span>{{ currentLang === 'zh' ? '🥑 果实类油料解决方案' : currentLang === 'ru' ? '🥑 Решения для фруктовых масел' : currentLang === 'fr' ? '🥑 Solutions d\'huile de fruits' : '🥑 Fruit Oils Solutions' }}</span>
                <svg class="nested-submenu-icon" :class="{ 'rotated': nestedExpandedMenus['fruit-oils'] }" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="6,9 12,15 18,9"></polyline>
                </svg>
              </div>
              <div class="mobile-nested-submenu" v-show="nestedExpandedMenus['fruit-oils']">
                <a :href="currentLang === 'zh' ? '/zh/solutions/fruits' : '/en/solutions/fruits'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '水果油概述' : 'Fruit Oils Overview' }}
                </a>
                <a :href="currentLang === 'zh' ? '/zh/solutions/avocado' : '/en/solutions/avocado'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '🥑 鳄梨油' : '🥑 Avocado Oil' }}
                </a>
                <a :href="currentLang === 'zh' ? '/zh/solutions/grape-seed' : '/en/solutions/grape-seed'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '🍇 葡萄籽油' : '🍇 Grape Seed Oil' }}
                </a>
                <a :href="currentLang === 'zh' ? '/zh/solutions/pumpkin-seed' : '/en/solutions/pumpkin-seed'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '🎃 南瓜籽油' : '🎃 Pumpkin Seed Oil' }}
                </a>
                <a :href="currentLang === 'zh' ? '/zh/solutions/watermelon-seed' : '/en/solutions/watermelon-seed'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '🍉 西瓜籽油' : '🍉 Watermelon Seed Oil' }}
                </a>
              </div>
            </div>

            <div class="mobile-nav-subitem">
              <div class="mobile-nav-sublink has-nested-submenu" @click="toggleNestedSubmenu('special-oils')">
                <span>{{ currentLang === 'zh' ? '⚙️ 其他特殊油料解决方案' : currentLang === 'ru' ? '⚙️ Решения для специальных масел' : currentLang === 'fr' ? '⚙️ Solutions d\'huiles spéciales' : '⚙️ Special Oils Solutions' }}</span>
                <svg class="nested-submenu-icon" :class="{ 'rotated': nestedExpandedMenus['special-oils'] }" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="6,9 12,15 18,9"></polyline>
                </svg>
              </div>
              <div class="mobile-nested-submenu" v-show="nestedExpandedMenus['special-oils']">
                <a :href="currentLang === 'zh' ? '/zh/solutions/special-oils' : '/en/solutions/special-oils'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '特种油料概述' : 'Special Oils Overview' }}
                </a>
                <a :href="currentLang === 'zh' ? '/zh/solutions/rice-bran' : '/en/solutions/rice-bran'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '🌾 米糠油' : '🌾 Rice Bran Oil' }}
                </a>
                <a :href="currentLang === 'zh' ? '/zh/solutions/corn-germ' : '/en/solutions/corn-germ'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '🌽 玉米胚芽油' : '🌽 Corn Germ Oil' }}
                </a>
                <a :href="currentLang === 'zh' ? '/zh/solutions/castor-seed' : '/en/solutions/castor-seed'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '🌱 蓖麻籽油' : '🌱 Castor Seed Oil' }}
                </a>
                <a :href="currentLang === 'zh' ? '/zh/solutions/chili-seed' : '/en/solutions/chili-seed'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '🌶️ 辣椒籽油' : '🌶️ Chili Seed Oil' }}
                </a>
              </div>
            </div>
            <div class="mobile-nav-subitem">
              <div class="mobile-nav-sublink has-nested-submenu" @click="toggleNestedSubmenu('filling')">
                <span>{{ currentLang === 'zh' ? '↳ 灌装配套方案详情' : 'Filling Supporting Solutions Details' }}</span>
                <svg class="nested-submenu-icon" :class="{ 'rotated': nestedExpandedMenus.filling }" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="6,9 12,15 18,9"></polyline>
                </svg>
              </div>
              <div class="mobile-nested-submenu" v-show="nestedExpandedMenus.filling">
                <a :href="currentLang === 'zh' ? '/zh/solutions/bottle-washing/' : '/en/solutions/bottle-washing/'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '冲瓶机系列' : 'Bottle Washing Machine Series' }}
                </a>
                <a :href="currentLang === 'zh' ? '/zh/solutions/filling/' : '/en/solutions/filling/'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '灌装机系列' : 'Filling Machine Series' }}
                </a>
                <a :href="currentLang === 'zh' ? '/zh/solutions/light-inspection/' : '/en/solutions/light-inspection/'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '灯检机系列' : 'Light Inspection Machine Series' }}
                </a>
                <a :href="currentLang === 'zh' ? '/zh/solutions/sealing/' : '/en/solutions/sealing/'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '封口机系列' : 'Sealing Machine Series' }}
                </a>
                <a :href="currentLang === 'zh' ? '/zh/solutions/corking/' : '/en/solutions/corking/'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '打塞机系列' : 'Corking Machine Series' }}
                </a>
                <a :href="currentLang === 'zh' ? '/zh/solutions/cap-shrinking/' : '/en/solutions/cap-shrinking/'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '胶帽热缩机系列' : 'Cap Shrinking Machine Series' }}
                </a>
                <a :href="currentLang === 'zh' ? '/zh/solutions/drying/' : '/en/solutions/drying/'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '吹干机系列' : 'Drying Machine Series' }}
                </a>
                <a :href="currentLang === 'zh' ? '/zh/solutions/labeling/' : '/en/solutions/labeling/'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '贴标机系列' : 'Labeling Machine Series' }}
                </a>
                <a :href="currentLang === 'zh' ? '/zh/solutions/laser-coding/' : '/en/solutions/laser-coding/'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '激光打码机系列' : 'Laser Coding Machine Series' }}
                </a>
                <a :href="currentLang === 'zh' ? '/zh/solutions/packing-palletizing/' : '/en/solutions/packing-palletizing/'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '装箱、码垛' : 'Packing and Palletizing' }}
                </a>
                <a :href="currentLang === 'zh' ? '/zh/solutions/fruit-veg-processing/' : '/en/solutions/fruit-veg-processing/'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '蔬果类前期处理设备' : 'Fruit and Vegetable Pre-processing Equipment' }}
                </a>
                <a :href="currentLang === 'zh' ? '/zh/solutions/filtering/' : '/en/solutions/filtering/'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '过滤机系列' : 'Filtering Machine Series' }}
                </a>
                <a :href="currentLang === 'zh' ? '/zh/solutions/brewing/' : '/en/solutions/brewing/'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '酿酒设备系列' : 'Brewing Equipment Series' }}
                </a>
                <a :href="currentLang === 'zh' ? '/zh/solutions/dairy-processing/' : '/en/solutions/dairy-processing/'" class="mobile-nav-nestedlink" @click="closeMobileMenu">
                  {{ currentLang === 'zh' ? '奶类加工设备' : 'Dairy Processing Equipment' }}
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- 公司优势 -->
        <div class="mobile-nav-item">
          <div class="mobile-nav-link has-submenu" @click="toggleSubmenu('advantages')">
            <span>{{ currentLang === 'zh' ? '公司优势' : currentLang === 'ru' ? 'Преимущества' : currentLang === 'fr' ? 'Avantages' : 'Advantages' }}</span>
            <svg class="submenu-icon" :class="{ 'rotated': expandedMenus.advantages }" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6,9 12,15 18,9"></polyline>
            </svg>
          </div>
          <div class="mobile-submenu" v-show="expandedMenus.advantages">
            <a :href="currentLang === 'zh' ? '/zh/advantages/' : currentLang === 'ru' ? '/ru/advantages/' : currentLang === 'fr' ? '/fr/advantages/' : '/en/advantages/'" class="mobile-nav-sublink" @click="closeMobileMenu">
              {{ currentLang === 'zh' ? '优势概览' : currentLang === 'ru' ? 'Обзор преимуществ' : currentLang === 'fr' ? 'Aperçu des avantages' : 'Overview' }}
            </a>
            <a :href="currentLang === 'zh' ? '/zh/advantages/innovation' : '/en/advantages/innovation'" class="mobile-nav-sublink" @click="closeMobileMenu">
              {{ currentLang === 'zh' ? '技术创新' : 'Technical Innovation' }}
            </a>
            <a :href="currentLang === 'zh' ? '/zh/advantages/quality' : '/en/advantages/quality'" class="mobile-nav-sublink" @click="closeMobileMenu">
              {{ currentLang === 'zh' ? '质量保证' : 'Quality Assurance' }}
            </a>
            <a :href="currentLang === 'zh' ? '/zh/advantages/service' : '/en/advantages/service'" class="mobile-nav-sublink" @click="closeMobileMenu">
              {{ currentLang === 'zh' ? '服务支持' : 'Service Support' }}
            </a>
            <a :href="currentLang === 'zh' ? '/zh/advantages/cases' : '/en/advantages/cases'" class="mobile-nav-sublink" @click="closeMobileMenu">
              {{ currentLang === 'zh' ? '成功案例' : 'Success Cases' }}
            </a>
          </div>
        </div>

        <!-- 新闻资讯 -->
        <div class="mobile-nav-item">
          <div class="mobile-nav-link has-submenu" @click="toggleSubmenu('news')">
            <span>{{ currentLang === 'zh' ? '新闻资讯' : currentLang === 'ru' ? 'Новости' : currentLang === 'fr' ? 'Actualités' : 'News' }}</span>
            <svg class="submenu-icon" :class="{ 'rotated': expandedMenus.news }" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6,9 12,15 18,9"></polyline>
            </svg>
          </div>
          <div class="mobile-submenu" v-show="expandedMenus.news">
            <a :href="currentLang === 'zh' ? '/zh/news/' : currentLang === 'ru' ? '/ru/news/' : currentLang === 'fr' ? '/fr/news/' : '/en/news/'" class="mobile-nav-sublink" @click="closeMobileMenu">
              {{ currentLang === 'zh' ? '新闻中心' : currentLang === 'ru' ? 'Новостной центр' : currentLang === 'fr' ? 'Centre d\'actualités' : 'News Center' }}
            </a>
            <a :href="currentLang === 'zh' ? '/zh/news/company' : currentLang === 'ru' ? '/ru/news/company' : currentLang === 'fr' ? '/fr/news/company' : '/en/news/company'" class="mobile-nav-sublink" @click="closeMobileMenu">
              {{ currentLang === 'zh' ? '公司动态' : currentLang === 'ru' ? 'Новости компании' : currentLang === 'fr' ? 'Actualités de l\'entreprise' : 'Company News' }}
            </a>
            <a :href="currentLang === 'zh' ? '/zh/news/industry' : currentLang === 'ru' ? '/ru/news/industry' : currentLang === 'fr' ? '/fr/news/industry' : '/en/news/industry'" class="mobile-nav-sublink" @click="closeMobileMenu">
              {{ currentLang === 'zh' ? '行业资讯' : currentLang === 'ru' ? 'Индустриальные новости' : currentLang === 'fr' ? 'Actualités de l\'industrie' : 'Industry News' }}
            </a>
            <a :href="currentLang === 'zh' ? '/zh/news/technology' : currentLang === 'ru' ? '/ru/news/technology' : currentLang === 'fr' ? '/fr/news/technology' : '/en/news/technology'" class="mobile-nav-sublink" @click="closeMobileMenu">
              {{ currentLang === 'zh' ? '技术知识' : currentLang === 'ru' ? 'Технические знания' : currentLang === 'fr' ? 'Connaissances techniques' : 'Technical Knowledge' }}
            </a>
          </div>
        </div>

        <!-- 关于我们 -->
        <div class="mobile-nav-item">
          <div class="mobile-nav-link has-submenu" @click="toggleSubmenu('about')">
            <span>{{ currentLang === 'zh' ? '关于我们' : currentLang === 'ru' ? 'О нас' : currentLang === 'fr' ? 'À propos' : 'About' }}</span>
            <svg class="submenu-icon" :class="{ 'rotated': expandedMenus.about }" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6,9 12,15 18,9"></polyline>
            </svg>
          </div>
          <div class="mobile-submenu" v-show="expandedMenus.about">
            <a :href="currentLang === 'zh' ? '/zh/about/' : currentLang === 'ru' ? '/ru/about/' : currentLang === 'fr' ? '/fr/about/' : '/en/about/'" class="mobile-nav-sublink" @click="closeMobileMenu">
              {{ currentLang === 'zh' ? '公司简介' : currentLang === 'ru' ? 'Профиль компании' : currentLang === 'fr' ? 'Profil de l\'entreprise' : 'Company Profile' }}
            </a>
            <a :href="currentLang === 'zh' ? '/zh/about/culture' : currentLang === 'ru' ? '/ru/about/culture' : currentLang === 'fr' ? '/fr/about/culture' : '/en/about/culture'" class="mobile-nav-sublink" @click="closeMobileMenu">
              {{ currentLang === 'zh' ? '企业文化' : currentLang === 'ru' ? 'Корпоративная культура' : currentLang === 'fr' ? 'Culture d\'entreprise' : 'Corporate Culture' }}
            </a>
            <a :href="currentLang === 'zh' ? '/zh/about/history' : currentLang === 'ru' ? '/ru/about/history' : currentLang === 'fr' ? '/fr/about/history' : '/en/about/history'" class="mobile-nav-sublink" @click="closeMobileMenu">
              {{ currentLang === 'zh' ? '发展历程' : currentLang === 'ru' ? 'История развития' : currentLang === 'fr' ? 'Historique de développement' : 'Development History' }}
            </a>
            <a :href="currentLang === 'zh' ? '/zh/about/honors' : currentLang === 'ru' ? '/ru/about/honors' : currentLang === 'fr' ? '/fr/about/honors' : '/en/about/honors'" class="mobile-nav-sublink" @click="closeMobileMenu">
              {{ currentLang === 'zh' ? '荣誉资质' : currentLang === 'ru' ? 'Награды и квалификации' : currentLang === 'fr' ? 'Honneurs et qualifications' : 'Honors & Certifications' }}
            </a>
            <a :href="currentLang === 'zh' ? '/zh/about/team' : currentLang === 'ru' ? '/ru/about/team' : currentLang === 'fr' ? '/fr/about/team' : '/en/about/team'" class="mobile-nav-sublink" @click="closeMobileMenu">
              {{ currentLang === 'zh' ? '团队介绍' : currentLang === 'ru' ? 'Представление команды' : currentLang === 'fr' ? 'Présentation de l\'équipe' : 'Our Team' }}
            </a>
          </div>
        </div>

        <!-- 联系我们 -->
        <a :href="currentLang === 'zh' ? '/zh/contact/' : currentLang === 'ru' ? '/ru/contact/' : currentLang === 'fr' ? '/fr/contact/' : '/en/contact/'" class="mobile-nav-link" @click="closeMobileMenu">
          {{ currentLang === 'zh' ? '联系我们' : currentLang === 'ru' ? 'Контакты' : currentLang === 'fr' ? 'Contact' : 'Contact' }}
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
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData, useRouter } from 'vitepress'
import { computed, ref, onMounted, onUnmounted } from 'vue'

const { Layout } = DefaultTheme
const { frontmatter, site, page } = useData()
const router = useRouter()

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
  filling: false
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

// 切换到指定语言
const switchToLanguage = (lang) => {
  showDropdown.value = false

  // 获取当前页面路径（去除语言前缀和.md扩展名）
  let basePath = ''
  const currentPath = page.value.relativePath

  if (currentPath.startsWith('zh/')) {
    basePath = currentPath.replace(/^zh\//, '').replace(/\.md$/, '')
  } else if (currentPath.startsWith('ru/')) {
    basePath = currentPath.replace(/^ru\//, '').replace(/\.md$/, '')
  } else if (currentPath.startsWith('fr/')) {
    basePath = currentPath.replace(/^fr\//, '').replace(/\.md$/, '')
  } else if (currentPath.startsWith('en/')) {
    basePath = currentPath.replace(/^en\//, '').replace(/\.md$/, '')
  } else {
    basePath = currentPath.replace(/\.md$/, '')
  }

  // 处理首页路径
  if (basePath === 'index' || basePath === '') {
    basePath = ''
  }

  // 构建目标路径
  let targetPath = ''
  if (lang === 'zh') {
    targetPath = basePath === '' ? `/${lang}/` : `/${lang}/${basePath}/`
  } else if (lang === 'ru') {
    targetPath = basePath === '' ? `/${lang}/` : `/${lang}/${basePath}/`
  } else if (lang === 'fr') {
    targetPath = basePath === '' ? `/${lang}/` : `/${lang}/${basePath}/`
  } else {
    // 英文作为默认语言
    targetPath = basePath === '' ? '/' : `/${basePath}/`
  }

  console.log('Target path:', targetPath) // 调试信息

  // 使用VitePress路由进行导航
  if (targetPath) {
    router.go(targetPath)
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
  
  document.addEventListener('click', handleClickOutside)
  
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

  .mobile-lang-switcher {
    display: flex !important;
    align-items: center;
    margin-right: 8px;
    position: relative;
    order: 1;
    flex-shrink: 0;
  }

  .mobile-menu-button {
    display: flex !important;
    align-items: center;
    margin-left: 8px;
    cursor: pointer;
    padding: 8px;
    border-radius: 6px;
    background: rgba(231, 76, 60, 0.1);
    border: 1px solid var(--vp-c-brand);
    transition: all 0.3s ease;
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
    order: 3;
    flex-shrink: 0;
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