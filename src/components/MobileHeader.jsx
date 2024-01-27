import Search from "../components/Search";
import logout_icon from "../assets/logout_icon.svg";
import { Avatar, HStack, Text, VStack } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const MobileHeader = ({ isMobileHeaderOpen, handleMobileHeader }) => {
  const { colorMode } = useColorMode();

  const overlayVariants = {
    open: { opacity: 1, display: "block" },
    closed: { opacity: 0, transitionEnd: { display: "none" } },
  };

  const animateMobileHeader = () => {
    {
      return {
        animation: isMobileHeaderOpen
          ? "slideIn 0.3s ease-out forwards "
          : "slideOut 0.3s ease-out forwards",
      };
    }
  };
  // console.log(isMobileHeaderOpen, "this is from mobile header ");
  return (
    <div className="absolute top-0 right-0 h-screen">
      <aside
        className={`${
          colorMode === "dark" ? "bg-black/90" : "bg-[#F7F8FA]"
        } h-full w-72 z-40 fixed px-3 right-0 top-0 shadow-xl`}
        style={animateMobileHeader()}
      >
        <div className="pt-10">
          <HStack>
            <Avatar src="/img/profile_img.png" size="lg" />
            <VStack>
              <Text
                fontSize="16px"
                fontWeight={400}
                textColor={colorMode === "dark" ? "#f4f4f4" : "#26282C"}
              >
                Justin Bergson
              </Text>
              <Text
                textColor={colorMode === "dark" ? "gray.300" : "#787486"}
                fontWeight={400}
                fontSize={"14px"}
              >
                Justin@gmail.com
              </Text>
            </VStack>
          </HStack>
        </div>
        <div className=" pt-7">
          <Search />
        </div>
        {/* <div className="flex mt-8 ">
          <img src={bell_icon} alt="settings" className="mr-3" />
          <span>Alerts</span>
        </div>
        <div className="flex mt-8 ">
          <img src={Settings_icon} alt="settings" className="mr-2" />
          <span>Settings</span>
        </div> */}
        <div className="flex mt-8">
          <img src={logout_icon} alt="settings" className="mr-2" />
          <span>Logout</span>
        </div>
      </aside>

      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 z-10"
        initial="closed"
        variants={overlayVariants}
        animate={isMobileHeaderOpen ? "open" : "closed"}
        onClick={handleMobileHeader}
      />
    </div>
  );
};

export default MobileHeader;
