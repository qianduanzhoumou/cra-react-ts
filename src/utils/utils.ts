import { NonIndexRouteObject } from 'react-router-dom';

// 用于描述 React Router 路由配置中的非索引路由对象，即没有 index 属性的子级路由对象
type RouteType = NonIndexRouteObject & {
  title: string;
  icon: React.ReactElement;
};
/**
 * @children 路由数组
 * 递归路由获取Menu菜单方法
 */
export const getItem: any = (children: RouteType[]) => {
  return children.map((item) => {
    return {
      key: item.index
        ? '/'
        : item.path?.startsWith('/')
        ? item.path
        : `/${item.path}`,
      // 如果该元素的 index 属性为 true，则将其 key 属性设置为 '/'，否则判断其 path 属性是否以 / 开头，如果是，则将 key 属性设置为 path，否则在 path 前面加上 / 并将其作为 key 属性值。
      label: item.title,
      icon: item.icon,
      children: item.children ? getItem(item.children) : null
      // 判断该元素是否有子级路由,如果有则递归调用getItem，并将生成的菜单项数组作为该元素的 children 属性值，否则设置为null
    };
  });
};
