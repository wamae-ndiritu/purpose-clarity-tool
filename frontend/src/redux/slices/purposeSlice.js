import { createSlice } from "@reduxjs/toolkit";

export const purposeSlice = createSlice({
  name: "purpose",
  initialState: {
    item: {},
    loading: false,
    error: false,
    success: false,
  },
  reducers: {
    createItemStart: (state) => {
      state.loading = true;
      state.error = false;
      state.success = false;
    },
    createItemSuccess: (state, action) => {
      state.loading = false;
      state.item = action.payload;
      state.success = true;
    },
    createItemFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { createItemStart, createItemSuccess, createItemFail } =
  purposeSlice.actions;
export default purposeSlice.reducer;
