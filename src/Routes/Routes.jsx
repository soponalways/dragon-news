import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout/HomeLayout";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import NewsLayout from "../layouts/NewsLayout/NewsLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import PrivateRoute from "../Provider/PrivateRoute";
import Loading from "../pages/Loading";

const router = createBrowserRouter([
    {
        path: '/', 
        Component: HomeLayout, 
        HydrateFallback: Loading, 
        loader: () => fetch('/news.json'),
        children : [
            {
                index: true, 
                Component: Home
            }, 
            {
                path: '/category/:id', 
                Component: CategoryNews, 
                loader: () => fetch('/news.json'), 
                HydrateFallback: Loading
            }
        ]
    }, 
    {
        path: '/auth',
        Component: AuthLayout, 
        children: [
            {
                path: '/auth/login', 
                Component: Login
            }, 
            {
                path: '/auth/register', 
                Component: Register
            }
        ]
    }, 
    {
        path: '/news-details/:id', 
        element: <PrivateRoute>
            <NewsLayout/>
        </PrivateRoute>, 
        loader: () => fetch('/news.json'),
        HydrateFallback: Loading
    }, 
    {
        path: '/*', 
        element: <h1 className="text-7xl font-extrabold text-center mt-20">404</h1>
    }
]); 

export default router; 