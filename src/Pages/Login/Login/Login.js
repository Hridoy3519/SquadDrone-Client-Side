import React from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import PageHeader from "../../Shared/PageHeader/PageHeader";
import "./Login.css";
const Login = () => {
  return (
    <div>
      <PageHeader page="Login"></PageHeader>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100 login-page" style={{ maxWidth: "480px" }}>
          <Card>
            <Card.Body className="text-start">
              <h2 className="text-center mb-4">Log In</h2>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="text-start">Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Enter Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
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
                  Log In
                </Button>
              </Form>
              <div className="text-center mt-2">
                Need an Account? <Link to="/signup">Sign Up</Link>
              </div>
              <div className="text-center mt-2">
                <Button className="google-btn">
                  <img
                    width="20px"
                    alt="Google sign-in"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                  />
                  Google Sign In
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default Login;

//{error && <Alert variant="danger"> {error} </Alert>}
