import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginLayout from "../Layout/LoginLayout";
import Main from "../Layout/Main";
import NewsLayout from "../Layout/NewsLayout";
import Category from "../Pages/Home/Category/Category";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import News from "../Pages/News/News";
import Terms from "../Provider/Terms/Terms";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children:[
            {
                path: '/',
                element:<Navigate to="/category/0"></Navigate>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path: 'register',
                element:<Register></Register>
            },
            {
                path: 'terms',
                element:<Terms></Terms>
            }
        ]
    },
    {
        path: 'category',
        element: <Main></Main>,
        children: [
            {
                path:':id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
                
            }  
        ]
    },
    {
        
            path: 'news',
            element: <NewsLayout></NewsLayout>,
            children: [
                {
                    path: ':id',
                    element: <News></News>,
                    loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
                }
            ]
        
    }
])

export default router;