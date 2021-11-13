import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import useAuth from "../../../Hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
    const { user, isLoading, isAdmin } = useAuth();
    if (isLoading) {
      return (
        <div className="loading-animation text-center">
          <Spinner
            animation="border"
            role="status"
            style={{ width: "10rem", height: "10rem" }}
          >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      );
    }
    return (
      <Route
        {...rest}
        render={({ location }) =>
          (user.email && isAdmin) ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/home",
                state: { from: location },
              }}
            />
          )
        }
      />
    );
  };
  
  export default AdminRoute;