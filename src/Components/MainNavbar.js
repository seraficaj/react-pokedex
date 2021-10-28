import { Link } from "react-router-dom";

const MainNavbar = () => (
  <div>
    <Link to="/">React Pokedex</Link>

    <Link className="nav-link" to="/">
      PokeDex
    </Link>
    <Link className="nav-link" to="/myteam">
      MyTeam
    </Link>
  </div>
);

export default MainNavbar;
