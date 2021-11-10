import React, { useEffect, useState } from "react";
import { Carousel, Container } from "react-bootstrap";
import Review from "../Review/Review";
import "./Testimonial.css";
import Aos from 'aos';
import "aos/dist/aos.css";
const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Hridoy3519/json-data/main/doctor.json"
    )
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  useEffect(() => {
    Aos.init({duration : 3000})
},[])

  return (
    <Container data-aos="fade-up">
      <h1>Our Reviews</h1>
      <h1>{reviews.length}</h1>
      <div className="upper-underline"></div>
      <div className="middle-underline"></div>
      <div className="lower-underline"></div>
      <Carousel className="testimonial" indicators={false} variant="dark">
        {reviews.map((review) => (
          <Carousel.Item>
            <Review key={review.key} review={review}></Review>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Testimonials;
