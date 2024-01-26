import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className=" w-full">
          <Header />
          <Outlet />
        </main>
      </div>
    </>
  );
};
export default Dashboard;
