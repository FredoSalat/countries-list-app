import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <header className="navbar">
        <nav className="navbar">
          <Link to="/" className="navbar">
            Home page
          </Link>
          <Link to="/list" className="navbar">
            List of countries
          </Link>
          <Link to="/liked" className="navbar">
            Liked countries
          </Link>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
