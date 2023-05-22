import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { ThemeContext } from "../../context/ThemeContext";
import style from "./Layout.module.css";

const Layout = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`layout-container ${theme === "dark" && "dark"}`}>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
