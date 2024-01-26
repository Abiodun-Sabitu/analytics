import Stats from "./container/Stats";
import SalesChart from "./container/chart";
import TableContainer from "./container/table";
import TopPlatformsList from "./container/top-platform";
import { useColorMode } from "@chakra-ui/react";
function Dashboard() {
  const { colorMode } = useColorMode();
  return (
    <div
      className={`${
        colorMode === "dark" ? "bg-[#0F0F0F]" : "bg-[#FAFAFA]"
      } space-y-6 p-[16px]`}
    >
      <div className="flex flex-col lg:flex-row items-start w-full justify-between">
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
