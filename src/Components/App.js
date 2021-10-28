import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import AllPokemon from "./AllPokemon";
import DisplayPokemon from "./DisplayPokemon";
import MainNavbar from "./MainNavbar";
import MyTeam from "./MyTeam";

function App() {
  const [pokeArray, setPokeArray] = useState([]);
  const [display, setDisplay] = useState("");
  const [myTeam, setTeam] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon");
      const pokeData = await response.json();
      setPokeArray(pokeData.results);
      setDisplay(pokeData.results[0].name);
    };
    fetchPokemon();
  }, []);

  const handleOnclick = (name) => {
    setDisplay(name);
  };

  const toggleOnTeam = (name) => {
    if (!myTeam.includes(name) && myTeam.length < 6) {
      setTeam([...myTeam, name]);
    } else {
      let team = myTeam.filter((item) => item !== name);
      setTeam(team);
    }
  };

  return (
    <>
      <MainNavbar />
      <div className="container">
        <div class="columns">
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
              <MyTeam myTeam={myTeam} toggleOnTeam={toggleOnTeam} />
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
}

export default App;
