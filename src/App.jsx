// import { Button } from "primereact/button";
import { RouterProvider } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import Spinner from "./components/shared/Spinner/Spinner";
import router from "./router";

import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <RouterProvider
        fallbackElement={<Spinner />}
        router={router}
      />
      <ToastContainer />
      <SpeedInsights />
      <Analytics />
    </>
  );
}

export default App;
