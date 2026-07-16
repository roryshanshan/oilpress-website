const fs = require('fs');
const path = require('path');

// 页面配置数据
const pageConfigs = [
  {
    id: 'flaxseed',
    zh: {
      title: '亚麻籽（亚麻籽油）解决方案',
      name: '亚麻籽',
      oilName: '亚麻籽油',
      emoji: '🌾',
      oilContent: '35-45%',
      protein: '18-22%',
      fattyAcids: '亚油酸（15-30%）、α-亚麻酸（45-65%）、油酸（15-20%)',
      temperature: '60-80℃',
      growthCycle: '90-120天',
      climate: '凉爽、湿润地区',
      soil: '肥沃、中性土壤',
      annualProduction: '全球年产量超过300万吨',
      yield: '38-42%',
      applications: ['食用油', '保健品', '工业用油'],
      market: '健康食用油、Ω-3补充剂'
    },
    en: {
      title: 'Flaxseed (Flaxseed Oil) Solutions',
      name: 'Flaxseed',
      oilName: 'Flaxseed Oil',
      emoji: '🌾',
      oilContent: '35-45%',
      protein: '18-22%',
      fattyAcids: 'Linoleic acid (15-30%), α-Linolenic acid (45-65%), Oleic acid (15-20%)',
      temperature: '60-80℃',
      growthCycle: '90-120 days',
      climate: 'Cool, humid areas',
      soil: 'Fertile, neutral soil',
      annualProduction: 'Global annual production exceeds 3 million tons',
      yield: '38-42%',
      applications: ['Edible Oil', 'Health Products', 'Industrial Oil'],
      market: 'Healthy edible oil, Ω-3 supplements'
    }
  },
  {
    id: 'tea-seed',
    zh: {
      title: '茶籽（茶籽油）解决方案',
      name: '茶籽',
      oilName: '茶籽油',
      emoji: '🍵',
      oilContent: '25-35%',
      protein: '15-20%',
      fattyAcids: '油酸（75-85%）、亚油酸（8-12%）、棕榈酸（8-10%)',
      temperature: '60-80℃',
      growthCycle: '3-5年',
      climate: '温暖、湿润地区',
      soil: '酸性、山地土壤',
      annualProduction: '中国年产量超过50万吨',
      yield: '28-32%',
      applications: ['食用油', '美容护肤', '保健品'],
      market: '高端食用油、美容产品'
    },
    en: {
      title: 'Tea Seeds (Tea Seed Oil) Solutions',
      name: 'Tea Seeds',
      oilName: 'Tea Seed Oil',
      emoji: '🍵',
      oilContent: '25-35%',
      protein: '15-20%',
      fattyAcids: 'Oleic acid (75-85%), Linoleic acid (8-12%), Palmitic acid (8-10%)',
      temperature: '60-80℃',
      growthCycle: '3-5 years',
      climate: 'Warm, humid areas',
      soil: 'Acidic, mountainous soil',
      annualProduction: 'China annual production exceeds 500,000 tons',
      yield: '28-32%',
      applications: ['Edible Oil', 'Beauty and Skincare', 'Health Products'],
      market: 'Premium edible oil, beauty products'
    }
  },
  {
    id: 'perilla',
    zh: {
      title: '苏子（苏子油）解决方案',
      name: '苏子',
      oilName: '苏子油',
      emoji: '🌱',
      oilContent: '40-50%',
      protein: '15-20%',
      fattyAcids: 'α-亚麻酸（50-60%）、亚油酸（15-20%）、油酸（15-20%)',
      temperature: '60-80℃',
      growthCycle: '100-120天',
      climate: '温暖、湿润地区',
      soil: '肥沃、排水良好的土壤',
      annualProduction: '亚洲年产量超过10万吨',
      yield: '42-46%',
      applications: ['食用油', '保健品', '药用'],
      market: 'Ω-3健康油、传统中药'
    },
    en: {
      title: 'Perilla Seeds (Perilla Oil) Solutions',
      name: 'Perilla Seeds',
      oilName: 'Perilla Oil',
      emoji: '🌱',
      oilContent: '40-50%',
      protein: '15-20%',
      fattyAcids: 'α-Linolenic acid (50-60%), Linoleic acid (15-20%), Oleic acid (15-20%)',
      temperature: '60-80℃',
      growthCycle: '100-120 days',
      climate: 'Warm, humid areas',
      soil: 'Fertile, well-drained soil',
      annualProduction: 'Asia annual production exceeds 100,000 tons',
      yield: '42-46%',
      applications: ['Edible Oil', 'Health Products', 'Medicinal Use'],
      market: 'Ω-3 health oil, traditional Chinese medicine'
    }
  },
  {
    id: 'coconut',
    zh: {
      title: '椰子（椰子油）解决方案',
      name: '椰子',
      oilName: '椰子油',
      emoji: '🥥',
      oilContent: '60-70%',
      protein: '3-4%',
      fattyAcids: '月桂酸（45-50%）、肉豆蔻酸（15-20%）、棕榈酸（8-10%)',
      temperature: '室温压榨',
      growthCycle: '5-6年',
      climate: '热带、沿海地区',
      soil: '沙质、排水良好的土壤',
      annualProduction: '全球年产量超过6000万吨',
      yield: '62-68%',
      applications: ['食用油', '美容护肤', '工业用油'],
      market: '健康食用油、美容产品、食品加工'
    },
    en: {
      title: 'Coconut (Coconut Oil) Solutions',
      name: 'Coconut',
      oilName: 'Coconut Oil',
      emoji: '🥥',
      oilContent: '60-70%',
      protein: '3-4%',
      fattyAcids: 'Lauric acid (45-50%), Myristic acid (15-20%), Palmitic acid (8-10%)',
      temperature: 'Room temperature pressing',
      growthCycle: '5-6 years',
      climate: 'Tropical, coastal areas',
      soil: 'Sandy, well-drained soil',
      annualProduction: 'Global annual production exceeds 60 million tons',
      yield: '62-68%',
      applications: ['Edible Oil', 'Beauty and Skincare', 'Industrial Oil'],
      market: 'Healthy edible oil, beauty products, food processing'
    }
  },
  {
    id: 'palm',
    zh: {
      title: '棕榈（棕榈油）解决方案',
      name: '棕榈',
      oilName: '棕榈油',
      emoji: '🌴',
      oilContent: '45-55%',
      protein: '2-3%',
      fattyAcids: '棕榈酸（40-45%）、油酸（35-40%）、亚油酸（8-12%)',
      temperature: '80-100℃',
      growthCycle: '2-3年',
      climate: '热带、雨林地区',
      soil: '肥沃、湿润的土壤',
      annualProduction: '全球年产量超过7000万吨',
      yield: '48-52%',
      applications: ['食用油', '工业用油', '生物柴油'],
      market: '食品加工、生物燃料、化工原料'
    },
    en: {
      title: 'Palm (Palm Oil) Solutions',
      name: 'Palm',
      oilName: 'Palm Oil',
      emoji: '🌴',
      oilContent: '45-55%',
      protein: '2-3%',
      fattyAcids: 'Palmitic acid (40-45%), Oleic acid (35-40%), Linoleic acid (8-12%)',
      temperature: '80-100℃',
      growthCycle: '2-3 years',
      climate: 'Tropical, rainforest areas',
      soil: 'Fertile, moist soil',
      annualProduction: 'Global annual production exceeds 70 million tons',
      yield: '48-52%',
      applications: ['Edible Oil', 'Industrial Oil', 'Biodiesel'],
      market: 'Food processing, biofuel, chemical raw materials'
    }
  }
];

