import { useEffect, useState } from "react";
import { Row, InputGroup,Form, Button } from "react-bootstrap";
function Finder({texto, foundPokemon}) {

  const[name, setName]=useState("");


  useEffect(() => {

  }, []);

  function getPokemonData() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      foundPokemon(data);
    });
    
  }


  return (
    <Row>
      <h1>{name}</h1>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Nombre del POkemon"
          aria-label=""
          aria-describedby="basic-addon2"
          onChange={(e) => setName(e.target.value)}
        />
        
        <Button variant="outline-secondary" id="button-addon2" onClick={getPokemonData}>
          {texto}
        </Button>
      </InputGroup>
    </Row>
  );
}

export default Finder;
