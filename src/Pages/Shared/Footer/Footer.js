import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="down">
          <Col md={2} className="text-start">
            <div>
              <h3>Contact Us</h3>
              <div className="my-4">
                <h6>Address</h6>
                <p>Downtown, Lamabazar, Sylhet</p>
              </div>
              <div className="my-4">
                <h6>Email Us</h6>
                <p>drone@email.com</p>
              </div>
              <div className="my-4">
                <h6>Call Us</h6>
                <p>(+880)176532xxxx</p>
              </div>
            </div>
          </Col>
          <Col md={2} className="text-start">
            <div>
              <h3 className="mb-4">Latest News</h3>
              <p>Become an Affiliate</p>
              <p>About Drone</p>
              <p>New Products</p>
              <p>Our Team</p>
            </div>
          </Col>
          <Col md={2} className="text-start">
          <div>
              <h3 className="mb-4">Our Services</h3>
              <p>About Us</p>
              <p>Testimonials</p>
              <p>Shops</p>
              <p>Our Team</p>
            </div>
          </Col>
          <Col md={4}>
            <p>Explore the cinematic Experience</p>
            <h6>Hridoy Chowdhury</h6>
            <div className="socials">
              <a
                target="_blank"
                href="https://www.facebook.com/hridoy.chowdhury.3701/"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a target="_blank" href="">
                <i className="fab fa-instagram"></i>
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/hridoy3519/">
                {" "}
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </Col>
        </Row>
        <div className="copyright">
          <small>
            ©Copyright 2021, Hridoy Chowdhury, Sylhet .All right reserved
          </small>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
