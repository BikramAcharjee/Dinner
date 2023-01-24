import { Navigate, useRoutes } from 'react-router-dom';
import HomePage from './components/Home';
import LoginPage from './components/Login';
import RegisterPage from './components/Register';
export default function Router() {
    const routes = useRoutes([
        {
            path: '/',
            element: <HomePage />
        },
        {
            path: 'login',
            element: <LoginPage />,
            index: true
        },
        {
            path: 'register',
            element: <RegisterPage />
        }
    ]);

    return routes;
}
