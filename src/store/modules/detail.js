import { createSlice } from "@reduxjs/toolkit";

const detailSclice = createSlice({
  name: "detail",
  initialState: {
    detailInfo: {},
  },
  reducers: {
    changeDetailInfoAction(state, { payload }) {
      state.detailInfo = payload;
    },
  },
});

export const { changeDetailInfoAction } = detailSclice.actions;

export default detailSclice.reducer;
