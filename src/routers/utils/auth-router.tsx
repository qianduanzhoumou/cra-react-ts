import { useEffect, } from "react";
import {
    // useLocation,
    useNavigate
} from "react-router-dom";

// 路由守卫
const AuthRouter = (props: { children: JSX.Element }) => {
    // const { pathname } = useLocation();
    const navigate = useNavigate();

    // * 判断当前路由是否需要访问权限(不需要权限直接放行)
    // if (!route.meta?.requiresAuth) return props.children;
    const token = localStorage.getItem('token')

    // * 判断是否有Token
    useEffect(() => {
        !token ? navigate('/login') : navigate('/home')
    }, [token])

    return props.children
}

export default AuthRouter;