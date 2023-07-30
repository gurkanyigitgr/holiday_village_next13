import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  registerModal: boolean;
  loginModal: boolean;
}
const initialState: ModalState = {
  registerModal: false,
  loginModal: false,
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
  },
});

export const { registerModalFunc, loginModalFunc } = modalSlice.actions;

export default modalSlice.reducer;
