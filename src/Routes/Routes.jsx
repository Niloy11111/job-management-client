import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";

import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import HomePage from "../Pages/Home/HomePage";
import Login from "../Pages/Login/Login";
import AddAJob from "../AddAJob/AddAJob";
import SingleJobDetails from "../SingleJobDetails/SingleJobDetails";
import AllJobs from "../Pages/AllJobsPage/AllJobs";
import MyJobs from "../Pages/MyJobsPage/MyJobs";
import AppliedJob from "../Pages/AppliedJobs/AppliedJob";
import PrivateRoute from "./PrivateRoute";
import UpdateJob from "../UpdateJob/UpdateJob";
import Blogs from "../Pages/Blogs/Blogs";



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
                path : '/blogs',
                element : <Blogs></Blogs> ,
                
            },
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path : '/addAJob',
                element : <PrivateRoute><AddAJob></AddAJob></PrivateRoute>
            },
            {
                path : '/details/:id',
                loader : ({params}) => fetch(`https://job-management-server-eight.vercel.app/alljobs/${params.id} `),
                element : <PrivateRoute><SingleJobDetails></SingleJobDetails></PrivateRoute>
            },
            {
                path : 'allJobs/details/:id',
                loader : ({params}) => fetch(`https://job-management-server-eight.vercel.app/alljobs/${params.id} `),
                element :<PrivateRoute> <SingleJobDetails></SingleJobDetails></PrivateRoute>
            },
            {
                path : '/allJobs',
                loader : () => fetch('https://job-management-server-eight.vercel.app/allJobs'),
                element : <AllJobs></AllJobs>

            },
            {
                path : '/myJobs',
                element : <PrivateRoute><MyJobs></MyJobs></PrivateRoute>
            },

            {
                path : '/appliedJobs',
                element :<PrivateRoute> <AppliedJob></AppliedJob></PrivateRoute>
            },
            {
                path: 'myJobs/updateJobs/:id',
                element: <PrivateRoute><UpdateJob></UpdateJob></PrivateRoute> ,
                loader: ({ params }) => fetch(`https://job-management-server-eight.vercel.app/allJobs/${params.id}`)
              },
        

        ]
    }
])
