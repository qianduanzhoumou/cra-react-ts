import { Navigate } from 'react-router-dom';
import { Layout } from 'antd';
import LayoutHeader from './header';
import LayoutSider from './sider';
import LayoutContent from './content';
import LayoutBreadcrumb from './breadcrumb';
import styles from './index.less'

const Lyout: any = () => {

    if (!localStorage.getItem('userData')) {
        return <Navigate to={'/login'} />
    }

    return (
        <Layout className={styles.layout}>
            <LayoutHeader />
            <Layout>
                <LayoutSider />
                <Layout style={{ padding: '0 24px 24px' }}>
                    <LayoutBreadcrumb />
                    <LayoutContent />
                </Layout>
            </Layout>
        </Layout>
    );
};

export default Lyout;