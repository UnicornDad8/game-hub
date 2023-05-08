import { AiOutlineSearch } from "react-icons/ai";
import style from "./SearchInput.module.css";

const SearchInput = () => {
  return (
    <div className={style["search-box"]}>
      <input
        type="text"
        placeholder="search games"
        className={style["searchbar"]}
      />
      <AiOutlineSearch className={style["icon-search"]} />
    </div>
  );
};

export default SearchInput;
