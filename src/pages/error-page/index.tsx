import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate()

    const goHome = () => {
        navigate('/')
    }

    return (
        <Result
            status="404"
            title="404"
            subTitle="很抱歉,并没有找到该页面"
            extra={
                <Button type="primary" onClick={goHome}>
                    回到首页
                </Button>
            }
        />
    )
}

export default ErrorPage