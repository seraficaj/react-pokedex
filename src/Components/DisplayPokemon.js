import { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";

const DisplayPokemon = (props) => {
  console.log(props);
  const [pokemon, setPokemon] = useState({
    height: "",
    weight: "",
    types: [],
  });

  const makeApiCall = async () => {
    const url = (props.pokemon.url)
    const result = await fetch(url);
    const json = await result.json();
    console.log(json)
    setPokemon({...pokemon,
        height: json.height,
        weight: json.weight,
        types: json.types
    })
  }

  useEffect(async () => {
   makeApiCall()}, [props.pokemon.url]);
  
  return (
    <Col sm={6} md={4}>
      <h2>{props.pokemon.name}</h2>
      <ul>
          <li>Height: {pokemon.height} dm</li>
          <li>Weight: {pokemon.weight} dg</li>
      </ul>
      <h3>Type(s)</h3>
      <ul>
        {pokemon.types.map(type => <li>{type.type.name}</li>)}
      </ul>
    </Col>
  );
};

export default DisplayPokemon;
