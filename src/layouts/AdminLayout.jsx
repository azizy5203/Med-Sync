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
  const [isSidebarOpen, setSidebarOpen] = useState(false); // Sidebar state
  const [desktopSidebarOpen, setdesktopSidebarOpen] = useState(false); // Sidebar state
  const navigate = useNavigate();

  const { setTheme, theme } = useTheme();

  // const dispatch = useDispatch();
  // function logoutUser() {
  //   dispatch(logout());
  // }

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen); // Toggle Mobile sidebar
  const toggleDesktopSidebar = () => setdesktopSidebarOpen(!desktopSidebarOpen); // Toggle Desktop sidebar

  return (
    <>
      <div className="flex p-5 h-screen bg-background">
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          desktopSidebarOpen={desktopSidebarOpen}
          toggleSidebar={toggleSidebar}
        />

        <div
          className={` lg:flex lg:flex-col lg:border lg:border-primary lg:visible lg:w-full transition-all duration-300 rounded-[24px] overflow-x-hidden ${
            isSidebarOpen
              ? "invisible w-0 p-0"
              : "flex flex-col visible w-full border border-primary"
          }`}>
          <div className="flex items-center justify-between border-b border-primary p-4 sticky">
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

          <div className="p-6 border border-red-500 h-[calc(100% - 73px)]">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
