import React, { useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import "./Navigation.css";
const Navigation = () => {
  //fixed navbar
  const [isFixed, setIsFixed] = useState(false);
  const { user, logOut } = useAuth();

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
    <Navbar
      fixed="top"
      collapseOnSelect
      expand="lg"
      className={`mobile-fixed ${isFixed ? "fixed-nav" : ""}`}
    >
      <Container>
        <Navbar.Brand href="#home">SquadDrone</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto nav">
            <Nav.Link as={NavLink} style={{ color: "white" }} to="/home">
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              style={{ color: "white" }}
              className="nav-link"
              to="/explore"
            >
              Explore
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              style={{ color: "white" }}
              className="nav-link"
              to="/#products"
            >
              Products
            </Nav.Link>
            {user.email && (
              <NavLink to="/dashboard">
                <Button className="customized-btn2">
                  <i className="fas fa-user-shield"></i> Dashboard
                </Button>
              </NavLink>
            )}
          </Nav>
          <Nav className="nav">
            {user.email ? (
              <div className="loggedIn-user d-flex align-items-center justify-content-between">
                <h5 className="user-name-text me-2">
                  <i className="fas fa-user"></i> {user.displayName}
                </h5>
                <button onClick={logOut} className="logout-btn">
                  Logout
                </button>
              </div>
            ) : (
              <Nav.Link
                as={NavLink}
                style={{ color: "white" }}
                className="nav-link login text-center"
                to="/login"
              >
                Log In
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

//className={isFixed ? 'fixed-nav' : ''} className="mobile-fixed"
