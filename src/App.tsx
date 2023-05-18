import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { SkeletonTheme } from "react-loading-skeleton";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

import "./App.css";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <SkeletonTheme
      baseColor={theme === "dark" ? "#202020" : "#eaeaea"}
      highlightColor={theme === "dark" ? "#444" : "#c1c1c1"}
    >
      <div className={`layout-container ${theme === "dark" && "dark"}`}>
        <div className="navbar">
          <Navbar />
        </div>
        <aside className="aside-container">
          <GenreList />
        </aside>
        <main className="main-container">
          <div className="main-container__top">
            <div className="heading">
              <GameHeading />
            </div>
            <div className="selectors">
              <PlatformSelector />
              <SortSelector />
            </div>
          </div>
          <GameGrid />
        </main>
        <footer>
          <p>&copy; 2019 by Cecilia Benitez</p>
        </footer>
      </div>
    </SkeletonTheme>
  );
}

export default App;
