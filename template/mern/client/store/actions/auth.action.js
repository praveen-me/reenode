import { LOG_IN, VERIFY_USER, LOG_OUT } from "../types";

const API_VERSION = "/api/v1";

export const loginIn = userCreds => async dispatch => {
  try {
    const response = await fetch(`${API_VERSION}/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(userCreds)
    });

    const userData = await response.json();

    dispatch({
      type: LOG_IN,
      payload: {
        ...userData
      }
    });

    return Promise.resolve(true);
  } catch (e) {
    return Promise.reject(e);
  }
};

export const verifyUser = () => async dispatch => {
  try {
    const response = await fetch(`${API_VERSION}/verifyuser`, {
      headers: {
        authorization: localStorage.getItem("token")
      }
    });

    const userData = await response.json();

    dispatch({
      type: VERIFY_USER,
      payload: {
        ...userData.user
      }
    });

    return Promise.resolve(true);
  } catch (e) {
    return Promise.reject(e);
  }
};

export const logOut = () => ({
  type: LOG_OUT
});
