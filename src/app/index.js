import React, { Component } from "react";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import PrivateRouter from "./routes/PrivateRouter";
import PrivateAdminRouter from "./routes/PrivateAdminRouter";
import reducers from "./reducers";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
  Switch
} from "react-router-dom";
import AuthPage from "./pages/Auth";
import MainPage from "./pages/Main";
import AdminPage from "./pages/Admin";
import SignUpPage from "./pages/SignUp";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));

export default class App extends Component {
  componentDidMount() {
    let token = localStorage.getItem("token");
    if (token) {
      console.log(token);
    }
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Redirect to="/login"></Redirect>
            </Route>
            <PrivateRouter path="/main" component={MainPage}></PrivateRouter>
            <PrivateAdminRouter
              path="/admin"
              component={AdminPage}
            ></PrivateAdminRouter>
            <Route exact path="/login" component={AuthPage}></Route>
            <Route exact path="/signup" component={SignUpPage}></Route>{" "}
          </Switch>
        </Router>
      </Provider>
    );
  }
}
