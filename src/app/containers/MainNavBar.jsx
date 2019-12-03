import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Container from "../components/Container";
import logoImage from "../../images/logo.svg";
import commentImg from "../../images/comment.png";
import closeImg from "../../images/closeIcon.png";
import { connect } from "react-redux";
import { signOut } from "../actions";

const NavWrap = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
  background: #f8f9fc;
`;

const StyledContainer = styled(Container)`
  padding-top: 23px;
  padding-bottom: 23px;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 991px) {
    display: ${props => (props.open ? "flex" : "none")};
    position: absolute;
    top: 88px;
    flex-direction: column;
    width: 80%;
    padding-top: 123px;
    background: #fff;
  }
`;

const LogoImage = styled.img`
  width: 218px;
  @media (max-width: 991px) {
    width: 175px;
    margin: 0 auto;
  }
`;

const StyledNavLink = styled(NavLink)`
  margin-right: 30px;
  color: #a4aab5;
  text-decoration: none;
  font-family: "CeraPro-Regular", sans-serif;
  font-size: 14px;
  transition: all 0.3s;
  opacity: 0.85;
  :hover {
    opacity: 1;
  }
  &.${props => props.activeClassName} {
    color: #11223e;
  }
  @media (max-width: 1200px) {
    margin-right: 10px;
  }
  @media (max-width: 991px) {
    margin-bottom: 30px;
    font-family: "CeraPro-Medium", sans-serif;
    font-size: 30px;
  }
`;

const Comment = styled.div`
  margin-right: 20px;
  margin-left: -10px;
  width: 40px;
  height: 40px;
  border: solid 1px rgba(164, 170, 181, 0.5);
  border-radius: 20px;
  background-color: #fff;
  background: url(${commentImg}) no-repeat;
  background-position: center;
  cursor: pointer;
  :hover {
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  }
  @media (max-width: 1200px) {
    margin-right: 10px;
    margin-left: 0;
  }
  @media (max-width: 991px) {
    display: none;
  }
`;

const MobComment = styled(Comment)`
  display: none;
  @media (max-width: 991px) {
    display: block;
  }
`;

const LogOut = styled.button`
  width: 124px;
  height: 40px;
  border-radius: 5px;
  background-color: #ed1651;
  color: #f8f9fc;
  border: none;
  font-family: "CeraPro-Medium", sans-serif;
  font-size: 16px;
  cursor: pointer;
  outline: none;
  :hover {
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  }
  :focus {
    background-color: #ce0f46;
  }
`;

StyledNavLink.defaultProps = {
  activeClassName: "active"
};

const MobIcon = styled.div`
  display: none;
  height: 35px;
  width: 35px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  @media (max-width: 991px) {
    display: flex;
  }
`;

const HambIcon = styled.div`
  padding-bottom: 5px;
  display: flex;
  flex-direction: column;
`;

const HambLine = styled.div`
  border-radius: 3px;
  margin-top: 5px;
  background: #11223e;
  height: 5px;
  width: 35px;
  &:nth-child(2) {
    width: 27px;
  }
  &:nth-child(3) {
    width: 18px;
  }
`;

const CloseIcon = styled.img``;

export class MainNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenMobileMenu: false
    };
  }

  toggleMobileMenu = () => {
    const { isOpenMobileMenu } = this.state;
    this.setState({ isOpenMobileMenu: !isOpenMobileMenu });
  };

  render() {
    const { isOpenMobileMenu } = this.state;
    const { signOut } = this.props;
    return (
      <NavWrap>
        <StyledContainer>
          <MobIcon onClick={this.toggleMobileMenu}>
            {isOpenMobileMenu ? (
              <CloseIcon src={closeImg} />
            ) : (
              <HambIcon>
                <HambLine></HambLine>
                <HambLine></HambLine>
                <HambLine></HambLine>
              </HambIcon>
            )}
          </MobIcon>
          <LogoImage src={logoImage}></LogoImage>
          <MobComment></MobComment>
          <NavMenu open={isOpenMobileMenu}>
            <StyledNavLink onClick={this.toggleMobileMenu} to="/main/about">
              О программе
            </StyledNavLink>
            <StyledNavLink onClick={this.toggleMobileMenu} to="/main/news">
              Новости
            </StyledNavLink>
            <StyledNavLink onClick={this.toggleMobileMenu} to="/main/faq">
              FAQ
            </StyledNavLink>
            <StyledNavLink onClick={this.toggleMobileMenu} to="/main/worth">
              Ценности
            </StyledNavLink>
            <StyledNavLink
              onClick={this.toggleMobileMenu}
              to="/main/nominations"
            >
              Номинации
            </StyledNavLink>
            <StyledNavLink onClick={this.toggleMobileMenu} to="/main/rating">
              Рейтинг
            </StyledNavLink>
            <StyledNavLink onClick={this.toggleMobileMenu} to="/main/profile">
              Личный кабинет
            </StyledNavLink>
            <Comment></Comment>
            <LogOut onClick={signOut}>Выход</LogOut>
          </NavMenu>
        </StyledContainer>
      </NavWrap>
    );
  }
}

export default MainNavBar;
