import { ReactNode } from "react";
import style from "./Button.module.css";

interface ButtonProps {
  children: ReactNode;
  color?: "primary" | "secondary" | "danger" | "link";
  onClick: () => void;
}

const Button = ({ children, color = "primary", onClick }: ButtonProps) => {
  return (
    <div
      className={`${style["btn"]} ${style["btn-" + color]}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Button;
