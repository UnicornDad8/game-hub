import { useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import style from "./SearchInput.module.css";

interface SearchInputProps {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: SearchInputProps) => {
  const searchRef = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (searchRef.current) onSearch(searchRef.current.value);
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
