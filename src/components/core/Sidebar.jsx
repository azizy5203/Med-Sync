import { X, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { logout } from "@/store/auth";
import Logo from "@/assets/img/logo.svg";
import { useState } from "react";

function Sidebar({ isSidebarOpen, desktopSidebarOpen, toggleSidebar }) {
  const dispatch = useDispatch();

  return (
    <div
      className={`sidebar box-border lg:visible lg:w-[18%] lg:p-4 border lg:me-5 ${
        isSidebarOpen ? " visible w-full p-4 lg:me-5" : "invisible w-0"
      } transition-all duration-300 flex flex-col items-start justify-between ${
        desktopSidebarOpen ? "lg:w-[25%]" : "lg:w-[5%]"
      } dark:border-none border border-primary bg-sideBar rounded-[24px] overflow-hidden`}>
      <div className="flex justify-between items-center w-full">
        <div
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
        </div>
        <Button
          onClick={toggleSidebar}
          variant="primary"
          size="icon"
          className="lg:hidden ms-auto">
          <X color="background" />
        </Button>
      </div>
      <Button
        onClick={() => dispatch(logout())}
        variant="primary"
        size={desktopSidebarOpen ? "default" : "icon"}
        className="flex gap-2">
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
