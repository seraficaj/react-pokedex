import Col from "react-bootstrap/Col";

import DisplayPokemon from "./DisplayPokemon";
import PokemonList from "./PokemonList"

const AllPokemon = (props) => {
    console.log(props);
  return (
    <>
    <Col sm={6} md={8}>
      <PokemonList pokeArray={props.pokeArray} />
    </Col>
    <DisplayPokemon name={props.display.name} url={props.display.url}/>
    </>
  );
};

export default AllPokemon;
