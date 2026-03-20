#!/bin/bash

# VitePress网站优化脚本
# 使用方法: bash optimize-site.sh

echo "🚀 开始优化VitePress网站..."

# 进入项目目录
PROJECT_DIR="/Volumes/jd5/Qoder临终版/oilpress 20260305最新版本"
cd "$PROJECT_DIR" || exit 1

echo "📁 项目目录: $(pwd)"

# 1. 备份当前配置
echo "📦 备份当前配置..."
cp docs/.vitepress/config.js docs/.vitepress/config.js.backup
echo "✅ 配置已备份到: docs/.vitepress/config.js.backup"

# 2. 升级依赖
echo ""
echo "⬆️  升级依赖包..."
read -p "是否升级VitePress? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]
then
    npm update vitepress
    echo "✅ VitePress已升级"
fi

# 3. 安装优化插件
echo ""
echo "📦 安装优化插件..."
read -p "是否安装图片优化插件? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]
then
    npm install -D vite-plugin-imagemin
    echo "✅ 图片优化插件已安装"
fi

# 4. 重命名中文图片文件
echo ""
echo "🔄 重命名中文图片文件..."
cd docs/public/images || exit 1

# 定义重命名映射
declare -A rename_map=(
  ["菜籽热榨工艺.png"]="rapeseed-hot-pressing-process.png"
  ["茶籽热榨工艺.png"]="tea-seed-hot-pressing-process.png"
  ["大豆热榨工艺.png"]="soybean-hot-pressing-process.png"
  ["花生热榨工艺.png"]="peanut-hot-pressing-process.png"
  ["芝麻热榨工艺.png"]="sesame-hot-pressing-process.png"
  ["核桃冷榨工艺.png"]="walnut-cold-pressing-process.png"
  ["胡麻_亚麻籽热榨工艺概览_An Overview of the Hot Pressing Process of Flaxseed.png"]="flaxseed-hot-pressing-process.png"
  ["油莎豆冷榨工艺 Cold pressing process of oil chia beans.png"]="tiger-nut-cold-pressing-process.png"
)

count=0
for old_name in "${!rename_map[@]}"; do
  new_name="${rename_map[$old_name]}"
  if [ -f "$old_name" ]; then
    mv "$old_name" "$new_name"
    echo "  ✅ $old_name -> $new_name"
    ((count++))
  fi
done

echo "✅ 重命名了 $count 个文件"

# 5. 创建robots.txt
echo ""
echo "🤖 创建robots.txt..."
cd "$PROJECT_DIR"
cat > docs/public/robots.txt << 'EOF'
User-agent: *
Allow: /

# Sitemap
Sitemap: https://hydraulicoilpressing.opchn.com/sitemap.xml

# 禁止索引的路径
Disallow: /404
Disallow: /search

# 爬虫延迟
Crawl-delay: 1
EOF
echo "✅ robots.txt已创建"

# 6. 测试构建
echo ""
read -p "是否执行测试构建? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]
then
    echo "🔨 执行测试构建..."
    npm run docs:build

    if [ $? -eq 0 ]; then
        echo "✅ 构建成功！"
        echo ""
        echo "📊 构建统计:"
        echo "  - 输出目录: docs/.vitepress/dist"
        du -sh docs/.vitepress/dist

        echo ""
        read -p "是否启动预览服务器? (y/n) " -n 1 -r
        echo
        if [[ $REPLY =~ ^[Yy]$ ]]
        then
            npm run docs:preview
        fi
    else
        echo "❌ 构建失败，请检查错误信息"
    fi
fi

echo ""
echo "✨ 优化完成！"
echo ""
echo "📋 后续步骤:"
echo "  1. 查看 OPTIMIZATION_PLAN.md 了解详细优化建议"
echo "  2. 根据需要修改 docs/.vitepress/config.js"
echo "  3. 测试所有页面是否正常"
echo "  4. 部署到生产环境"
echo ""
