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

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  const [nombre, setNombre] = useState("Nombre");

  const URL = "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0";

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // setPokemonList(data);
      });
  }, []);
  return (
    <div className="App">
      <Container>
        <Encabezado logo={logo} titulo={"Juegos"} />
        <Buscador texto={"Buscar Receta"} />
      </Container>
    </div>
  );
}

export default App;
