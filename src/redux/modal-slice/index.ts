import { createSlice } from "@reduxjs/toolkit";

interface initialStateType {
  modalAuthorizationVisibility: boolean;
}

const initialState: initialStateType = {
  modalAuthorizationVisibility: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModalAuthorizationVisibility(state) {
      state.modalAuthorizationVisibility = !state.modalAuthorizationVisibility;
    },
  },
});

export const { setModalAuthorizationVisibility } = modalSlice.actions;
export default modalSlice.reducer;
