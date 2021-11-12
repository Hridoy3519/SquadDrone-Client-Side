import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Navigation from "../../Shared/Navigation/Navigation";
import PageHeader from "../../Shared/PageHeader/PageHeader";

const Signup = () => {
  const [loginData, setLoginData] = useState({});
  const { googleSignIn, handleRegisterUser, setErrorMessage } = useAuth();
  const history = useHistory();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleRegister = (e) => {
    if (loginData.password !== loginData.confirmPassword) {
      setErrorMessage("Password Do not Match");
      return;
    }
    handleRegisterUser(
      loginData.email,
      loginData.password,
      loginData.name,
      history
    );
  };

  const handleGoogleSignIn = (e) => {
    googleSignIn(history);
  };
  return (
    <div>
      <PageHeader page="Signup"></PageHeader>
      <Navigation></Navigation>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <Row className="d-flex justify-content-center align-items-center">
          <Col sm={12} md={7} className="w-100" style={{ maxWidth: "480px" }}>
            <Card>
              <Card.Body className="text-start">
                <h2 className="text-center mb-4">Sign Up</h2>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      onBlur={handleOnBlur}
                      type="text"
                      name="name"
                      placeholder="Enter Name"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      onBlur={handleOnBlur}
                      type="email"
                      name="email"
                      placeholder="Enter Email"
                    />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      onBlur={handleOnBlur}
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="formBasicConfirmPassword"
                  >
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      onBlur={handleOnBlur}
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                    />
                  </Form.Group>
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      handleRegister();
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
                    <Button className="google-btn" onClick={handleGoogleSignIn}>
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
          </Col>

          <Col sm={12} md={7}>
            <img
              className="img-fluid"
              width="100%"
              src="https://i.ibb.co/xY1xXzd/Mobile-login.jpg"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Signup;

//{error && <Alert variant="danger"> {error} </Alert>}
