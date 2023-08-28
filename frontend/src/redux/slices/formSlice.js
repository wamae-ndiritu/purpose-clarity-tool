import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    you: "",
    what: "",
    love: "",
    serve: "",
    beneficiaries: "",
    transform: "",
    income: "",
    purpose_statement: "",
  },
  reducers: {
    addState: (state, action) => {
      state[action.payload.name] = action.payload.value;
    },
  },
});

export const { addState } = formSlice.actions;
export default formSlice.reducer;
