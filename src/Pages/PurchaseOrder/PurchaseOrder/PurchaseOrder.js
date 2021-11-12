import React, { useEffect, useState } from "react";
import { Alert, Button, Card, Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Rating from "react-rating";
import { useParams } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import PageHeader from "../../Shared/PageHeader/PageHeader";
import "./PurchaseOrder.css";
const PurchaseOrder = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [message, setMessage] = useState('');
  const { title, img, tagline, rating } = product;
  const { user } = useAuth();
  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  //React Hook Forms
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.name = user.displayName;
    data.email = user.email;
    data.order = id;
    data.status = "pending";
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setMessage("Order placed Successfully");
          reset();
        }
      });
  };
  return (
    <div>
      <PageHeader page="Product Details"></PageHeader>
      <Container className="my-5">
      {message && <Alert variant="success"> {message} </Alert>}
        <Row>
          <Col sm={12} md={5}>
            <img className="img-fluid" src={img} alt="" />
          </Col>
          <Col sm={12} md={7} className="text-start">
            <h4>
              {title}- {tagline}
            </h4>
            <Rating
              initialRating={rating}
              emptySymbol="far fa-star"
              fullSymbol="fas fa-star"
              readonly
            ></Rating>
            <Card className="purchase-form shadow-lg my-4">
              {errors.title &&
              errors.description &&
              errors.days &&
              errors.people &&
              errors.price &&
              errors.img ? (
                ""
              ) : (
                <span className="text-danger mb-3">
                  *All Field must be full-filled
                </span>
              )}
              <form onSubmit={handleSubmit(onSubmit)}>
                <input value={user.displayName || ""} {...register("name")} />

                <input
                  value={user.email || ""}
                  {...register("email", { required: true })}
                />
                <input
                  defaultValue=""
                  placeholder="Quantity"
                  {...register("quantity", { required: true })}
                />
                <input
                  defaultValue=""
                  placeholder="Address"
                  {...register("address", { required: true })}
                />
                <input
                  defaultValue=""
                  placeholder="Phone No"
                  {...register("phone", { required: true })}
                />

                <Button type="submit" className="w-100 customized-btn2">
                  Purchase
                </Button>
              </form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PurchaseOrder;