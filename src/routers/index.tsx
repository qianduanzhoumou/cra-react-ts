import { Navigate, useRoutes } from 'react-router-dom';
import menuRouter from './routers';
import Login from '@/components/login';
import ErrorPage from '@/pages/error-page';

const router = [
    {
        path: '/',
        element: <Navigate to={'/login'} />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    ...menuRouter,
    {
        path: '*',
        element: <ErrorPage />
    }
];

const Router = () => {
    const routes = useRoutes(router)
    return routes
}


export default Router