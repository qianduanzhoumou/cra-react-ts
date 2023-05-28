import { Layout } from 'antd';
const { Header, } = Layout;

const LayoutHeader = () => {
    return (
        <Header style={{ display: 'flex', alignItems: 'center' }}>
            <div className="demo-logo" />
        </Header>
    )
}

export default LayoutHeader