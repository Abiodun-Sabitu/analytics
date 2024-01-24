import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};
export default Dashboard;
