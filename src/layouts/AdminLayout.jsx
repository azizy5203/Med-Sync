import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "@/store/auth";
import Header from "@/components/core/Header";
import Sidebar from "@/components/core/Sidebar";
import { Button } from "@/components/ui/button";
import { X, Sidebar as SideIcon, Sun, Moon } from "lucide-react";

import { useTheme } from "@/providers/theme-provider.jsx";

const AdminLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [desktopSidebarOpen, setdesktopSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const { setTheme, theme } = useTheme();

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const toggleDesktopSidebar = () => setdesktopSidebarOpen(!desktopSidebarOpen);

  return (
    <div className="flex p-5 h-screen bg-background">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        desktopSidebarOpen={desktopSidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      <div
        className={`lg:flex lg:flex-col lg:border lg:border-primary lg:visible lg:w-full transition-all duration-300 rounded-[24px] overflow-x-hidden ${
          isSidebarOpen
            ? "invisible w-0 p-0"
            : "flex flex-col visible w-full border border-primary"
        }`}>
        {/* Header area */}
        <div className="flex items-center justify-between border-b border-primary p-4 sticky top-0 bg-background z-10">
          <Button
            onClick={toggleSidebar}
            variant="primary"
            size="icon"
            className="lg:hidden">
            <SideIcon color="background" />
          </Button>
          <Button
            onClick={toggleDesktopSidebar}
            variant="primary"
            size="icon"
            className="hidden lg:inline-flex">
            <SideIcon color="background" />
          </Button>

          <Button
            className="ms-auto"
            onClick={() => setTheme(theme == "light" ? "dark" : "light")}
            variant="primary"
            size="icon">
            {theme == "light" ? (
              <Sun color="background" />
            ) : (
              <Moon color="background" />
            )}
          </Button>
        </div>

        {/* Outlet content area with scrolling */}
        <div className="scrollbar-style flex-1 overflow-y-auto p-6 my-4 me-[10px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
