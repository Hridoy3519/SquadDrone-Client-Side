import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Navigation.css";
const Navigation = () => {
  //fixed navbar
  const [isFixed,setIsFixed] = useState(false);

  window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = 100;
    if (scrollHeight > navHeight) {
      setIsFixed(true);
    } else {
        setIsFixed(false);
    }
  });
  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" className={`mobile-fixed ${isFixed ? 'fixed-nav' : ''}`}>
      <Container>
        <Navbar.Brand href="#home">SquadDrone</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

//className={isFixed ? 'fixed-nav' : ''} className="mobile-fixed"