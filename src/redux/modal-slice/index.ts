import { createSlice } from "@reduxjs/toolkit";

interface initialStateType {
  modalAuthorizationVisibility: boolean;
  orderModalVisibility: boolean;
  trackModalVisibility: boolean;
}

const initialState: initialStateType = {
  modalAuthorizationVisibility: false,
  orderModalVisibility: false,
  trackModalVisibility: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModalAuthorizationVisibility(state) {
      state.modalAuthorizationVisibility = !state.modalAuthorizationVisibility;
    },
    setOrderModalVisibility(state) {
      state.orderModalVisibility = !state.orderModalVisibility;
    },
    setTrackModalVisibility(state) {
      state.trackModalVisibility = !state.trackModalVisibility;
    },
  },
});

export const {
  setModalAuthorizationVisibility,
  setOrderModalVisibility,
  setTrackModalVisibility,
} = modalSlice.actions;
export default modalSlice.reducer;
