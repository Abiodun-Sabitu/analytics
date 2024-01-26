import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import  Dash from "../Dashboard";
import Loader from "../loader"
import { useEffect, useState } from "react"

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000)

    return () => clearTimeout(timeout)
  }, [])

  if (isLoading) return (
    <div className="relative max-h-screen w-full overflow-hidden">
      <div className="blur-lg">
        <Dash />
      </div>
      <Loader />
    </div>
  )

  return (
    <>
      <div className="flex relative">
        
        <Sidebar />
        <main className=" w-full ml-[75px]">
          <Header />
          <Dash />
          
          <Outlet />
        </main>
      </div>
    </>
  );
};
export default Dashboard;
