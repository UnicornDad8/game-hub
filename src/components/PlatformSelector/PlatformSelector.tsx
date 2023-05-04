import { useState } from "react";
import style from "./PlatformSelector.module.css";
import { FaChevronDown } from "react-icons/fa";
import usePlatforms from "../../hooks/usePlatforms";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => setIsOpen(!isOpen);

  if (error) return null;

  return (
    <div className={style["dropdown-container"]}>
      <div className={style["dropdown-header"]} onClick={toggling}>
        <p>Select a platform</p>
        <FaChevronDown className={style["icon-arrow"]} />
      </div>
      {isOpen && (
        <ul className={style["dropdown-list"]}>
          {data.map((platform) => (
            <li key={platform.id} className={style["list-item"]}>
              {platform.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PlatformSelector;