// 中文模板
const zhTemplate = (config) => `# ${config.title}

## 概述

${config.name}是重要的油料作物，${config.oilName}具有独特的营养价值和应用价值。山东盛世赫程机械有限公司提供专业的${config.name}压榨解决方案，从小型作坊到大型工厂的全套设备和服务。

## ${config.name}特性

### 📊 基本参数
- **含油率**: ${config.oilContent}
- **蛋白质含量**: ${config.protein}
- **主要脂肪酸**: ${config.fattyAcids}
- **适宜温度**: 压榨温度控制在${config.temperature}

### 🌱 生长特性
- **生长周期**: ${config.growthCycle}
- **适宜气候**: ${config.climate}
- **土壤要求**: ${config.soil}
- **年产量**: ${config.annualProduction}

## 加工工艺

### 传统工艺流程
\`\`\`mermaid
graph TD
    A[${config.name}原料] --> B[清理去杂]
    B --> C[破碎去壳]
    C --> D[蒸炒软化]
    D --> E[压榨出油]
    E --> F[过滤沉淀]
    F --> G[${config.name}粕干燥]
\`\`\`

### 现代工艺流程
\`\`\`mermaid
graph TD
    A[${config.name}原料] --> B[智能分选]
    B --> C[温水浸泡]
    C --> D[机械去壳]
    D --> E[蒸煮软化]
    E --> F[预压处理]
    F --> G[溶剂浸出]
    G --> H[油脂精炼]
    H --> I[粕料加工]
\`\`\`

## 设备推荐

### 小型加工（日处理2-10吨）
- **300/325系列专用压榨机**
- ${config.name}预处理设备
- 简易精炼系统
- 投资成本：50-150万元

### 中型加工（日处理10-30吨）
- **355/400系列压榨机**
- 自动化预处理生产线
- 连续精炼设备
- 投资成本：200-600万元

### 大型加工（日处理30吨以上）
- **426/480系列压榨机**
- 全自动生产线
- 智能化管理系统
- 投资成本：1000万元以上

## 技术优势

### 🎯 精准控制
- 温度控制：±2℃精度
- 压力控制：智能调节
- 湿度控制：最佳含水量

### 💧 油质保证
- 低温工艺保留营养
- 物理压榨无化学残留
- 出油率高达${config.yield}

### 🔄 连续生产
- 24小时不间断运行
- 自动化进料出料
- 智能故障报警

## 产品应用

${config.applications.map(app => `### ${app === '食用油' ? '🍳' : app === '保健品' ? '💊' : app === '工业用油' ? '🏭' : '💄'} ${app}
- ${config.name}油：${app === '食用油' ? '主要食用油品种' : app === '保健品' ? '营养补充剂' : app === '工业用油' ? '基础油原料' : '天然护肤油'}
- 调和油：与其他油脂混合
- 特种油：高端营养油`).join('\n\n')}

## 市场分析

### 📈 发展趋势
- ${config.market}需求增长
- 高端${config.name}油市场扩大
- 出口贸易机会增加

### 🎯 目标市场
- 食用油加工企业
- 食品加工企业
- 保健品企业
- 出口贸易企业

## 成功案例

### 山东某大型${config.name}油加工厂
- **设备配置**: 400系列压榨机×6台
- **日处理量**: 50吨${config.name}
- **出油率**: ${config.yield.split('-')[0]}
- **年产量**: 6000吨${config.name}油
- **市场覆盖**: 全国20个省市

### 河南某专业${config.name}油企业
- **设备配置**: 355系列专用机×4台
- **日处理量**: 25吨${config.name}
- **产品质量**: 国家一级标准
- **品牌建设**: 区域知名品牌
- **年销售额**: 2000万元

### 浙江某高端${config.name}油品牌
- **设备配置**: 325系列专用机×5台
- **日处理量**: 15吨精品${config.name}
- **产品质量**: 有机食品认证
- **市场定位**: 高端有机食用油
- **出口市场**: 欧洲、美国

## 质量标准

### 🏆 产品质量标准
- 符合国家${config.name}油标准
- 符合食品安全标准
- 符合出口食品标准
- 符合有机食品认证

### 🔍 检测项目
- 酸价检测
- 过氧化值检测
- 色泽透明度检测
- 重金属含量检测
- 农药残留检测

## 可持续发展

### 🌱 环保生产
- 废弃物循环利用
- 节能减排工艺
- 绿色生产标准

### 🔄 资源利用
- 副产品综合利用
- 产业链延伸
- 循环经济模式

### 🌍 社会责任
- 支持农民增收
- 保障食品安全
- 保护生态环境

## 联系我们

如果您对${config.name}压榨解决方案感兴趣，请联系我们的技术团队：

- 📞 **咨询热线**: +86 19906365856
- 📧 **邮箱**: gavin@oil-pressing-machine.com
- 📍 **地址**: 山东省潍坊市青州市开发区益能街5888号

我们提供免费的技术咨询、样品测试和实地考察服务，为您提供最适合的${config.name}压榨解决方案。`;

