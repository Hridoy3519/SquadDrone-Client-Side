import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ManageProductsCard from "../ManageProductsCard/ManageProductsCard";

const ManageProducts = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  }, [allProducts]);

  const handleDeleteProduct = (id) => {
    const isConfirm = window.confirm("Are You Sure?");
    if (isConfirm) {
      const url = `http://localhost:5000/products/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Deleted Successfully");
            const remainingProducts = allProducts.filter((product) => product._id !== id);
            setAllProducts(remainingProducts);
          }
        });
    }
  };

  return (
    <Container className="my-5">
      <h1>All Products</h1>
      <Row xs={1} md={3} className="g-4">
        {allProducts.map((pd) => (
          <ManageProductsCard key={pd.key} product={pd} handleDeleteProduct={handleDeleteProduct}></ManageProductsCard>
        ))}
      </Row>
    </Container>
  );
};

export default ManageProducts;
