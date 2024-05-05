import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import logo from "../../assets/logo.jpg";
import Switch from "../Switch";
import SearchInput from "../SearchInput";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <nav className={style["navbar"]}>
      <Link to="/" className={style["navbar-logo-text"]}>
        <div className={style["logo-box"]}>
          <img src={logo} alt="logo" />
        </div>
        <h3>GHub</h3>
      </Link>
      <SearchInput />
      <Switch handleChange={toggleTheme} isChecked={theme === "dark"} />
    </nav>
  );
};

export default Navbar;
