import React from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import PageHeader from "../../Shared/PageHeader/PageHeader";

const Signup = () => {
  return (
    <div>
      <PageHeader page="Signup"></PageHeader>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "480px" }}>
          <Card>
            <Card.Body className="text-start">
              <h2 className="text-center mb-4">Sign Up</h2>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Enter Email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="formBasicConfirmPassword"
                >
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                  className="w-100"
                  variant="primary"
                  type="submit"
                >
                  Sign Up
                </Button>
                <br />
                <br />
                <br />
                <div className="text-center">
                  <Button className="google-btn">
                    <img
                      width="20px"
                      alt="Google sign-in"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                    />
                    Google Sign Up
                  </Button>
                </div>
              </Form>
              <div className="text-center mt-2">
                Already have an account? <Link to="/login">Log In</Link>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default Signup;

//{error && <Alert variant="danger"> {error} </Alert>}
