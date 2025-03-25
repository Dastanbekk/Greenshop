import { createSlice } from "@reduxjs/toolkit";
import { getStore, setStore } from "../../generics/store";
import { CartTypeData } from "../../@types";

interface InitialStateType {
  data: CartTypeData[];
}

const initialState: InitialStateType = {
  data: getStore("data") || [],
};

const cartSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addData(state, { payload }) {
      const existingItem = state.data.find((item) => item._id === payload._id);

      if (existingItem) {
        state.data = state.data.map((item) =>
          item._id === payload._id
            ? {
                ...item,
                counter: item.counter + 1,
                userPrice: (item.counter + 1) * item.price,
              }
            : item
        );
      } else {
        state.data.push({ ...payload, counter: 1, userPrice: payload.price });
      }

      setStore("data", state.data);
    },

    increaseQuantity(state, { payload }) {
      state.data = state.data.map((item) =>
        item._id === payload
          ? {
              ...item,
              counter: item.counter + 1,
              userPrice: (item.counter + 1) * item.price,
            }
          : item
      );

      setStore("data", state.data);
    },

    decreaseQuantity(state, { payload }) {
      state.data = state.data.map((item) =>
        item._id === payload
          ? {
              ...item,
              counter: Math.max(1, item.counter - 1),
              userPrice: Math.max(1, item.counter - 1) * item.price,
            }
          : item
      );

      setStore("data", state.data);
    },

    removeProduct(state, { payload }) {
      state.data = state.data.filter((item) => item._id !== payload);
      setStore("data", state.data);
    },
  },
});

export const { addData, increaseQuantity, decreaseQuantity, removeProduct } =
  cartSlice.actions;
export default cartSlice.reducer;
