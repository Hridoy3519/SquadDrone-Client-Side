import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Explore from "./Pages/Explore/Explore/Explore";
import Login from "./Pages/Login/Login/Login";
import Signup from "./Pages/Login/Signup/Signup";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import PurchaseOrder from "./Pages/PurchaseOrder/PurchaseOrder/PurchaseOrder";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/explore">
              <Explore />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <PrivateRoute path="/purchase/:id">
              <PurchaseOrder/>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard/>
            </PrivateRoute>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
