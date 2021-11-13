import React from "react";
import { Row } from "react-bootstrap";
import ProductCard from "../../Home/ProductCard/ProductCard";

const YouMayLike = ({ products }) => {
  return (
    <div className="my-5 text-start">
      <h5 style={{color: '#06A3DA'}}>You May Also Like :</h5>
      <Row xs={1} md={3} className="g-4">
        {products.map((pd) => (
          <ProductCard key={pd._id} product={pd}></ProductCard>
        ))}
      </Row>
    </div>
  );
};

export default YouMayLike;
