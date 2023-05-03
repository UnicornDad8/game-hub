import { useState } from "react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import "./App.css";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <div className="layout-container">
      <div className="navbar">
        <Navbar />
      </div>
      <aside className="aside-container">
        <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} />
      </aside>
      <main className="main-container">
        <GameGrid selectedGenre={selectedGenre} />
      </main>
      <footer>
        <p>&copy; 2019 by Cecilia Benitez</p>
      </footer>
    </div>
  );
}

export default App;
