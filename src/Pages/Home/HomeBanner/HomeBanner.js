import React from "react";
import { Button, Carousel } from "react-bootstrap";
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
          <Button className="mt-3">Explore</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/zxNpsvn/banner-4.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1>ENJOY THE MOST CINEMATIC EXPERIENCE</h1>
          <p>Our Drone's uses cutting edge Technologies &</p>
          <p>Products to get the best result</p>
          <Button className="mt-3">Explore</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/FxXFqZJ/dronebanner3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1>ENJOY THE MOST CINEMATIC EXPERIENCE</h1>
          <p>Our Drone's uses cutting edge Technologies &</p>
          <p>Products to get the best result</p>
          <Button className="mt-3">Explore</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeBanner;

{
  /* <div className="banner d-flex justify-content-center align-items-end">
            <div className="banner-description text-white mb-5">
                <h3>Our Drone's uses cutting edge Technologies &</h3>
                <h3>Products to get the best result</h3>

                <Button>Explore</Button>
            </div>
        </div> */
}
