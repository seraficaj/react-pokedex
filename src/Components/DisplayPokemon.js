import { useEffect, useState } from "react";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const DisplayPokemon = (props) => {
  const [pokemon, setPokemon] = useState({
    height: "",
    weight: "",
    types: [],
    image: "",
  });

  const makeApiCall = async () => {
    try {

      const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemon.name}`);
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

  useEffect(async () => {
    makeApiCall();
  }, [props.pokemon]);

  return (
    <Col xs={6} sm={6} md={4}>
      <Card>
        <Card.Img variant="top" src={pokemon.image} />
        <h3>{props.pokemon.name}</h3>
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
        <Button
          variant="primary"
          onClick={() => props.toggleOnTeam(props.pokemon.name)}
        >
          {
            props.myTeam.includes(props.pokemon.name) ? ('Remove From Team') : ('Add To Team')
          }
        </Button>
      </Card>
    </Col>
  );
};

export default DisplayPokemon;
