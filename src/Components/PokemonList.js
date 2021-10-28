const PokemonList = (props) => {
  const PokeRender = props.pokeArray.map((pokemon, index) => {
    return <li key={index} onClick={() => props.handleOnclick(pokemon.name)}>{pokemon.name}</li>;
  });

  return <ul>{PokeRender}</ul>;
};

export default PokemonList;
