import { Button } from "antd"
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()

    return <div>
        <Button onClick={() => navigate('/home')}>跳转到首页</Button>
    </div>
}

export default Login