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
                element : <PrivateRoute><AddAJob></AddAJob></PrivateRoute>
            },
            {
                path : '/details/:id',
                loader : ({params}) => fetch(`http://localhost:5000/alljobs/${params.id} `),
                element : <PrivateRoute><SingleJobDetails></SingleJobDetails></PrivateRoute>
            },
            {
                path : 'allJobs/details/:id',
                loader : ({params}) => fetch(`http://localhost:5000/alljobs/${params.id} `),
                element :<PrivateRoute> <SingleJobDetails></SingleJobDetails></PrivateRoute>
            },
            {
                path : '/allJobs',
                loader : () => fetch('http://localhost:5000/allJobs'),
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
                loader: ({ params }) => fetch(`http://localhost:5000/allJobs/${params.id}`)
              },
        

        ]
    }
])
