import { useContext } from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { ThemeContext } from "../../context/ThemeContext";
import style from "./ErrorPage.module.css";

const ErrorPage = () => {
  const error = useRouteError();
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`layout-container ${theme === "dark" && "dark"}`}>
      <Navbar />
      <div className={style["error-container"]}>
        <h2>Oops!!</h2>
        <p>
          {isRouteErrorResponse(error)
            ? "This route does not exist"
            : "An unexpected error ocurred"}
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
