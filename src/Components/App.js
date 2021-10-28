import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import AllPokemon from "./AllPokemon";
import MainNavbar from "./MainNavbar";
import MyTeam from "./MyTeam";
import SinglePokemon from "./SinglePokemon";

function App() {
  const [pokeArray, setPokeArray] = useState([]);
  const [display, setDisplay] = useState({});

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon");
      const pokeData = await (response.json());
      setPokeArray(pokeData.results);
      setDisplay(pokeData.results[0]);
    }
    fetchPokemon();
  }, [])

  return (
    <div>
      <MainNavbar />
      <Container>
        <Row>
          <Switch>
            <Route exact path="/" render={() => (
              <AllPokemon pokeArray={pokeArray} display={display}/>
            )}/>
            <Route exact path="/pokemon/:name" render={routerProps => (
              <SinglePokemon {...routerProps} />
            )}/>
            <Route path="/myteam" component={MyTeam} />
          </Switch>
        </Row>
      </Container>
    </div>
  );
}

export default App;
