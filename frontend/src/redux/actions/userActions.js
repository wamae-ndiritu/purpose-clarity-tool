import {
  loginFail,
  loginStart,
  loginSuccess,
  logoutUser,
  registerFail,
  registerStart,
  registerSuccess,
} from "../slices/userSlice";
import axios from "axios";
import { API_ENDPOINT } from "../../Url";

export const register = async (details, dispatch) => {
  dispatch(registerStart());
  try {
    const { data } = await axios.post(`${API_ENDPOINT}/user/register`, details);
    dispatch(registerSuccess(data));
    console.log(data);
  } catch (err) {
    dispatch(
      registerFail(err.response ? err.response.data.message : err.message)
    );
  }
};

export const login = async (details, dispatch) => {
  dispatch(loginStart());
  try {
    const { data } = await axios.post(`${API_ENDPOINT}/user/login`, details);
    dispatch(loginSuccess(data));
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (err) {
    dispatch(loginFail(err.response ? err.response.data.message : err.message));
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch(logoutUser());
};
