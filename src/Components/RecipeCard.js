import { Button, Card } from "react-bootstrap";
import defaultImage from "../default.png";

function RecipeCard({title, brief, image}) {

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img src={defaultImage} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {brief}
        </Card.Text>
        <Button variant="primary">Ver</Button>
      </Card.Body>
    </Card>
  );

  

}

export default RecipeCard;
