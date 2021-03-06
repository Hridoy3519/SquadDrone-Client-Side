import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import ProductCard from "../ProductCard/ProductCard";
import "./Products.css";
import Aos from "aos";
import "aos/dist/aos.css";
const Products = () => {
  const [products, setProducts] = useState([]);
  const size = 6;
  useEffect(() => {
    fetch(`https://dry-gorge-11173.herokuapp.com/products?size=${size}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <Container id="products" data-aos="fade-up" className="my-5">
      {products.length ? (
        <div>
          <div className="mb-5 heading">
            <h1>Collections</h1>
            <div className="upper-underline"></div>
            <div className="middle-underline"></div>
            <div className="lower-underline"></div>
            <p>Our Drone's uses cutting edge Technologies &</p>
            <p>Products to get the best result</p>
          </div>
          <Row xs={1} md={3} className="g-4">
            {products.map((pd) => (
              <ProductCard key={pd._id} product={pd}></ProductCard>
            ))}
          </Row>
        </div>
      ) : (
        <div className="loading-animation text-center">
          <Spinner
            animation="border"
            role="status"
            style={{ width: "10rem", height: "10rem" }}
          >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
    </Container>
  );
};

export default Products;
