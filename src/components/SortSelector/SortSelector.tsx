import { useState } from "react";
import style from "./SortSelector.module.css";
import { FaChevronDown } from "react-icons/fa";
import useGameQueryStore from "../../store";

const SortSelector = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => setIsOpen(!isOpen);

  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-Released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);
  const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <div className={style["dropdown-container"]}>
      <div className={style["dropdown-header"]} onClick={toggling}>
        <p>Order by: {currentSortOrder?.label || "Relevance"}</p>
        <FaChevronDown className={style["icon-arrow"]} />
      </div>
      {isOpen && (
        <ul className={style["dropdown-list"]}>
          {sortOrders.map((order) => (
            <li
              key={order.value}
              value={order.value}
              className={style["list-item"]}
              onClick={() => {
                setSortOrder(order.value);
                setIsOpen(false);
              }}
            >
              {order.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SortSelector;
