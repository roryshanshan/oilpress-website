<template>
  <nav v-if="crumbs.length > 1" class="page-trail" :aria-label="t.breadcrumb">
    <ol>
      <li v-for="(crumb, index) in crumbs" :key="crumb.href || crumb.label">
        <a v-if="crumb.href && index < crumbs.length - 1" :href="crumb.href">{{ crumb.label }}</a>
        <span v-else aria-current="page">{{ crumb.label }}</span>
      </li>
    </ol>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useData, useRoute } from 'vitepress'
import { getLocaleCopy, getLocaleFromPath, localizedPath, sectionLabels } from '../navigation-data.js'

const route = useRoute()
const { page, frontmatter } = useData()
const locale = computed(() => getLocaleFromPath(route.path))
const t = computed(() => getLocaleCopy(locale.value))

const cleanTitle = (value) => {
  const title = String(value || '').split(/\s+[|｜]\s+/)[0].trim()
  return title.length > 78 ? `${title.slice(0, 75)}...` : title
}

const crumbs = computed(() => {
  const parts = route.path.replace(/^\/+|\/+$/g, '').split('/').filter(Boolean)
  if (parts.length <= 1) return []
  const contentParts = parts.slice(1)
  const labels = sectionLabels(locale.value)
  const result = [{ label: t.value.home, href: localizedPath(locale.value, '/') }]
  const parentParts = contentParts.slice(0, -1)

  parentParts.forEach((segment, index) => {
    const trail = parentParts.slice(0, index + 1)
    const target = trail[0] === 'products' && trail[1] === 'filling'
      ? '/products/filling-equipment'
      : `/${trail.join('/')}/`
    const href = localizedPath(locale.value, target)
    result.push({ label: labels[segment] || segment.replace(/-/g, ' '), href })
  })

  result.push({ label: cleanTitle(frontmatter.value.title || page.value.title), href: '' })
  return result
})
</script>
