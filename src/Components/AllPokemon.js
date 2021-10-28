import Col from "react-bootstrap/Col";
import PokemonList from "./PokemonList";

const AllPokemon = (props) => {
  console.log(props);
  return (
    <>
      <Col xs={6} sm={6} md={8}>
        <PokemonList handleOnclick={props.handleOnclick} pokeArray={props.pokeArray} />
      </Col>
    </>
  );
};

export default AllPokemon;
