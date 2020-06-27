import axios from "axios";

import {
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  LOADING_USER,
  SET_USER,
  SET_USER_ERRORS,
  LOADING_FINISHED,
} from "../types";

export const login = (user, history) => async (dispatch) => {
  dispatch({ type: LOADING_USER });
  try {
    const res = await axios.post("/login", user);
    if (res) {
      const DoctorAppIdToken = `Bearer ${res.data.token}`;
      localStorage.setItem("DoctorAppIdToken", DoctorAppIdToken);
      axios.defaults.headers.common["Authorization"] = DoctorAppIdToken;
      dispatch({ type: SET_AUTHENTICATED });
      dispatch({ type: SET_USER, payload: res.data.user });
      history.push("/");
      dispatch({ type: SET_USER, payload: res.data.user });
    } else {
      dispatch({ type: SET_USER_ERRORS, payload: ["Wrong Credentials"] });
    }
  } catch (error) {
    dispatch({ type: SET_USER_ERRORS, payload: ["Wrong Credentials"] });
    // dispatch({ type: SET_USER_ERRORS, payload: [error] });
  }
  dispatch({ type: LOADING_FINISHED });
};

export const logOut = (history) => (dispatch) => {
  localStorage.removeItem("DoctorAppIdToken");
  delete axios.defaults.headers.common["Authorization"];
  dispatch({ type: SET_UNAUTHENTICATED });
  // history.push("/");
  window.location.href = "/";
};
