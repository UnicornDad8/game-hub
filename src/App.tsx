import { useState } from "react";
import { useSelector } from "react-redux";
import { SkeletonTheme } from "react-loading-skeleton";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/useGames";
import GameHeading from "./components/GameHeading";
import "./App.css";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const { darkTheme } = useSelector((state) => ({ ...state }));
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <SkeletonTheme
      baseColor={darkTheme ? "#202020" : "#dddcdc"}
      highlightColor={darkTheme ? "#444" : "#c2c0c0"}
    >
      <div className={`layout-container ${darkTheme && "dark"}`}>
        <div className="navbar">
          <Navbar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </div>
        <aside className="aside-container">
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </aside>
        <main className="main-container">
          <div className="main-container__top">
            <div className="heading">
              <GameHeading gameQuery={gameQuery} />
            </div>
            <div className="selectors">
              <PlatformSelector
                selectedPlatform={gameQuery.platform}
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
              />
              <SortSelector
                sortOrder={gameQuery.sortOrder}
                onSelectSortOrder={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
              />
            </div>
          </div>
          <GameGrid gameQuery={gameQuery} />
        </main>
        <footer>
          <p>&copy; 2019 by Cecilia Benitez</p>
        </footer>
      </div>
    </SkeletonTheme>
  );
}

export default App;
