import { useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import useGameQueryStore from "../../store";
import style from "./SearchInput.module.css";

const SearchInput = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (searchRef.current) setSearchText(searchRef.current.value);
      }}
      className={style["search-box"]}
    >
      <input
        type="text"
        ref={searchRef}
        placeholder="search games"
        className={style["searchbar"]}
      />
      <AiOutlineSearch className={style["icon-search"]} />
    </form>
  );
};

export default SearchInput;
