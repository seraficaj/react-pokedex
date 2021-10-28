import Col from "react-bootstrap/Col";

import DisplayPokemon from "./DisplayPokemon";
import PokemonList from "./PokemonList";

const AllPokemon = (props) => {
  console.log(props);
  return (
    <>
      <Col sm={6} md={8}>
        <PokemonList handleOnclick={props.handleOnclick} pokeArray={props.pokeArray} />
      </Col>
    </>
  );
};

export default AllPokemon;
