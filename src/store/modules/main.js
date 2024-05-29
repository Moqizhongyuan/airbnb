import { createSlice } from "@reduxjs/toolkit";

const mianSlice = createSlice({
  name: "main",
  initialState: {
    headerConfig: {
      isFixed: false,
      topAlpha: false,
    },
  },
  reducers: {
    changeHeaderConfigAction(state, { payload }) {
      state.headerConfig = payload;
    },
  },
});

export const { changeHeaderConfigAction } = mianSlice.actions;
export default mianSlice.reducer;
