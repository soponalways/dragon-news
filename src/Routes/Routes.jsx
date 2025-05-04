import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: '/', 
        element: <h2>Home Layout</h2>
    }, 
    {
        path: '/auth',
        element: <h2>Auth layout</h2>
    }, 
    {
        path: '/news', 
        element: <h2>News Layout</h2>
    }, 
    {
        path: '/*', 
        element: <h1 className="text-3xl font-bold text-center">404</h1>
    }
]); 

export default router; 