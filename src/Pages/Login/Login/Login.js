import React, { useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import PageHeader from "../../Shared/PageHeader/PageHeader";
import "./Login.css";
const Login = () => {
  const [loginData, setLoginData] = useState({});
  const {googleSignIn, logIn} = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleLogin = (e) => {
    logIn(loginData.email, loginData.password, location, history);
  };

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleGoogleSignIn = (e) => {
    googleSignIn(history,location);
  };
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
                  <Form.Control onBlur={handleOnBlur} type="email" name="email" placeholder="Enter Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control onBlur={handleOnBlur} type="password" name="password" placeholder="Password" />
                </Form.Group>
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    handleLogin();
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
                <Button className="google-btn" onClick={handleGoogleSignIn}>
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
