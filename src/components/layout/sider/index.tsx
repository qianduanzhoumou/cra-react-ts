import { useLocation, useNavigate } from 'react-router-dom'
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import { routes } from '@/routers/router';
import { getItem } from '@/utils/utils';

const { Sider } = Layout;


const LayoutSider = () => {
    const navigate = useNavigate()
    const { pathname } = useLocation(); //当前浏览器路径

    const menuItem: MenuProps["items"] = getItem(
        routes[0].children![0].children.filter((item) => item.path !== "*")
    )

    const renderOpenKeys = () => { //根据当前的路径生成需要展开的菜单项数组
        const arr = pathname.split("/").slice(0, -1); //将当前浏览器页面的路径使用 / 分隔成一个字符串数组，并去掉最后一项。
        const result = arr.map(
            (_, index) => "/" + arr.slice(1, index + 1).join("/")
            //将该项及其之前的所有项组合起来，然后在开头加上 / 并将组合后的字符串作为 key 值。
        );
        return result; //返回生成的菜单项数组。
    };

    const getLink: MenuProps["onClick"] = ({ key }) => {
        navigate(key);
    };

    return (
        <Sider breakpoint="lg" collapsible width={200} style={{ background: '#fdfdfd' }}>
            <Menu
                mode="inline"
                defaultSelectedKeys={[pathname]}
                defaultOpenKeys={renderOpenKeys()}
                style={{ height: '100%', borderRight: 0 }}
                items={menuItem}
                onClick={getLink}
            />
        </Sider>
    )
}

export default LayoutSider