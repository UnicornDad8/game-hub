import logo from "../../assets/logo.webp";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={style["navbar"]}>
      <img src={logo} alt="logo" width="60px" height="60px" />
      Navbar
    </nav>
  );
};

export default Navbar;
