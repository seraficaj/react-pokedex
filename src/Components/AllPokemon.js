import PokemonList from "./PokemonList";

const AllPokemon = (props) => {
  return (
      <div className="content column is-two-thirds">
        <h1>All Pokemon</h1>
        <PokemonList
          handleOnclick={props.handleOnclick}
          pokeArray={props.pokeArray}
        />
      </div>
  );
};

export default AllPokemon;
