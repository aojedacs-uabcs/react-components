import { Button, Card } from "react-bootstrap";
import defaultImage from "../default.png";

function PokemonCard({name, brief, image}) {

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {brief}
        </Card.Text>
        <Button variant="primary">Ver</Button>
      </Card.Body>
    </Card>
  );

  

}

export default PokemonCard;
