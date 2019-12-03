import React, { Component } from "react";
import authBg from "../../../images/authBg.png";
import logoImg from "../../../images/logo.svg";
import styled from "styled-components";
import { connect } from "react-redux";
import { loginIn, resetError } from "../../actions";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
  useHistory
} from "react-router-dom";

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${authBg}) no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
`;

const AuthBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 63px 61px 40px 61px;
  border-radius: 5px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  border: solid 1px rgba(17, 33, 62, 0.2);
  background-color: #fff;
  @media screen and (max-width: 991px) {
    padding: 61px 28px;
  }
`;

const Logo = styled.img`
  margin-bottom: 73px;
`;

const InputWithLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const Label = styled.span`
  margin-bottom: 13px;
  font-family: "CeraPro-Regular", sans-serif;
  font-size: 14px;
  color: #11223e;
  line-height: 9px;
`;

const Input = styled.input`
  border-radius: 5px;
  border: ${props =>
    props.error ? "solid 1px #d7283d" : "solid 1px rgba(17, 34, 62, 0.15);"};
  font-family: "CeraPro-Regular", sans-serif;
  font-size: 14px;
  min-width: 274px;
  min-height: 40px;
  text-align: center;
  outline: none;
  box-sizing: border-box;
  color: ${props => (props.error ? "#d7283d" : "#000")};
  ::placeholder {
    color: #a4aab5;
  }
  :focus {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    ::placeholder,
    ::-webkit-input-placeholder {
      color: transparent;
    }
    :-ms-input-placeholder {
      color: transparent;
    }
  }
`;

const PasswordInput = styled(Input)`
  letter-spacing: 2px;
  ::placeholder {
    letter-spacing: normal;
  }
`;

const LoginButton = styled.button`
  margin-top: 40px;
  width: 215px;
  height: 58px;
  border-radius: 10px;
  background-color: #00a7e1;
  font-family: "CeraPro-Medium", sans-serif;
  font-size: 20px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.3s;
  :hover {
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  }
  :focus {
    background-color: #0093c5;
  }
`;

const ActivateButton = styled(Link)`
  background-color: #ed1651;
  text-decoration: none;
  margin-top: 20px;
  width: 215px;
  height: 58px;
  border-radius: 10px;
  font-family: "CeraPro-Medium", sans-serif;
  font-size: 20px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.3s;
  text-align: center;
  line-height: 58px;
  :hover {
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  }
  :focus {
    background-color: #ce0f46;
  }
`;

const ResetPassword = styled(Link)`
  margin-top: 20px;
  font-family: "CeraPro-Medium", sans-serif;
  font-size: 14px;
  color: #a4aab5;
  text-decoration: none;
`;

const ErrorText = styled.span`
  margin-top: 10px;
  color: #d7283d;
  font-family: "CeraPro-Medium", sans-serif;
  font-size: 14px;
`;

const PopUp = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const PopUpBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const PopUpContent = styled.div`
  padding: 20px;
  position: relative;
  top: 40%;
  width: 300px;
  margin: 0 auto;
  border-radius: 5px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  border: solid 1px rgba(17, 33, 62, 0.2);
  background-color: #fff;
  font-family: "CeraPro-Regular", sans-serif;
  font-size: 16px;
  @media screen and (max-width: 991px) {
  }
`;

const Close = styled.span`
  position: absolute;
  right: 5px;
  top: 0px;
  font-size: 20px;
  cursor: pointer;
  font-family: "CeraPro-Regular", sans-serif;
`;

class AuthPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: "",
      isLoginError: false
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      isLoginError: false
    });
  };

  loginIn = () => {
    const { login, password } = this.state;
    const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regNum = /^\d+$/;
    let data = { login, password };

    if (!regEmail.test(String(login).toLowerCase())) {
      if (!regNum.test(login) || login.length < 11) {
        this.setState({ isLoginError: true });
      } else {
        this.props.loginIn(data);
      }
    } else {
      this.props.loginIn(data);
    }
  };

  closePopUp = () => {
    this.props.resetError();
  };

  render() {
    const { isAuthenticated, isAuthError } = this.props;
    const { isLoginError } = this.state;
    return isAuthenticated ? (
      <Redirect to="/main"></Redirect>
    ) : (
      <Wrapper>
        {isAuthError && (
          <PopUp>
            <PopUpBg onClick={this.closePopUp}></PopUpBg>
            <PopUpContent>
              <Close onClick={this.closePopUp}>x</Close>
              Ошибка авторизации - неверные данные либо аккаунт неактивирован
            </PopUpContent>
          </PopUp>
        )}
        <AuthBlock>
          <Logo src={logoImg}></Logo>
          <InputWithLabel>
            <Label>Логин входа</Label>
            <Input
              type="text"
              name="login"
              placeholder="Balonka01"
              onChange={this.handleChange}
              error={isLoginError}
            ></Input>
            {isLoginError && (
              <ErrorText>Только email или номер телефона</ErrorText>
            )}
          </InputWithLabel>
          <InputWithLabel>
            <Label>Пароль</Label>
            <PasswordInput
              type="password"
              name="password"
              placeholder="Balonka01"
              onChange={this.handleChange}
            ></PasswordInput>
          </InputWithLabel>
          <LoginButton onClick={this.loginIn}>Вход в профиль</LoginButton>
          <ActivateButton to="/signup">Активация</ActivateButton>
          <ResetPassword to="/resetpassword">Напомнить пароль</ResetPassword>
        </AuthBlock>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isAuthError: state.auth.isAuthError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // dispatching actions returned by action creators
    loginIn: login => dispatch(loginIn(login)),
    resetError: () => dispatch(resetError())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthPage);
