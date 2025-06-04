# VitePress Knowledge Blog 📚

> 一个基于 VitePress 构建的个人知识库和技术博客系统

[![VitePress](https://img.shields.io/badge/VitePress-1.0.0--beta.1-brightgreen.svg)](https://vitepress.dev/)
[![Vue3](https://img.shields.io/badge/Vue-3.x-4FC08D.svg)](https://vuejs.org/)
[![License](https://img.shields.io/badge/License-ISC-blue.svg)](LICENSE)

## 🌟 在线预览

🔗 [点击这里访问在线版本](http://1.12.218.227)

## 📖 项目简介

这是一个专为开发者打造的个人知识库和技术博客系统。在日常开发工作中，我们经常会遇到各种技术问题，解决后却没有及时记录和总结，导致下次遇到相同问题时需要重新搜索，严重影响开发效率。

本项目旨在解决这个痛点，提供一个：
- 📝 **个人知识积累平台** - 记录和整理技术要点
- 🔍 **快速检索系统** - 快速找到解决方案
- 📈 **成长追踪工具** - 见证技术成长轨迹
- 🤝 **知识分享空间** - 与他人分享技术心得

## ✨ 项目特性

### 🚀 性能优势
- ⚡️ **极速启动** - 基于 Vite，300ms 内完成项目启动
- 🔥 **热更新** - 实时预览，保存即可看到效果
- 📦 **轻量级** - 比 VuePress 更轻量，更易上手

### 📚 内容管理
- 📁 **结构化组织** - 按技术领域分类管理
- 🏷️ **标签系统** - 便于内容检索和分类
- 🔄 **自动部署** - GitHub Pages 自动发布

## 🛠️ 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| [VitePress](https://vitepress.dev/) | ^1.0.0-beta.1 | 静态站点生成器 |
| [Vue3](https://vuejs.org/) | - | 前端框架 |
| [ECharts](https://echarts.apache.org/) | ^5.4.3 | 数据可视化 |
| [Element Plus](https://element-plus.org/) | ^2.3.12 | UI 组件库 |
| [DHTMLX Gantt](https://dhtmlx.com/docs/products/dhtmlxGantt/) | ^8.0.6 | 甘特图组件 |
| [Sass](https://sass-lang.com/) | ^1.63.4 | CSS 预处理器 |
| [Axios](https://axios-http.com/) | ^1.4.0 | HTTP 客户端 |

## 🚀 快速开始

### 📋 环境要求

- **Node.js** >= 18.0.0
- **npm** 或 **yarn** 包管理器

### 🔧 安装步骤

1. **克隆项目**
```bash
git clone https://github.com/cyan0714/vitepress-blog.git
cd vitepress-blog
```

2. **安装依赖**
```bash
# 使用 npm
npm install

# 或使用 yarn
yarn install
```

3. **启动开发服务器**
```bash
# 启动开发模式
npm run dev
# 或
npm run serve
```

4. **构建生产版本**
```bash
npm run build
```

## 📁 项目结构

```
vitepress-blog/
├── docs/                          # 文档源码目录
│   ├── .vitepress/                # VitePress 配置
│   │   ├── config/               # 配置文件
│   │   ├── theme/                # 自定义主题
│   │   └── config.js             # 主配置文件
│   ├── documents/                # 文档内容
│   │   ├── frontend/             # 前端技术文档
│   │   ├── backend/              # 后端技术文档
│   │   ├── database/             # 数据库相关
│   │   ├── interview/            # 面试题库
│   │   ├── scripts/              # 脚本工具
│   │   └── ...                   # 其他分类
│   ├── public/                   # 静态资源
│   └── index.md                  # 首页文档
├── Docker/                       # Docker 配置
├── .github/                      # GitHub 工作流
├── deploy.sh                     # 部署脚本
├── push.sh                       # 推送脚本
├── Dockerfile                    # Docker 镜像配置
└── package.json                  # 项目配置
```

## 🚀 部署指南

### GitHub Pages 部署

项目提供自动化部署脚本：

```bash
# 自动构建并部署到 GitHub Pages
npm run deploy
```

### Docker 部署

```bash
# 构建 Docker 镜像
docker build -t vitepress-blog .

# 运行容器
docker run -p 80:80 vitepress-blog
```

### 手动部署

```bash
# 构建项目
npm run build

# 将 docs/.vitepress/dist 目录内容部署到服务器
```

## 🎯 为什么选择 VitePress

| 特性 | VitePress | VuePress |
|------|-----------|----------|
| 构建工具 | Vite ⚡️ | Webpack 🐌 |
| 启动速度 | ~300ms | ~数秒 |
| 热更新 | 完美支持 ✅ | 偶有问题 ❌ |
| 学习成本 | 更低 📈 | 较高 📊 |
| 性能 | 更轻量 🪶 | 较重 📦 |


## 📝 使用说明

1. **添加新文档** - 在 `docs/documents/` 对应分类下创建 Markdown 文件
2. **配置导航** - 在 `docs/.vitepress/config/nav.js` 中添加导航项
3. **配置侧边栏** - 在 `docs/.vitepress/config/sidebar.js` 中配置侧边栏
4. **自定义主题** - 在 `docs/.vitepress/theme/` 目录下自定义样式

## 🐛 问题反馈

如果您在使用过程中遇到问题，请：

1. 查看 [Issues](https://github.com/cyan0714/vitepress-blog/issues) 中是否有相似问题
2. 如果没有，请创建新的 Issue 并详细描述问题

## 🙏 致谢

感谢以下开源项目的支持：
- [VitePress](https://vitepress.dev/) - 优秀的静态站点生成器
- [Vue.js](https://vuejs.org/) - 渐进式 JavaScript 框架
- [Vite](https://vitejs.dev/) - 下一代前端构建工具

