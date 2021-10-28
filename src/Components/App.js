import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import AllPokemon from "./AllPokemon";
import DisplayPokemon from "./DisplayPokemon";
import MainNavbar from "./MainNavbar";
import MyTeam from "./MyTeam";

function App() {
  const [pokeArray, setPokeArray] = useState([]);
  const [display, setDisplay] = useState('');

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon");
      const pokeData = await (response.json());
      setPokeArray(pokeData.results);
      setDisplay(pokeData.results[0].name);
    }
    fetchPokemon();
  }, [])

  const handleOnclick = (evt) =>{
    setDisplay(evt.target.innerText);
  }

  return (
    <div>
      <MainNavbar />
      <Container>
        <Row>
          <Switch>
            <Route exact path="/" render={(routerProps) => (
              <AllPokemon {...routerProps} pokeArray={pokeArray} display={display} />
            )}/>
            <Route path="/myteam" component={MyTeam} />
          </Switch>
        </Row>
      </Container>
    </div>
  );
}

export default App;
