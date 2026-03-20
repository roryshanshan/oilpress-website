const fs = require('fs');
const path = require('path');

const root = process.cwd();
const targets = [
  { lang: 'en', heading: '## Series Overview' },
  { lang: 'zh', heading: '## 系列概述' }
];

const blocks = {
  en: {
    '300': `## Model Positioning
- Best for: Entry-level oil mills, family workshops, pilot production.
- Process focus: Hot press for sesame, peanut, rapeseed; cold press possible with proper conditioning.
- Key strengths: Compact footprint, simple operation, lower investment.
- Upgrade path: Choose 325/355 if you need higher daily throughput or multi-barrel efficiency.

## Recommended Line Configuration
- Pre-treatment: [Oilseed pre-treatment equipment](/en/products/pre-treatment)
- Conditioning/Roasting: [Feeding crushing frying integrated machine](/en/products/feeding-crushing-frying-integrated-machine)
- Pressing: 300 Series hydraulic oil press
- Filtration: [Pneumatic filter press](/en/products/pneumatic-filter-press)
- Refining/Filling: [Edible oil refining equipment](/en/products/edible-oil-refining-equipment) / [Filling packages](/en/solutions/filling-packages)
`,
    '325': `## Model Positioning
- Best for: Small to medium mills that need higher batch efficiency.
- Process focus: Aromatic hot pressing for sesame, peanut, rapeseed, soybean.
- Key strengths: Dual-barrel options improve loading/pressing rhythm and output stability.
- Selection tip: Choose 325 when you want more throughput than 300 without expanding footprint too much.

## Recommended Line Configuration
- Pre-treatment: [Oilseed pre-treatment equipment](/en/products/pre-treatment)
- Conditioning/Roasting: [Feeding crushing frying integrated machine](/en/products/feeding-crushing-frying-integrated-machine)
- Pressing: 325 Series hydraulic oil press (single/dual barrel)
- Filtration: [Pneumatic filter press](/en/products/pneumatic-filter-press)
- Refining/Filling: [Edible oil refining equipment](/en/products/edible-oil-refining-equipment) / [Filling packages](/en/solutions/filling-packages)
`,
    '355': `## Model Positioning
- Best for: Small to medium plants looking for higher pressing force and stability.
- Process focus: Hot pressing with improved frame strength for longer cycles.
- Key strengths: Reinforced frame for higher yield stability and demanding materials.
- Selection tip: Choose 355 when you need more robustness than 325 but are not yet at large-plant scale.

## Recommended Line Configuration
- Pre-treatment: [Oilseed pre-treatment equipment](/en/products/pre-treatment)
- Conditioning/Roasting: [Feeding crushing frying integrated machine](/en/products/feeding-crushing-frying-integrated-machine)
- Pressing: 355 Series hydraulic oil press
- Filtration: [Pneumatic filter press](/en/products/pneumatic-filter-press)
- Refining/Filling: [Edible oil refining equipment](/en/products/edible-oil-refining-equipment) / [Filling packages](/en/solutions/filling-packages)
`,
    '400': `## Model Positioning
- Best for: Medium-scale production lines upgrading from small-batch capacity.
- Process focus: Hot pressing for mainstream oilseeds; cold pressing available with process control.
- Key strengths: Larger barrel options and steadier output planning.
- Selection tip: Choose 400 when you want a balanced jump in capacity without moving to heavy industrial size.

## Recommended Line Configuration
- Pre-treatment: [Oilseed pre-treatment equipment](/en/products/pre-treatment)
- Conditioning/Roasting: [Feeding crushing frying integrated machine](/en/products/feeding-crushing-frying-integrated-machine)
- Pressing: 400 Series hydraulic oil press
- Filtration: [Pneumatic filter press](/en/products/pneumatic-filter-press)
- Refining/Filling: [Edible oil refining equipment](/en/products/edible-oil-refining-equipment) / [Filling packages](/en/solutions/filling-packages)
`,
    '426': `## Model Positioning
- Best for: Medium to large plants processing higher-oil or harder materials.
- Process focus: Stable high-pressure hot pressing; cold pressing for selected materials.
- Key strengths: Higher pressure window and better adaptability to mixed raw materials.
- Selection tip: Choose 426 for stronger pressing performance with multi-seed flexibility.

## Recommended Line Configuration
- Pre-treatment: [Oilseed pre-treatment equipment](/en/products/pre-treatment)
- Conditioning/Roasting: [Feeding crushing frying integrated machine](/en/products/feeding-crushing-frying-integrated-machine)
- Pressing: 426 Series hydraulic oil press
- Filtration: [Pneumatic filter press](/en/products/pneumatic-filter-press)
- Refining/Filling: [Edible oil refining equipment](/en/products/edible-oil-refining-equipment) / [Filling packages](/en/solutions/filling-packages)
`,
    '480': `## Model Positioning
- Best for: Industrial production with continuous batch scheduling.
- Process focus: High-capacity hot pressing for commercial oil plants.
- Key strengths: Heavy-duty structure for long-run stability and higher output planning.
- Selection tip: Choose 480 when daily output targets and line efficiency are your main priority.

## Recommended Line Configuration
- Pre-treatment: [Oilseed pre-treatment equipment](/en/products/pre-treatment)
- Conditioning/Roasting: [Feeding crushing frying integrated machine](/en/products/feeding-crushing-frying-integrated-machine)
- Pressing: 480 Series hydraulic oil press
- Filtration: [Pneumatic filter press](/en/products/pneumatic-filter-press)
- Refining/Filling: [Edible oil refining equipment](/en/products/edible-oil-refining-equipment) / [Filling packages](/en/solutions/filling-packages)
`,
    '500': `## Model Positioning
- Best for: Large-scale plants aiming for maximum output and line integration.
- Process focus: High-capacity hot pressing with strong stability requirements.
- Key strengths: Maximum series capacity with robust frame for heavy-duty operation.
- Selection tip: Choose 500 for large projects that need a long-term, high-output core press.

## Recommended Line Configuration
- Pre-treatment: [Oilseed pre-treatment equipment](/en/products/pre-treatment)
- Conditioning/Roasting: [Feeding crushing frying integrated machine](/en/products/feeding-crushing-frying-integrated-machine)
- Pressing: 500 Series hydraulic oil press
- Filtration: [Pneumatic filter press](/en/products/pneumatic-filter-press)
- Refining/Filling: [Edible oil refining equipment](/en/products/edible-oil-refining-equipment) / [Filling packages](/en/solutions/filling-packages)
`
  },
  zh: {
    '300': `## 机型定位
- 适用场景：小型油坊、家庭作坊、试产项目。
- 工艺侧重：以热榨为主，冷榨可在工艺条件匹配时开展。
- 核心优势：占地小、操作简单、投入成本低。
- 选型建议：若需更高产能或多桶效率，可升级325/355系列。

## 推荐整线配置
- 预处理： [油料预处理设备](/zh/products/pre-treatment)
- 炒籽/调质： [喂料破碎炒籽一体机](/zh/products/feeding-crushing-frying-integrated-machine)
- 压榨：300系列液压榨油机
- 过滤： [气动过滤机](/zh/products/pneumatic-filter-press)
- 精炼/灌装： [食用油精炼设备](/zh/products/edible-oil-refining-equipment) / [灌装配套方案](/zh/solutions/filling-packages)
`,
    '325': `## 机型定位
- 适用场景：小中型油厂，追求更高单班效率。
- 工艺侧重：花生、芝麻、菜籽、大豆等香味型热榨。
- 核心优势：双桶可选，提高装料/压榨节奏与产出稳定性。
- 选型建议：产能比300更高且不想明显增大占地时选325。

## 推荐整线配置
- 预处理： [油料预处理设备](/zh/products/pre-treatment)
- 炒籽/调质： [喂料破碎炒籽一体机](/zh/products/feeding-crushing-frying-integrated-machine)
- 压榨：325系列液压榨油机（单桶/双桶）
- 过滤： [气动过滤机](/zh/products/pneumatic-filter-press)
- 精炼/灌装： [食用油精炼设备](/zh/products/edible-oil-refining-equipment) / [灌装配套方案](/zh/solutions/filling-packages)
`,
    '355': `## 机型定位
- 适用场景：小中型油厂，要求更高压榨力与稳定性。
- 工艺侧重：以热榨为主，适配更复杂原料与长周期运行。
- 核心优势：加强型机架结构，承压能力与稳定性更高。
- 选型建议：比325更重载，但尚未达到大型工厂规模时选355。

## 推荐整线配置
- 预处理： [油料预处理设备](/zh/products/pre-treatment)
- 炒籽/调质： [喂料破碎炒籽一体机](/zh/products/feeding-crushing-frying-integrated-machine)
- 压榨：355系列液压榨油机
- 过滤： [气动过滤机](/zh/products/pneumatic-filter-press)
- 精炼/灌装： [食用油精炼设备](/zh/products/edible-oil-refining-equipment) / [灌装配套方案](/zh/solutions/filling-packages)
`,
    '400': `## 机型定位
- 适用场景：中型产线升级，追求更高产能与稳定输出。
- 工艺侧重：主打热榨，冷榨可在工艺条件匹配时配置。
- 核心优势：桶径可选范围更大，产能规划更灵活。
- 选型建议：想在占地与产能之间取得平衡时选400。

## 推荐整线配置
- 预处理： [油料预处理设备](/zh/products/pre-treatment)
- 炒籽/调质： [喂料破碎炒籽一体机](/zh/products/feeding-crushing-frying-integrated-machine)
- 压榨：400系列液压榨油机
- 过滤： [气动过滤机](/zh/products/pneumatic-filter-press)
- 精炼/灌装： [食用油精炼设备](/zh/products/edible-oil-refining-equipment) / [灌装配套方案](/zh/solutions/filling-packages)
`,
    '426': `## 机型定位
- 适用场景：中大型油厂，原料种类多、压榨强度高。
- 工艺侧重：高压热榨，部分原料可配置冷榨。
- 核心优势：压力窗口更高，适配高含油或硬质原料。
- 选型建议：对压榨力和原料适配性要求更高时选426。

## 推荐整线配置
- 预处理： [油料预处理设备](/zh/products/pre-treatment)
- 炒籽/调质： [喂料破碎炒籽一体机](/zh/products/feeding-crushing-frying-integrated-machine)
- 压榨：426系列液压榨油机
- 过滤： [气动过滤机](/zh/products/pneumatic-filter-press)
- 精炼/灌装： [食用油精炼设备](/zh/products/edible-oil-refining-equipment) / [灌装配套方案](/zh/solutions/filling-packages)
`,
    '480': `## 机型定位
- 适用场景：规模化生产，强调连续批次与高效率。
- 工艺侧重：高产能热榨为主，适配商业化油厂。
- 核心优势：重载结构，长时间运行稳定，产能规划更高。
- 选型建议：当日处理量与产线效率是核心诉求时选480。

## 推荐整线配置
- 预处理： [油料预处理设备](/zh/products/pre-treatment)
- 炒籽/调质： [喂料破碎炒籽一体机](/zh/products/feeding-crushing-frying-integrated-machine)
- 压榨：480系列液压榨油机
- 过滤： [气动过滤机](/zh/products/pneumatic-filter-press)
- 精炼/灌装： [食用油精炼设备](/zh/products/edible-oil-refining-equipment) / [灌装配套方案](/zh/solutions/filling-packages)
`,
    '500': `## 机型定位
- 适用场景：大型油厂、整线项目，追求最大化产能。
- 工艺侧重：高压热榨，强调长周期稳定运行。
- 核心优势：系列最大产能，重载机架更适合工业级任务。
- 选型建议：大型项目、长周期高产需求优先选择500。

## 推荐整线配置
- 预处理： [油料预处理设备](/zh/products/pre-treatment)
- 炒籽/调质： [喂料破碎炒籽一体机](/zh/products/feeding-crushing-frying-integrated-machine)
- 压榨：500系列液压榨油机
- 过滤： [气动过滤机](/zh/products/pneumatic-filter-press)
- 精炼/灌装： [食用油精炼设备](/zh/products/edible-oil-refining-equipment) / [灌装配套方案](/zh/solutions/filling-packages)
`
  }
};

