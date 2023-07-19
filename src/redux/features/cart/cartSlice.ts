import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../../types/globalTypes";

interface ICart {
  products: IProduct[];
  total: number;
}

const initialState: ICart = {
  products: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const isExisting = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (isExisting) {
        isExisting.quantity = isExisting.quantity! + 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }

      state.total += action.payload.price;
    },

    removeOneFromCart: (state, action: PayloadAction<IProduct>) => {
      const isExist = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (isExist && isExist.quantity! > 1) {
        isExist.quantity = isExist.quantity! - 1;
      } else {
        state.products = state.products.filter(
          (product) => product._id !== action.payload._id
        );
      }
      state.total -= action.payload.price;
    },
    removeToCart: (state, action: PayloadAction<IProduct>) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload._id
      );
      state.total -= action.payload.price * action.payload.quantity!;
    },
  },
});

export const { addToCart, removeOneFromCart, removeToCart } = cartSlice.actions;

export default cartSlice.reducer;
