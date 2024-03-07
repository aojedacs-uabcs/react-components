import logo from "./logo.png";
import "./App.css";
import {
  Container,
  Row,
  Col,
  InputGroup,
  Form,
  Button,
  Image,
} from "react-bootstrap/";
import RecipeCard from "./Components/RecipeCard.js";
import recipes from "./recipes.js";
import { useEffect, useState } from "react";
import Encabezado from "./Components/Encabezado.js";
import Finder from "./Components/Finder.js";
import PokemonCard from "./Components/PokemonCard.js";
import MyComponent from "./Components/MyComponent.js";
import pokemonData from "./pokemonData.js";

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  const [nombre, setNombre] = useState("Nombre");
  const [name, setName] = useState("Nombre");
  const [pokemon, setPokemon] = useState("");

  const URL = "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0";

  useEffect(() => {

    
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        setPokemonList(data.results);
      });
  }, []);

  return (
    <div className="App">
      <Container>
        <h1>{pokemonData.base_experience}</h1>
        {/* <Encabezado logo={logo} titulo={"Juegos"} /> */}
        <Finder texto={"Buscar Pokemon"} foundPokemon={setPokemon} />
        {pokemon ? (
          <PokemonCard
            name={pokemon.name}
            image={pokemon.sprites.front_default}
          />
        ) : (
          <h1>No se a encontrado pokemon</h1>
        )}

        {/*       
          {pokemonList.map((pokemon, num) => (
            <PokemonCard name={pokemon.name} image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${num+1}.png`} />
          ))} */}
      </Container>
    </div>
  );
}

export default App;
