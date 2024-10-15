import React from "react";
import AppHeader from "../components/AppHeader";
import SideMenu from "../components/SideMenu";
import AppFooter from "../components/AppFooter";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="App">
      <AppHeader />
      <div className="SideMenuAndPageContent">
        <SideMenu />
        <div className="PageContent">
          <Outlet />
        </div>
      </div>
      <AppFooter />
    </div>
  );
};

export default Layout;
