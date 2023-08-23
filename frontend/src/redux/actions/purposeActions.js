import { API_ENDPOINT } from "../../Url";
import {
  createItemFail,
  createItemStart,
  createItemSuccess,
} from "../slices/purposeSlice";
import { logout } from "./userActions";
import axios from "axios";

export const createItem = (details) => async (dispatch, getState) => {
  try {
    dispatch({ type: createItemStart });

    const {
      user: { userInfo },
    } = getState();

    console.log(userInfo.token);

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(
      `${API_ENDPOINT}/purpose-clarity/create`,
      details,
      config
    );

    dispatch({ type: createItemSuccess, payload: data });
  } catch (err) {
    let error = err.response ? err.response.data.message : err.message;
    if (
      error === "Not authorized, token failed" ||
      error === "Not authorized, no token"
    ) {
      logout();
    }
    dispatch(createItemFail(error));
  }
};
