import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App.jsx";
import "./index.css";
import UserContextProvider from "./UserContext.jsx";
import CartContextProvider from "./CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContextProvider>
      <CartContextProvider>
        <ToastContainer position="top-center" />
        <App />
      </CartContextProvider>
    </UserContextProvider>
  </StrictMode>
);
