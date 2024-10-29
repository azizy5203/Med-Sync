import { X, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { logout } from "@/store/auth";

function Sidebar({ isSidebarOpen, toggleSidebar }) {
  const dispatch = useDispatch();

  return (
    <div
      className={`sidebar box-border lg:visible lg:w-[18%] lg:p-4 border lg:me-5 ${
        isSidebarOpen ? " visible w-full p-4 lg:me-5" : "invisible w-0"
      } transition-all duration-300 flex flex-col items-start justify-between lg:w-[25%] dark:border-none border border-primary bg-sideBar rounded-[24px] overflow-hidden`}>
      <div className="flex justify-between items-center w-full">
        <h3 className="text-primary text-2xl">MedSync</h3>
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
        className="flex gap-2">
        <span className="text-white font-medium text-lg">Logout</span>
        <LogOut
          color="background"
          size="20px"
        />
      </Button>
    </div>
  );
}

export default Sidebar;
