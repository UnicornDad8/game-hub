import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./providers/themeProvider";
import App from "./App";

import "react-loading-skeleton/dist/skeleton.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
