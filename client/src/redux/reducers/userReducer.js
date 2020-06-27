import {
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  LOADING_USER,
  LOADING_FINISHED,
  SET_USER,
  SET_USER_ERRORS,
} from "../types";

const initialState = {
  currentUser: null,
  authenticated: false,
  loadingUser: false,
  errors: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_USER:
      const { name, uid } = payload;
      return { ...state, currentUser: { name, uid } };
    case SET_USER_ERRORS:
      return { ...state, errors: [...payload, ...state.errors] };
    case LOADING_USER:
      return { ...state, loadingUser: true };
    case LOADING_FINISHED:
      return { ...state, loadingUser: false };
    case SET_AUTHENTICATED:
      return { ...state, authenticated: true };
    case SET_UNAUTHENTICATED:
      return initialState;
    default:
      return state;
  }
};
