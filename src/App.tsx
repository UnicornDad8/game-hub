import "./App.css";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <div className="layout-container">
      <div className="navbar">
        <Navbar />
      </div>
      <aside className="aside-container">aside</aside>
      <main className="main-container">
        <GameGrid />
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
