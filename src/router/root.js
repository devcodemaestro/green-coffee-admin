import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import "../styles/index.css";
import "../styles/normalize.css";

const router = createBrowserRouter([
  {
    element: (
      <Suspense fallback={<Loading />}>
        <MainLayout />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loading />}>
            <MainPage />
          </Suspense>
        ),
      },

      {
        path: "/user/",
        element: (
          <Suspense fallback={<Loading />}>
            <ContentLayout />
          </Suspense>
        ),
        children: userRouter(),
      },

      {
        path: "/login",
        element: (
          <Suspense fallback={<Loading />}>
            <Login />
          </Suspense>
        ),
      },

      {
        path: "/myPage",
        element: (
          <Suspense fallback={<Loading />}>
            <MyPage />
          </Suspense>
        ),
      },

      {
        path: "/info/",
        element: (
          <Suspense fallback={<Loading />}>
            <ContentLayout />
          </Suspense>
        ),
        children: infoRouter(),
      },
      {
        path: "/edu/",
        element: (
          <Suspense fallback={<Loading />}>
            <ContentLayout />
          </Suspense>
        ),
        children: eduRouter(),
      },

      {
        path: "/album/",
        element: (
          <Suspense fallback={<Loading />}>
            <ContentLayout />
          </Suspense>
        ),
        children: albumRouter(),
      },

      {
        path: "/notice/",
        element: (
          <Suspense fallback={<Loading />}>
            <ContentLayout />
          </Suspense>
        ),
        children: noticeRouter(),
      },

      {
        path: "/admin/",
        element: (
          <Suspense fallback={<Loading />}>
            <ContentLayout />
          </Suspense>
        ),
        children: adminRouter(),
      },

      {
        path: "ind",
        element: (
          <Suspense fallback={<Loading />}>
            <ContentLayout />
          </Suspense>
        ),
        children: indRouter(),
      },

      {
        path: "/about",
        element: (
          <Suspense fallback={<Loading />}>
            <About />
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

export default router;
