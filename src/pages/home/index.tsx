import { useDispatch } from 'react-redux'
import { Button, } from "antd";
import { login, logout } from '@/store/loginsReducer';

const Home = () => {
    const dispatch = useDispatch()

    return (
        <div>
            首页
            <Button onClick={() => dispatch(login())}>点击登录</Button>
            <Button onClick={() => dispatch(logout())}>点击退出</Button>
        </div>
    );
}

export default Home;