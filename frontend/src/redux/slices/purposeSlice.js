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
    getItemStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    getItemSuccess: (state, action) => {
      state.loading = false;
      state.item = action.payload;
    },
    getItemFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateItemStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    updateItemSuccess: (state, action) => {
      state.loading = false;
      state.item = action.payload;
    },
    updateItemFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteItemStart: (state) => {
      state.loading = true;
      state.error = false;
      state.success = false;
    },
    deleteItemSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
    },
    deleteItemFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  createItemStart,
  createItemSuccess,
  createItemFail,
  getItemStart,
  getItemSuccess,
  getItemFail,
  updateItemStart,
  updateItemSuccess,
  updateItemFail,
  deleteItemStart,
  deleteItemSuccess,
  deleteItemFail,
} = purposeSlice.actions;
export default purposeSlice.reducer;
