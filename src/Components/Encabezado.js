import {
    Row,
    Col,
    Image,
  } from "react-bootstrap/";
function Encabezado({logo, titulo}) {
  return (
    <Row style={{ paddingBottom: "1em" }}>
      <Col lg={1}>
        <Image
          className="img-thumbnail"
          src={logo}
          roundedCircle
          sizes="150px"
        />
      </Col>

      <Col lg={11}>
        <h1 className="display-1 " style={{ paddingTop: "0.7em" }}>
          {titulo}
        </h1>
      </Col>
    </Row>
  );
}

export default Encabezado;
