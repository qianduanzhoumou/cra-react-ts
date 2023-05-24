// 全局TS类型定义文件
declare module '*.less' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

// 解决项目整体爆红
declare module 'react/jsx-runtime' {
  export default any;
}
