import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <SkeletonTheme baseColor="#dddcdc" highlightColor="#c2c0c0">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </SkeletonTheme>
);
