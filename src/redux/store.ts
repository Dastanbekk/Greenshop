import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modal-slice/index";
import cartSlice from "./cart-slice";
import couponSlice from "./coupon-slice";
import trackOrderSlice from "./track-order-slice";

export const store = configureStore({
  reducer: {
    modalSlice,
    cartSlice,
    couponSlice,
    trackOrderSlice,
  },
});

export type DispatchType = typeof store.dispatch;
export type RootStore = ReturnType<typeof store.getState>;
