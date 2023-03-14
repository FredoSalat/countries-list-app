import { Link } from "react-router-dom";
import "./NavBar.css";

type Props = {};

function NavBar() {
  return (
    <>
      <header className="navbar">
        <nav className="navbar">
          <Link to="/" className="navbar">
            Home
          </Link>
          <Link to="/list" className="navbar">
            List
          </Link>
          <Link to="/liked" className="navbar">
            Liked
          </Link>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
