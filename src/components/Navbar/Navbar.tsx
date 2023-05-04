import { ChangeEvent, InputHTMLAttributes, useState } from "react";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/logo.webp";
import Switch from "../Switch";
import style from "./Navbar.module.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const { darkTheme } = useSelector((state) => ({ ...state }));
  const [checked, updateChecked] = useState(false);

  return (
    <nav className={style["navbar"]}>
      <div className={style["navbar-logo-text"]}>
        <img src={logo} alt="logo" width="60px" height="60px" />
        <h3>Navbar</h3>
      </div>
      <Switch
        handleChange={() => {
          updateChecked(!checked);
          if (darkTheme) {
            Cookies.set("darkTheme", false);
            dispatch({ type: "LIGHT" });
          } else {
            Cookies.set("darkTheme", true);
            dispatch({ type: "DARK" });
          }
        }}
        isChecked={checked}
      />
    </nav>
  );
};

export default Navbar;
