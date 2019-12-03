import {
  GET_STEPS_STARTED,
  GET_STEPS_SUCCESS,
  GET_STEPS_FAILED
} from "../constants";

import { fetchSteps } from "../api";

export const getSteps = () => dispatch => {
  dispatch({ type: GET_STEPS_STARTED });

  fetchSteps()
    .then(res => {
      dispatch({
        type: GET_STEPS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_STEPS_FAILED
      })
    );
};
