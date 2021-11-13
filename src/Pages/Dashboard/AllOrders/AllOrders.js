import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import './AllOrders.css';
const AllOrders = (props) => {
  const { order, name, quantity, address, phone, _id, status } = props.order;
  // let {} = props.order;
  const [statusOnUi, setStatusOnUi] = useState(status);
  const [destination, setDestination] = useState([]);

  useEffect(() => {
    fetch(`https://dry-gorge-11173.herokuapp.com/products/${order}`)
      .then((res) => res.json())
      .then((data) => setDestination(data));
  }, []);
  return (
    <Col>
      <div
        className="card all-orders mb-3"
        style={{ maxWidth: "100%" }}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={destination.img}
              className="img-fluid all-order-img rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body manage-order-card text-start">
              <h5 className="card-title">{destination.title}</h5>
              <h6>
                <small className="text-gray">Booked by: </small> {name}{" "}
              </h6>
              <h6>
                <i className="fas fa-map-marker-alt"></i> Address: {address}
              </h6>
              <h6>
                <i className="fas fa-mobile"></i> Phone: {phone}
              </h6>
              <h6>
                     Quantity: {quantity}
              </h6>
              <h5>
                <small className="text-gray"> Total Payment:</small> $
                {quantity * destination.price}
              </h5>
              <h6>Status: {statusOnUi}</h6>
              <button
                onClick={() => {
                  setStatusOnUi("Shipped");
                  props.handleUpdate(_id);
                }}
                className="customized-btn2"
              >
                Approve
              </button>{" "}
              <button
                onClick={() => props.handleDelete(_id)}
                className="customized-btn2"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default AllOrders;
