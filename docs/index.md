---
title: Redirecting to English Homepage
description: Redirecting to the English homepage of Shengshi Hecheng hydraulic oil press equipment.
head:
  - - meta
    - http-equiv: refresh
      content: 0; url=/en/
  - - link
    - rel: canonical
      href: /en/
---

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  if (typeof window !== 'undefined' && window.location.pathname === '/') {
    window.location.replace('/en/')
  }
})
</script>

# Redirecting...

Opening the English homepage at [/en/](/en/).
