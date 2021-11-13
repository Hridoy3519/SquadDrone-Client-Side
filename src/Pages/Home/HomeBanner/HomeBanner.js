import React from "react";
import { Button, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./HomeBanner.css";
const HomeBanner = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/bXQsGSJ/aaron-burden-0f-A3g-VTGwj-Q-unsplash.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>ENJOY THE MOST CINEMATIC EXPERIENCE</h1>
          <p>Our Drone's uses cutting edge Technologies &</p>
          <p>Products to get the best result</p>
          <Link to="/explore">
            <Button className="mt-3 customized-btn2">Explore</Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/zxNpsvn/banner-4.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1>Capture the Moment's You Cherish</h1>
          <p>Our Drone's uses cutting edge Technologies &</p>
          <p>Products to get the best result</p>
          <Link to="/explore">
            <Button className="mt-3 customized-btn2">Explore</Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/FxXFqZJ/dronebanner3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1>Explore The Epic Bird Eye View</h1>
          <p>Our Drone's uses cutting edge Technologies &</p>
          <p>Products to get the best result</p>
          <Button className="mt-3 customized-btn2">Explore</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeBanner;
