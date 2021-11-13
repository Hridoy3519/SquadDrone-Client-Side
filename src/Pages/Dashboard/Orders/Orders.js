import React, { useEffect, useState } from "react";
import './Orders.css';

const Orders = (props) => {
  const { order, name, quantity, _id, status, address, phone } = props.order;
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`https://dry-gorge-11173.herokuapp.com/products/${order}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [order]);
  return (
    <div className="card product-detail mb-3 text-start" style={{ maxWidth: "100%" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={product.img}
            className="img-fluid my-order-img rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body manage-order-card">
            <h5 className="card-title">{product.title}</h5>
            <h6>{product.description}</h6>
            <div className="d-flex justify-content-evenly align-items-center">
              <div>
                <h6>
                  <small className="text-gray">Booked by: </small> {name}{" "}
                </h6>
                <h4>Total Payment: ${quantity * product.price}</h4>
                <h6>Status: {status}</h6>
                <button
                  onClick={() => props.handleDelete(_id)}
                  className="customized-btn2"
                >
                  Cancel Tour
                </button>
              </div>
              <div>
                <h6>
                  <i className="fas fa-map-marker-alt"></i> Address: {address}
                </h6>
                <h6>
                  <i className="fas fa-mobile"></i> Phone: {phone}
                </h6>
                <h6>
                  Quantity: {quantity}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
