import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const AboutDrone = () => {
  return (
    <Container>
      <Row>
        <Col sm={12} md={8} className="text-start">
          <div>
            <h2>A CONTROLLER SMARTER THAN MOST DRONE</h2>
            <br></br>
            <p>
              Everybody pulled his weight. Gee our old Lasalle ran great. Those
              were the days. You wanna be where you can see our troubles are all
              the same. You wanna be where everybody knows Your name. I have
              always wanted to have a neighbor just like you. I’ve always wanted
              to live in a neighborhood with you
            </p>
            <br></br>
            <p>
              Hills that is. Swimmin’ pools movie stars. Makin’ your way in the
              world today takes everything you’ve got. Takin’ a break from all
              your worries sure would help a lot.
            </p>
          </div>

          <Row className="mt-3">
            <Col sm={4} className="text-center">
              <img src="https://i.ibb.co/wWFd0MC/small1.jpg" alt="" />
              <h4>Preflight</h4>
              <p>
                Travelled down the road and back again. Your heart is true
                you're a confidant.
              </p>
            </Col>
            <Col sm={4} className="text-center">
              <img src="https://i.ibb.co/wWFd0MC/small1.jpg" alt="" />
              <h4>Preflight</h4>
              <p>
                Travelled down the road and back again. Your heart is true
                you're a confidant.
              </p>
            </Col>
            <Col sm={4} className="text-center">
              <img src="https://i.ibb.co/wWFd0MC/small1.jpg" alt="" />
              <h4>Preflight</h4>
              <p>
                Travelled down the road and back again. Your heart is true
                you're a confidant.
              </p>
            </Col>
          </Row>
        </Col>
        <Col sm={12} md={4}>
          <img src="https://i.ibb.co/zm7Fvzd/Img6.jpg" alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutDrone;
// https://i.ibb.co/wWFd0MC/small1.jpg
