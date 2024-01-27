import Stats from "./container/Stats";
import SalesChart from "./container/chart";
import TableContainer from "./container/table";
import TopPlatformsList from "./container/top-platform";
import { useColorMode } from "@chakra-ui/react";
import { motion } from 'framer-motion';

''
function Dashboard() {
  const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
};

const slideIn = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8 } }
};

  const { colorMode } = useColorMode();
  return (
     <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className={`${colorMode === "dark" ? "bg-[#0F0F0F]" : "bg-[#FAFAFA]"} space-y-6 p-[16px]`}
    >
      <motion.div className="flex flex-col lg:flex-row items-start w-full justify-evenly" variants={slideIn}>
        <SalesChart />
        <Stats />
      </motion.div>
      <motion.div className="flex flex-col md:flex-row items-start w-full justify-evenly" variants={slideIn}>
        <TableContainer />
        <TopPlatformsList />
      </motion.div>
    </motion.div>
  );
}

export default Dashboard;
