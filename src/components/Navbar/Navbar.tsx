import { ChangeEvent, InputHTMLAttributes, useState } from "react";
import logo from "../../assets/logo.webp";
import Switch from "../Switch";
import style from "./Navbar.module.css";

const Navbar = () => {
  const [isChecked, setChecked] = useState(false);

  const setDarkMode = () => {
    document.querySelector("body")?.setAttribute("data-theme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body")?.setAttribute("data-theme", "ligth");
  };

  const toggleTheme = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(!isChecked);

    if (!isChecked) {
      setDarkMode();
    } else {
      setLightMode();
    }
  };

  return (
    <nav className={style["navbar"]}>
      <div className={style["navbar-logo-text"]}>
        <img src={logo} alt="logo" width="60px" height="60px" />
        <h3>Navbar</h3>
      </div>
      <Switch handleChange={toggleTheme} isChecked={isChecked} label="Day" />
    </nav>
  );
};

export default Navbar;
