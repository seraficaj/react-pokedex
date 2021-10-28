import DisplayPokemon from "./DisplayPokemon";

const MyTeam = (props) => {
  console.log(props);
  const teamMap = props.myTeam.map((pokemon) => 
   <DisplayPokemon key={pokemon}
   myTeam={props.myTeam} pokemon={pokemon} toggleOnTeam={props.toggleOnTeam}/>
  );

  return (
    <>
      <h1>My Team</h1>
      {teamMap}
    </>
  );
};

export default MyTeam;
