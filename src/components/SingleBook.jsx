import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import CommentArea from "./CommentArea";

function SingleBook(props) {
  const [selected, setSelected] = useState(false);

  return (
    <Card
      className="libri"
      style={{
        width: "18rem",
        transform: selected ? "scale(1.1)" : "",
        borderColor: selected ? "red" : "",
      }}
    >
      <Card.Img
        style={{ height: "400px" }}
        variant="top"
        src={props.libro.img}
        onClick={() => setSelected(!selected)}
      />
      <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Title>{props.libro.title}</Card.Title>
        <Button variant="primary">{props.libro.price} € </Button>
      </Card.Body>
      {selected && <CommentArea id={props.libro.asin} />}
    </Card>
  );
}

export default SingleBook;
