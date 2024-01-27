import Stats from "./container/Stats";
import SalesChart from "./container/chart";
import TableContainer from "./container/table";
import TopPlatformsList from "./container/top-platform";
import { useColorMode, Box } from "@chakra-ui/react";
import { motion } from "framer-motion"

function Dashboard() {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const slideIn = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  };
  const MotionBox = motion(Box);

   const { colorMode } = useColorMode();
  return (
    <div className={`${colorMode === "dark" ? "bg-[#0F0F0F]" : "bg-[#FAFAFA]"} p-[16px]`}>
      <div className="flex flex-col lg:flex-row items-start justify-between gap-4 w-full">
        <MotionBox 
          w={{ base: "full", xl: "60%", lg: "50%", md: "full" }}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <SalesChart />
        </MotionBox>
        <MotionBox 
          w={{ base: "full", xl: "40%", lg: "50%", md: "full" }}
          initial="hidden"
          animate="visible"
          variants={slideIn}
        >
          <Stats />
        </MotionBox>
      </div>
      <div className="flex flex-col lg:flex-row items-start justify-between gap-4 w-full mt-5">
        <MotionBox 
          w={{ base: "full", xl: "60%", lg: "50%", md: "full" }}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <TableContainer />
        </MotionBox>
        <MotionBox 
          w={{ base: "full", xl: "40%", lg: "50%", md: "full" }}
          initial="hidden"
          animate="visible"
          variants={slideIn}
        >
          <TopPlatformsList />
        </MotionBox>
      </div>
    </div>
  )
}

export default Dashboard;

