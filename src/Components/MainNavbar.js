import {Link} from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const MainNavbar = () => (
  <Navbar bg="light" expand="md">
    <Container>
      <Navbar.Brand><Link to="/">React Pokedex</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Link className="nav-link" to="/">PokeDex</Link>
            <Link className="nav-link" to="/myteam">MyTeam</Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default MainNavbar;
