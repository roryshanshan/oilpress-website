<template>
  <Layout>
    <LanguageSelector />
  </Layout>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import LanguageSelector from './LanguageSelector.vue'

const { Layout } = DefaultTheme
</script>