<template>
  <div class="language-selector-container">
    <button class="language-button" @click="toggleDropdown">
      {{ getCurrentLanguageLabel() }}
      <span class="arrow" :class="{ 'arrow-up': isOpen }">▼</span>
    </button>
    <div v-if="isOpen" class="language-dropdown">
      <a href="/" 
         class="language-option" 
         :class="{ active: currentPath === '/' }"
         @click.prevent="changeLang('/')">
        English
      </a>
      <a href="/zh/" 
         class="language-option" 
         :class="{ active: currentPath.startsWith('/zh/') }"
         @click.prevent="changeLang('/zh/')">
        中文
      </a>
      <a href="/fr/" 
         class="language-option" 
         :class="{ active: currentPath.startsWith('/fr/') }"
         @click.prevent="changeLang('/fr/')">
        Français
      </a>
      <a href="/ru/" 
         class="language-option" 
         :class="{ active: currentPath.startsWith('/ru/') }"
         @click.prevent="changeLang('/ru/')">
        Русский
      </a>
      <a href="/bn/" 
         class="language-option" 
         :class="{ active: currentPath.startsWith('/bn/') }"
         @click.prevent="changeLang('/bn/')">
        বাংলা
      </a>
      <a href="/vi/" 
         class="language-option" 
         :class="{ active: currentPath.startsWith('/vi/') }"
         @click.prevent="changeLang('/vi/')">
        Tiếng Việt
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
const currentPath = ref(typeof window !== 'undefined' ? window.location.pathname : '/')

function getCurrentLanguageLabel() {
  if (currentPath.value.startsWith('/zh/')) return '中文'
  if (currentPath.value.startsWith('/fr/')) return 'Français'
  if (currentPath.value.startsWith('/ru/')) return 'Русский'
  if (currentPath.value.startsWith('/bn/')) return 'বাংলা'
  if (currentPath.value.startsWith('/vi/')) return 'Tiếng Việt'
  return 'English'
}

function toggleDropdown() {
  isOpen.value = !isOpen.value
}

function changeLang(path) {
  const currentPathParts = currentPath.value.split('/').filter(Boolean)
  const newPath = path === '/' ? path : path + (currentPathParts.slice(1).join('/') || '')
  window.location.pathname = newPath
  isOpen.value = false
}

// 点击外部关闭下拉菜单
if (typeof window !== 'undefined') {
  window.addEventListener('click', (e) => {
    if (!e.target.closest('.language-selector-container')) {
      isOpen.value = false
    }
  })
}
</script>

<style scoped>
.language-selector-container {
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 9999;
}

.language-button {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.arrow {
  margin-left: 6px;
  font-size: 10px;
  transition: transform 0.2s;
}

.arrow-up {
  transform: rotate(180deg);
}

.language-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 4px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  min-width: 120px;
  max-width: 200px;
}

.language-option {
  display: block;
  padding: 8px 12px;
  color: #333;
  text-decoration: none;
  transition: background-color 0.2s;
  white-space: nowrap;
}

.language-option:hover {
  background-color: #f5f5f5;
}

.language-option.active {
  background-color: #e8e8e8;
}

@media (max-width: 768px) {
  .language-selector-container {
    top: 5px;
    right: 5px;
  }

  .language-button {
    padding: 6px 10px;
    font-size: 12px;
  }

  .language-dropdown {
    min-width: 100px;
  }

  .language-option {
    padding: 6px 10px;
    font-size: 12px;
  }
}
</style>
</script>

<style scoped>
.lang-select {
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 9999;
  padding: 6px 8px;
  font-size: 14px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 12px;
  padding-right: 28px;
}

@media (max-width: 768px) {
  .lang-select {
    top: 5px;
    right: 5px;
    font-size: 12px;
    padding: 4px 24px 4px 6px;
    background-size: 10px;
    background-position: right 6px center;
  }
}
</style>
</style>

</style>