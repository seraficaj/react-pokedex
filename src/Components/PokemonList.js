import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import { Link } from "react-router-dom";

const PokemonList = (props) => {

    const PokeRender = props.pokeArray.map(pokemon => {
        return <ListGroupItem>
            <Link to={`/pokemon/${pokemon.name}`} >
                {pokemon.name}
            </Link>
        </ListGroupItem>
    })

    return (
        <ListGroup>
            {PokeRender}
        </ListGroup>
    )
}

export default PokemonList;