import { React, useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const [isMobileHeaderOpen, setIsMobileHeaderOpen] = useState(false);

  const handleMobileHeader = () => {
    setIsMobileHeaderOpen(!isMobileHeaderOpen);
    // console.log(isMobileHeaderOpen);
  };

  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className=" w-full">
          {isMobileHeaderOpen}
          <Header handleMobileHeader={handleMobileHeader} />
          <Outlet />
          <div className=" lg:hidden">
            <MobileHeader isMobileHeaderOpen={isMobileHeaderOpen} />
          </div>
        </main>
      </div>
    </>
  );
};
export default Dashboard;
