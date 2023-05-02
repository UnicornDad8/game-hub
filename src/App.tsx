import "./App.css";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <div className="layout-container">
      <div className="navbar">
        <Navbar />
      </div>
      <aside className="aside-container">
        <GenreList />
      </aside>
      <main className="main-container">
        <GameGrid />
      </main>
      <footer>
        <p>&copy; 2019 by Cecilia Benitez</p>
      </footer>
    </div>
  );
}

export default App;
