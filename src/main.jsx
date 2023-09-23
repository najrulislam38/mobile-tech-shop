import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import MyRouter from "./Router/Route.jsx";

export const GlobalContext = createContext();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalContext.Provider value={{ user: "Najrul" }}>
      <RouterProvider router={MyRouter}></RouterProvider>
    </GlobalContext.Provider>
  </React.StrictMode>
);
