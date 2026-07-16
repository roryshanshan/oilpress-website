<template>
  <div class="site-shell" :inert="showMobileMenu ? '' : null">
    <Layout>
    <template #nav-bar-content-after>
      <div class="desktop-actions" aria-label="Contact channels">
        <div class="desktop-language language-control">
          <button
            class="desktop-language-button"
            type="button"
            :aria-label="t.switchLanguage"
            :aria-expanded="showLanguages"
            @click.stop="toggleLanguages"
          >
            <span aria-hidden="true">A/文</span>
            <strong>{{ localeNames[currentLocale] }}</strong>
            <span class="desktop-language-chevron" :class="{ open: showLanguages }" aria-hidden="true">⌄</span>
          </button>
          <div v-if="showLanguages" class="language-menu desktop-language-menu">
            <button
              v-for="locale in supportedLocales"
              :key="locale"
              type="button"
              :class="{ active: locale === currentLocale }"
              @click.stop="switchLanguage(locale)"
            >
              {{ localeNames[locale] }}
            </button>
          </div>
        </div>
        <a class="brand-icon brand-icon--whatsapp" href="https://wa.me/8619906365856" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp +86 199 0636 5856" title="WhatsApp +86 199 0636 5856">WA</a>
        <button class="brand-icon brand-icon--wechat" type="button" aria-label="Show WeChat QR code" title="WeChat QR code" :aria-expanded="showWechat" @click.stop="toggleWechat">微</button>
        <a class="brand-icon brand-icon--linkedin" href="https://www.linkedin.com/newsletters/hydraulic-oil-pressing-machine-7331966128702836736/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">in</a>
        <div v-if="showWechat" class="wechat-popover">
          <img src="/images/wechat-qr.webp" alt="WeChat QR code" width="180" height="180" loading="lazy" decoding="async">
          <span>WeChat</span>
        </div>
      </div>

      <div class="mobile-top-actions">
        <div class="mobile-language language-control">
          <button
            class="mobile-action-button"
            type="button"
            :aria-label="t.switchLanguage"
            :aria-expanded="showLanguages"
            @click.stop="toggleLanguages"
          >
            <span class="mobile-action-kicker">{{ t.language }}</span>
            <strong>{{ localeNames[currentLocale] }}</strong>
          </button>
          <div v-if="showLanguages" class="language-menu">
            <button
              v-for="locale in supportedLocales"
              :key="locale"
              type="button"
              :class="{ active: locale === currentLocale }"
              @click.stop="switchLanguage(locale)"
            >
              {{ localeNames[locale] }}
            </button>
          </div>
        </div>
        <button
          ref="mobileMenuTrigger"
          class="mobile-menu-trigger"
          type="button"
          aria-controls="mobile-site-menu"
          :aria-expanded="showMobileMenu"
          :aria-label="t.menu"
          @click.stop="toggleMobileMenu"
        >
          <span class="menu-lines" aria-hidden="true"><i></i><i></i><i></i></span>
          <span>{{ t.menu }}</span>
        </button>
      </div>
    </template>

    <template #doc-before>
      <PageBreadcrumbs />
      <FillingSeriesDirectory v-if="showFillingSeriesDirectory" />
    </template>

    <template #doc-after>
      <ContextualPathways />
    </template>
    </Layout>
  </div>

  <div v-if="showMobileMenu" class="mobile-menu-overlay" @click.self="closeMobileMenu">
    <aside
      id="mobile-site-menu"
      ref="mobileMenuPanel"
      class="mobile-menu-panel"
      role="dialog"
      aria-modal="true"
      tabindex="-1"
      :aria-label="t.menu"
    >
      <header class="mobile-menu-header">
        <div>
          <span>{{ t.menu }}</span>
          <strong>{{ t.products }} · {{ t.solutions }}</strong>
        </div>
        <button ref="mobileMenuClose" type="button" :aria-label="t.close" :title="t.close" @click="closeMobileMenu">×</button>
      </header>

      <nav class="mobile-menu-list">
        <div v-for="item in mobileNavigation" :key="item.key" class="mobile-menu-item">
          <a
            v-if="!item.items"
            :href="item.href"
            :class="{ 'mobile-menu-primary': item.primary }"
            @click="closeMobileMenu"
          >
            {{ item.label }}
            <span aria-hidden="true">→</span>
          </a>
          <template v-else>
            <div class="mobile-menu-group-row">
              <a :href="item.href" @click="closeMobileMenu">{{ item.label }}</a>
              <button
                type="button"
                :aria-label="item.label"
                :aria-expanded="Boolean(expanded[item.key])"
                @click="toggleGroup(item.key)"
              >
                <span class="menu-chevron" :class="{ open: expanded[item.key] }" aria-hidden="true">⌄</span>
              </button>
            </div>
            <div v-show="expanded[item.key]" class="mobile-menu-sublist">
              <a v-for="child in item.items" :key="child.href" :href="child.href" @click="closeMobileMenu">{{ child.label }}</a>
            </div>
          </template>
        </div>
      </nav>

      <footer class="mobile-menu-footer">
        <a href="https://wa.me/8619906365856" target="_blank" rel="noopener noreferrer">WhatsApp +86 199 0636 5856</a>
        <a href="https://wa.me/8615615763222" target="_blank" rel="noopener noreferrer">WhatsApp +86 156 1576 3222</a>
      </footer>
    </aside>
  </div>

  <div class="site-utilities" :inert="showMobileMenu ? '' : null">
    <div class="floating-contact" aria-label="WhatsApp contacts">
      <a href="https://wa.me/8619906365856" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp +86 199 0636 5856" title="WhatsApp +86 199 0636 5856">WA</a>
      <a href="https://wa.me/8615615763222" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp +86 156 1576 3222" title="WhatsApp +86 156 1576 3222">WA</a>
    </div>

    <BackToTop />
  </div>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import { useRoute } from 'vitepress'
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { injectSpeedInsights } from '@vercel/speed-insights'
import { inject } from '@vercel/analytics'
import BackToTop from './components/BackToTop.vue'
import PageBreadcrumbs from './components/PageBreadcrumbs.vue'
import ContextualPathways from './components/ContextualPathways.vue'
import FillingSeriesDirectory from './components/FillingSeriesDirectory.vue'
import {
  buildMobileNavigation,
  getLocaleCopy,
  getLocaleFromPath,
  localeNames,
  supportedLocales
} from './navigation-data.js'

