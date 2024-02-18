import { createSlice } from "@reduxjs/toolkit";
import userSlice from "../user/userSlice";

const initialState = {
  cart: [],

  // cart: [
  //   {
  //     pizzaId: 2,
  //     name: "haha",
  //     quantity: 2,
  //     unitPrice: 15,
  //     totalPrice: 32,
  //   },
  // ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      // item.quantity === 1 ? item.quantity++ : (item.quantity = item.quantity);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      // item.quantity === 2 ? item.quantity-- : (item.quantity = item.quantity);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getTotalPizzaNum = (store) =>
  store.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalPrice = (store) =>
  store.cart.cart?.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCart = (store) => store.cart.cart;
