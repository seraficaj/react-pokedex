const PokemonList = (props) => {
  const PokeRender = props.pokeArray.map((pokemon, index) => {
    return (
      <div
        className="card"
        key={index}
        onClick={() => props.handleOnclick(pokemon.name)}
      >
        <div className="card-header">
        <p class="card-header-title">
        {pokemon.name}
        </p>
        </div>
      </div>
    );
  });

  return <>{PokeRender}</>;
};

export default PokemonList;
