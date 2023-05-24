# Craco-React

### 介绍

项目日期 2023.5.21
技术栈:React18、Redux && Redux-Toolkit、Ant-Design、TypeScript

### 安装使用步骤

- npm install --legacy-peer-deps 忽略对等依赖项的版本检查，并尝试安装最新版本的依赖项。
- 推荐使用 yarn 进行安装 npm 会有很多兼容性问题

- **Clone：**

```text
# GitHub
git clone https://github.com/qianduanzhoumou/cra-react-ts.git
```

- yarn
- yarn start
- yarn build

```text
如需让 cra 支持 less 并且使用 CSS Modules 的形式 需要安装 less less-module craco-css-modules craco-less
并且在根目录文件下创建 craco.config.js 同时在 src 目录下申明全局 ts 定义类型文件，用于忽略.module
```
