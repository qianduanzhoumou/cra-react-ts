import { useNavigate, } from 'react-router-dom'
import { Card, Input, Button, Form, Tooltip } from "antd";
import styles from './index.less'


const LoginForm = () => {
    const navigate = useNavigate()
    const onFinish = (values: any) => {
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
                    </div>
                </Form>
            </Card>
        </div >
    )
}

export default LoginForm;