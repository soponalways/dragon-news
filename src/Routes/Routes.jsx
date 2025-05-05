import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout/HomeLayout";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import NewsLayout from "../layouts/NewsLayout/NewsLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";

const router = createBrowserRouter([
    {
        path: '/', 
        Component: HomeLayout, 
        children : [
            {
                index: true, 
                Component: Home
            }, 
            {
                path: '/category/:id', 
                Component: CategoryNews
            }
        ]
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