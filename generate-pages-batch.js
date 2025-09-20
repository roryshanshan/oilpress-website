const fs = require('fs');
const path = require('path');

// 扩展的页面配置数据
const pageConfigs = [
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
    id: 'walnut',
    zh: {
      title: '核桃（核桃油）解决方案',
      name: '核桃',
      oilName: '核桃油',
      emoji: '🥜',
      oilContent: '60-70%',
      protein: '15-20%',
      fattyAcids: '亚油酸（55-65%）、油酸（15-25%）、亚麻酸（8-12%)',
      temperature: '60-80℃',
      growthCycle: '3-5年',
      climate: '温带、山区地区',
      soil: '肥沃、排水良好的土壤',
      annualProduction: '全球年产量超过300万吨',
      yield: '62-68%',
      applications: ['食用油', '保健品', '美容护肤'],
      market: '高端食用油、营养保健品'
    },
    en: {
      title: 'Walnut (Walnut Oil) Solutions',
      name: 'Walnut',
      oilName: 'Walnut Oil',
      emoji: '🥜',
      oilContent: '60-70%',
      protein: '15-20%',
      fattyAcids: 'Linoleic acid (55-65%), Oleic acid (15-25%), Linolenic acid (8-12%)',
      temperature: '60-80℃',
      growthCycle: '3-5 years',
      climate: 'Temperate, mountainous areas',
      soil: 'Fertile, well-drained soil',
      annualProduction: 'Global annual production exceeds 3 million tons',
      yield: '62-68%',
      applications: ['Edible Oil', 'Health Products', 'Beauty and Skincare'],
      market: 'Premium edible oil, nutritional health products'
    }
  },
  {
    id: 'almond',
    zh: {
      title: '杏仁（杏仁油）解决方案',
      name: '杏仁',
      oilName: '杏仁油',
      emoji: '🌰',
      oilContent: '45-55%',
      protein: '20-25%',
      fattyAcids: '油酸（60-70%）、亚油酸（20-30%）、棕榈酸（4-6%)',
      temperature: '60-80℃',
      growthCycle: '3-4年',
      climate: '温暖、干燥地区',
      soil: '肥沃、钙质土壤',
      annualProduction: '全球年产量超过100万吨',
      yield: '46-52%',
      applications: ['食用油', '美容护肤', '保健品'],
      market: '高端食用油、美容护肤品'
    },
    en: {
      title: 'Almond (Almond Oil) Solutions',
      name: 'Almond',
      oilName: 'Almond Oil',
      emoji: '🌰',
      oilContent: '45-55%',
      protein: '20-25%',
      fattyAcids: 'Oleic acid (60-70%), Linoleic acid (20-30%), Palmitic acid (4-6%)',
      temperature: '60-80℃',
      growthCycle: '3-4 years',
      climate: 'Warm, dry areas',
      soil: 'Fertile, calcareous soil',
      annualProduction: 'Global annual production exceeds 1 million tons',
      yield: '46-52%',
      applications: ['Edible Oil', 'Beauty and Skincare', 'Health Products'],
      market: 'Premium edible oil, beauty and skincare products'
    }
  },
  {
    id: 'hazelnut',
    zh: {
      title: '榛子（榛子油）解决方案',
      name: '榛子',
      oilName: '榛子油',
      emoji: '🌰',
      oilContent: '55-65%',
      protein: '15-20%',
      fattyAcids: '油酸（75-85%）、亚油酸（10-15%）、棕榈酸（3-5%)',
      temperature: '60-80℃',
      growthCycle: '4-6年',
      climate: '温带、湿润地区',
      soil: '肥沃、排水良好的土壤',
      annualProduction: '全球年产量超过80万吨',
      yield: '56-62%',
      applications: ['食用油', '保健品', '美容护肤'],
      market: '高端食用油、营养保健品'
    },
    en: {
      title: 'Hazelnut (Hazelnut Oil) Solutions',
      name: 'Hazelnut',
      oilName: 'Hazelnut Oil',
      emoji: '🌰',
      oilContent: '55-65%',
      protein: '15-20%',
      fattyAcids: 'Oleic acid (75-85%), Linoleic acid (10-15%), Palmitic acid (3-5%)',
      temperature: '60-80℃',
      growthCycle: '4-6 years',
      climate: 'Temperate, humid areas',
      soil: 'Fertile, well-drained soil',
      annualProduction: 'Global annual production exceeds 800,000 tons',
      yield: '56-62%',
      applications: ['Edible Oil', 'Health Products', 'Beauty and Skincare'],
      market: 'Premium edible oil, nutritional health products'
    }
  },
  {
    id: 'cashew',
    zh: {
      title: '腰果（腰果油）解决方案',
      name: '腰果',
      oilName: '腰果油',
      emoji: '🥜',
      oilContent: '40-50%',
      protein: '18-22%',
      fattyAcids: '油酸（60-70%）、亚油酸（15-20%）、棕榈酸（8-10%)',
      temperature: '60-80℃',
      growthCycle: '2-3年',
      climate: '热带、沿海地区',
      soil: '沙质、排水良好的土壤',
      annualProduction: '全球年产量超过400万吨',
      yield: '42-48%',
      applications: ['食用油', '工业用油', '美容护肤'],
      market: '高端食用油、工业润滑油'
    },
    en: {
      title: 'Cashew (Cashew Oil) Solutions',
      name: 'Cashew',
      oilName: 'Cashew Oil',
      emoji: '🥜',
      oilContent: '40-50%',
      protein: '18-22%',
      fattyAcids: 'Oleic acid (60-70%), Linoleic acid (15-20%), Palmitic acid (8-10%)',
      temperature: '60-80℃',
      growthCycle: '2-3 years',
      climate: 'Tropical, coastal areas',
      soil: 'Sandy, well-drained soil',
      annualProduction: 'Global annual production exceeds 4 million tons',
      yield: '42-48%',
      applications: ['Edible Oil', 'Industrial Oil', 'Beauty and Skincare'],
      market: 'Premium edible oil, industrial lubricants'
    }
  },
  {
    id: 'avocado',
    zh: {
      title: '鳄梨（牛油果油）解决方案',
      name: '鳄梨',
      oilName: '牛油果油',
      emoji: '🥑',
      oilContent: '15-25%',
      protein: '2-3%',
      fattyAcids: '油酸（60-70%）、亚油酸（10-15%）、棕榈酸（10-15%)',
      temperature: '60-80℃',
      growthCycle: '4-6年',
      climate: '亚热带、温暖地区',
      soil: '肥沃、排水良好的土壤',
      annualProduction: '全球年产量超过500万吨',
      yield: '16-22%',
      applications: ['食用油', '美容护肤', '保健品'],
      market: '高端食用油、美容护肤品'
    },
    en: {
      title: 'Avocado (Avocado Oil) Solutions',
      name: 'Avocado',
      oilName: 'Avocado Oil',
      emoji: '🥑',
      oilContent: '15-25%',
      protein: '2-3%',
      fattyAcids: 'Oleic acid (60-70%), Linoleic acid (10-15%), Palmitic acid (10-15%)',
      temperature: '60-80℃',
      growthCycle: '4-6 years',
      climate: 'Subtropical, warm areas',
      soil: 'Fertile, well-drained soil',
      annualProduction: 'Global annual production exceeds 5 million tons',
      yield: '16-22%',
      applications: ['Edible Oil', 'Beauty and Skincare', 'Health Products'],
      market: 'Premium edible oil, beauty and skincare products'
    }
  },
  {
    id: 'grape-seed',
    zh: {
      title: '葡萄籽（葡萄籽油）解决方案',
      name: '葡萄籽',
      oilName: '葡萄籽油',
      emoji: '🍇',
      oilContent: '12-18%',
      protein: '10-15%',
      fattyAcids: '亚油酸（65-75%）、油酸（15-20%）、亚麻酸（5-8%)',
      temperature: '60-80℃',
      growthCycle: '2-3年',
      climate: '温带、温暖地区',
      soil: '肥沃、排水良好的土壤',
      annualProduction: '全球年产量超过100万吨',
      yield: '13-16%',
      applications: ['食用油', '美容护肤', '保健品'],
      market: '高端食用油、抗氧化产品'
    },
    en: {
      title: 'Grape Seeds (Grape Seed Oil) Solutions',
      name: 'Grape Seeds',
      oilName: 'Grape Seed Oil',
      emoji: '🍇',
      oilContent: '12-18%',
      protein: '10-15%',
      fattyAcids: 'Linoleic acid (65-75%), Oleic acid (15-20%), Linolenic acid (5-8%)',
      temperature: '60-80℃',
      growthCycle: '2-3 years',
      climate: 'Temperate, warm areas',
      soil: 'Fertile, well-drained soil',
      annualProduction: 'Global annual production exceeds 1 million tons',
      yield: '13-16%',
      applications: ['Edible Oil', 'Beauty and Skincare', 'Health Products'],
      market: 'Premium edible oil, antioxidant products'
    }
  },
  {
    id: 'pumpkin-seed',
    zh: {
      title: '南瓜籽（南瓜籽油）解决方案',
      name: '南瓜籽',
      oilName: '南瓜籽油',
      emoji: '🎃',
      oilContent: '35-45%',
      protein: '25-30%',
      fattyAcids: '亚油酸（45-55%）、油酸（25-35%）、棕榈酸（10-15%)',
      temperature: '60-80℃',
      growthCycle: '90-120天',
      climate: '温带、温暖地区',
      soil: '肥沃、排水良好的土壤',
      annualProduction: '全球年产量超过100万吨',
      yield: '36-42%',
      applications: ['食用油', '保健品', '美容护肤'],
      market: '高端食用油、营养保健品'
    },
    en: {
      title: 'Pumpkin Seeds (Pumpkin Seed Oil) Solutions',
      name: 'Pumpkin Seeds',
      oilName: 'Pumpkin Seed Oil',
      emoji: '🎃',
      oilContent: '35-45%',
      protein: '25-30%',
      fattyAcids: 'Linoleic acid (45-55%), Oleic acid (25-35%), Palmitic acid (10-15%)',
      temperature: '60-80℃',
      growthCycle: '90-120 days',
      climate: 'Temperate, warm areas',
      soil: 'Fertile, well-drained soil',
      annualProduction: 'Global annual production exceeds 1 million tons',
      yield: '36-42%',
      applications: ['Edible Oil', 'Health Products', 'Beauty and Skincare'],
      market: 'Premium edible oil, nutritional health products'
    }
  },
  {
    id: 'watermelon-seed',
    zh: {
      title: '西瓜籽（西瓜籽油）解决方案',
      name: '西瓜籽',
      oilName: '西瓜籽油',
      emoji: '🍉',
      oilContent: '40-50%',
      protein: '25-30%',
      fattyAcids: '亚油酸（50-60%）、油酸（20-30%）、棕榈酸（8-12%)',
      temperature: '60-80℃',
      growthCycle: '80-100天',
      climate: '温暖、干燥地区',
      soil: '沙质、肥沃的土壤',
      annualProduction: '全球年产量超过50万吨',
      yield: '42-48%',
      applications: ['食用油', '保健品', '工业用油'],
      market: '特色食用油、营养保健品'
    },
    en: {
      title: 'Watermelon Seeds (Watermelon Seed Oil) Solutions',
      name: 'Watermelon Seeds',
      oilName: 'Watermelon Seed Oil',
      emoji: '🍉',
      oilContent: '40-50%',
      protein: '25-30%',
      fattyAcids: 'Linoleic acid (50-60%), Oleic acid (20-30%), Palmitic acid (8-12%)',
      temperature: '60-80℃',
      growthCycle: '80-100 days',
      climate: 'Warm, dry areas',
      soil: 'Sandy, fertile soil',
      annualProduction: 'Global annual production exceeds 500,000 tons',
      yield: '42-48%',
      applications: ['Edible Oil', 'Health Products', 'Industrial Oil'],
      market: 'Specialty edible oil, nutritional health products'
    }
  },
  {
    id: 'peach-kernel',
    zh: {
      title: '桃核仁（核仁油）解决方案',
      name: '桃核仁',
      oilName: '核仁油',
      emoji: '🍑',
      oilContent: '40-50%',
      protein: '20-25%',
      fattyAcids: '油酸（60-70%）、亚油酸（20-30%）、棕榈酸（4-6%)',
      temperature: '60-80℃',
      growthCycle: '3-4年',
      climate: '温带、温暖地区',
      soil: '肥沃、排水良好的土壤',
      annualProduction: '全球年产量超过10万吨',
      yield: '42-48%',
      applications: ['食用油', '美容护肤', '保健品'],
      market: '高端食用油、美容护肤品'
    },
    en: {
      title: 'Peach Kernel (Kernel Oil) Solutions',
      name: 'Peach Kernel',
      oilName: 'Kernel Oil',
      emoji: '🍑',
      oilContent: '40-50%',
      protein: '20-25%',
      fattyAcids: 'Oleic acid (60-70%), Linoleic acid (20-30%), Palmitic acid (4-6%)',
      temperature: '60-80℃',
      growthCycle: '3-4 years',
      climate: 'Temperate, warm areas',
      soil: 'Fertile, well-drained soil',
      annualProduction: 'Global annual production exceeds 100,000 tons',
      yield: '42-48%',
      applications: ['Edible Oil', 'Beauty and Skincare', 'Health Products'],
      market: 'Premium edible oil, beauty and skincare products'
    }
  },
  {
    id: 'apricot-kernel',
    zh: {
      title: '杏核仁（核仁油）解决方案',
      name: '杏核仁',
      oilName: '核仁油',
      emoji: '🌰',
      oilContent: '40-50%',
      protein: '20-25%',
      fattyAcids: '油酸（60-70%）、亚油酸（20-30%）、棕榈酸（4-6%)',
      temperature: '60-80℃',
      growthCycle: '3-4年',
      climate: '温带、山区地区',
      soil: '肥沃、钙质土壤',
      annualProduction: '全球年产量超过5万吨',
      yield: '42-48%',
      applications: ['食用油', '美容护肤', '保健品'],
      market: '高端食用油、美容护肤品'
    },
    en: {
      title: 'Apricot Kernel (Kernel Oil) Solutions',
      name: 'Apricot Kernel',
      oilName: 'Kernel Oil',
      emoji: '🌰',
      oilContent: '40-50%',
      protein: '20-25%',
      fattyAcids: 'Oleic acid (60-70%), Linoleic acid (20-30%), Palmitic acid (4-6%)',
      temperature: '60-80℃',
      growthCycle: '3-4 years',
      climate: 'Temperate, mountainous areas',
      soil: 'Fertile, calcareous soil',
      annualProduction: 'Global annual production exceeds 50,000 tons',
      yield: '42-48%',
      applications: ['Edible Oil', 'Beauty and Skincare', 'Health Products'],
      market: 'Premium edible oil, beauty and skincare products'
    }
  },
  {
    id: 'pistachio',
    zh: {
      title: '开心果（开心果油）解决方案',
      name: '开心果',
      oilName: '开心果油',
      emoji: '🥜',
      oilContent: '45-55%',
      protein: '18-22%',
      fattyAcids: '油酸（55-65%）、亚油酸（25-35%）、棕榈酸（8-10%)',
      temperature: '60-80℃',
      growthCycle: '5-7年',
      climate: '温暖、干燥地区',
      soil: '肥沃、排水良好的土壤',
      annualProduction: '全球年产量超过100万吨',
      yield: '46-52%',
      applications: ['食用油', '保健品', '美容护肤'],
      market: '高端食用油、营养保健品'
    },
    en: {
      title: 'Pistachio (Pistachio Oil) Solutions',
      name: 'Pistachio',
      oilName: 'Pistachio Oil',
      emoji: '🥜',
      oilContent: '45-55%',
      protein: '18-22%',
      fattyAcids: 'Oleic acid (55-65%), Linoleic acid (25-35%), Palmitic acid (8-10%)',
      temperature: '60-80℃',
      growthCycle: '5-7 years',
      climate: 'Warm, dry areas',
      soil: 'Fertile, well-drained soil',
      annualProduction: 'Global annual production exceeds 1 million tons',
      yield: '46-52%',
      applications: ['Edible Oil', 'Health Products', 'Beauty and Skincare'],
      market: 'Premium edible oil, nutritional health products'
    }
  },
  {
    id: 'rice-bran',
    zh: {
      title: '米糠（米糠油）解决方案',
      name: '米糠',
      oilName: '米糠油',
      emoji: '🍚',
      oilContent: '15-25%',
      protein: '12-15%',
      fattyAcids: '油酸（40-50%）、亚油酸（30-40%）、棕榈酸（15-20%)',
      temperature: '60-80℃',
      growthCycle: '稻米加工副产品',
      climate: '水稻种植地区',
      soil: '稻米种植土壤',
      annualProduction: '全球年产量超过200万吨',
      yield: '16-22%',
      applications: ['食用油', '保健品', '工业用油'],
      market: '高端食用油、抗氧化产品'
    },
    en: {
      title: 'Rice Bran (Rice Bran Oil) Solutions',
      name: 'Rice Bran',
      oilName: 'Rice Bran Oil',
      emoji: '🍚',
      oilContent: '15-25%',
      protein: '12-15%',
      fattyAcids: 'Oleic acid (40-50%), Linoleic acid (30-40%), Palmitic acid (15-20%)',
      temperature: '60-80℃',
      growthCycle: 'Rice processing by-product',
      climate: 'Rice planting areas',
      soil: 'Rice planting soil',
      annualProduction: 'Global annual production exceeds 2 million tons',
      yield: '16-22%',
      applications: ['Edible Oil', 'Health Products', 'Industrial Oil'],
      market: 'Premium edible oil, antioxidant products'
    }
  },
  {
    id: 'corn-germ',
    zh: {
      title: '玉米胚芽（玉米油）解决方案',
      name: '玉米胚芽',
      oilName: '玉米油',
      emoji: '🌽',
      oilContent: '35-45%',
      protein: '15-20%',
      fattyAcids: '亚油酸（50-60%）、油酸（25-35%）、棕榈酸（10-15%)',
      temperature: '60-80℃',
      growthCycle: '玉米加工副产品',
      climate: '玉米种植地区',
      soil: '玉米种植土壤',
      annualProduction: '全球年产量超过150万吨',
      yield: '36-42%',
      applications: ['食用油', '保健品', '工业用油'],
      market: '高端食用油、营养保健品'
    },
    en: {
      title: 'Corn Germ (Corn Oil) Solutions',
      name: 'Corn Germ',
      oilName: 'Corn Oil',
      emoji: '🌽',
      oilContent: '35-45%',
      protein: '15-20%',
      fattyAcids: 'Linoleic acid (50-60%), Oleic acid (25-35%), Palmitic acid (10-15%)',
      temperature: '60-80℃',
      growthCycle: 'Corn processing by-product',
      climate: 'Corn planting areas',
      soil: 'Corn planting soil',
      annualProduction: 'Global annual production exceeds 1.5 million tons',
      yield: '36-42%',
      applications: ['Edible Oil', 'Health Products', 'Industrial Oil'],
      market: 'Premium edible oil, nutritional health products'
    }
  },
  {
    id: 'castor-seed',
    zh: {
      title: '蓖麻籽（蓖麻油）解决方案',
      name: '蓖麻籽',
      oilName: '蓖麻油',
      emoji: '🌿',
      oilContent: '45-55%',
      protein: '18-22%',
      fattyAcids: '蓖麻油酸（85-90%）、亚油酸（3-5%）、油酸（2-4%)',
      temperature: '60-80℃',
      growthCycle: '150-180天',
      climate: '热带、亚热带地区',
      soil: '肥沃、排水良好的土壤',
      annualProduction: '全球年产量超过100万吨',
      yield: '46-52%',
      applications: ['工业用油', '生物柴油', '化工原料'],
      market: '工业润滑油、生物燃料'
    },
    en: {
      title: 'Castor Seeds (Castor Oil) Solutions',
      name: 'Castor Seeds',
      oilName: 'Castor Oil',
      emoji: '🌿',
      oilContent: '45-55%',
      protein: '18-22%',
      fattyAcids: 'Ricinoleic acid (85-90%), Linoleic acid (3-5%), Oleic acid (2-4%)',
      temperature: '60-80℃',
      growthCycle: '150-180 days',
      climate: 'Tropical, subtropical areas',
      soil: 'Fertile, well-drained soil',
      annualProduction: 'Global annual production exceeds 1 million tons',
      yield: '46-52%',
      applications: ['Industrial Oil', 'Biodiesel', 'Chemical Raw Materials'],
      market: 'Industrial lubricants, biofuels'
    }
  },
  {
    id: 'chili-seed',
    zh: {
      title: '辣椒籽（辣椒籽油）解决方案',
      name: '辣椒籽',
      oilName: '辣椒籽油',
      emoji: '🌶️',
      oilContent: '15-25%',
      protein: '15-20%',
      fattyAcids: '亚油酸（70-80%）、油酸（10-15%）、棕榈酸（5-8%)',
      temperature: '60-80℃',
      growthCycle: '120-150天',
      climate: '温暖、湿润地区',
      soil: '肥沃、排水良好的土壤',
      annualProduction: '全球年产量超过20万吨',
      yield: '16-22%',
      applications: ['食用油', '保健品', '调味油'],
      market: '特色食用油、功能性食品'
    },
    en: {
      title: 'Chili Seeds (Chili Seed Oil) Solutions',
      name: 'Chili Seeds',
      oilName: 'Chili Seed Oil',
      emoji: '🌶️',
      oilContent: '15-25%',
      protein: '15-20%',
      fattyAcids: 'Linoleic acid (70-80%), Oleic acid (10-15%), Palmitic acid (5-8%)',
      temperature: '60-80℃',
      growthCycle: '120-150 days',
      climate: 'Warm, humid areas',
      soil: 'Fertile, well-drained soil',
      annualProduction: 'Global annual production exceeds 200,000 tons',
      yield: '16-22%',
      applications: ['Edible Oil', 'Health Products', 'Seasoning Oil'],
      market: 'Specialty edible oil, functional foods'
    }
  },
  {
    id: 'buckwheat',
    zh: {
      title: '荞麦籽（荞麦油）解决方案',
      name: '荞麦籽',
      oilName: '荞麦油',
      emoji: '🌾',
      oilContent: '25-35%',
      protein: '10-15%',
      fattyAcids: '亚油酸（35-45%）、油酸（25-35%）、亚麻酸（15-25%)',
      temperature: '60-80℃',
      growthCycle: '80-100天',
      climate: '凉爽、高原地区',
      soil: '贫瘠、排水良好的土壤',
      annualProduction: '全球年产量超过50万吨',
      yield: '26-32%',
      applications: ['食用油', '保健品', '美容护肤'],
      market: '高端食用油、营养保健品'
    },
    en: {
      title: 'Buckwheat Seeds (Buckwheat Oil) Solutions',
      name: 'Buckwheat Seeds',
      oilName: 'Buckwheat Oil',
      emoji: '🌾',
      oilContent: '25-35%',
      protein: '10-15%',
      fattyAcids: 'Linoleic acid (35-45%), Oleic acid (25-35%), Linolenic acid (15-25%)',
      temperature: '60-80℃',
      growthCycle: '80-100 days',
      climate: 'Cool, plateau areas',
      soil: 'Poor, well-drained soil',
      annualProduction: 'Global annual production exceeds 500,000 tons',
      yield: '26-32%',
      applications: ['Edible Oil', 'Health Products', 'Beauty and Skincare'],
      market: 'Premium edible oil, nutritional health products'
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
    id: 'almond',
    zh: {
      title: '杏仁（杏仁油）解决方案',
      name: '杏仁',
      oilName: '杏仁油',
      emoji: '🌰',
      oilContent: '45-55%',
      protein: '20-25%',
      fattyAcids: '油酸（60-70%）、亚油酸（20-30%）、棕榈酸（4-6%)',
      temperature: '60-80℃',
      growthCycle: '3-4年',
      climate: '温暖、干燥地区',
      soil: '肥沃、钙质土壤',
      annualProduction: '全球年产量超过100万吨',
      yield: '46-52%',
      applications: ['食用油', '美容护肤', '保健品'],
      market: '高端食用油、美容护肤品'
    },
    en: {
      title: 'Almond (Almond Oil) Solutions',
      name: 'Almond',
      oilName: 'Almond Oil',
      emoji: '🌰',
      oilContent: '45-55%',
      protein: '20-25%',
      fattyAcids: 'Oleic acid (60-70%), Linoleic acid (20-30%), Palmitic acid (4-6%)',
      temperature: '60-80℃',
      growthCycle: '3-4 years',
      climate: 'Warm, dry areas',
      soil: 'Fertile, calcareous soil',
      annualProduction: 'Global annual production exceeds 1 million tons',
      yield: '46-52%',
      applications: ['Edible Oil', 'Beauty and Skincare', 'Health Products'],
      market: 'Premium edible oil, beauty and skincare products'
    }
  },
  {
    id: 'hazelnut',
    zh: {
      title: '榛子（榛子油）解决方案',
      name: '榛子',
      oilName: '榛子油',
      emoji: '🌰',
      oilContent: '55-65%',
      protein: '15-20%',
      fattyAcids: '油酸（75-85%）、亚油酸（10-15%）、棕榈酸（3-5%)',
      temperature: '60-80℃',
      growthCycle: '4-6年',
      climate: '温带、湿润地区',
      soil: '肥沃、排水良好的土壤',
      annualProduction: '全球年产量超过80万吨',
      yield: '56-62%',
      applications: ['食用油', '保健品', '美容护肤'],
      market: '高端食用油、营养保健品'
    },
    en: {
      title: 'Hazelnut (Hazelnut Oil) Solutions',
      name: 'Hazelnut',
      oilName: 'Hazelnut Oil',
      emoji: '🌰',
      oilContent: '55-65%',
      protein: '15-20%',
      fattyAcids: 'Oleic acid (75-85%), Linoleic acid (10-15%), Palmitic acid (3-5%)',
      temperature: '60-80℃',
      growthCycle: '4-6 years',
      climate: 'Temperate, humid areas',
      soil: 'Fertile, well-drained soil',
      annualProduction: 'Global annual production exceeds 800,000 tons',
      yield: '56-62%',
      applications: ['Edible Oil', 'Health Products', 'Beauty and Skincare'],
      market: 'Premium edible oil, nutritional health products'
    }
  },
  {
    id: 'cashew',
    zh: {
      title: '腰果（腰果油）解决方案',
      name: '腰果',
      oilName: '腰果油',
      emoji: '🥜',
      oilContent: '40-50%',
      protein: '18-22%',
      fattyAcids: '油酸（60-70%）、亚油酸（15-20%）、棕榈酸（8-10%)',
      temperature: '60-80℃',
      growthCycle: '2-3年',
      climate: '热带、沿海地区',
      soil: '沙质、排水良好的土壤',
      annualProduction: '全球年产量超过400万吨',
      yield: '42-48%',
      applications: ['食用油', '工业用油', '美容护肤'],
      market: '高端食用油、工业润滑油'
    },
    en: {
      title: 'Cashew (Cashew Oil) Solutions',
      name: 'Cashew',
      oilName: 'Cashew Oil',
      emoji: '🥜',
      oilContent: '40-50%',
      protein: '18-22%',
      fattyAcids: 'Oleic acid (60-70%), Linoleic acid (15-20%), Palmitic acid (8-10%)',
      temperature: '60-80℃',
      growthCycle: '2-3 years',
      climate: 'Tropical, coastal areas',
      soil: 'Sandy, well-drained soil',
      annualProduction: 'Global annual production exceeds 4 million tons',
      yield: '42-48%',
      applications: ['Edible Oil', 'Industrial Oil', 'Beauty and Skincare'],
      market: 'Premium edible oil, industrial lubricants'
    }
  },
  {
    id: 'avocado',
    zh: {
      title: '鳄梨（牛油果油）解决方案',
      name: '鳄梨',
      oilName: '牛油果油',
      emoji: '🥑',
      oilContent: '15-25%',
      protein: '2-3%',
      fattyAcids: '油酸（60-70%）、亚油酸（10-15%）、棕榈酸（10-15%)',
      temperature: '60-80℃',
      growthCycle: '4-6年',
      climate: '亚热带、温暖地区',
      soil: '肥沃、排水良好的土壤',
      annualProduction: '全球年产量超过500万吨',
      yield: '16-22%',
      applications: ['食用油', '美容护肤', '保健品'],
      market: '高端食用油、美容护肤品'
    },
    en: {
      title: 'Avocado (Avocado Oil) Solutions',
      name: 'Avocado',
      oilName: 'Avocado Oil',
      emoji: '🥑',
      oilContent: '15-25%',
      protein: '2-3%',
      fattyAcids: 'Oleic acid (60-70%), Linoleic acid (10-15%), Palmitic acid (10-15%)',
      temperature: '60-80℃',
      growthCycle: '4-6 years',
      climate: 'Subtropical, warm areas',
      soil: 'Fertile, well-drained soil',
      annualProduction: 'Global annual production exceeds 5 million tons',
      yield: '16-22%',
      applications: ['Edible Oil', 'Beauty and Skincare', 'Health Products'],
      market: 'Premium edible oil, beauty and skincare products'
    }
  },
  {
    id: 'grape-seed',
    zh: {
      title: '葡萄籽（葡萄籽油）解决方案',
      name: '葡萄籽',
      oilName: '葡萄籽油',
      emoji: '🍇',
      oilContent: '12-18%',
      protein: '10-15%',
      fattyAcids: '亚油酸（65-75%）、油酸（15-20%）、亚麻酸（5-8%)',
      temperature: '60-80℃',
      growthCycle: '2-3年',
      climate: '温带、温暖地区',
      soil: '肥沃、排水良好的土壤',
      annualProduction: '全球年产量超过100万吨',
      yield: '13-16%',
      applications: ['食用油', '美容护肤', '保健品'],
      market: '高端食用油、抗氧化产品'
    },
    en: {
      title: 'Grape Seeds (Grape Seed Oil) Solutions',
      name: 'Grape Seeds',
      oilName: 'Grape Seed Oil',
      emoji: '🍇',
      oilContent: '12-18%',
      protein: '10-15%',
      fattyAcids: 'Linoleic acid (65-75%), Oleic acid (15-20%), Linolenic acid (5-8%)',
      temperature: '60-80℃',
      growthCycle: '2-3 years',
      climate: 'Temperate, warm areas',
      soil: 'Fertile, well-drained soil',
      annualProduction: 'Global annual production exceeds 1 million tons',
      yield: '13-16%',
      applications: ['Edible Oil', 'Beauty and Skincare', 'Health Products'],
      market: 'Premium edible oil, antioxidant products'
    }
  },
  {
    id: 'pumpkin-seed',
    zh: {
      title: '南瓜籽（南瓜籽油）解决方案',
      name: '南瓜籽',
      oilName: '南瓜籽油',
      emoji: '🎃',
      oilContent: '35-45%',
      protein: '25-30%',
      fattyAcids: '亚油酸（45-55%）、油酸（25-35%）、棕榈酸（10-15%)',
      temperature: '60-80℃',
      growthCycle: '90-120天',
      climate: '温带、温暖地区',
      soil: '肥沃、排水良好的土壤',
      annualProduction: '全球年产量超过100万吨',
      yield: '36-42%',
      applications: ['食用油', '保健品', '美容护肤'],
      market: '高端食用油、营养保健品'
    },
    en: {
      title: 'Pumpkin Seeds (Pumpkin Seed Oil) Solutions',
      name: 'Pumpkin Seeds',
      oilName: 'Pumpkin Seed Oil',
      emoji: '🎃',
      oilContent: '35-45%',
      protein: '25-30%',
      fattyAcids: 'Linoleic acid (45-55%), Oleic acid (25-35%), Palmitic acid (10-15%)',
      temperature: '60-80℃',
      growthCycle: '90-120 days',
      climate: 'Temperate, warm areas',
      soil: 'Fertile, well-drained soil',
      annualProduction: 'Global annual production exceeds 1 million tons',
      yield: '36-42%',
      applications: ['Edible Oil', 'Health Products', 'Beauty and Skincare'],
      market: 'Premium edible oil, nutritional health products'
    }
  },
  {
    id: 'watermelon-seed',
    zh: {
      title: '西瓜籽（西瓜籽油）解决方案',
      name: '西瓜籽',
      oilName: '西瓜籽油',
      emoji: '🍉',
      oilContent: '40-50%',
      protein: '25-30%',
      fattyAcids: '亚油酸（50-60%）、油酸（20-30%）、棕榈酸（8-12%)',
      temperature: '60-80℃',
      growthCycle: '80-100天',
      climate: '温暖、干燥地区',
      soil: '沙质、肥沃的土壤',
      annualProduction: '全球年产量超过50万吨',
      yield: '42-48%',
      applications: ['食用油', '保健品', '工业用油'],
      market: '特色食用油、营养保健品'
    },
    en: {
      title: 'Watermelon Seeds (Watermelon Seed Oil) Solutions',
      name: 'Watermelon Seeds',
      oilName: 'Watermelon Seed Oil',
      emoji: '🍉',
      oilContent: '40-50%',
      protein: '25-30%',
      fattyAcids: 'Linoleic acid (50-60%), Oleic acid (20-30%), Palmitic acid (8-12%)',
      temperature: '60-80℃',
      growthCycle: '80-100 days',
      climate: 'Warm, dry areas',
      soil: 'Sandy, fertile soil',
      annualProduction: 'Global annual production exceeds 500,000 tons',
      yield: '42-48%',
      applications: ['Edible Oil', 'Health Products', 'Industrial Oil'],
      market: 'Specialty edible oil, nutritional health products'
    }
  },
  {
    id: 'peach-kernel',
    zh: {
      title: '桃核仁（核仁油）解决方案',
      name: '桃核仁',
      oilName: '核仁油',
      emoji: '🍑',
      oilContent: '40-50%',
      protein: '20-25%',
      fattyAcids: '油酸（60-70%）、亚油酸（20-30%）、棕榈酸（4-6%)',
      temperature: '60-80℃',
      growthCycle: '3-4年',
      climate: '温带、温暖地区',
      soil: '肥沃、排水良好的土壤',
      annualProduction: '全球年产量超过10万吨',
      yield: '42-48%',
      applications: ['食用油', '美容护肤', '保健品'],
      market: '高端食用油、美容护肤品'
    },
    en: {
      title: 'Peach Kernel (Kernel Oil) Solutions',
      name: 'Peach Kernel',
      oilName: 'Kernel Oil',
      emoji: '🍑',
      oilContent: '40-50%',
      protein: '20-25%',
      fattyAcids: 'Oleic acid (60-70%), Linoleic acid (20-30%), Palmitic acid (4-6%)',
      temperature: '60-80℃',
      growthCycle: '3-4 years',
      climate: 'Temperate, warm areas',
      soil: 'Fertile, well-drained soil',
      annualProduction: 'Global annual production exceeds 100,000 tons',
      yield: '42-48%',
      applications: ['Edible Oil', 'Beauty and Skincare', 'Health Products'],
      market: 'Premium edible oil, beauty and skincare products'
    }
  },
  {
    id: 'apricot-kernel',
    zh: {
      title: '杏核仁（核仁油）解决方案',
      name: '杏核仁',
      oilName: '核仁油',
      emoji: '🌰',
      oilContent: '40-50%',
      protein: '20-25%',
      fattyAcids: '油酸（60-70%）、亚油酸（20-30%）、棕榈酸（4-6%)',
      temperature: '60-80℃',
      growthCycle: '3-4年',
      climate: '温带、山区地区',
      soil: '肥沃、钙质土壤',
      annualProduction: '全球年产量超过5万吨',
      yield: '42-48%',
      applications: ['食用油', '美容护肤', '保健品'],
      market: '高端食用油、美容护肤品'
    },
    en: {
      title: 'Apricot Kernel (Kernel Oil) Solutions',
      name: 'Apricot Kernel',
      oilName: 'Kernel Oil',
      emoji: '🌰',
      oilContent: '40-50%',
      protein: '20-25%',
      fattyAcids: 'Oleic acid (60-70%), Linoleic acid (20-30%), Palmitic acid (4-6%)',
      temperature: '60-80℃',
      growthCycle: '3-4 years',
      climate: 'Temperate, mountainous areas',
      soil: 'Fertile, calcareous soil',
      annualProduction: 'Global annual production exceeds 50,000 tons',
      yield: '42-48%',
      applications: ['Edible Oil', 'Beauty and Skincare', 'Health Products'],
      market: 'Premium edible oil, beauty and skincare products'
    }
  },
  {
    id: 'pistachio',
    zh: {
      title: '开心果（开心果油）解决方案',
      name: '开心果',
      oilName: '开心果油',
      emoji: '🥜',
      oilContent: '45-55%',
      protein: '18-22%',
      fattyAcids: '油酸（55-65%）、亚油酸（25-35%）、棕榈酸（8-10%)',
      temperature: '60-80℃',
      growthCycle: '5-7年',
      climate: '温暖、干燥地区',
      soil: '肥沃、排水良好的土壤',
      annualProduction: '全球年产量超过100万吨',
      yield: '46-52%',
      applications: ['食用油', '保健品', '美容护肤'],
      market: '高端食用油、营养保健品'
    },
    en: {
      title: 'Pistachio (Pistachio Oil) Solutions',
      name: 'Pistachio',
      oilName: 'Pistachio Oil',
      emoji: '🥜',
      oilContent: '45-55%',
      protein: '18-22%',
      fattyAcids: 'Oleic acid (55-65%), Linoleic acid (25-35%), Palmitic acid (8-10%)',
      temperature: '60-80℃',
      growthCycle: '5-7 years',
      climate: 'Warm, dry areas',
      soil: 'Fertile, well-drained soil',
      annualProduction: 'Global annual production exceeds 1 million tons',
      yield: '46-52%',
      applications: ['Edible Oil', 'Health Products', 'Beauty and Skincare'],
      market: 'Premium edible oil, nutritional health products'
    }
  },
  {
    id: 'rice-bran',
    zh: {
      title: '米糠（米糠油）解决方案',
      name: '米糠',
      oilName: '米糠油',
      emoji: '🍚',
      oilContent: '15-25%',
      protein: '12-15%',
      fattyAcids: '油酸（40-50%）、亚油酸（30-40%）、棕榈酸（15-20%)',
      temperature: '60-80℃',
      growthCycle: '稻米加工副产品',
      climate: '水稻种植地区',
      soil: '稻米种植土壤',
      annualProduction: '全球年产量超过200万吨',
      yield: '16-22%',
      applications: ['食用油', '保健品', '工业用油'],
      market: '高端食用油、抗氧化产品'
    },
    en: {
      title: 'Rice Bran (Rice Bran Oil) Solutions',
      name: 'Rice Bran',
      oilName: 'Rice Bran Oil',
      emoji: '🍚',
      oilContent: '15-25%',
      protein: '12-15%',
      fattyAcids: 'Oleic acid (40-50%), Linoleic acid (30-40%), Palmitic acid (15-20%)',
      temperature: '60-80℃',
      growthCycle: 'Rice processing by-product',
      climate: 'Rice planting areas',
      soil: 'Rice planting soil',
      annualProduction: 'Global annual production exceeds 2 million tons',
      yield: '16-22%',
      applications: ['Edible Oil', 'Health Products', 'Industrial Oil'],
      market: 'Premium edible oil, antioxidant products'
    }
  },
  {
    id: 'corn-germ',
    zh: {
      title: '玉米胚芽（玉米油）解决方案',
      name: '玉米胚芽',
      oilName: '玉米油',
      emoji: '🌽',
      oilContent: '35-45%',
      protein: '15-20%',
      fattyAcids: '亚油酸（50-60%）、油酸（25-35%）、棕榈酸（10-15%)',
      temperature: '60-80℃',
      growthCycle: '玉米加工副产品',
      climate: '玉米种植地区',
      soil: '玉米种植土壤',
      annualProduction: '全球年产量超过150万吨',
      yield: '36-42%',
      applications: ['食用油', '保健品', '工业用油'],
      market: '高端食用油、营养保健品'
    },
    en: {
      title: 'Corn Germ (Corn Oil) Solutions',
      name: 'Corn Germ',
      oilName: 'Corn Oil',
      emoji: '🌽',
      oilContent: '35-45%',
      protein: '15-20%',
      fattyAcids: 'Linoleic acid (50-60%), Oleic acid (25-35%), Palmitic acid (10-15%)',
      temperature: '60-80℃',
      growthCycle: 'Corn processing by-product',
      climate: 'Corn planting areas',
      soil: 'Corn planting soil',
      annualProduction: 'Global annual production exceeds 1.5 million tons',
      yield: '36-42%',
      applications: ['Edible Oil', 'Health Products', 'Industrial Oil'],
      market: 'Premium edible oil, nutritional health products'
    }
  },
  {
    id: 'castor-seed',
    zh: {
      title: '蓖麻籽（蓖麻油）解决方案',
      name: '蓖麻籽',
      oilName: '蓖麻油',
      emoji: '🌿',
      oilContent: '45-55%',
      protein: '18-22%',
      fattyAcids: '蓖麻油酸（85-90%）、亚油酸（3-5%）、油酸（2-4%)',
      temperature: '60-80℃',
      growthCycle: '150-180天',
      climate: '热带、亚热带地区',
      soil: '肥沃、排水良好的土壤',
      annualProduction: '全球年产量超过100万吨',
      yield: '46-52%',
      applications: ['工业用油', '生物柴油', '化工原料'],
      market: '工业润滑油、生物燃料'
    },
    en: {
      title: 'Castor Seeds (Castor Oil) Solutions',
      name: 'Castor Seeds',
      oilName: 'Castor Oil',
      emoji: '🌿',
      oilContent: '45-55%',
      protein: '18-22%',
      fattyAcids: 'Ricinoleic acid (85-90%), Linoleic acid (3-5%), Oleic acid (2-4%)',
      temperature: '60-80℃',
      growthCycle: '150-180 days',
      climate: 'Tropical, subtropical areas',
      soil: 'Fertile, well-drained soil',
      annualProduction: 'Global annual production exceeds 1 million tons',
      yield: '46-52%',
      applications: ['Industrial Oil', 'Biodiesel', 'Chemical Raw Materials'],
      market: 'Industrial lubricants, biofuels'
    }
  },
  {
    id: 'chili-seed',
    zh: {
      title: '辣椒籽（辣椒籽油）解决方案',
      name: '辣椒籽',
      oilName: '辣椒籽油',
      emoji: '🌶️',
      oilContent: '15-25%',
      protein: '15-20%',
      fattyAcids: '亚油酸（70-80%）、油酸（10-15%）、棕榈酸（5-8%)',
      temperature: '60-80℃',
      growthCycle: '120-150天',
      climate: '温暖、湿润地区',
      soil: '肥沃、排水良好的土壤',
      annualProduction: '全球年产量超过20万吨',
      yield: '16-22%',
      applications: ['食用油', '保健品', '调味油'],
      market: '特色食用油、功能性食品'
    },
    en: {
      title: 'Chili Seeds (Chili Seed Oil) Solutions',
      name: 'Chili Seeds',
      oilName: 'Chili Seed Oil',
      emoji: '🌶️',
      oilContent: '15-25%',
      protein: '15-20%',
      fattyAcids: 'Linoleic acid (70-80%), Oleic acid (10-15%), Palmitic acid (5-8%)',
      temperature: '60-80℃',
      growthCycle: '120-150 days',
      climate: 'Warm, humid areas',
      soil: 'Fertile, well-drained soil',
      annualProduction: 'Global annual production exceeds 200,000 tons',
      yield: '16-22%',
      applications: ['Edible Oil', 'Health Products', 'Seasoning Oil'],
      market: 'Specialty edible oil, functional foods'
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
- **425/480系列压榨机**
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

${config.applications.map(app => `### ${app === '食用油' ? '🍳' : app === '保健品' ? '💊' : app === '工业用油' ? '🏭' : app === '美容护肤' ? '💄' : app === '药用' ? '💊' : app === '调味油' ? '🍳' : '🏭'} ${app}
- ${config.name}油：${app === '食用油' ? '主要食用油品种' : app === '保健品' ? '营养补充剂' : app === '工业用油' ? '基础油原料' : app === '美容护肤' ? '天然护肤油' : app === '药用' ? '传统中药' : app === '调味油' ? '特色调味品' : '化工原料'}
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
- **425/480 Series Oil Press**
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

${config.applications.map(app => `### ${app === 'Edible Oil' ? '🍳' : app === 'Health Products' ? '💊' : app === 'Industrial Oil' ? '🏭' : app === 'Beauty and Skincare' ? '💄' : app === 'Medicinal Use' ? '💊' : app === 'Seasoning Oil' ? '🍳' : '🏭'} ${app}
- ${config.name} oil: ${app === 'Edible Oil' ? 'Main edible oil variety' : app === 'Health Products' ? 'Nutritional supplements' : app === 'Industrial Oil' ? 'Base oil raw material' : app === 'Beauty and Skincare' ? 'Natural skincare oil' : app === 'Medicinal Use' ? 'Traditional Chinese medicine' : app === 'Seasoning Oil' ? 'Special seasoning' : 'Chemical raw material'}
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