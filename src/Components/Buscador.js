import { Row, InputGroup,Form, Button } from "react-bootstrap";
function Buscador({texto}) {
  return (
    <Row>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Nombre de la receta"
          aria-label=""
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          {texto}
        </Button>
      </InputGroup>
    </Row>
  );
}

export default Buscador;
