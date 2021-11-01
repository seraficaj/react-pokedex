import { useEffect, useState } from "react";

const DisplayPokemon = (props) => {
  const [pokemon, setPokemon] = useState({
    height: "",
    weight: "",
    types: [],
    image: "",
  });

  useEffect(() => {
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

    makeApiCall();
}, [props.pokemon, pokemon]);

  return (
    <div className="column is-one-third">
      <div className="card">
        <p className="card-header-title">{props.pokemon}</p>
        <div class="card-image">
          <figure className="image">
            <img src={pokemon.image} />
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            <h4>Stats</h4>
            <ul>
              <li>Height: {pokemon.height} dm</li>
              <li>Weight: {pokemon.weight} dg</li>
            </ul>
            <h4>Type(s)</h4>
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
      </div>
    </div>
  );
};

export default DisplayPokemon;
