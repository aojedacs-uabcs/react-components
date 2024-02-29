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
import Buscador from "./Components/Buscador.js";
import PokemonCard from "./Components/PokemonCard.js";

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  const [nombre, setNombre] = useState("Nombre");
  const [name, setName] = useState("Nombre");

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
        {/* <Encabezado logo={logo} titulo={"Juegos"} /> */}
        <Buscador texto={"Buscar Receta"} />
        <ul>
          {pokemonList.map((pokemon, num) => (
            <PokemonCard name={pokemon.name} image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${num+1}.png`} />
          ))}
        </ul>
      </Container>
    </div>
  );
}

export default App;
