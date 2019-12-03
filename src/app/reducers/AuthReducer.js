import {
  AUTH_LOGIN_IN_STARTED,
  AUTH_LOGIN_IN_FAILURE,
  AUTH_LOGIN_IN_SUCCESS,
  AUTH_SIGN_UP_STARTED,
  AUTH_SIGN_UP_FAILURE,
  AUTH_SIGN_UP_SUCCESS,
  AUTH_LOGIN_ERROR_RESET,
  AUTH_SIGN_OUT
} from "../constants";

const initialState = {
  isAuthenticated: false,
  isAuthStarted: false,
  isAuthError: false,
  isSignUpStarted: false,
  isAdmin: false,
  token: ""
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case AUTH_LOGIN_IN_STARTED:
      return { ...state, isAuthStarted: true };
    case AUTH_LOGIN_IN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isAuthStarted: false,
        token: payload.token
      };
    case AUTH_LOGIN_IN_FAILURE:
      return { ...state, isAuthError: true };
    case AUTH_LOGIN_ERROR_RESET:
      return { ...state, isAuthError: false };
    case AUTH_SIGN_UP_STARTED:
      return { ...state, isSignUpStarted: false };
    case AUTH_SIGN_OUT:
      return { ...state, isAuthenticated: false, token: "" };
    default: {
      return state;
    }
  }
}
