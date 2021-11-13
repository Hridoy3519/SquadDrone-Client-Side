import React from "react";
import { Button, Card, Col } from "react-bootstrap";

const ManageProductsCard = ({ product, handleDeleteProduct }) => {
  const { title, tagline, price, img, _id } = product;
  return (
    <Col>
      <Card className="h-100 all-product-card">
        <Card.Img className="all-product-card-img" variant="top" src={img} />
        <Card.Body>
          <Card.Title className="text-start" id="title">
            {" "}
            {title}
          </Card.Title>
          <p className="text-start">
            <span className="tagname">{tagline}</span>
          </p>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between align-items-center all-product-card-footer">
          <div className="d-flex justify-content-between align-items-end">
            <h4 style={{color : '#06A3DA'}}>${price}.00</h4>
          </div>
          <Button onClick={() => handleDeleteProduct(_id)} className="customized-btn2">Delete</Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default ManageProductsCard;
