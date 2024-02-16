import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";

import AddAJob from "../Pages/AddAJob/AddAJob";
import AllJobs from "../Pages/AllJobsPage/AllJobs";
import AppliedJob from "../Pages/AppliedJobs/AppliedJob";
import Blogs from "../Pages/Blogs/Blogs";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import HomePage from "../Pages/Home/HomePage";
import Login from "../Pages/Login/Login";
import MyJobs from "../Pages/MyJobsPage/MyJobs";
import UpdateJob from "../Pages/UpdateJob/UpdateJob";
import SingleJobDetails from "../components/SingleJobDetails/SingleJobDetails";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/addAJob",
        element: (
          <PrivateRoute>
            <AddAJob></AddAJob>
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:id",
        loader: ({ params }) =>
          fetch(
            `https://job-management-server-eight.vercel.app/alljobs/${params.id} `
          ),
        element: <SingleJobDetails></SingleJobDetails>,
      },
      {
        path: "/allJobs",

        element: <AllJobs></AllJobs>,
      },
      {
        path: "/myJobs",
        element: (
          <PrivateRoute>
            <MyJobs></MyJobs>
          </PrivateRoute>
        ),
      },

      {
        path: "/appliedJobs",
        element: (
          <PrivateRoute>
            {" "}
            <AppliedJob></AppliedJob>
          </PrivateRoute>
        ),
      },
      {
        path: "myJobs/updateJobs/:id",
        element: (
          <PrivateRoute>
            <UpdateJob></UpdateJob>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://job-management-server-eight.vercel.app/allJobs/${params.id}`
          ),
      },
    ],
  },
]);
