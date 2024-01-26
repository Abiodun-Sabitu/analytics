import React from "react";
import Search from "../components/Search";
import Settings_icon from "../assets/Settings_icon.svg";
import logout_icon from "../assets/logout_icon.svg";
import bell_icon from "../assets/bell_icon.svg";
import { Avatar, HStack, Text, VStack } from "@chakra-ui/react";

const MobileHeader = ({ isMobileHeaderOpen }) => {
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
    <>
      <aside
        className="h-[90%] w-72 z-40 absolute px-3 right-0 bg-white shadow-xl"
        style={animateMobileHeader()}
      >
        <div className="pt-10">
          <HStack>
            <Avatar src="/img/profile_img.png" size="lg" />
            <VStack>
              <Text fontSize="16px" fontWeight={400} textColor="#26282C">
                Justin Bergson
              </Text>
              <Text textColor={"#787486"} fontWeight={400} fontSize={"14px"}>
                Justin@gmail.com
              </Text>
            </VStack>
          </HStack>
        </div>
        <div className=" pt-7">
          <Search />
        </div>
        <div className="flex mt-8 ">
          <img src={bell_icon} alt="settings" className="mr-3" />
          <span>Alerts</span>
        </div>
        <div className="flex mt-8 ">
          <img src={Settings_icon} alt="settings" className="mr-2" />
          <span>Settings</span>
        </div>
        <div className="flex mt-8">
          <img src={logout_icon} alt="settings" className="mr-2" />
          <span>Logout</span>
        </div>
      </aside>
    </>
  );
};

export default MobileHeader;
