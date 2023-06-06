import { NonIndexRouteObject, useLocation, useNavigate } from 'react-router-dom'
import { Layout, Menu, MenuProps } from 'antd';
import { useEffect, useState } from 'react';
import { configRouter } from '@/routers/config-router';

const { Sider } = Layout;

type RouteType = NonIndexRouteObject & {
    title: string;
    icon: React.ReactElement;
};

const LayoutSider = () => {
    const { pathname } = useLocation(); //当前浏览器路径
    const [menu, setMenu] = useState<any>([])
    const navigate = useNavigate()

    // 嵌套路由处理侧边栏
    const getItems: any = (children: RouteType[]) => {
        return children.map((item) => {
            return {
                key: item?.path,
                icon: item?.icon,
                label: item.title,
                children: item.children ? getItems(item.children) : null,
            };
        });
    };

    const menuItems: MenuProps["items"] = getItems(configRouter[0].children);

    // 点击对应菜单跳转页面
    const getLink: MenuProps["onClick"] = ({ key }) => {
        navigate(key)
    }

    useEffect(() => {
        setMenu(menuItems)
    }, [])

    return (
        <Sider breakpoint="lg" collapsible width={200} style={{ background: '#fdfdfd' }}>
            <Menu
                mode="inline"
                defaultOpenKeys={[pathname]}
                defaultSelectedKeys={[pathname]}
                style={{ height: '100%', borderRight: 0 }}
                items={menu}
                onClick={getLink}
            />
        </Sider>
    )
}

export default LayoutSider