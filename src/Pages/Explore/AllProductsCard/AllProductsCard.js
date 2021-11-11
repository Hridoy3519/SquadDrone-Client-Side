import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./AllProductsCard.css";
const AllProductsCard = ({ product }) => {
  const { title, tagline, price, rating, user, img } = product;
  return (
    <Col>
      <Card className="h-100">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="text-start"> {title}</Card.Title>
          <p className="text-start">
            <span className="tagname">{tagline}</span>
          </p>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-between align-items-end">
            <h4 className="colored-text">Price: ${price}</h4>
          </div>
          <Link>
            <Button>Purchase</Button>
          </Link>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default AllProductsCard;
