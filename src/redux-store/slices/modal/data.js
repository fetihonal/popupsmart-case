import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  setting: {
    headline: "NEW STUFF",
    description: "Sign up for our newsletter and get 15% off your first order!",
    successMessage: "Success",
  },
  errors: null,
};

const modalDataSlice = createSlice({
  name: "hub/modal/data",
  initialState,
  reducers: {
    setHeadline(state, action) {
      state["setting"]["headline"] = action.payload;
    },
    setDescription(state, action) {
      state["setting"]["description"] = action.payload;
    },
    setSuccessMessage(state, action) {
      state["setting"]["successMessage"] = action.payload;
    },
  },
});

export const modalDataActions = modalDataSlice.actions;
export default modalDataSlice.reducer;
