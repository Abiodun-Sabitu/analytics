import Stats from "./container/Stats";
import SalesChart from "./container/chart";
import TableContainer from "./container/table";
import TopPlatformsList from "./container/top-platform";
import { useColorMode, Box } from "@chakra-ui/react";
function Dashboard() {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const slideIn = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  const { colorMode } = useColorMode();
  return (
    <div
      className={`${
        colorMode === "dark" ? "bg-[#0F0F0F]" : "bg-[#FAFAFA]"
      } p-[16px]`}
    >
      <div className="flex flex-col lg:flex-row items-start justify-between gap-4 w-full">
        <Box w={{ base: "full", xl: "60%", lg: "50%", md: "full" }}>
          <SalesChart />
        </Box>
        <Box w={{ base: "full", xl: "40%", lg: "50%", md: "full" }}>
          <Stats />
        </Box>
      </div>
      <div className="flex flex-col lg:flex-row items-start justify-between gap-4 w-full mt-5">
        <Box w={{ base: "full", xl: "60%", lg: "50%", md: "full" }}>
          <TableContainer />
        </Box>
        <Box w={{ base: "full", xl: "40%", lg: "50%", md: "full" }}>
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
