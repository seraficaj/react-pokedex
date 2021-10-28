import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

const PokemonList = (props) => {
  const PokeRender = props.pokeArray.map((pokemon, index) => {
    return <ListGroupItem key={index} onClick={() => props.handleOnclick(pokemon.name)}>{pokemon.name}</ListGroupItem>;
  });

  return <ListGroup>{PokeRender}</ListGroup>;
};

export default PokemonList;
