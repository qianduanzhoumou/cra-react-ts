import { useLocation, useNavigate } from 'react-router-dom'
import { Layout, Menu, MenuProps } from 'antd';
import { asyncRoutes } from '@/routers/routers';
import { useMemo } from 'react';

const { Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: any[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const LayoutSider = () => {
    const navigate = useNavigate()
    const { pathname } = useLocation(); //当前浏览器路径

    // // 生成Menu所需要的数组对象
    // const handleItem = (accessRoutes: any) => {
    //     const result: any = []
    //     accessRoutes.forEach((route: any) => {
    //         console.log('eee', route);
    //         // if (!route.children) {

    //         // }
    //     });
    //     return result
    // }

    // console.log('eee', asyncRoutes);

    return (
        <Sider breakpoint="lg" collapsible width={200} style={{ background: '#fdfdfd' }}>
            <Menu
                mode="inline"
                // defaultSelectedKeys={[pathname]}
                // defaultOpenKeys={renderOpenKeys()}
                style={{ height: '100%', borderRight: 0 }}
                items={[]}
                onClick={() => { }}
            />
        </Sider>
    )
}

export default LayoutSider