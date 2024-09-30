import { useNavigate } from "react-router-dom";

import { Outlet } from "react-router-dom";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "@/store/auth";

import Header from "@/components/core/Header";

const AdminLayout = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  // const dispatch = useDispatch();
  // function logoutUser() {
  //   dispatch(logout());
  // }
  // const [isVisible, setVisible] = useState(true);
  return (
    <>
      <div className="px-10 py-12 grid grid-cols-admin gap-6 h-screen bg-background">
        <div className="bg-sideBar rounded-[24px]"></div>
        <div className="border border-primary rounded-[24px] p-6">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
