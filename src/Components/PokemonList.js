import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

const PokemonList = (props) => {
  const PokeRender = props.pokeArray.map((pokemon) => {
    return <ListGroupItem onClick={() => props.handleOnclick}>{pokemon.name}</ListGroupItem>;
  });

  return <ListGroup>{PokeRender}</ListGroup>;
};

export default PokemonList;
