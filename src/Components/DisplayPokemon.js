import { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";

const DisplayPokemon = (props) => {
  const [pokemon, setPokemon] = useState({
    height: "",
    weight: "",
    types: [],
  });

  useEffect(async () => {
    const result = await fetch(props.url);
    const json = await result.json();
    setPokemon({...pokemon,
        height: json.height,
        weight: json.weight,
        types: json.types
    }
    )
  }, []);

  return (
    <Col sm={6} md={4}>
      <h2>{props.name}</h2>
      <ul>
          <li>{pokemon.height}</li>
          <li>{pokemon.weight}</li>
      </ul>
    </Col>
  );
};

export default DisplayPokemon;
