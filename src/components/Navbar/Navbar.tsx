import { useState } from "react";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/logo.webp";
import Switch from "../Switch";
import SearchInput from "../SearchInput";
import style from "./Navbar.module.css";

interface NavbarProps {
  onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: NavbarProps) => {
  const dispatch = useDispatch();
  const { darkTheme } = useSelector((state: any) => ({ ...state }));
  const [checked, updateChecked] = useState(false);

  return (
    <nav className={style["navbar"]}>
      <div className={style["navbar-logo-text"]}>
        <img src={logo} alt="logo" width="60px" height="60px" />
        <h3>Navbar</h3>
      </div>
      <SearchInput onSearch={onSearch} />
      <Switch
        handleChange={() => {
          updateChecked(!checked);
          if (darkTheme) {
            Cookies.set("darkTheme", "false");
            dispatch({ type: "LIGHT" });
          } else {
            Cookies.set("darkTheme", "true");
            dispatch({ type: "DARK" });
          }
        }}
        isChecked={checked}
      />
    </nav>
  );
};

export default Navbar;
