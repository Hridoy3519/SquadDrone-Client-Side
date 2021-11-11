import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
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
            <Nav.Link as={NavLink} style={{color : 'white'}} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} style={{color : 'white'}} to="/explore">Explore</Nav.Link>
            <Nav.Link as={NavLink} style={{color : 'white'}} to="/#products">Products</Nav.Link>
            <Nav.Link as={NavLink} style={{color : 'white'}} to="/#products">Reviews</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

//className={isFixed ? 'fixed-nav' : ''} className="mobile-fixed"