const { Layout } = DefaultTheme
const route = useRoute()
const showMobileMenu = ref(false)
const showLanguages = ref(false)
const showWechat = ref(false)
const expanded = ref({ products: true, solutions: false, guides: false })
const mobileMenuTrigger = ref(null)
const mobileMenuClose = ref(null)
const mobileMenuPanel = ref(null)
let focusBeforeMobileMenu = null

const currentLocale = computed(() => getLocaleFromPath(route.path))
const t = computed(() => getLocaleCopy(currentLocale.value))
const mobileNavigation = computed(() => buildMobileNavigation(currentLocale.value))
const showFillingSeriesDirectory = computed(() =>
  /\/(?:products\/filling-equipment|solutions\/filling-packages)\/?$/.test(route.path)
)

const toggleMobileMenu = () => {
  showLanguages.value = false
  if (showMobileMenu.value) {
    closeMobileMenu()
    return
  }
  if (typeof document !== 'undefined') focusBeforeMobileMenu = document.activeElement
  showMobileMenu.value = true
}

const closeMobileMenu = () => {
  showMobileMenu.value = false
}

const toggleLanguages = () => {
  showMobileMenu.value = false
  showWechat.value = false
  showLanguages.value = !showLanguages.value
}

const toggleWechat = () => {
  showLanguages.value = false
  showWechat.value = !showWechat.value
}

const toggleGroup = (key) => {
  expanded.value[key] = !expanded.value[key]
}

const alternateCode = {
  en: 'en-US',
  zh: 'zh-CN',
  ru: 'ru-RU',
  fr: 'fr-FR',
  vi: 'vi-VN',
  bn: 'bn-BD'
}

const fallbackLocalePath = (locale) => `/${locale}`

const switchLanguage = (locale) => {
  showLanguages.value = false
  if (typeof window === 'undefined' || locale === currentLocale.value) return
  const alternate = document.querySelector(`link[rel="alternate"][hreflang="${alternateCode[locale]}"]`)
  const targetPath = alternate?.href
    ? new URL(alternate.href, window.location.origin).pathname
    : fallbackLocalePath(locale)
  window.location.assign(targetPath)
}

const closeTransientUi = (event) => {
  if (!(event.target instanceof Element)) return
  if (!event.target.closest('.language-control')) showLanguages.value = false
  if (!event.target.closest('.desktop-actions')) showWechat.value = false
}

