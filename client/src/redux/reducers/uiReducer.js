import { TOGGLE_MODAL } from "../types";

const initialState = {
  modalHidden: true,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_MODAL:
      return { ...state, modalHidden: !state.modalHidden };
    default:
      return state;
  }
};
