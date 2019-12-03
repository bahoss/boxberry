import React from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  withRouter
} from "react-router-dom";

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  isAdmin,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated && isAdmin ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);
const mapStateToProps = function(state) {
  return {
    isAuthenticated: state.isAuthenticated,
    isAdmin: state.isAdmin
  };
};

export default withRouter(connect(mapStateToProps)(PrivateRoute));
