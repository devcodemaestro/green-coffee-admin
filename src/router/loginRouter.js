import React, { Suspense } from "react";
import Login from "../pages/Login";
import Loading from "../components/Loading";

const loginRouter = () => {
  return [
    {
      path: "/",
      element: (
        <Suspense fallback={<Loading />}>
          <Login />
        </Suspense>
      ),
    },
  ];
};
export default loginRouter;
