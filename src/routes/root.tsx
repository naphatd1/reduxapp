import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/home-page.tsx";
import RegisterPage from "../pages/register-page.tsx";
import routeDashboard from "./dashboard.tsx";
import LoginPage from "../pages/login-page.tsx";
import AuthGuard from "../guards/auth-guard.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/register',
        element: <RegisterPage />
    },
    {
        path: '/login',
        element: <LoginPage />
    },
    ...routeDashboard
])

export default router