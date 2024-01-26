import Stats from "./container/Stats";
import SalesChart from "./container/chart";
import TableContainer from "./container/table"
import TopPlatformsList from "./container/top-platform";

function Dashboard() {
  return (
    <div className="bg-[#FAFAFA] space-y-6 p-[16px]">
          <div className="flex flex-col md:flex-row items-start w-full justify-evenly">
              <SalesChart />
            <Stats />
          </div>
          <div className="flex flex-col md:flex-row items-start w-full justify-evenly">
              <TableContainer />
          <TopPlatformsList />
          </div>
    </div>
  );
}

export default Dashboard;
