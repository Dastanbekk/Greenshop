import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice/index";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});

export default store;
