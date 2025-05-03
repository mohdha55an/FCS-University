// Components/Layout.js
import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet /> {/* This is where nested routes will be rendered */}
    </div>
  );
};

export default Layout;
