import React, { Component } from "react";
import styled from "styled-components";
import MainNavBar from "../../containers/MainNavBar.jsx";
import { Redirect, Route, Switch } from "react-router-dom";
import About from "./About";
import { connect } from "react-redux";
import { signOut, getSteps } from "../../actions";

const Wrapper = styled.div``;

const Contents = styled.div`
  margin-top: 88px;
`;

export class MainPage extends Component {
  componentDidMount() {
    this.props.getSteps();
  }
  render() {
    const { signOut, steps } = this.props;
    return (
      <Wrapper>
        <MainNavBar signOut={signOut}></MainNavBar>
        <Contents>
          <Switch>
            <Route exact path="/main/about">
              <About steps={steps}></About>
            </Route>
            <Route path="/main/news">
              <h3>News</h3>
            </Route>
            <Route>
              <Redirect to="/main/about"></Redirect>
            </Route>
          </Switch>
        </Contents>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    steps: state.main.steps
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut()),
    getSteps: () => dispatch(getSteps())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
