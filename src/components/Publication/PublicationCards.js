import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaLink } from "react-icons/fa";

function PublicationCards(props) {
  return (
    <Card className="publication-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.FaLink} target="_blank">
          <FaLink /> &nbsp;
          {props.isBlog ? "Blog" : "Link"}
        </Button>
        {"\n"}
        {"\n"}
       
      </Card.Body>
    </Card>
  );
}
export default PublicationCards;
