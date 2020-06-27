import axios from "axios";

import {
  LOADING_DOCTORS,
  SET_DOCTORS,
  SET_DOCTOR_ERRORS,
  LOADING_FINISHED,
  LOADING,
  SET_APOINTMENT,
  SET_APOINTMENTS,
  BOOKING_APOINTMENT,
} from "../types";

export const loadDoctors = () => async (dispatch) => {
  dispatch({ type: LOADING_DOCTORS });
  try {
    const res = await axios.get("/sample-users");
    if (res) {
      dispatch({ type: SET_DOCTORS, payload: res.data });
    } else {
      dispatch({ type: SET_DOCTOR_ERRORS, payload: ["No Data Found"] });
    }
  } catch (error) {
    dispatch({
      type: SET_DOCTOR_ERRORS,
      payload: ["Invalid Doctors response"],
    });
  }
  dispatch({ type: LOADING_FINISHED });
};

export const bookApointment = (doctorId) => async (dispatch) => {
  dispatch({ type: LOADING });
  dispatch({ type: BOOKING_APOINTMENT, payload: doctorId });
  try {
    const res = await axios.post("/book-apointment", { doctorId });
    if (res.data) {
      dispatch({ type: SET_APOINTMENT, payload: res.data.apointment.doctorId });
    } else {
      dispatch({
        type: SET_DOCTOR_ERRORS,
        payload: ["Appointment Not Booked"],
      });
    }
  } catch (error) {
    dispatch({ type: SET_DOCTOR_ERRORS, payload: ["Appointment Not Booked"] });
  }
  dispatch({ type: LOADING_FINISHED });
};

export const getApointments = () => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const res = await axios.get("/get-apointments");
    if (res.data) {
      dispatch({ type: SET_APOINTMENTS, payload: res.data.apointments });
    } else {
      dispatch({
        type: SET_DOCTOR_ERRORS,
        payload: ["Appointments Not Found"],
      });
    }
  } catch (error) {
    dispatch({ type: SET_DOCTOR_ERRORS, payload: ["Appointments Not Found"] });
  }
  dispatch({ type: LOADING_FINISHED });
};
