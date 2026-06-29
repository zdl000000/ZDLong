# Zhong Dilong — Portfolio

> 后端开发工程师 · AI 应用开发者

个人网站，展示 Java 后端开发与 AI 应用设计相关的项目经验。

## 技术栈

- **框架**: React 19 + Vite 8
- **语言**: JavaScript (ES Modules)
- **构建**: Vite Production Build
- **部署**: GitHub Actions → GitHub Pages

## 本地开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 预览生产版本
pnpm preview
```

## 部署

本项目通过 GitHub Actions 自动部署到 GitHub Pages。

1. 在 GitHub 上 Fork 或创建仓库
2. 在 Settings → Pages 中选择 `github-pages` 源和 `/root` 目录
3. 推送代码会自动触发 CI/CD 构建

## 目录结构

```
portfolio/
├── public/           # 静态资源
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/   # React 组件
│   ├── hooks/        # 自定义 Hooks
│   ├── styles/       # 全局样式
│   ├── App.jsx
│   └── main.jsx
├── index.html        # Vite 入口
├── vite.config.js
└── package.json
```
