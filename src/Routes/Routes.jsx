import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";

import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import HomePage from "../Pages/Home/HomePage";
import Login from "../Pages/Login/Login";



export const router = createBrowserRouter([
    {
        path : '/',
        element : <Root></Root>,
        errorElement : <ErrorPage></ErrorPage> ,
        children : [
            {
                path : '/',
                element : <HomePage></HomePage>
            },
            {
                path : '/login',
                element : <Login></Login>
            }
        ]
    }
])
