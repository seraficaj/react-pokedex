
import DisplayPokemon from "./DisplayPokemon";

const MyTeam = (props) => {
  const teamMap = props.myTeam.map(pokemon => {
    <DisplayPokemon pokemon={pokemon} />
  })

  return (
  <h1>My Team</h1>
  );
};

export default MyTeam;
