import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout/HomeLayout";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import NewsLayout from "../layouts/NewsLayout/NewsLayout";

const router = createBrowserRouter([
    {
        path: '/', 
        Component: HomeLayout
    }, 
    {
        path: '/auth',
        Component: AuthLayout
    }, 
    {
        path: '/news', 
        Component: NewsLayout
    }, 
    {
        path: '/*', 
        element: <h1 className="text-7xl font-extrabold text-center mt-20">404</h1>
    }
]); 

export default router; 