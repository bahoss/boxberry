import {
  GET_STEPS_STARTED,
  GET_STEPS_SUCCESS,
  GET_STEPS_FAILED
} from "../constants";

const initialState = {
  isGetStepsStarted: false,
  isGetStepsError: false,
  steps: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_STEPS_STARTED:
      return { ...state, isGetStepsStarted: true };
    case GET_STEPS_SUCCESS:
      return {
        ...state,
        isGetStepsStarted: false,
        isGetStepsError: false,
        steps: payload
      };
    case GET_STEPS_FAILED:
      return { ...state, isGetStepsError: true };

    default: {
      return state;
    }
  }
}
