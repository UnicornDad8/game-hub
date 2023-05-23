import { useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import useGameQueryStore from "../../store";
import style from "./SearchInput.module.css";

const SearchInput = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (searchRef.current) {
          setSearchText(searchRef.current.value);
          navigate("/");
        }
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