const handleKeydown = (event) => {
  if (event.key === 'Escape') {
    if (showMobileMenu.value) closeMobileMenu()
    showLanguages.value = false
    showWechat.value = false
    return
  }

  if (event.key !== 'Tab' || !showMobileMenu.value || !mobileMenuPanel.value) return
  const focusable = [...mobileMenuPanel.value.querySelectorAll(
    'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
  )].filter((element) => !element.hasAttribute('hidden') && element.offsetParent !== null)
  if (!focusable.length) {
    event.preventDefault()
    mobileMenuPanel.value.focus()
    return
  }

  const first = focusable[0]
  const last = focusable[focusable.length - 1]
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault()
    last.focus()
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault()
    first.focus()
  }
}

watch(showMobileMenu, async (open) => {
  if (typeof document !== 'undefined') document.documentElement.classList.toggle('mobile-menu-open', open)
  await nextTick()
  if (open) {
    mobileMenuClose.value?.focus()
  } else {
    const focusTarget = focusBeforeMobileMenu instanceof HTMLElement
      ? focusBeforeMobileMenu
      : mobileMenuTrigger.value
    focusTarget?.focus()
    focusBeforeMobileMenu = null
  }
})

watch(() => route.path, () => {
  showMobileMenu.value = false
  showLanguages.value = false
})

