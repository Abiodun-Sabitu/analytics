import React from "react";
import logo from "../assets/logo.svg";
import dashboard_icon from "../assets/dashboard_icon.svg";
import performance_icon from "../assets/performance_icon.svg";
import profile_icon from "../assets/profile_icon.svg";
import products_icon from "../assets/products_icon.svg";
import others_icon from "../assets/others_icon.svg";
import settings_icon from "../assets/settings_icon.svg";
import discounts_icon from "../assets/discounts_icon.svg";
import info_icon from "../assets/info_icon.svg";
import logout_icon from "../assets/logout_icon.svg";
import overview from "../assets/overview2.svg";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const activeState = ({ isActive }) => {
    return {
      filter: isActive
        ? "saturate(0%) grayscale(40%) brightness(100%) contrast(80%)"
        : "",
    };
  };
  return (
    <>
      <aside className="border w-[80px] min-h-screen flex justify-center">
        <nav id="sidebar">
          <NavLink>
            <img src={logo} alt="logo" className="mt-5" />
          </NavLink>

          <ul className="mt-5 grid gap-7 place-content-center">
            <li>
              <NavLink to="/" style={activeState}>
                <img src={overview} alt="overview" />
              </NavLink>
            </li>
            <li>
              <NavLink to="service" style={activeState}>
                <img src={performance_icon} alt="performance" />
              </NavLink>
            </li>
            <li>
              <NavLink>
                <img src={profile_icon} alt="profile" />
              </NavLink>
            </li>
            <li>
              <NavLink>
                <img src={products_icon} alt="products" />
              </NavLink>
            </li>
            <li>
              <NavLink>
                <img src={discounts_icon} alt="discounts" />
              </NavLink>
            </li>
            <li>
              <NavLink>
                <img src={info_icon} alt="more_info" />
              </NavLink>
            </li>
            <li>
              <NavLink>
                <img src={discounts_icon} alt="discounts" />
              </NavLink>
            </li>
            <li>
              <NavLink>
                <img src={info_icon} alt="more_info" />
              </NavLink>
            </li>
          </ul>

          <ul className=" mt-28 grid gap-7 place-content-center">
            <li>
              <NavLink>
                <img src={others_icon} alt="others" />
              </NavLink>
            </li>
            <li>
              <NavLink>
                <img src={settings_icon} alt="settings" />
              </NavLink>
            </li>
            <li>
              <NavLink>
                <img src={logout_icon} alt="logout" />
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
