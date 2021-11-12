import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";
import Orders from "../Orders/Orders";

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    if (user.email) {
      fetch("http://localhost:5000/orders/user", {
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

  const handleDelete = (id) => {
    const isConfirm = window.confirm("Are You Sure?");
    if (isConfirm) {
      const url = `http://localhost:5000/orders/${id}`;
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
      <div className="my-all-bookings">
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
          </Container>
        ) : (
          <div className="no-orders">
            <h5 className="mt-5 text-start">You Currently have no orders to show</h5>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyOrders;
