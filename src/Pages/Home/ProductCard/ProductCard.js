import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import "./ProductCard.css";
const ProductCard = ({ product }) => {
  const { title, tagline, price, rating, user, img, _id } = product;
  return (
    <Col>
      <Card className="h-100 customized-card">
        <Card.Img className="customized-card-img" variant="top" src={img} />
        <Card.Body>
          <Card.Title className="text-start"> {title} </Card.Title>
          <p className="text-start">{tagline}</p>
        </Card.Body>
        <Card.Footer className="customized-card-footer">
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
            <h4 className="price-text">${price}.00</h4>
          </div>
          <Link to={`purchase/${_id}`}>
            <Button className="w-100 customized-btn2">Purchase</Button>
          </Link>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default ProductCard;
