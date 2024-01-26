import Search from "../components/Search";
import Dropdown from "../components/UserProfile";
import date_icon from "../assets/date_icon.svg";
import bell_icon from "../assets/bell_icon.svg";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/react";
import todaysDate from "../utils/date";

const Header = ({ handleMobileHeader }) => {
  const { colorMode } = useColorMode();
  const getTodaysDate = todaysDate();

  return (
    <>
      <header
        className={`shadow-md h-20 w-full border-b border-[#E5EAEF] ${
          colorMode === "dark" ? "bg-black/90 text-gray-200" : "bg-[#FAFAFA]"
        } flex flex-col justify-center`}
      >
        <div className=" lg:mx-4 mx-2 flex">
          <div className=" xl:w-6/12 w-4/12 pt-2">
            <h3 className=" text-[1.3rem] font-semibold">Dashboard</h3>
          </div>
          {/* Big screen header elements*/}
          <div className=" w-full flex justify-between hidden lg:flex">
            <Search />
            <div
              className="flex pt-3 justify-around"
              style={{ fontWeight: 500 }}
            >
              <img
                src={date_icon}
                alt="date"
                className=" h-5 mr-4 mt-[0.18rem]"
              />
              {getTodaysDate}
            </div>
            <div className="rounded-full w-10 h-10 border grid place-content-center mt-[0.35rem]">
              <img src={bell_icon} alt="notification" />
            </div>
            <Dropdown />
          </div>
          {/* medium - small screen header elements*/}
          <div className=" flex justify-end w-full pt-2 lg:hidden cursor-pointer">
            <HamburgerIcon
              boxSize={7}
              color={"#34CAA5"}
              onClick={handleMobileHeader}
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
