import { React } from "react";
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

/*
1. The tiny black icon to the right of every menu on the sidebar is implemented as a background
2. DO NOT remove the properties of the className inside the <NavLink> tag
3. Asides from the 1st & 2nd <NavLink> elements all other ones below are currently being prevented from Routing
4. The prevented routes can be removed and pointed to the correct routes when more figma screens are made available
*/

const Sidebar = () => {
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
    <>
      <aside className="w-[75px] min-h-screen flex bg-[#F7F8FA] shadow-md">
        <nav id="sidebar">
          <NavLink className="flex justify-center">
            <img src={logo} alt="logo" className="mt-5 h-10" />
          </NavLink>

          <ul className="mt-5 w-[4.6rem] grid gap-6">
            <li>
              <NavLink
                to="/"
                className="flex justify-between"
                style={activeState}
              >
                <img src={dashboard_icon} alt="overview" className="px-6" />
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
          </ul>

          <ul className=" mt-28 grid gap-7 place-content-center">
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
    </>
  );
};

export default Sidebar;
