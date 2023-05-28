import type { MenuProps } from 'antd';

// 定义Menu类型
type MenuItem = Required<MenuProps>['items'][number];
const getItem = (
  label: React.ReactNode | string,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem => {
  return {
    key,
    icon,
    children,
    label
  } as MenuItem;
};

// 处理路由文件返回
const handRouter = (menuData: any[], newArr: MenuItem[] = []) => {
  menuData.forEach((item) => {
    // 先避免item.meta为undefined 在 进行判断meta是否可展开
    if (!item.meta || !Object.keys(item?.meta).length) {
      // children是否存在
      if (item.children) {
        // 如果存在则对每一项children进行循环遍历
        item.children.forEach((child: any) => {
          return newArr.push(getItem(child?.title, child.path, child?.icon));
        });
      } else {
        return newArr.push(getItem(item?.title, item?.path, item?.icon));
      }
    } else {
      // 如果不是可展开的，调用自己
      newArr.push(
        getItem(
          item?.meta?.title,
          item?.meta?.path,
          item?.meta?.icon,
          handRouter(item.children)
        )
      );
    }
  });
  return newArr;
};

export default handRouter;
