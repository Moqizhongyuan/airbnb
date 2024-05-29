import { getHomePlusData } from "@/services";
import { getHomeLongforData } from "@/services";
import { getHomeRecommendData } from "@/services";
import { getHomeDiscountData } from "@/services";
import { getHomeHighScoreData } from "@/services";
import { getHomeGoodPriceData } from "@/services";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchHomeDataAction = createAsyncThunk(
  "fetchdata",
  async (payload, { dispatch }) => {
    getHomeGoodPriceData().then((res) => {
      dispatch(changeGoodPriceInfoAction(res));
    });

    getHomeHighScoreData().then((res) => {
      dispatch(changeHighScoreInfoAction(res));
    });

    getHomeDiscountData().then((res) => {
      dispatch(changeDiscountInfoAction(res));
    });

    getHomeRecommendData().then((res) => {
      dispatch(changeRecommendInfoAction(res));
    });

    getHomeLongforData().then((res) => {
      dispatch(changeLongforInfoAction(res));
    });

    getHomePlusData().then((res) => {
      dispatch(changePlusInfoAction(res));
    });

    // return res;
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodpriceInfo: {},
    highscoreInfo: {},
    discountInfo: {},
    recommendInfo: {},
    longforInfo: {},
    plusInfo: {},
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodpriceInfo = payload;
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highscoreInfo = payload;
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload;
    },
    changeRecommendInfoAction(state, { payload }) {
      state.recommendInfo = payload;
    },
    changeLongforInfoAction(state, { payload }) {
      state.longforInfo = payload;
    },
    changePlusInfoAction(state, { payload }) {
      state.plusInfo = payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchHomeDataAction.pending, (state, { payload }) => {});
  //   builder.addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {
  //     state.goodpriceInfo = payload;
  //     console.log(payload);
  //   });
  //   builder.addCase(fetchHomeDataAction.rejected, (state, { payload }) => {});
  // },
});

export const {
  changeGoodPriceInfoAction,
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
  changeRecommendInfoAction,
  changeLongforInfoAction,
  changePlusInfoAction,
} = homeSlice.actions;

export default homeSlice.reducer;
