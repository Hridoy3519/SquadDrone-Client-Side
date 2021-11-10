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
          <h3>Our Drone's uses cutting edge Technologies &</h3>
          <h3>Products to get the best result</h3>
          <Button>Explore</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/bXQsGSJ/aaron-burden-0f-A3g-VTGwj-Q-unsplash.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/bXQsGSJ/aaron-burden-0f-A3g-VTGwj-Q-unsplash.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
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