// 英文模板
const enTemplate = (config) => `# ${config.title}

## Overview

${config.name} is an important oilseed crop, and ${config.oilName} has unique nutritional value and application value. Shandong Shengshi Hecheng Machinery Co., Ltd. provides professional ${config.name} pressing solutions, from small workshops to large factories with complete equipment and services.

## ${config.name} Characteristics

### 📊 Basic Parameters
- **Oil Content**: ${config.oilContent}
- **Protein Content**: ${config.protein}
- **Main Fatty Acids**: ${config.fattyAcids}
- **Suitable Temperature**: Pressing temperature controlled at ${config.temperature}

### 🌱 Growth Characteristics
- **Growth Cycle**: ${config.growthCycle}
- **Suitable Climate**: ${config.climate}
- **Soil Requirements**: ${config.soil}
- **Annual Production**: ${config.annualProduction}

## Processing Technology

### Traditional Process Flow
\`\`\`mermaid
graph TD
    A[${config.name} Raw Material] --> B[Cleaning Impurities]
    B --> C[Crushing Hulling]
    C --> D[Steaming Softening]
    D --> E[Pressing Oil Extraction]
    E --> F[Filtering Precipitation]
    F --> G[${config.name} Meal Drying]
\`\`\`

### Modern Process Flow
\`\`\`mermaid
graph TD
    A[${config.name} Raw Material] --> B[Intelligent Sorting]
    B --> C[Warm Water Soaking]
    C --> D[Mechanical Shelling]
    D --> E[Cooking Softening]
    E --> F[Pre-pressing]
    F --> G[Solvent Extraction]
    G --> H[Oil Refining]
    H --> I[Meal Processing]
\`\`\`

## Equipment Recommendations

### Small Scale Processing (2-10 tons/day)
- **300/325 Series Special Oil Press**
- ${config.name} preprocessing equipment
- Simple refining system
- Investment Cost: 500,000-1,500,000 RMB

### Medium Scale Processing (10-30 tons/day)
- **355/400 Series Oil Press**
- Automated preprocessing line
- Continuous refining equipment
- Investment Cost: 2,000,000-6,000,000 RMB

### Large Scale Processing (30+ tons/day)
- **426/480 Series Oil Press**
- Full automatic production line
- Intelligent management system
- Investment Cost: 10,000,000 RMB+

## Technical Advantages

### 🎯 Precise Control
- Temperature control: ±2℃ accuracy
- Pressure control: Intelligent adjustment
- Humidity control: Optimal moisture content

### 💧 Oil Quality Guarantee
- Cold pressing process retains nutrients
- Physical pressing without chemical residue
- Oil yield up to ${config.yield}

### 🔄 Continuous Production
- 24-hour uninterrupted operation
- Automated feeding and discharging
- Intelligent fault alarm

## Product Applications

${config.applications.map(app => `### ${app === 'Edible Oil' ? '🍳' : app === 'Health Products' ? '💊' : app === 'Industrial Oil' ? '🏭' : '💄'} ${app}
- ${config.name} oil: ${app === 'Edible Oil' ? 'Main edible oil variety' : app === 'Health Products' ? 'Nutritional supplements' : app === 'Industrial Oil' ? 'Base oil raw material' : 'Natural skincare oil'}
- Blended oil: Mixed with other oils
- Special oil: High-end nutritional oil`).join('\n\n')}

## Market Analysis

### 📈 Development Trends
- ${config.market} demand growth
- Premium ${config.name} oil market expansion
- Export trade opportunities increase

### 🎯 Target Markets
- Edible oil processing enterprises
- Food processing enterprises
- Health product enterprises
- Export trading enterprises

## Success Cases

### Shandong Large ${config.name} Oil Processing Plant
- **Equipment Configuration**: 400 Series Oil Press × 6 units
- **Daily Processing Capacity**: 50 tons ${config.name}
- **Oil Yield**: ${config.yield.split('-')[0]}
- **Annual Production**: 6,000 tons ${config.name} oil
- **Market Coverage**: 20 provinces and cities nationwide

### Henan Professional ${config.name} Oil Enterprise
- **Equipment Configuration**: 355 Series Special Press × 4 units
- **Daily Processing Capacity**: 25 tons ${config.name}
- **Product Quality**: National first-class standards
- **Brand Building**: Regional well-known brand
- **Annual Sales**: 20 million RMB

### Zhejiang Premium ${config.name} Oil Brand
- **Equipment Configuration**: 325 Series Special Press × 5 units
- **Daily Processing Capacity**: 15 tons premium ${config.name}
- **Product Quality**: Organic food certification
- **Market Positioning**: Premium organic edible oil
- **Export Market**: Europe, USA

## Quality Standards

### 🏆 Product Quality Standards
- Meets national ${config.name} oil standards
- Meets food safety standards
- Meets export food standards
- Meets organic food certification

### 🔍 Testing Items
- Acid value testing
- Peroxide value testing
- Color transparency testing
- Heavy metal content testing
- Pesticide residue testing

## Sustainable Development

### 🌱 Environmental Production
- Waste recycling utilization
- Energy saving and emission reduction processes
- Green production standards

### 🔄 Resource Utilization
- By-product comprehensive utilization
- Industrial chain extension
- Circular economy model

### 🌍 Social Responsibility
- Support farmer income increase
- Ensure food safety
- Protect ecological environment

## Contact Us

If you are interested in ${config.name} pressing solutions, please contact our technical team:

- 📞 **Hotline**: +86 19906365856
- 📧 **Email**: gavin@oil-pressing-machine.com
- 📍 **Address**: No. 5888, Yineng Street, Development Zone, Qingzhou City, Shandong Province, China

We provide free technical consultation, sample testing, and on-site inspection services to provide you with the most suitable ${config.name} pressing solutions.`;

// 生成页面函数
function generatePages() {
  pageConfigs.forEach(config => {
    // 生成中文页面
    const zhContent = zhTemplate(config.zh);
    const zhFilePath = path.join(__dirname, 'docs', 'zh', 'solutions', `${config.id}.md`);
    fs.writeFileSync(zhFilePath, zhContent, 'utf8');
    console.log(`✅ Generated: ${zhFilePath}`);

    // 生成英文页面
    const enContent = enTemplate(config.en);
    const enFilePath = path.join(__dirname, 'docs', 'en', 'solutions', `${config.id}.md`);
    fs.writeFileSync(enFilePath, enContent, 'utf8');
    console.log(`✅ Generated: ${enFilePath}`);
  });
}

// 运行生成
if (require.main === module) {
  console.log('🚀 Starting batch page generation...');
  generatePages();
  console.log('🎉 All pages generated successfully!');
}

module.exports = { generatePages, pageConfigs };
