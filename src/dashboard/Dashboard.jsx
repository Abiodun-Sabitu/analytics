import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import  Dash from "../Dashboard";
const Dashboard = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className=" w-full">
          <Header />
          <Dash />
          <Outlet />
        </main>
      </div>
    </>
  );
};
export default Dashboard;
