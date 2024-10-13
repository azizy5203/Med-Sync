// import { Button } from "primereact/button";
import { RouterProvider } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import Spinner from "./components/shared/Spinner/Spinner";
import router from "./router";

import { ThemeProvider } from "./providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ThemeProvider
        defaultTheme="dark"
        storageKey="vite-ui-theme">
        <RouterProvider
          fallbackElement={<Spinner />}
          router={router}
        />
      </ThemeProvider>
      <ToastContainer />
      <Toaster />
      <SpeedInsights />
      <Analytics />
    </>
  );
}

export default App;
