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
      className={`sidebar box-border lg:visible lg:w-[18%] lg:p-4 border lg:me-5 ${
        isSidebarOpen ? " visible w-full p-4 lg:me-5" : "invisible w-0"
      } transition-all duration-300 flex flex-col items-start gap-8 ${
        desktopSidebarOpen ? "lg:w-[25%]" : "lg:w-[5%]"
      } dark:border-none border border-primary bg-sideBar rounded-[24px] overflow-hidden`}>
      <div className="flex justify-between items-center w-full">
        <Link
          to="/"
          className={`flex items-center gap-2 ${
            !desktopSidebarOpen && !isSidebarOpen ? "mx-auto" : ""
          }`}>
          <img
            src={Logo}
            alt="MedSync"
            className={`transition-all duration-300 ${
              desktopSidebarOpen || isSidebarOpen ? "w-5" : "w-10"
            }`}
          />
          <h3
            className={`text-primary text-2xl transition-all duration-300 ${
              desktopSidebarOpen || isSidebarOpen
                ? "opacity-100 w-auto"
                : "opacity-0 w-0"
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
        <li
          className={`sidebar-link hover:bg-secondary rounded-md ${
            desktopSidebarOpen || isSidebarOpen ? "p-4" : "px-2"
          }`}>
          <NavLink
            to="/users"
            className="flex items-center gap-3">
            <UsersRound
              className="stroke-primary"
              size={desktopSidebarOpen || isSidebarOpen ? "20px" : "40px"}
            />
            {(desktopSidebarOpen || isSidebarOpen) && <span>Users</span>}
          </NavLink>
        </li>
        <li
          className={`sidebar-link hover:bg-secondary rounded-md ${
            desktopSidebarOpen || isSidebarOpen ? "p-4" : "px-2"
          }`}>
          <NavLink
            to="/tasks"
            className="flex items-center gap-3">
            <ClipboardList
              className="stroke-primary"
              size={desktopSidebarOpen || isSidebarOpen ? "20px" : "40px"}
            />
            {(desktopSidebarOpen || isSidebarOpen) && <span>Users</span>}
          </NavLink>
        </li>
      </ul>

      <Button
        onClick={() => dispatch(logout())}
        variant="primary"
        size={desktopSidebarOpen ? "default" : "icon"}
        className="flex gap-2 mt-auto">
        {desktopSidebarOpen && (
          <span className="text-white font-medium text-lg">Logout</span>
        )}
        <LogOut
          color="background"
          size="20px"
        />
      </Button>
    </div>
  );
}

export default Sidebar;
