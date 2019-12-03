import React, { Component } from "react";
import styled from "styled-components";
import { withRouter, Route, Link } from "react-router-dom";
import { pathNames } from "../../data";
import NavBar from "../../containers/NavBar.jsx";
import Search from "../../components/CustomSearch";

const Wrapper = styled.div``;

const Contents = styled.div`
  padding: 20px;
  position: absolute;
  left: 200px;
  top: 0;
  right: 0;
  height: 100%;
  background-color: #f8f9fc;
  box-sizing: border-box;
`;

const Header = styled.div`
  padding: 0 20px;
  height: 74px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  border: solid 1px rgba(52, 66, 90, 0.1);
  background-color: #fff;
`;

const Title = styled.h3`
  font-family: "CeraPro-Medium", sans-serif;
  font-size: 20px;
`;

const BreadCrumbs = styled.div`
  a {
    font-family: "CeraPro-Regular", sans-serif;
    font-size: 16px;
    color: #a4aab5;
    text-decoration: none;
    margin-right: 3px;
    ::after {
      content: "/";
      margin-left: 3px;
    }
    :last-child {
      ::after {
        content: "";
      }
    }
  }
`;

let searchData = [
  {
    id: "1",
    title:
      "Много текста по теме новостей и вообще возможность что-либо поменять",
    onMainPage: true,
    isActive: true
  },
  {
    id: "2",
    title: "Мноgergreg uyjuyjuyj uj,l,lj,l,jl,jl,jl,jllj,j,j,",
    onMainPage: true,
    isActive: true
  },
  {
    id: "3",
    title: "супgdfgdfg",
    onMainPage: true,
    isActive: true
  }
];

export class AdminPage extends Component {
  render() {
    let pathsArr = this.props.location.pathname.split("/");
    pathsArr.splice(0, 1);
    return (
      <Wrapper>
        <NavBar></NavBar>
        <Contents>
          {pathsArr.length > 1 && (
            <Header>
              <Title>{pathNames[pathsArr[1]]}</Title>
              <BreadCrumbs>
                {pathsArr.map((path, index) => (
                  <Link
                    to={
                      (index === 0 && `/${path}`) ||
                      (index === 1 && `/${pathsArr[0]}/${path}`) ||
                      this.props.location.pathname
                    }
                  >
                    {pathNames[path] || path}
                  </Link>
                ))}
              </BreadCrumbs>
            </Header>
          )}
          <Route exact path="/admin">
            <h3>Main</h3>
          </Route>
          <Route exact path="/admin/news">
            <Search
              data={searchData}
              path={this.props.location.pathname}
              title="hhh"
            ></Search>
          </Route>
          <Route>
            <h3>other</h3>
          </Route>
        </Contents>
      </Wrapper>
    );
  }
}

export default withRouter(AdminPage);
