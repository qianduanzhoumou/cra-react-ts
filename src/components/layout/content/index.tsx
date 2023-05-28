import { Layout, } from 'antd';
import { Outlet } from 'react-router-dom'
const { Content } = Layout;


const LayoutContent = () => {
    return (
        <Content
            style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                background: '#ffffff',
            }}
        >
            <Outlet />
        </Content>
    )
}

export default LayoutContent