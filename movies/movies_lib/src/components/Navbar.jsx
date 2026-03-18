import { Link } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

function Navbar() {
  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          <BiCameraMovie /> MoviesLib
        </Link>
      </h2>

      <Link to="/movie/1">Movies Link</Link>

      <Link to="/search">
        <BiSearchAlt2 />
      </Link>
    </nav>
  );
}

export default Navbar;
