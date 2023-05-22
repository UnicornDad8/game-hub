import { useContext } from "react";
import GenreList from "../../components/GenreList";
import GameHeading from "../../components/GameHeading";
import PlatformSelector from "../../components/PlatformSelector";
import SortSelector from "../../components/SortSelector";
import GameGrid from "../../components/GameGrid";
import { ThemeContext } from "../../context/ThemeContext";
import { SkeletonTheme } from "react-loading-skeleton";
import style from "./HomePage.module.css";

const HomePage = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <SkeletonTheme
      baseColor={theme === "dark" ? "#202020" : "#eaeaea"}
      highlightColor={theme === "dark" ? "#fff" : "#e3e3e3"}
    >
      <div className={style["home-container"]}>
        <aside className={style["aside-container"]}>
          <GenreList />
        </aside>
        <main className={style["main-container"]}>
          <div className={style["main-container__top"]}>
            <div className={style["heading"]}>
              <GameHeading />
            </div>
            <div className={style["selectors"]}>
              <PlatformSelector />
              <SortSelector />
            </div>
          </div>
          <GameGrid />
        </main>
      </div>
    </SkeletonTheme>
  );
};

export default HomePage;
