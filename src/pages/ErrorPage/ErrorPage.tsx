import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "../../components/Navbar";
import style from "./ErrorPage.module.css";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <Navbar />
      <div className={style["error-container"]}>
        <h2>Oops!!</h2>
        <p>
          {isRouteErrorResponse(error)
            ? "This route does not exist"
            : "An unexpected error ocurred"}
        </p>
      </div>
    </>
  );
};

export default ErrorPage;
