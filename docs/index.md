---
layout: home
---

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vitepress'

const router = useRouter()

// Auto redirect to browser language
onMounted(() => {
  const userLang = navigator.language || navigator.userLanguage
  if (userLang.startsWith('zh')) {
    router.go('/zh/')
  } else {
    router.go('/en/')
  }
})
</script>



## 产品优势

### 高效生产
- 压榨效率比传统设备提高30-50%
- 自动化操作系统，减少人工干预
- 强大的连续作业能力

### 优质出油率
- 精确压力控制，出油率最高可达95%
- 低温冷榨工艺，保留营养成分
- 适用于多种油料作物
- 同样支持热榨工艺，配合蒸炒工艺，出油率更高

## 适用原料

- 花生
- 大豆
- 茶籽
- 芝麻
- 玉米胚芽
- 亚麻
- 油菜籽
- 棉籽
以及其他植物油料作物和动物油籽

## 主流型号规格

提供多种规格型号以满足不同需求：
- 300/325系列
- 355/400系列
- 426/480/500系列

## 工程服务

- 基于CAD设计系统提供专业设计
- 可定制日产1-100吨的生产线
- 提供全方位技术支持和售后服务

## 配套设备

### 预处理设备
- 葵花籽脱壳机
- 油料预榨机
- 电加热煎炒锅
- 蒸煮设备
- 高速粉碎机

### 后处理设备
- 油品精炼设备
- 饼料粉碎机
- 滤油机
- 液压压饼包装机

## 联系我们

专业的售后团队为您提供24小时服务支持，一对一培训指导。

::: tip 温馨提示
您的一站式油料加工基地，我们致力于为您提供最优质的榨油设备解决方案。
:::
