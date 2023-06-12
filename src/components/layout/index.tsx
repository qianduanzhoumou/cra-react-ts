import { Layout } from 'antd';
import LayoutHeader from './header';
import LayoutSider from './sider';
import LayoutContent from './content';
import styles from './index.less'

const Lyout: any = () => {

    return (
        <Layout className={styles.layout}>
            <LayoutHeader />
            <Layout>
                <LayoutSider />
                <Layout style={{ padding: '24px 24px' }}>
                    <LayoutContent />
                </Layout>
            </Layout>
        </Layout>
    );
};

export default Lyout;