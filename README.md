# 榨油机产品官网

这是一个基于VitePress构建的榨油机产品官方网站，支持中英文双语。

## 技术栈
- VitePress - 静态网站生成器
- Vue 3 - 前端框架
- CSS - 样式设计

## 项目结构
```
oilpress/
├── docs/                    # 文档和页面内容
│   ├── .vitepress/         # VitePress配置
│   │   ├── config.js       # 主配置文件
│   │   └── theme/          # 主题自定义
│   ├── en/                 # 英文内容
│   ├── zh/                 # 中文内容
│   └── index.md           # 首页
├── package.json           # 项目依赖
└── README.md             # 项目说明
```

## 本地开发

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run docs:dev
```

### 构建生产版本
```bash
npm run docs:build
```

### 预览构建结果
```bash
npm run docs:preview
```

## 部署到Vercel

### 1. 推送到GitHub
```bash
# 初始化git仓库
git init

# 添加所有文件
git add .

# 提交更改
git commit -m "Initial commit: oilpress website"

# 添加远程仓库（需要先创建GitHub仓库）
git remote add origin https://github.com/yourusername/oilpress.git

# 推送到GitHub
git push -u origin main
```

### 2. Vercel部署
1. 访问 [vercel.com](https://vercel.com)
2. 使用GitHub账号登录
3. 点击 "New Project"
4. 选择你的GitHub仓库
5. 配置部署设置：
   - Framework: VitePress
   - Build Command: `npm run docs:build`
   - Output Directory: `docs/.vitepress/dist`
6. 点击 "Deploy"

### 3. 自动部署
每次推送到GitHub的main分支，Vercel会自动重新部署。

## 功能特点
- 响应式设计
- 中英文双语支持
- 产品展示
- 联系方式
- 新闻资讯

## 联系方式
如有问题，请通过GitHub Issues提交。