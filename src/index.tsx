import React from "react";
import ReactDOM from "react-dom/client";

import { AppMain } from "./app";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <AppMain />
  </React.StrictMode>
);
