import style from "./Switch.module.css";

interface SwitchProps {
  isChecked: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

const Switch = ({ isChecked, handleChange, label }: SwitchProps) => {
  return (
    <div>
      <label
        className={`${style["Toggle"]} ${
          isChecked ? style["Toggle--checked"] : style[""]
        }`}
        htmlFor={label}
      >
        <input
          type="checkbox"
          id={label}
          checked={isChecked}
          onChange={handleChange}
        />
        <div className={style["Toggle__slider"]} />
        {!isChecked ? (
          <small className={`${style["Toggle__text"]} ${style["small-left"]}`}>
            Day
          </small>
        ) : (
          <small className={`${style["Toggle__text"]} ${style["small-right"]}`}>
            Night
          </small>
        )}
      </label>
    </div>
  );
};
export default Switch;