onMounted(() => {
  injectSpeedInsights()
  inject()
  document.addEventListener('click', closeTransientUi)
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.documentElement.classList.remove('mobile-menu-open')
  document.removeEventListener('click', closeTransientUi)
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
.desktop-actions{position:relative;display:flex;align-items:center;gap:8px;margin-left:12px}
.desktop-language{position:relative}
.desktop-language-button{display:flex;height:36px;align-items:center;gap:7px;padding:0 10px;border:1px solid var(--vp-c-divider);border-radius:6px;background:var(--vp-c-bg);color:var(--vp-c-text-1);font-size:12px;cursor:pointer}
.desktop-language-button strong{max-width:84px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:12px}
.desktop-language-chevron{font-size:16px;transition:transform .18s ease}.desktop-language-chevron.open{transform:rotate(180deg)}
.desktop-language-menu{top:42px;right:0}
.brand-icon{display:inline-flex;width:34px;height:34px;align-items:center;justify-content:center;border:1px solid var(--vp-c-divider);border-radius:50%;font-size:12px;font-weight:800;text-decoration:none;background:var(--vp-c-bg);transition:transform .18s ease,border-color .18s ease}
.brand-icon:hover,.brand-icon:focus-visible{transform:translateY(-2px);border-color:currentColor}
.brand-icon--whatsapp{color:#087a4b}.brand-icon--wechat{color:#078642;cursor:pointer}.brand-icon--linkedin{color:#0a66c2}
.wechat-popover{position:absolute;top:44px;right:38px;z-index:60;display:grid;gap:8px;padding:10px;border:1px solid var(--vp-c-divider);border-radius:6px;background:var(--vp-c-bg);box-shadow:0 18px 50px rgba(24,35,29,.18);text-align:center;font-size:12px;font-weight:700}
.wechat-popover img{display:block;width:180px;height:180px}
.mobile-top-actions{display:none;align-items:center;gap:8px;margin-left:auto}
.mobile-language{position:relative}
.mobile-action-button,.mobile-menu-trigger{height:42px;border:1px solid var(--vp-c-divider);border-radius:6px;background:var(--vp-c-bg);color:var(--vp-c-text-1);cursor:pointer}
.mobile-action-button{display:grid;min-width:96px;padding:4px 10px;text-align:left}
.mobile-action-kicker{font-size:10px;color:var(--vp-c-text-2);line-height:1}.mobile-action-button strong{font-size:12px;line-height:1.2}
.mobile-menu-trigger{display:flex;min-width:72px;align-items:center;justify-content:center;gap:7px;padding:0 10px;font-size:12px;font-weight:700}
.menu-lines{display:grid;width:18px;gap:3px}.menu-lines i{display:block;height:2px;background:currentColor}
.language-menu{position:absolute;top:48px;right:0;z-index:80;display:grid;width:172px;padding:6px;border:1px solid var(--vp-c-divider);border-radius:6px;background:var(--vp-c-bg);box-shadow:0 18px 50px rgba(24,35,29,.18)}
.language-menu button{min-height:38px;padding:8px 10px;border:0;border-radius:4px;background:transparent;color:var(--vp-c-text-1);text-align:left;cursor:pointer}
.language-menu button:hover,.language-menu button.active{background:#eef5f0;color:#0d6547;font-weight:700}
.mobile-menu-overlay{position:fixed;inset:0;z-index:100;background:rgba(16,26,21,.5)}
.mobile-menu-panel{position:absolute;top:0;right:0;width:min(92vw,430px);height:100%;overflow-y:auto;overscroll-behavior:contain;background:#f8faf8;box-shadow:-22px 0 60px rgba(15,28,21,.22)}
.mobile-menu-header{position:sticky;top:0;z-index:2;display:flex;align-items:center;justify-content:space-between;min-height:82px;padding:18px 20px;border-bottom:1px solid #dce4dd;background:#fff}
.mobile-menu-header div{display:grid;gap:3px}.mobile-menu-header span{font-size:12px;color:#657269}.mobile-menu-header strong{font-size:15px;color:#17251d}
.mobile-menu-header button{width:38px;height:38px;border:1px solid #d4ddd6;border-radius:50%;background:#fff;color:#23362a;font-size:25px;cursor:pointer}
.mobile-menu-list{padding:12px}
.mobile-menu-item{border-bottom:1px solid #dfe6e1}
.mobile-menu-item>a,.mobile-menu-group-row>a{display:flex;width:100%;min-height:52px;align-items:center;justify-content:space-between;padding:12px 10px;border:0;background:transparent;color:#1a2b21;font-size:15px;font-weight:700;text-decoration:none;text-align:left}
.mobile-menu-item>a:hover,.mobile-menu-group-row>a:hover{color:#0d6547}
.mobile-menu-group-row{display:grid;grid-template-columns:minmax(0,1fr) 48px;align-items:stretch}
.mobile-menu-group-row button{display:flex;align-items:center;justify-content:center;border:0;background:transparent;color:#1a2b21;cursor:pointer}
.mobile-menu-group-row button:hover,.mobile-menu-group-row button:focus-visible{color:#0d6547;background:#edf3ef}
.mobile-menu-primary{margin:10px 0;border-radius:6px!important;background:#123f31!important;color:#fff!important;padding-inline:16px!important}
.menu-chevron{font-size:20px;transition:transform .18s ease}.menu-chevron.open{transform:rotate(180deg)}
.mobile-menu-sublist{display:grid;gap:2px;padding:0 8px 12px 18px}
.mobile-menu-sublist a{min-height:42px;padding:10px 12px;border-left:2px solid #cbd8ce;color:#4b5b50;font-size:14px;text-decoration:none}
.mobile-menu-sublist a:hover{border-color:#d89a2b;color:#0d6547;background:#fff}
.mobile-menu-footer{display:grid;gap:8px;margin:12px;padding:16px;border-top:3px solid #d89a2b;background:#fff}
.mobile-menu-footer a{color:#0d6547;font-size:13px;font-weight:700;text-decoration:none}
.floating-contact{position:fixed;right:18px;top:50%;z-index:45;display:grid;gap:10px;transform:translateY(-50%)}
.floating-contact a{display:flex;width:48px;height:48px;align-items:center;justify-content:center;border:2px solid #fff;border-radius:50%;background:#0b8f55;color:#fff;font-size:13px;font-weight:900;text-decoration:none;box-shadow:0 10px 26px rgba(11,71,46,.25)}
.floating-contact a:last-child{background:#155f46}
@media(min-width:1280px) and (max-width:1599px){.desktop-actions{margin-left:6px}.desktop-actions .brand-icon{display:none}.desktop-language-button strong{max-width:64px}}
@media(max-width:1279px){.desktop-actions{display:none}.mobile-top-actions{display:flex}.floating-contact{right:12px;top:auto;bottom:18px;transform:none}.floating-contact a{width:44px;height:44px}.wechat-popover{display:none}}
@media(max-width:420px){.mobile-top-actions{gap:6px}.mobile-action-button{display:flex;width:60px;min-width:60px;align-items:center;justify-content:center;padding:0 6px;text-align:center}.mobile-action-kicker{display:none}.mobile-action-button strong{max-width:48px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mobile-menu-trigger{width:44px;min-width:44px;padding:0}.mobile-menu-trigger>span:last-child{display:none}}
</style>
