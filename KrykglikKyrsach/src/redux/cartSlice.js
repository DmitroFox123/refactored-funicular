import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const CartSLice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getCartFromLocalStorage(state, action) {
      let localData = localStorage.getItem("cart");

      if (!localData) return;

      state.cart = JSON.parse(localData);
    },
    addToCart(state, action) {
      let filtrationResult = state.cart.find(
        (obj) => obj.id == action.payload.id
      );

      if (filtrationResult !== undefined) {
        state.cart = state.cart.map((obj) => {
          if (obj.id === action.payload.id) {
            return { ...obj, count: obj.count + 1 };
          }

          return obj;
        });
      } else {
        state.cart.push({ ...action.payload, count: 1 });
      }

      let cart = JSON.stringify(state.cart);
      localStorage?.setItem("cart", cart);
    },
    removeFromCart(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);

      localStorage?.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export const CartReducers = CartSLice.reducer;

export const { addToCart, removeFromCart, getCartFromLocalStorage } =
  CartSLice.actions;
