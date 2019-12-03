import axios from "axios";
import qs from "qs";

const URL = "http://45.86.182.9";

let data = {
  login: "test2@test.com",
  password: "demo1234"
};

export const auth = authData =>
  axios.post(`${URL}/api/v1/login`, qs.stringify(authData));
export const registerUser = signData =>
  axios.post(`${URL}/api/v1/register`, signData);

export const fetchSteps = () => axios.get(`${URL}/api/v1/step`);
