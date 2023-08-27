import { API_ENDPOINT } from "../../Url";
import {
  createItemFail,
  createItemStart,
  createItemSuccess,
  deleteItemFail,
  deleteItemStart,
  deleteItemSuccess,
  getItemFail,
  getItemStart,
  getItemSuccess,
  updateItemFail,
  updateItemStart,
  updateItemSuccess,
} from "../slices/purposeSlice";
import { logout } from "./userActions";
import axios from "axios";

// CREATE ITEM
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
      dispatch(logout())
    }
    dispatch(createItemFail(error));
  }
};

// GET ITEM
export const getItem = () => async (dispatch, getState) => {
  try {
    dispatch({ type: getItemStart });

    const {
      user: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(
      `${API_ENDPOINT}/purpose-clarity/${userInfo._id}`,
      config
    );

    dispatch({ type: getItemSuccess, payload: data });
  } catch (err) {
    let error = err.response ? err.response.data.message : err.message;
    if (
      error === "Not authorized, token failed" ||
      error === "Not authorized, no token"
    ) {
      dispatch(logout())
    }
    dispatch(getItemFail(error));
  }
};

// UPDATE ITEM
export const updateItem = () => async (dispatch, getState) => {
  try {
    dispatch({ type: updateItemStart });

    const {
      user: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `${API_ENDPOINT}/purpose-clarity/${userInfo._id}`,
      config
    );

    dispatch({ type: updateItemSuccess, payload: data });
  } catch (err) {
    let error = err.response ? err.response.data.message : err.message;
    if (
      error === "Not authorized, token failed" ||
      error === "Not authorized, no token"
    ) {
      dispatch(logout())
    }
    dispatch(updateItemFail(error));
  }
};

// DELETE ITEM
export const deleteItem = () => async (dispatch, getState) => {
  try {
    dispatch({ type: deleteItemStart });

    const {
      user: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(
      `${API_ENDPOINT}/purpose-clarity/${userInfo._id}`,
      config
    );

    dispatch({ type: deleteItemSuccess, payload: data });
  } catch (err) {
    let error = err.response ? err.response.data.message : err.message;
    if (
      error === "Not authorized, token failed" ||
      error === "Not authorized, no token"
    ) {
      dispatch(logout())
    }
    dispatch(deleteItemFail(error));
  }
};
