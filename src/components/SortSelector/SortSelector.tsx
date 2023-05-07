import { useState } from "react";
import style from "./SortSelector.module.css";
import { FaChevronDown } from "react-icons/fa";

const SortSelector = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => setIsOpen(!isOpen);

  return (
    <div className={style["dropdown-container"]}>
      <div className={style["dropdown-header"]} onClick={toggling}>
        <p>Order by relevance: </p>
        <FaChevronDown className={style["icon-arrow"]} />
      </div>
      {isOpen && (
        <ul className={style["dropdown-list"]}>
          <li className={style["list-item"]}>Relevance</li>
          <li className={style["list-item"]}>Date added</li>
          <li className={style["list-item"]}>Name</li>
          <li className={style["list-item"]}>Realise date</li>
          <li className={style["list-item"]}>Popularity</li>
          <li className={style["list-item"]}>Average rating</li>
        </ul>
      )}
    </div>
  );
};

export default SortSelector;
