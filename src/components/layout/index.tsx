// import { selectLogin } from '@/store/loginsReducer';
// import { useSelector } from 'react-redux';
// import { Navigate, useNavigate } from 'react-router-dom';
import { Layout } from 'antd';
import LayoutHeader from './header';
import LayoutSider from './sider';
import LayoutContent from './content';
import LayoutBreadcrumb from './breadcrumb';
import styles from './index.less'
// import { useEffect } from 'react';

const Lyout: any = () => {
    // const navigate = useNavigate()

    // const loginType = useSelector(selectLogin)

    // useEffect(() => {
    //     loginType ? navigate('/') : navigate('/login')
    //     console.log('eee', loginType);
    // }, [loginType])


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