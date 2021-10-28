import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";

const SinglePokemon = (props) => {
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
    }, []);
    
    const [pokemon, setPokemon] = useState({
        height: '',
        weight: '',
        types: []
    });

    return (
    <Col sm={6} md={4}>
      <h2>{props.match.params.name}</h2>
    </Col>
  );
};

export default SinglePokemon;
