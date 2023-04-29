import { ChangeEvent, InputHTMLAttributes, useState } from "react";
import logo from "../../assets/logo.webp";
import style from "./Navbar.module.css";

const Navbar = () => {
  const [checked, updateChecked] = useState(false);

  const setDarkMode = () => {
    document.querySelector("body")?.setAttribute("data-theme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body")?.setAttribute("data-theme", "ligth");
  };

  const toggleTheme = (e: ChangeEvent<HTMLInputElement>) => {
    updateChecked(!checked);

    if (!checked) {
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
      <div>
        <label
          className={`${style["Toggle"]} ${
            checked ? style["Toggle--checked"] : style[""]
          }`}
        >
          <input type="checkbox" checked={checked} onChange={toggleTheme} />

          <div className={style["Toggle__slider"]} />
          <small className={style["Toggle__text"]}>Night</small>
          <small className={style["Toggle__text"]}>Day</small>
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
