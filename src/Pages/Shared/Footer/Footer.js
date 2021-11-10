import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="down">
          <Col md={2}>
            <h4>Resources</h4>
            <h6>Book Now</h6>
            <h6>Services</h6>
            <h6>Contact Us</h6>
          </Col>
          <Col md={2}>
            <h4>Information</h4>
            <h6>New Destinations</h6>
            <h6>Upcoming Tour</h6>
          </Col>
          <Col md={2}>
            <h4>About Us</h4>
            <h6>About US</h6>
            <h6>Contact Us</h6>
          </Col>
          <Col md={4}>
            <p>Explore the unknowns with us.</p>
            <h4>Hridoy Chowdhury</h4>
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
