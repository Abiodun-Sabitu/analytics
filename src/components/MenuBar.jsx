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
import { useColorMode } from "@chakra-ui/react"
import ToggleSwitch from "./Switch";
import { motion } from "framer-motion"


// eslint-disable-next-line react/prop-types
const MenuBar = ({ isOpen, toggleMenu }) => {
    const { colorMode } = useColorMode()
    const activeState = ({ isActive }) => {
        return {
        backgroundImage: isActive ? `url(${active_icon})` : "",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
        };
    };

    const menuVariants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "-100%" },
    };

    const overlayVariants = {
        open: { opacity: 1, display: 'block' },
        closed: { opacity: 0, transitionEnd: { display: 'none' } },
    };

    const preventRouting = (e) => {
        e.preventDefault();
    };

  return (
    <div className="w-full absolute  top-0 left-0 h-screen">
    <motion.aside
              
        className={`w-[75px] fixed z-50 h-screen ${colorMode === "dark" ? "bg-black/80" : "bg-[#F7F8FA]"} shadow-md`}
        variants={menuVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.5 }}
      > 
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
                <img src={colorMode ==="dark" ? "/overview_light.png" : dashboard_icon} alt="overview" className="px-6" />
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
          </motion.aside>
           <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 z-10"
        variants={overlayVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        onClick={toggleMenu} 
      />
    </div>
  )
}

export default MenuBar