import React, { Component } from "react";
import authBg from "../../../images/authBg.png";
import logoImg from "../../../images/logo.svg";
import styled from "styled-components";
import { connect } from "react-redux";
import { signUp } from "../../actions";
import { Link } from "react-router-dom";

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
  padding: 34px 61px 40px 40px;
  border-radius: 5px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  border: solid 1px rgba(17, 33, 62, 0.2);
  background-color: #fff;
  @media screen and (max-width: 991px) {
    padding: 38px 30px;
    align-items: center;
  }
`;

const Logo = styled.img`
  margin-bottom: 40px;
  width: fit-content;
`;

const InputsWrap = styled.div`
  display: flex;
  @media screen and (max-width: 991px) {
    flex-direction: column;
  }
`;

const PassInputs = styled.div``;

const QuestionInputs = styled.div`
  margin-left: 30px;
  @media screen and (max-width: 991px) {
    margin-left: 0;
  }
`;

const InputWithLabel = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.span`
  margin-bottom: 13px;
  font-family: "CeraPro-Regular", sans-serif;
  font-size: 14px;
  color: #88909e;
  line-height: 9px;
  @media screen and (max-width: 991px) {
    text-align: center;
  }
`;

const Input = styled.input`
  padding-left: 10px;
  border-radius: 5px;
  border: ${props =>
    props.error ? "solid 1px #d7283d" : "solid 1px rgba(17, 34, 62, 0.15);"};
  font-family: "CeraPro-Regular", sans-serif;
  font-size: 14px;
  min-width: 274px;
  min-height: 40px;
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
  @media screen and (max-width: 991px) {
    text-align: center;
  }
`;

const PasswordInput = styled(Input)`
  letter-spacing: 2px;
  ::placeholder {
    letter-spacing: normal;
  }
`;

const ButtonsWrap = styled.div`
  margin-top: 60px;
  display: flex;
  @media screen and (max-width: 991px) {
    flex-direction: column-reverse;
    margin-top: 7px;
  }
`;

const CancelButton = styled(Link)`
  width: 215px;
  height: 58px;
  border-radius: 10px;
  background-color: #a4aab5;
  font-family: "CeraPro-Medium", sans-serif;
  font-size: 20px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.3s;
  text-decoration: none;
  line-height: 58px;
  text-align: center;
  :hover {
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  }
  :focus {
    background-color: #a4aab5;
  }
  @media screen and (max-width: 991px) {
    margin-top: 16px;
  }
`;

const ActivateButton = styled(CancelButton)`
  background-color: #ed1651;
  margin-left: 20px;
  :focus {
    background-color: #ce0f46;
  }
  @media screen and (max-width: 991px) {
    margin-left: 0;
    margin-top: 0;
  }
`;

const ErrorText = styled.span`
  margin-top: 10px;
  color: #d7283d;
  font-family: "CeraPro-Medium", sans-serif;
  font-size: 14px;
`;

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: "",
      c_password: "",
      question: "",
      answer: "",
      isLoginError: false,
      isPasswordError: false,
      isConfirmError: false,
      isQuestionError: false,
      isAnswerError: false
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    if (e.target.name === "login") {
      this.setState({
        isLoginError: false
      });
    }
    if (e.target.name === "password") {
      this.setState({
        isPasswordError: false
      });
    }
    if (e.target.name === "c_password") {
      this.setState({
        isConfirmError: false
      });
    }
    if (e.target.name === "question") {
      this.setState({
        isQuestionError: false
      });
    }
    if (e.target.name === "answer") {
      this.setState({
        isAnswerError: false
      });
    }
  };

  signUp = () => {
    const {
      login,
      password,
      c_password,
      question,
      answer,
      isLoginError,
      isPasswordError,
      isConfirmError,
      isQuestionError,
      isAnswerError
    } = this.state;
    const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regNum = /^\d+$/;
    if (!regEmail.test(String(login).toLowerCase())) {
      if (!regNum.test(login) || login.length < 11) {
        this.setState({ isLoginError: true });
      }
    }
    if (password.length < 6) {
      this.setState({ isPasswordError: true });
    }
    if (password !== c_password) {
      this.setState({ isConfirmError: true });
    }
    if (password.length < 6) {
      this.setState({ isPasswordError: true });
    }
    if (question.length < 1) {
      this.setState({ isQuestionError: true });
    }
    if (answer.length < 1) {
      this.setState({ isAnswerError: true });
    }
    if (
      !isLoginError &&
      !isPasswordError &&
      !isConfirmError &&
      !isQuestionError &&
      !isAnswerError
    ) {
      let signUpData = {
        login,
        password,
        c_password
      };
      this.props.signUp(signUpData);
    }
  };

  render() {
    const {
      isLoginError,
      isPasswordError,
      isConfirmError,
      isQuestionError,
      isAnswerError
    } = this.state;
    return (
      <Wrapper>
        <AuthBlock>
          <Logo src={logoImg}></Logo>
          <InputsWrap>
            <PassInputs>
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
                  error={isPasswordError}
                ></PasswordInput>
                {isPasswordError && <ErrorText>Не менее 6 символов</ErrorText>}
              </InputWithLabel>
              <InputWithLabel>
                <Label>Повторите пароль</Label>
                <PasswordInput
                  type="password"
                  name="c_password"
                  placeholder="Balonka01"
                  onChange={this.handleChange}
                  error={isConfirmError}
                ></PasswordInput>
                {isConfirmError && <ErrorText>Пароли не совпадают</ErrorText>}
              </InputWithLabel>
            </PassInputs>
            <QuestionInputs>
              <InputWithLabel>
                <Label>Придумайте вопрос</Label>
                <Input
                  type="text"
                  name="question"
                  placeholder="Кличка вашего питомца"
                  onChange={this.handleChange}
                  error={isQuestionError}
                ></Input>
                {isQuestionError && <ErrorText>Небходимо заполнить</ErrorText>}
              </InputWithLabel>
              <InputWithLabel>
                <Label>Ответ на вопрос</Label>
                <Input
                  type="text"
                  name="answer"
                  placeholder="Balonka01"
                  onChange={this.handleChange}
                  error={isAnswerError}
                ></Input>
                {isAnswerError && <ErrorText>Небходимо заполнить</ErrorText>}
              </InputWithLabel>
            </QuestionInputs>
          </InputsWrap>
          <ButtonsWrap>
            <CancelButton to="/login">Отмена</CancelButton>
            <ActivateButton onClick={this.signUp}>Активация</ActivateButton>
          </ButtonsWrap>
        </AuthBlock>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.isAuthenticated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: data => dispatch(signUp(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
