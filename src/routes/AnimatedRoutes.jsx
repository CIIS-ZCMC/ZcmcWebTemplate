// App.js

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Authentication from "../pages/Authentication/Authentication";
import PageNotFound from "../pages/404/PageNotFound";
import ProtectedRoutes from "./ProtectedRoutes";
import { sidebarRoutes } from "./PageRoutes";
import { CircularProgress } from "@mui/joy";
import { Suspense } from "react";
import Layout from "../Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      // <ProtectedRoutes>
      <Layout />
      // </ProtectedRoutes>
    ),
    children: sidebarRoutes,
  },
  {
    path: "/signing-in/:id",
    element: <Authentication />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

function AnimatedRoutes() {
  return (
    <Suspense fallback={<CircularProgress />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default AnimatedRoutes;
