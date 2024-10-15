import { Route, Routes } from "react-router-dom";
import Store from "../../pages/Store";
import Dashboard from "../../pages/Dashboard";
import Inventory from "../../pages/Inventory";
import Orders from "../../pages/Orders";
import Statistics from "../../pages/Statistics";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/inventory" element={<Inventory />}></Route>
      <Route path="/orders" element={<Orders />}></Route>
      {/* <Route path="/store" element={<Store />}></Route> */}
      <Route path="/statistics" element={<Statistics />}></Route>
    </Routes>
  );
}
export default AppRoutes;
