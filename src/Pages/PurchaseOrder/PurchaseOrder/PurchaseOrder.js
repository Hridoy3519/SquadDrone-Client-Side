import React, { useEffect, useState } from "react";
import { Alert, Button, Card, Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Rating from "react-rating";
import { useParams } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import PageHeader from "../../Shared/PageHeader/PageHeader";
import "./PurchaseOrder.css";
const PurchaseOrder = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [message, setMessage] = useState("");
  const { title, img, tagline, rating, price, description } = product;
  const { user } = useAuth();
  useEffect(() => {
    fetch(`https://dry-gorge-11173.herokuapp.com/products/${id}`)
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
    fetch("https://dry-gorge-11173.herokuapp.com/orders", {
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
      <Navigation></Navigation>
      <PageHeader page="Product Details"></PageHeader>
      <Container className="my-5">
        {message && <Alert variant="success"> {message} </Alert>}
        <Row>
          <Col sm={12} md={5}>
            <img className="img-fluid" src={img} alt="" />
            <Row className="mt-3 small-pic">
              <Col sm={4} className="text-center">
                <img src="https://i.ibb.co/wWFd0MC/small1.jpg" alt="" />
              </Col>
              <Col sm={4} className="text-center">
                <img src="https://i.ibb.co/wWFd0MC/small1.jpg" alt="" />
              </Col>
              <Col sm={4} className="text-center">
                <img src="https://i.ibb.co/wWFd0MC/small1.jpg" alt="" />
              </Col>
            </Row>
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
            <h4 className="price-text">Price : ${price}.00</h4>
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
        <div className="text-start">
          <h2>Product Description : </h2>
          <p>{description}</p>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default PurchaseOrder;
