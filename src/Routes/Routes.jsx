import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";

import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import HomePage from "../Pages/Home/HomePage";
import Login from "../Pages/Login/Login";
import AddAJob from "../AddAJob/AddAJob";
import SingleJobDetails from "../SingleJobDetails/SingleJobDetails";
import AllJobs from "../Pages/AllJobsPage/AllJobs";



export const router = createBrowserRouter([
    {
        path : '/',
        element : <Root></Root>,
        errorElement : <ErrorPage></ErrorPage> ,
        children : [
            {
                path : '/',
                element : <HomePage></HomePage>,
                
            },
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path : '/addAJob',
                element : <AddAJob></AddAJob>
            },
            {
                path : '/details/:id',
                loader : ({params}) => fetch(`http://localhost:5000/alljobs/${params.id} `),
                element : <SingleJobDetails></SingleJobDetails>
            },
            {
                path : '/allJobs',
                loader : () => fetch('http://localhost:5000/allJobs'),
                element : <AllJobs></AllJobs>

            }
        

        ]
    }
])
