import Stats from "./container/Stats";
import SalesChart from "./container/chart";
import TableContainer from "./container/table";
import TopPlatformsList from "./container/top-platform";
import { useColorMode, Box } from "@chakra-ui/react";
function Dashboard() {
  const { colorMode } = useColorMode();
  return (
    // <div
    //   className={`${
    //     colorMode === "dark" ? "bg-[#0F0F0F]" : "bg-[#FAFAFA]"
    //   } space-y-6 p-[16px]`}
    // >
    //   <div className="flex flex-col xl:flex-row items-start w-full justify-evenly">
    //     <SalesChart />
    //     <Stats />
    //   </div>
    // </div>
    <div
      className={`${
        colorMode === "dark" ? "bg-[#0F0F0F]" : "bg-[#FAFAFA]"
      } p-[16px]`}
    >
      <div className="flex flex-col lg:flex-row items-start justify-between gap-4 w-full">
        <Box w={{ base: "full", xl: "60%", lg: "50%" }}>
          <SalesChart />
        </Box>
        <Box w={{ base: "full", xl: "40%", lg: "50%" }}>
          <Stats />
        </Box>
      </div>
      <div className="flex flex-col lg:flex-row items-start justify-between gap-4 w-full">
        <Box w={{ base: "full", xl: "60%", lg: "50%" }}>
          <TableContainer />
        </Box>
        <Box w={{ base: "full", xl: "40%", lg: "50%" }}>
          <TopPlatformsList />
        </Box>
      </div>
    </div>
  );
}

export default Dashboard;

{
  /* <div className="flex flex-col md:flex-row items-start w-full justify-evenly">
  <TableContainer />
  <TopPlatformsList />
</div>; */
}
