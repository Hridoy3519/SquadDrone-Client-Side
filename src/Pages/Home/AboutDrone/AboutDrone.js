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
              Whether you call them Unmanned Aerial Vehicles (UAVs), Miniature
              Pilotless Aircraft or Flying Mini Robots, drones are rapidly
              growing in popularity. They are still in the infancy stage in
              terms of mass adoption and usage, but drones have already broken
              through rigid traditional barriers in industries which otherwise
              seemed impenetrable by similar technological innovations.
            </p>
            <br></br>
            <p>
              Whether these unmanned aircrafts are controlled by a remote or
              accessed via a smartphone app, they possess the capability of
              reaching the most remote areas with little to no manpower needed
              and require the least amount of effort, time, and energy.
            </p>
          </div>

          <Row className="mt-3">
            <Col sm={4} className="text-center">
              <img src="https://i.ibb.co/wWFd0MC/small1.jpg" alt="" />
              <h4>Preflight</h4>
              <p>
                Increasing work efficiency and productivity, decreasing workload
                and production costs.
              </p>
            </Col>
            <Col sm={4} className="text-center">
              <img src="https://i.ibb.co/wWFd0MC/small1.jpg" alt="" />
              <h4>Preflight</h4>
              <p>
                Improving accuracy, refining service and customer relations,
              </p>
            </Col>
            <Col sm={4} className="text-center">
              <img src="https://i.ibb.co/wWFd0MC/small1.jpg" alt="" />
              <h4>Preflight</h4>
              <p>
                Resolving security issues on a vast scale are a few of the
                top uses drones offer industries globally.
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
