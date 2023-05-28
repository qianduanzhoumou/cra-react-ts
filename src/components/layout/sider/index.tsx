import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import menuRouter from '@/routers/routers';
import handRouter from '@/utils/utils';

const { Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

const LayoutSider = () => {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const [menuList, setMenuList] = useState<MenuItem[]>([])
    const [openKey, setOpenKey] = useState<string[]>()
    const [selectedKeys, setSelectedKeys] = useState<string[]>([pathname]);
    const [ceshi, setCeshi] = useState(false)

    // 点击菜单项展示对应页面
    const getLink: MenuProps["onClick"] = ({ key }: { key: string }) => {
        navigate(key);
    };

    // 设置当前展开的 subMenu
    const getOpenChange = (openKeys: string[]) => {
        if (openKeys.length === 0 || openKeys.length === 1) return setOpenKey(openKeys);
        const latestOpenKey = openKeys[openKeys.length - 1];
        if (latestOpenKey.includes(openKeys[0])) return setOpenKey(openKeys);
        setOpenKey([latestOpenKey]);
    }

    useEffect(() => {
        setMenuList(handRouter(menuRouter))
    }, [])

    // 刷新页面保持高亮
    useEffect(() => {
        // 高亮丢失暂未解决
        setSelectedKeys([pathname])
    }, [pathname])

    return (
        <Sider width={200} style={{ background: '#fdfdfd' }}>
            <Menu
                mode="inline"
                selectedKeys={selectedKeys}
                openKeys={openKey}
                style={{ height: '100%', borderRight: 0 }}
                items={menuList}
                onClick={getLink}
                onOpenChange={getOpenChange}
            />
        </Sider>
    )
}

export default LayoutSider