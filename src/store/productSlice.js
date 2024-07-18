import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "productSlice",
  initialState: { categoryId: "1", items: [] },
  reducers: {
    selectProductId(state, action) {
      state.categoryId = action.payload;
    },
    dropdownItem(state, action) {
      state.items = action.payload;
    },
  },
});

export const productAction = productSlice.actions;
export const dropdownAction = productSlice.actions;

export default productSlice;
