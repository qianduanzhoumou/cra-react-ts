import { useRoutes } from "react-router-dom";
import Lyout from "@/components/layout";
import Login from "@/components/login";
import Home from "@/pages/home";
import Todo from "@/pages/todo";
import ErrorPage from "@/pages/error-page";
import Tables from "@/pages/table";

export const configRouter: any = [
    {
        path: "/",
        element: <Lyout />,
        children: [
            {
                path: '/home',
                element: <Home />,
                title: '首页',
                meta: {},//放置权限字符以及页面是否可查看
                // 子级路由
                // children: []
            },
            {
                path: '/todo',
                element: <Todo />,
                title: '代办事项',
                meta: {}
            },
            {
                title: '表格',
                children: [
                    {
                        path: '/tables',
                        element: <Tables />,
                        title: '子级表格',
                        meta: {}
                    }
                ]
            }
        ]
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


const Router = () => {
    const routes = useRoutes(configRouter);
    return routes;
};

export default Router