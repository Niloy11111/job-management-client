import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import { router } from "./Routes/Routes.jsx";
import "./index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Favicon from "react-favicon";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="w-2/3 mx-auto font-Inter">
    <Favicon url="https://i.ibb.co/gJ3LrbJ/Untitled-design-removebg-preview.png" />
    <AuthProvider>
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router}></RouterProvider>
        </QueryClientProvider>
      </React.StrictMode>
    </AuthProvider>
  </div>
);
