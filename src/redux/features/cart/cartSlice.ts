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
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
