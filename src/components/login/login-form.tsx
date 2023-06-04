// import { useDispatch } from 'react-redux'
import { useNavigate, } from 'react-router-dom'
// import { login } from '@/store/loginsReducer';
import { Card, Input, Button, Form, Tooltip } from "antd";
import { QqOutlined, AlipayCircleOutlined, WechatOutlined, UserOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import styles from './index.less'


const LoginForm = () => {
    const navigate = useNavigate()
    // const dispatch = useDispatch()
    const onFinish = (values: any) => {
        // dispatch(login())
        // 调取接口 获得token和用户信息然后存储到localStorage中
        localStorage.setItem("token", values.username)
        navigate('/')
    };

    return (
        <div className={styles['login-form']}>
            <Card
                title='欢迎登录'
                hoverable
                headStyle={{ textAlign: 'center' }}
                style={{ width: 400 }}
                actions={[
                    <AlipayCircleOutlined key="zfb" />,
                    <WechatOutlined key="wechat" />,
                    <QqOutlined key="qq" />,
                    <UserOutlined key="tourist" />,
                ]}
            >
                <Form
                    name="basic"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        label='用户名称'
                        name="username"
                        rules={[{ required: true, message: '请输入您的用户名' }]}
                    >
                        <Input placeholder='admin/user' />
                    </Form.Item>

                    <Form.Item
                        label='用户密码'
                        name="password"
                        rules={[{ required: true, message: '请输入您的密码' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <div className={styles['login-form-button']}>
                        <Button type="primary" htmlType="submit">
                            登录
                        </Button>
                        <Tooltip title={
                            <div>
                                <p>
                                    1.新用户联系管理员添加账号
                                </p>
                                <p>
                                    2.游客点击下方第四个图标登录
                                </p>
                            </div>
                        }
                            overlayStyle={{}}
                        >
                            <QuestionCircleOutlined />
                        </Tooltip>
                    </div>
                </Form>
            </Card>
        </div >
    )
}

export default LoginForm;