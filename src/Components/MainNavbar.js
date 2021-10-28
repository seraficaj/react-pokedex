import { Link } from "react-router-dom";

const MainNavbar = () => (
  <nav className="navbar" role="navigation" aria-label="mainNavigation">
    <div className="navbar-brand">
      <Link to={"/"} className="navbar-item" href="https://bulma.io">
        React Pokedex
      </Link>
      <div
        role="button"
        className="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="my-navbar-menu"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </div>
    </div>
    <div id="my-navbar-menu" className="navbar-menu">
      <div className="navbar-end">
        <Link className="navbar-item" to="/">
          PokeDex
        </Link>
        <Link className="navbar-item" to="/myteam">
          MyTeam
        </Link>
      </div>
    </div>
  </nav>
);

export default MainNavbar;
