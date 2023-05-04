import { useState } from "react";
import { useSelector } from "react-redux";
import { SkeletonTheme } from "react-loading-skeleton";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/useGames";
import "./App.css";

function App() {
  const { darkTheme } = useSelector((state) => ({ ...state }));
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

  return (
    <SkeletonTheme
      baseColor={darkTheme ? "#202020" : "#dddcdc"}
      highlightColor={darkTheme ? "#444" : "#c2c0c0"}
    >
      <div className={`layout-container ${darkTheme && "dark"}`}>
        <div className="navbar">
          <Navbar />
        </div>
        <aside className="aside-container">
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          />
        </aside>
        <main className="main-container">
          <PlatformSelector
            selectedPlatform={selectedPlatform}
            onSelectPlatform={(platform) => setSelectedPlatform(platform)}
          />
          <GameGrid
            selectedPlatform={selectedPlatform}
            selectedGenre={selectedGenre}
          />
        </main>
        <footer>
          <p>&copy; 2019 by Cecilia Benitez</p>
        </footer>
      </div>
    </SkeletonTheme>
  );
}

export default App;
