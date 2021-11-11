import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AllProductsCard from "../AllProductsCard/AllProductsCard";

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);
  return (
    <Container className="my-5">
      <Row>
        <Col md={3}>
          <h1>Hello</h1>
        </Col>
        <Col md={9}>
        <Row xs={1} md={3} className="g-4">
            {allProducts.map((pd) => (
              <AllProductsCard key={pd.key} product={pd}></AllProductsCard>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AllProducts;
