import logo from "../assets/logo.svg";
import dashboard_icon from "../assets/dashboard_icon.svg";
import performance_icon from "../assets/performance_icon.svg";
import profile_icon from "../assets/profile_icon.svg";
import products_icon from "../assets/products_icon.svg";
import others_icon from "../assets/others_icon.svg";
import settings_icon from "../assets/settings_icon.svg";
import discounts_icon from "../assets/discounts_icon.svg";
import info_icon from "../assets/info_icon.svg";
import active_icon from "../assets/active_icon.svg";
import logout_icon from "../assets/logout_icon.svg";
import { NavLink } from "react-router-dom";
import { useColorMode } from "@chakra-ui/react";
import ToggleSwitch from "./Switch";

/*
1. The tiny black icon to the right of every menu on the sidebar is implemented as a background
2. DO NOT remove the properties of the className inside the <NavLink> tag
3. Asides from the 1st & 2nd <NavLink> elements all other ones below are currently being prevented from Routing
4. The prevented routes can be removed and pointed to the correct routes when more figma screens are made available
*/

const Sidebar = () => {
  const { colorMode } = useColorMode();
  // This is the style that applies when a <Navlink/> is active.
  const activeState = ({ isActive }) => {
    return {
      backgroundImage: isActive ? `url(${active_icon})` : "",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right",
    };
  };

  // prevent routing on same Navlink elements
  const preventRouting = (e) => {
    e.preventDefault();
  };

  return (
    <div className="hidden md:block fixed top-0 left-0">
      <aside className={`w-[75px] relative  h-screen  ${colorMode === "dark" ? "#161b22" : "bg-[#F7F8FA]"} shadow-md`}>
        <nav className="space-y-4" id="sidebar">
          <NavLink className="flex justify-center">
            <img src={logo} alt="logo" className="mt-5 h-10" />
          </NavLink>

          <ul className="w-full space-y-4">
            <li>
              <NavLink
                to="/"
                className="flex justify-between"
                style={activeState}
              >
                <img
                  src={
                    colorMode === "dark"
                      ? "/overview_light.png"
                      : dashboard_icon
                  }
                  alt="overview"
                  className="px-6"
                />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="service"
                className="flex justify-between "
                style={activeState}
              >
                <img
                  src={performance_icon}
                  alt="performance"
                  className="px-6"
                />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/default"
                className="flex justify-between"
                style={activeState}
                onClick={preventRouting}
              >
                <img src={profile_icon} alt="profile" className="px-6" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/default"
                className="flex justify-between"
                style={activeState}
                onClick={preventRouting}
              >
                <img src={products_icon} alt="products" className="px-6" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/default"
                className="flex justify-between"
                style={activeState}
                onClick={preventRouting}
              >
                <img src={discounts_icon} alt="discounts" className="px-6" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/default"
                className="flex justify-between"
                style={activeState}
                onClick={preventRouting}
              >
                <img src={info_icon} alt="more_info" className="px-6" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/default"
                className="flex justify-between"
                style={activeState}
                onClick={preventRouting}
              >
                <img src={discounts_icon} alt="discounts" className="px-6" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/default"
                className="flex justify-between"
                style={activeState}
                onClick={preventRouting}
              >
                <img src={info_icon} alt="more_info" className="px-6" />
              </NavLink>
            </li>
            <li className="">
              <ToggleSwitch />
            </li>
          </ul>

          <ul className="absolute bottom-10 grid gap-7 place-content-center">
            <li>
              <NavLink
                to="/default"
                className="flex justify-between"
                style={activeState}
                onClick={preventRouting}
              >
                <img src={others_icon} alt="others" className="px-6" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/default"
                className="flex justify-between"
                style={activeState}
                onClick={preventRouting}
              >
                <img src={settings_icon} alt="settings" className="px-6" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/default"
                className="flex justify-between"
                style={activeState}
                onClick={preventRouting}
              >
                <img src={logout_icon} alt="logout" className="px-6" />
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
