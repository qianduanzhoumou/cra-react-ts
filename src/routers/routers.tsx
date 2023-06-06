import Lyout from "@/components/layout";
import Login from "@/components/login";
import Home from "@/pages/home";
import Todo from "@/pages/todo";
import ErrorPage from "@/pages/error-page";

// 静态路由
export const staticRouter = [
    {
        path: "/",
        element: <Lyout />,
        children: [],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: '*',
        element: <ErrorPage />
    }
];

// 动态路由
export const asyncRoutes = [
    {
        path: '/home',
        title: "首页",
        element: <Home />,
    },
    {
        path: "/todo",
        title: "表单页",
        element: <Todo />,
    },
]