function insertBlock(content, heading, block) {
  const marker = `\n${heading}\n`;
  const idx = content.indexOf(marker);
  if (idx === -1) return { content, changed: false };
  const insertAt = idx + marker.length;
  const before = content.slice(0, insertAt);
  const after = content.slice(insertAt);
  if (after.trimStart().startsWith('## Model Positioning') || after.trimStart().startsWith('## 机型定位')) {
    return { content, changed: false };
  }
  const updated = `${before}\n${block}\n${after.replace(/^\n+/, '')}`;
  return { content: updated, changed: true };
}

function processFile(filePath, lang, heading, block) {
  const content = fs.readFileSync(filePath, 'utf8');
  const res = insertBlock(content, heading, block);
  if (res.changed) {
    fs.writeFileSync(filePath, res.content, 'utf8');
  }
  return res.changed;
}

function main() {
  let updated = 0;
  for (const { lang, heading } of targets) {
    const dir = path.join(root, 'docs', lang, 'products');
    const models = Object.keys(blocks[lang]);
    for (const model of models) {
      const filePath = path.join(dir, `${model}.md`);
      if (!fs.existsSync(filePath)) continue;
      const changed = processFile(filePath, lang, heading, blocks[lang][model]);
      if (changed) updated += 1;
    }
  }
  console.log(`Updated ${updated} product pages.`);
}

main();
