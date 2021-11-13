import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";
import Orders from "../Orders/Orders";
import YouMayLike from "../YouMayLike/YouMayLike";

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const { user } = useAuth();
  const [allProducts, setAllProducts] = useState([]);
  const [fewProducts, setFewProducts] = useState([]);
  useEffect(() => {
    if (user.email) {
      fetch("https://dry-gorge-11173.herokuapp.com/orders/user", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => setMyOrders(data));
    }
  }, [user]);

  useEffect(() => {
    fetch("https://dry-gorge-11173.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
        const products = allProducts.slice(
          allProducts.length - 6,
          allProducts.length
        );
        setFewProducts(products);
      });
  }, [allProducts]);

  const handleDelete = (id) => {
    const isConfirm = window.confirm("Are You Sure?");
    if (isConfirm) {
      const url = `https://dry-gorge-11173.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Deleted Successfully");
            const remainingOrders = myOrders.filter(
              (order) => order._id !== id
            );
            setMyOrders(remainingOrders);
          }
        });
    }
  };
  return (
    <div>
      <div className="my-all-orders">
        {myOrders.length ? (
          <Container>
            <div>
              <h3 className="mt-3">My Bookings</h3>
              <div className="underscore mb-5"></div>
              {myOrders.map((myOrder) => (
                <Orders
                  key={myOrder._id}
                  order={myOrder}
                  handleDelete={handleDelete}
                ></Orders>
              ))}
            </div>
            <YouMayLike products={fewProducts}></YouMayLike>
          </Container>
        ) : (
          <div className="no-orders">
            <h5 className="mt-5 text-start">
              You Currently have no orders to show
            </h5>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyOrders;
