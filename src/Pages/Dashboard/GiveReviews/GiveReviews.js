import React, { useState } from "react";
import { Alert, Button, Card, Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";

const GiveReviews = () => {
  const [success, isSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.img = 'https://i.ibb.co/qD85sL9/user-review.jpg'
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          isSuccess(true);
          reset();
        }
      });
  };

  const { user } = useAuth();
  console.log(user);
  return (
    <div>
      <h3 style={{ color: "#06A3DA" }}>
        Give us a Review, so we can make our service Better.
      </h3>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <Row className="d-flex justify-content-center align-items-center">
          <Col sm={12} md={7} className="w-100" style={{ maxWidth: "480px" }}>
            <Card className="review-form">
            {success && <Alert severity="success">Admin Added Successfully!</Alert>}
              <Card.Body className="text-start">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    defaultValue={user.displayName}
                    {...register("name", { required: true })}
                  />
                  {errors.name && <span>This field is required</span>}
                  <input
                    placeholder="Job Title"
                    {...register("Job", { required: true })}
                  />
                  {errors.Job && <span>This field is required</span>}
                  <textarea
                    placeholder="Comment"
                    {...register("comment", { required: true })}
                  />
                  {errors.comment && <span>This field is required</span>}
                  <input
                    placeholder="Rating? ex: 1-5"
                    {...register("rating", { required: true })}
                  />
                  {errors.rating && <span>This field is required</span>}
                  <Button type="submit" className="w-100 review-btn">
                    Submit
                  </Button>
                </form>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} md={7}>
            <img
              className="img-fluid"
              width="100%"
              src="https://i.ibb.co/PWw5K8c/Five-star-grading-Evaluation-rating-estimating-Excellent-review-customer-satisfaction-with-service-h.jpg"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GiveReviews;
