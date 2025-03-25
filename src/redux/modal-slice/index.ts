import { createSlice } from "@reduxjs/toolkit";

interface initialStateType {
  modalAuthorizationVisibility: boolean;
  orderModalVisibility: boolean;
}

const initialState: initialStateType = {
  modalAuthorizationVisibility: false,
  orderModalVisibility: false,
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
  },
});

export const { setModalAuthorizationVisibility, setOrderModalVisibility } =
  modalSlice.actions;
export default modalSlice.reducer;
