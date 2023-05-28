import Home from "@/pages/home";
import Todo from "@/pages/todo";
import ErrorPage from "@/pages/error-page";
import Lyout from "@/components/layout";

const menuRouter = [
    {
        element: <Lyout />,
        meta: {},
        children: [
            {
                title: '首页',
                path: "/home",
                element: <Home />,
            },
        ],
    },
    {
        element: <Lyout />,
        meta: {
            title: '代办事项',
            key: 'todo',
        },
        children: [
            {
                title: 'Todo',
                path: "/todo",
                element: <Todo />,
            },
        ],
    },
]

export default menuRouter