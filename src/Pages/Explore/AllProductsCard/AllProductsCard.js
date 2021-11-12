import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./AllProductsCard.css";
const AllProductsCard = ({ product }) => {
  const { title, tagline, price, img,key } = product;
  return (
    <Col>
      <Card className="h-100 all-product-card">
        <Card.Img className="all-product-card-img" variant="top" src={img} />
        <Card.Body>
          <Card.Title className="text-start" id="title"> {title}</Card.Title>
          <p className="text-start">
            <span className="tagname">{tagline}</span>
          </p>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between align-items-center all-product-card-footer">
          <div className="d-flex justify-content-between align-items-end">
            <h4 className="price-text">${price}.00</h4>
          </div>
          <Link to={`purchase/${key}`}>
            <Button className="drone-squad-customized-btn1">Purchase</Button>
          </Link>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default AllProductsCard;
