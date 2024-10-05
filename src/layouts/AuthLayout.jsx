import { Outlet } from "react-router-dom";
// import { routes } from "@/router/index.jsx";

// function RouterView() {
//   const authRoutes = routes.filter((route) => route.meta.layout === "Auth");
//   return useRoutes(authRoutes);
// }

const AuthRoutes = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-[60px_1fr] md:grid-rows-1 md:grid-cols-2 h-screen">
      <div className="flex justify-center items-center md:p-0 border-b-2">
        <h1 className="text-4xl md:text-6xl text-[#40c4ff] font-semibold">
          MedSync
        </h1>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthRoutes;
