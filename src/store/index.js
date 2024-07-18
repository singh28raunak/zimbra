import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";

const store = configureStore({
  reducer: { productCategory: productSlice.reducer },
});

export default store;
