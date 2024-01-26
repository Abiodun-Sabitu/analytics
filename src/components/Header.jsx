import Search from "../components/Search";
import Dropdown from "../components/UserProfile";
import date_icon from "../assets/date_icon.svg";
import bell_icon from "../assets/bell_icon.svg";
import { useColorMode } from "@chakra-ui/react"
import todaysDate from "../helpers/Date";

const Header = () => {
  const { colorMode } = useColorMode()
  const getTodaysDate = todaysDate();

  return (
    <div>
      <header className={`shadow h-20 w-full ${colorMode === "dark" ? "bg-black/80 text-gray-200" : "bg-[#FAFAFA]"} flex flex-col justify-center`}>
        <div className="border mx-6 flex">
          <div className="border w-6/12 pt-2">
            <h3 className=" text-[1.3rem] font-semibold">Dashboard</h3>
          </div>
          <div className="border w-full flex">
            <Search />
            <div
              className="flex pt-3 justify-around border"
              style={{ fontWeight: 500 }}
            >
              <img
                src={date_icon}
                alt="date"
                className=" h-5 mr-4 mt-[0.18rem]"
              />
              {getTodaysDate}
            </div>
            <div className="rounded-full border w-10 h-10 grid place-content-center mt-[0.35rem]">
              <img src={bell_icon} alt="notification" />
            </div>

            <Dropdown />
          </div>
        </div>

      </header>
    </div>
  );
};

export default Header;
