import React from "react";
import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import "../styles/Layout.scss";

const Layout: React.FC = () => {
  return (
    <div className="app-layout">
      <div className="layout-body container">
        <Sidebar />
        <main className="layout-main">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
