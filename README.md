# Craco-React-Ts

### 介绍 📖

- 项目日期 2023.5.21
- 技术栈:React18、Redux && Redux-Toolkit、Ant-Design、TypeScript

### 一、在线预览地址 👀

- Link:https://cjz-website.surge.sh/

### 二、Git 仓库地址 (⭐)

- GitHub：https://github.com/qianduanzhoumou/cra-react-ts

### 三、项目功能 🔨🔨🔨

- 采用 @craco/craco 作为项目开发、自定义 Webpack 配置
- 使用 Prettier 统一格式化代码
- 使用 react-i18next i18next 实现多语言方案

### 四、安装使用步骤 📑

- npm install --legacy-peer-deps 忽略对等依赖项的版本检查，并尝试安装最新版本的依赖项。
- 推荐使用 yarn 进行安装 npm 会有很多兼容性问题

- **Clone：**

```text
# GitHub
git clone https://github.com/qianduanzhoumou/cra-react-ts.git
```

- **Install：**

```text
yarn
```

- **Start：**

```text
yarn start
```

- **Build：**

```text
yarn build
yarn deploy 线上部署
```

### 五、项目过程笔记 📑

```text
如需让 cra 支持 less 并且使用 CSS Modules 的形式 需要安装 less less-module craco-css-modules craco-less
并且在根目录文件下创建 craco.config.js 同时在 src 目录下申明全局 ts 定义类型文件，用于忽略.module
```

### 六、文件资源目录 📚

```text
Craco-React-Ts
├─ public                 # 静态资源文件（忽略打包）
├─ src
│  ├─ assets              # 静态资源文件
│  ├─ components          # 全局组件
|  ├─ i18n                # 多语言库
│  ├─ pages               # 项目所有页面
│  ├─ routers             # 路由管理
|  ├─ services            # 接口管理
│  ├─ utils               # 工具库
│  ├─ index.tsx           # 入口文件
│  └─ react-app-env.d.ts  # react 全局声明ts文件
├─ .gitignore             # git 提交忽略
├─ .prettierrc.json       # prettier 格式化配置
├─ craco.config.js        # 自定义 webpack 全局配置
├─ deploy.sh              # 线上部署 surge 脚本
├─ package.json           # 依赖包管理
├─ README.md              # README 介绍
├─ tsconfig.json          # typescript 全局配置
```