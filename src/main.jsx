import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./main.css";
import "@/assets/scss/style.scss";
import { Provider } from "react-redux";
import { store } from "@/store/index";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
