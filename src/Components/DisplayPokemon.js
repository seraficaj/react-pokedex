import { useEffect, useState } from "react";

const DisplayPokemon = (props) => {
  const [pokemon, setPokemon] = useState({
    height: "",
    weight: "",
    types: [],
    image: "",
  });

  const makeApiCall = async () => {
    try {
      const result = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${props.pokemon}`
      );
      const json = await result.json();
      setPokemon({
        ...pokemon,
        height: json.height,
        weight: json.weight,
        types: json.types,
        image: json.sprites.front_default,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    makeApiCall();
  }, [props.pokemon]);

  return (
    <div className="column is-one-quarter">
      <h2>{props.pokemon}</h2>
      <div>
        <img src={pokemon.image} />
        <ul>
          <li>Height: {pokemon.height} dm</li>
          <li>Weight: {pokemon.weight} dg</li>
        </ul>
        <h3>Type(s)</h3>
        <ul>
          {pokemon.types.map((type) => (
            <li key={type.type.name}>{type.type.name}</li>
          ))}
        </ul>
        <button
          className="button is-custom"
          onClick={() => props.toggleOnTeam(props.pokemon)}
        >
          {props.myTeam.includes(props.pokemon)
            ? "Remove From Team"
            : "Add To Team"}
        </button>
      </div>
    </div>
  );
};

export default DisplayPokemon;
