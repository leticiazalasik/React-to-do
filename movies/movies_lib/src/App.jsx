import "./App.css";
import { Link, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h2>
        <Link to="/">MoviesLib</Link>
      </h2>
      <form>
        <input type="text" placeholder="Busque um filme"></input>
        <button type="submit"></button>
      </form>
      <Outlet />
    </div>
  );
}

export default App;
