import {
  AUTH_LOGIN_IN_STARTED,
  AUTH_LOGIN_IN_FAILURE,
  AUTH_LOGIN_IN_SUCCESS,
  AUTH_LOGIN_ERROR_RESET,
  AUTH_SIGN_UP_STARTED,
  AUTH_SIGN_UP_FAILURE,
  AUTH_SIGN_UP_SUCCESS,
  AUTH_SIGN_OUT
} from "../constants";

import { auth, registerUser } from "../api";

export const loginIn = login => dispatch => {
  dispatch({ type: AUTH_LOGIN_IN_STARTED });

  auth(login)
    .then(res => {
      localStorage.setItem("token", res.data.success.token);
      dispatch({
        type: AUTH_LOGIN_IN_SUCCESS,
        payload: res.data.success
      });
    })
    .catch(err =>
      dispatch({
        type: AUTH_LOGIN_IN_FAILURE
      })
    );
};

export const signUp = signData => dispatch => {
  dispatch({ type: AUTH_SIGN_UP_STARTED });

  registerUser(signData)
    .then(
      res => console.log(res.body)
      /*  dispatch({
      type: AUTH_SIGN_UP_SUCCESS,
      payload: res
    })  */
    )
    .catch(err =>
      /*  dispatch({
      type:  AUTH_SIGN_UP_FAILURE
       })  */
      console.log(err)
    );
};

export const signOut = () => dispatch => {
  dispatch({ type: AUTH_SIGN_OUT });
};

export const resetError = () => dispatch => {
  dispatch({ type: AUTH_LOGIN_ERROR_RESET });
};
