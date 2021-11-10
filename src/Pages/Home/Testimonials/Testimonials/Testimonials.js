import React from "react";
import { Card, Carousel, Container } from "react-bootstrap";
import "./Testimonial.css";
const Testimonials = () => {
  return (
    <Container>
      <h1>Our Reviews</h1>
      <div className="upper-underline"></div>
      <div className="middle-underline"></div>
      <div className="lower-underline"></div>
      <Carousel className="testimonial" indicators={false} variant="dark">
        <Carousel.Item>
          <div className="review">
            <div class="client-img">
              <img src="images/user-img-3.jpg" alt="Testimonial Slider" />
            </div>
            <p>
              <i>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form. There
                are many variations of passages of Lorem Ipsum available. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry
              </i>
            </p>
            <h3>
              <span>-</span> Rajnish Kumar <span>-</span>
            </h3>
          </div>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Testimonials;
