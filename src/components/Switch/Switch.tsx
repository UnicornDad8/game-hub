import { ChangeEvent } from "react";
import style from "./Switch.module.css";

interface SwitchProps {
  isChecked: boolean;
  handleChange: () => void;
}

const Switch = ({ isChecked, handleChange }: SwitchProps) => {
  return (
    <div className={style["checkbox-box"]}>
      <label
        className={`${style["container"]} ${
          isChecked ? style["toggle--checked"] : ""
        }`}
      >
        <input type="checkbox" value={isChecked} onChange={handleChange} />
        <div className={style["checkmark"]} />
        toggle theme
      </label>
    </div>
  );
};
export default Switch;
