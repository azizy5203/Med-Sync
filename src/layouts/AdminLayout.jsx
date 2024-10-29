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
  const navigate = useNavigate();

  const { setTheme, theme } = useTheme();

  // const dispatch = useDispatch();
  // function logoutUser() {
  //   dispatch(logout());
  // }

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen); // Toggle sidebar

  return (
    <>
      <div className="flex p-5 h-screen bg-background">
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />

        <div
          className={` md:flex md:flex-col md:border md:border-primary md:visible md:w-full transition-all duration-300 rounded-[24px] overflow-x-hidden ${
            isSidebarOpen
              ? "invisible w-0 p-0"
              : "flex flex-col visible w-full border border-primary"
          }`}>
          <div className="flex items-center justify-between border-b border-primary  p-4">
            <Button
              onClick={toggleSidebar}
              variant="primary"
              size="icon"
              className="md:hidden">
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

          <div className="p-6">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
