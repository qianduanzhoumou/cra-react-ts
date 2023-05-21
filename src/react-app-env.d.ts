// 全局TS类型定义文件
declare module "*.less" {
  const classes: { readonly [key: string]: string }
  export default classes
}
