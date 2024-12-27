import React, { useContext } from "react";
import { Sidebar, Menu, MenuItem, menuClasses } from "react-pro-sidebar";
import { NavLink } from "react-router-dom";
import DataContext from "../../context/Context";
import useWindowSize from "../../Api/useWindowSize";
import { HomeIcon } from "@heroicons/react/24/outline";
import Admindetails from "./Admindetails";
import { UserGroupIcon } from "@heroicons/react/24/solid";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { CreditCardIcon } from "@heroicons/react/24/solid";
import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/solid";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { ChartBarIcon } from "@heroicons/react/24/outline";
import { ChartPieIcon } from "@heroicons/react/24/solid";
import { PresentationChartLineIcon } from "@heroicons/react/24/solid";
import { MapPinIcon } from "@heroicons/react/24/solid";

const SideNav = ({}) => {
  const { collapsed, setCollapsed, mode, userName, userDetails } =
    useContext(DataContext);
  const { width } = useWindowSize();
  const NavStyle = ({ isActive }) => ({ color: isActive ? "red" : undefined });
  const menuHover = {
    ["." + menuClasses.button]: { "&:hover": { color: "red" } },
  };

  return (
    <Sidebar
      rootStyles={{}}
      backgroundColor={mode ? "#374151" : "#6B7280"}
      collapsed={width < 768 ? true : collapsed}
      collapsedWidth="60px"
    >
      <Admindetails
        width={width}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        mode={mode}
        userName={userName}
        userDetails={userDetails}
      />
      <div
        className={` overflow-y-scroll overflow-x-clip scroll-mb-8  scrollbar-thin dark:scrollbar-track-gray-700 dark:scrollbar-thumb-gray-800 scrollbar-track-gray-500 scrollbar-thumb-gray-600 ${
          width < 768 ? "h-5/6 " : collapsed && width >= 768 ? "h-5/6" : "h-3/5"
        } `}
      >
        <Menu
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              // only apply styles on first level elements of the tree
              if (level === 0)
                return {
                  color: mode ? "white" : "3d3f42",
                  marginLeft: width < 768 || collapsed ? "-10px" : "0px",
                };
            },
          }}
        >
          <MenuItem
            rootStyles={menuHover}
            component={<NavLink to={"/"} style={NavStyle} />}
            icon={<HomeIcon className="w-4 md:w-6" />}
          >
            Dashboard
          </MenuItem>
          <MenuItem
            rootStyles={menuHover}
            component={<NavLink to={"/team"} style={NavStyle} />}
            icon={<UserGroupIcon className="w-4 md:w-6" />}
          >
            Team
          </MenuItem>
          <MenuItem
            rootStyles={menuHover}
            component={<NavLink to={"/contact"} style={NavStyle} />}
            icon={<ClipboardDocumentCheckIcon className="w-4 md:w-6" />}
          >
            Contact Information
          </MenuItem>
          <MenuItem
            rootStyles={menuHover}
            component={<NavLink to={"/invoice"} style={NavStyle} />}
            icon={<CreditCardIcon className="w-4 md:w-6 " />}
          >
            Invoice
          </MenuItem>
          <MenuItem
            rootStyles={menuHover}
            component={<NavLink to={"/personal-info"} style={NavStyle} />}
            icon={<UserCircleIcon className="w-4 md:w-6" />}
          >
            Profile Form
          </MenuItem>
          <MenuItem
            rootStyles={menuHover}
            component={<NavLink to={"/calendar"} style={NavStyle} />}
            icon={<CalendarDaysIcon className="w-4 md:w-6" />}
          >
            Calendar
          </MenuItem>
          <MenuItem
            rootStyles={menuHover}
            component={<NavLink to={"/faq"} style={NavStyle} />}
            icon={<InformationCircleIcon className="w-4 md:w-6" />}
          >
            Faq
          </MenuItem>
          <MenuItem
            rootStyles={menuHover}
            component={<NavLink to={"/barchart"} style={NavStyle} />}
            icon={<ChartBarIcon className="w-4 md:w-6" />}
          >
            Bar chat
          </MenuItem>
          <MenuItem
            rootStyles={menuHover}
            component={<NavLink to={"/piechart"} style={NavStyle} />}
            icon={<ChartPieIcon className="w-4 md:w-6" />}
          >
            Pie Chart
          </MenuItem>
          <MenuItem
            rootStyles={menuHover}
            component={<NavLink to={"/linechart"} style={NavStyle} />}
            icon={<PresentationChartLineIcon className="w-4 md:w-6" />}
          >
            Line Chart
          </MenuItem>
          <MenuItem
            rootStyles={menuHover}
            component={<NavLink to={"/geography"} style={NavStyle} />}
            icon={<MapPinIcon className="w-4 md:w-6" />}
          >
            Geography
          </MenuItem>
        </Menu>
      </div>
    </Sidebar>
  );
};

export default SideNav;
