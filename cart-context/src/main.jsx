import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import CartContext from "./context/CartContext.jsx";
import DarkModeProvider from "./context/DarkModeProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <DarkModeProvider>
        <CartContext>
          <App />
        </CartContext>
      </DarkModeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
