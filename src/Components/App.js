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
  const [display, setDisplay] = useState({});
  const [myTeam, setTeam] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon");
      const pokeData = await response.json();
      setPokeArray(pokeData.results);
      setDisplay(pokeData.results[0]);
    };
    fetchPokemon();
  }, []);

  const handleOnclick = (key) => {
    setDisplay(pokeArray[key]);
  };

  const toggleOnTeam = (name) => {
    if (!myTeam.includes(name)) {
      setTeam([...myTeam, name]);
    }
  };

  return (
    <div>
      <MainNavbar />
      <Container>
        <Row>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <>
                  <AllPokemon
                    myTeam={myTeam}
                    handleOnclick={handleOnclick}
                    pokeArray={pokeArray}
                  />
                  <DisplayPokemon
                    myTeam={myTeam}
                    pokemon={display}
                    toggleOnTeam={toggleOnTeam}
                  />
                </>
              )}
            />
            <Route path="/myteam">
              <MyTeam myTeam={myTeam} />
            </Route>
          </Switch>
        </Row>
      </Container>
    </div>
  );
}

export default App;
