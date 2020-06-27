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

const initialState = {
  doctors: [],
  currentDoctor: null,
  loadingDoctor: false,
  loadingDoctors: false,
  loading: true,
  bookingApointment: false,
  errors: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case BOOKING_APOINTMENT:
      const currentDoctor = state.doctors.find(
        (doctor) => doctor.id === payload
      );
      return { ...state, bookingApointment: true, currentDoctor };
    case SET_DOCTORS:
      return { ...state, doctors: payload };
    case SET_DOCTOR_ERRORS:
      return { ...state, errors: [...payload, ...state.errors] };
    case LOADING_DOCTORS:
      return { ...state, loadingDoctors: true };
    case LOADING:
      return { ...state, loading: true };
    case LOADING_FINISHED:
      return { ...state, loadingDoctors: false, loading: false };
    case SET_APOINTMENT:
      const doctors = state.doctors.map((doctor) => {
        doctor.appointment = doctor.id == payload ? true : false;
        return doctor;
      });
      state = {
        ...state,
        doctors,
        currentDoctor: { ...state.currentDoctor, apointment: true },
        bookingApointment: false,
      };
      console.log(state);
      return state;
    case SET_APOINTMENTS:
      // const modifiedDoctors = [];
      payload.forEach((apointment) => {
        const doctorId = apointment.doctorId;
        const doctorIndex = state.doctors.findIndex(
          (doctor) => doctor.id == doctorId
        );
        const modifiedDoctor = {
          ...state.doctors[doctorIndex],
          apointment: true,
        };
        state.doctors[doctorIndex] = modifiedDoctor;
      });
      return { ...state };
    default:
      return state;
  }
};
