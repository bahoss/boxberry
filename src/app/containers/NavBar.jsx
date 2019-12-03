import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logoImage from "../../images/logo.svg";

const NavWrap = styled.aside`
  position: fixed;
  height: 100%;
  z-index: 1;
  top: 0;
  left: 0;
  padding: 30px 19px;
  display: flex;
  flex-direction: column;
  width: 200px;
  background-color: #11223e;
  box-sizing: border-box;
`;

const LogoImage = styled.img`
  width: 160px;
  margin: 0 auto;
`;

const StyledNavLink = styled(NavLink)`
  margin-top: 30px;
  color: #f8f9fc;
  text-decoration: none;
  font-family: "CeraPro-Regular", sans-serif;
  font-size: 20px;
  transition: all 0.3s;
  &.${props => props.activeClassName} {
    color: #00a7e1;
  }
`;

StyledNavLink.defaultProps = {
  activeClassName: "active"
};

export class Navbar extends Component {
  render() {
    return (
      <NavWrap>
        <LogoImage src={logoImage}></LogoImage>
        <StyledNavLink exact to="/admin">
          Главная
        </StyledNavLink>
        <StyledNavLink to="/admin/news">Новости</StyledNavLink>
        <StyledNavLink to="/admin/faq">FAQ</StyledNavLink>
        <StyledNavLink to="/admin/about">О программе</StyledNavLink>
        <StyledNavLink to="/admin/users">Пользователи</StyledNavLink>
        <StyledNavLink to="/admin/nominations">Номинации</StyledNavLink>
        <StyledNavLink to="/admin/applications"> Заявки</StyledNavLink>
        <StyledNavLink to="/admin/structure">Структура компании</StyledNavLink>
        <StyledNavLink to="/admin/statistics">Статистика</StyledNavLink>
      </NavWrap>
    );
  }
}

export default Navbar;
