import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import { Outlet } from "react-router-dom";
import Dash from "../Dashboard";
import Loader from "../loader";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [isMobileHeaderOpen, setIsMobileHeaderOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleMobileHeader = () => {
    setIsMobileHeaderOpen(!isMobileHeaderOpen);
    // console.log(isMobileHeaderOpen);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  if (isLoading)
    return (
      <div className="relative max-h-screen w-full overflow-hidden">
        <div className="blur-lg">
          <Dash />
        </div>
        <Loader />
      </div>
    );

  return (
    <>
      <div className="flex relative">
        <Sidebar />
        <main className=" w-full ml-0 md:ml-[75px]">
          <Header handleMobileHeader={handleMobileHeader} />
          <div className=" lg:hidden">
            <MobileHeader handleMobileHeader={handleMobileHeader} isMobileHeaderOpen={isMobileHeaderOpen} />
          </div>
          <Dash />

          <Outlet />
        </main>
      </div>
    </>
  );
};
export default Dashboard;
