import { X, LogOut, UsersRound, ClipboardList } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { logout } from "@/store/auth";
import Logo from "@/assets/img/logo.svg";
import { NavLink, Link } from "react-router-dom";

function Sidebar({ isSidebarOpen, desktopSidebarOpen, toggleSidebar }) {
  const dispatch = useDispatch();

  return (
    <div
      className={`sidebar transition-all duration-300 flex flex-col items-start gap-8 box-border lg:visible lg:p-4 border lg:me-5 
        ${isSidebarOpen ? " visible w-full p-4 lg:me-5" : "invisible w-0"} 
        ${desktopSidebarOpen ? "lg:w-[25%]" : "lg:w-[5%]"} 
        dark:border-none border border-primary bg-sideBar rounded-[24px] overflow-hidden`}>
      <div className="flex justify-between items-center w-full">
        <Link
          to="/"
          className={`flex items-center gap-2 ${
            !desktopSidebarOpen && !isSidebarOpen ? "" : ""
          }`}>
          <img
            src={Logo}
            alt="MedSync"
            className="transition-all ps-4 duration-300 w-10"
          />
          <h3
            className={`text-primary text-2xl transition-all duration-300 ${
              desktopSidebarOpen || isSidebarOpen
                ? "block w-auto"
                : "hidden w-0"
            }`}>
            MedSync
          </h3>
        </Link>
        <Button
          onClick={toggleSidebar}
          variant="primary"
          size="icon"
          className="lg:hidden ms-auto">
          <X color="background" />
        </Button>
      </div>

      <ul
        className={`flex flex-col gap-4 justify-center w-full ${
          !desktopSidebarOpen ? "!mx-auto" : "!mx-0"
        } ${isSidebarOpen ? "!mx-0" : "!mx-auto"}`}>
        <li>
          <NavLink
            to="/users"
            className="sidebar-link flex items-center gap-3 p-4 hover:bg-secondary rounded-sm whitespace-nowrap">
            <UsersRound
              className="stroke-primary min-w-6"
              size="24px"
            />
            <span
              className={!(desktopSidebarOpen || isSidebarOpen) && "hidden"}>
              Users
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tasks"
            className="sidebar-link flex items-center gap-3 p-4 hover:bg-secondary rounded-sm whitespace-nowrap">
            <ClipboardList
              className="stroke-primary min-w-6"
              size="24px"
            />
            <span
              className={!(desktopSidebarOpen || isSidebarOpen) && "hidden"}>
              Tasks
            </span>
          </NavLink>
        </li>
      </ul>

      <Button
        onClick={() => dispatch(logout())}
        variant="primary"
        size={desktopSidebarOpen ? "default" : "icon"}
        className="flex gap-2 mt-auto mx-auto">
        <LogOut
          className="rotate-180"
          color="background"
          size="20px"
        />
        {desktopSidebarOpen && (
          <span className="text-white font-medium text-lg">Logout</span>
        )}
      </Button>
    </div>
  );
}

export default Sidebar;
