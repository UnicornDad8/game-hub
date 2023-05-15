import { useState, useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { SkeletonTheme } from "react-loading-skeleton";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/usePlatforms";
import GameHeading from "./components/GameHeading";
import "./App.css";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const { theme } = useContext(ThemeContext);

  return (
    <SkeletonTheme
      baseColor={theme === "dark" ? "#202020" : "#eaeaea"}
      highlightColor={theme === "dark" ? "#444" : "#c1c1c1"}
    >
      <div className={`layout-container ${theme === "dark" && "dark"}`}>
        <div className="navbar">
          <Navbar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </div>
        <aside className="aside-container">
          <GenreList
            selectedGenreId={gameQuery.genreId}
            onSelectGenre={(genre) =>
              setGameQuery({ ...gameQuery, genreId: genre.id })
            }
          />
        </aside>
        <main className="main-container">
          <div className="main-container__top">
            <div className="heading">
              <GameHeading gameQuery={gameQuery} />
            </div>
            <div className="selectors">
              <PlatformSelector
                selectedPlatformId={gameQuery.platformId}
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platformId: platform.id })
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
