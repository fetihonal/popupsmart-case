import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  data: [],
  errors: null
};

const listSlice = createSlice({
  name: "hub/list/list",
  initialState,
  reducers: {
    onRequest(state, action) {
      state.status = "runnig";
    },
    onSuccess(state, action) {
      state.status = "ready";
      state.data = action.payload.data;
    },
    onFailure(state, action) {
      state.status = "error";
      state.errors = action.payload;
    },
    setTitle(state, action) {
      state["data"]["title"] = action.payload;
    }
  }
});

export const listActions = listSlice.actions;
export default listSlice.reducer;
