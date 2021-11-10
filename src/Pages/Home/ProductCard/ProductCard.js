import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import "./ProductCard.css";
const ProductCard = ({ product }) => {
  const { title, tagline, price, rating, user, img } = product;
  const { CameraResolution } = product.specifications;
  return (
    <Col>
      <Card className="h-100">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="text-start"> {title} </Card.Title>
          <p className="text-start">{tagline}</p>
        </Card.Body>
        <Card.Footer>
          <div className="d-flex justify-content-between align-items-end">
            <h5>
              <span className="rating-text">Ratings:</span>
              <Rating
                initialRating={rating}
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
                readonly
              ></Rating>
              ({user})
            </h5>
            <h4 className="colored-text">Price: ${price}</h4>
          </div>
          <Link>
            <Button className="w-100">Purchase</Button>
          </Link>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default ProductCard;
