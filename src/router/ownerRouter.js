import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Orders from "../pages/Orders";
import Store from "../pages/Store";
import Inventory from "../pages/Inventory";
import Statistics from "../pages/Statistics";
import StoreDetail from "../pages/Store/StoreDetail";

const OwnerRoutes = () => (
  <Routes>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/orders" element={<Orders />} />
    <Route path="/store" element={<Store />} />
    <Route path="/store/:id" element={<StoreDetail />} />{" "}
    <Route path="/inventory" element={<Inventory />} />
    <Route path="/statistics" element={<Statistics />} />
  </Routes>
);

export default OwnerRoutes;
