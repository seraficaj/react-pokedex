import PokemonList from "./PokemonList";

const AllPokemon = (props) => {
  return (
    <>
    <h1>All Pokemon</h1>
      <div>
        <PokemonList handleOnclick={props.handleOnclick} pokeArray={props.pokeArray} />
      </div>
    </>
  );
};

export default AllPokemon;
