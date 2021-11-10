import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ProductCard from "../ProductCard/ProductCard";
import './Products.css';
import Aos from 'aos';
import "aos/dist/aos.css";
const Products = () => {
  const [products, setProducts] = useState([]);
  const size=6;
  useEffect(() => {
    fetch(
      `http://localhost:5000/products?size=${size}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    Aos.init({duration : 3000})
},[])

  return (
    <Container data-aos="fade-left" className="my-5">
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
          <ProductCard key={pd.key} product={pd}></ProductCard>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
