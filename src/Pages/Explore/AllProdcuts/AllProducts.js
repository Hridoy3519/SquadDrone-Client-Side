import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AllProductsCard from "../AllProductsCard/AllProductsCard";
import RecentProducts from "../RecentProducts/RecentProducts";

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    fetch("https://dry-gorge-11173.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data)
        const products = allProducts.slice(allProducts.length-6,allProducts.length)
        setLatestProducts(products)
      })
  }, [allProducts]);
  return (
    <Container className="my-5">
      <Row>
        <Col md={3} className="text-start">
          <h3 className="mb-4">Recently Added</h3>
          {
            latestProducts.map(pd => <RecentProducts key={pd.key} product={pd}></RecentProducts>)
          }
        </Col>
        <Col md={9} className="my-5">
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
