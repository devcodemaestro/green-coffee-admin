import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import { Interceptor } from "../components/Interceptor";
import Loading from "../components/Loading";
import PrivateRoutes from "../components/PrivateRoutes";
import NoLayout from "../pages/NoLayout";
import NotFound from "../pages/NotFound";
import loginRouter from "./loginRouter";

const AdminRoutes = lazy(() => import("./adminRouter"));
const OwnerRoutes = lazy(() => import("./ownerRouter"));

const rootRouter = createBrowserRouter([
  {
    element: (
      <Suspense fallback={<Loading />}>
        <NoLayout />
      </Suspense>
    ),
    errorElement: <NotFound />,
    children: loginRouter(),
  },
  {
    element: (
      <Suspense fallback={<Loading />}>
        <Interceptor>
          <Layout>
            <PrivateRoutes />
          </Layout>
        </Interceptor>
      </Suspense>
    ),
    errorElement: <NotFound />,
    children: [
      {
        path: "admin/*",
        element: (
          <Suspense fallback={<Loading />}>
            <AdminRoutes />
          </Suspense>
        ),
      },
      {
        path: "superadmin/*",
        element: (
          <Suspense fallback={<Loading />}>
            <OwnerRoutes />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default rootRouter;
