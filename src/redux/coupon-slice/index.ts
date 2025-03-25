// store/slices/couponSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CouponState {
  discount: number;
}

const initialState: CouponState = {
  discount: 0,
};

const couponSlice = createSlice({
  name: "coupon",
  initialState,
  reducers: {
    getCoupon: (state, action: PayloadAction<number>) => {
      state.discount = action.payload;
    },
  },
});

export const { getCoupon } = couponSlice.actions;
export default couponSlice.reducer;
