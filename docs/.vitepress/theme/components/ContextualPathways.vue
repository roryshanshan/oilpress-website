<template>
  <section v-if="showPathway" class="context-pathway" :aria-labelledby="headingId">
    <div class="context-pathway__intro">
      <p class="context-pathway__eyebrow">{{ t.recommended }}</p>
      <h2 :id="headingId">{{ pathway.heading }}</h2>
      <p>{{ pathway.intro }}</p>
    </div>
    <div class="context-pathway__grid">
      <article
        v-for="card in visibleCards"
        :key="card.href"
        class="context-pathway__card"
        :class="{ 'context-pathway__card--primary': card.primary }"
      >
        <h3>{{ card.title }}</h3>
        <p>{{ card.text }}</p>
        <a
          :href="card.href"
          :target="card.external ? '_blank' : undefined"
          :rel="card.external ? 'noopener noreferrer' : undefined"
        >
          {{ card.external ? t.openOfficial : (card.primary ? t.request : t.view) }}
          <span aria-hidden="true">→</span>
        </a>
      </article>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import { buildPathway, getLocaleCopy, getLocaleFromPath } from '../navigation-data.js'

const route = useRoute()
const locale = computed(() => getLocaleFromPath(route.path))
const t = computed(() => getLocaleCopy(locale.value))
const pathway = computed(() => buildPathway(locale.value, route.path))
const canonicalPath = computed(() => route.path.replace(/\/+$/, ''))
const showPathway = computed(() => !/^\/(en|zh|ru|fr|vi|bn)\/?$/.test(route.path))
const headingId = computed(() => `next-step-${pathway.value.kind}`)
const visibleCards = computed(() => pathway.value.cards.filter((card) => card.href.replace(/\/+$/, '') !== canonicalPath.value))
</script>
