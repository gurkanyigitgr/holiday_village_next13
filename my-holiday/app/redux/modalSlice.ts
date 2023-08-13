import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  registerModal: boolean;
  loginModal: boolean;
  elementModal: boolean;
}
const initialState: ModalState = {
  registerModal: false,
  loginModal: false,
  elementModal: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    registerModalFunc: (state) => {
      state.registerModal = !state.registerModal;
    },
    loginModalFunc: (state) => {
      state.loginModal = !state.loginModal;
    },
    elementModalFunc: (state) => {
      state.elementModal = !state.elementModal;
    },
  },
});

export const { registerModalFunc, loginModalFunc, elementModalFunc } =
  modalSlice.actions;

export default modalSlice.reducer;
