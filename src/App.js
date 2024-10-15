import { ProConfigProvider } from "@ant-design/pro-components";
import React from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import rootRouter from "./router/rootRouter";
import { Layout } from "antd";

const App = () => (
  <ProConfigProvider dark>
    <Layout>
      <RouterProvider router={rootRouter} />
    </Layout>
  </ProConfigProvider>
);

export default App;
