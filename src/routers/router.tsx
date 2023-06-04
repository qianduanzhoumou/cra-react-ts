import App from "@/App";
import Login from "@/components/login";
import ErrorPage from "@/pages/error-page";
import Home from "@/pages/home";
import Todo from "@/pages/todo";

import { createBrowserRouter } from "react-router-dom";

const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                errorElement: <ErrorPage />,
                children: [
                    {
                        index: true,
                        title: "首页",
                        element: <Home />,
                    },
                    {
                        path: "/todo",
                        title: "表单页",
                        element: <Todo />,
                    },
                    {
                        path: "*",
                        element: <ErrorPage />,
                    },
                ],
            },
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
];

export { routes };

export default createBrowserRouter(routes);
