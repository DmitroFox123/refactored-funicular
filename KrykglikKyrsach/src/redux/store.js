import { configureStore } from "@reduxjs/toolkit";

import { ProdutsReducers } from "./productsSlice";
import { CartReducers } from "./cartSlice";

export const store = configureStore({
  reducer: {
    products: ProdutsReducers,
    cart: CartReducers,
  },
});

export default store;
