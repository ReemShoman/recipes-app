
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counterVal: 0,
    maxValue: 200,
  },
  reducers: {
    increaseCounterByOne: (state) => {
      state.counterVal = state.counterVal + 1;
    },
    decreaseCounterByOne: (state) => {
      state.counterVal = state.counterVal - 1;
    },
    increaseByCount: (state, action) => {
      state.counterVal = state.counterVal + action.payload;
    },
    resetCounter: (state) => {
      state.counterVal = 0;
    },
  },
});

export const {
  increaseCounterByOne,
  decreaseCounterByOne,
  increaseByCount,
  resetCounter,
} = counterSlice.actions;

export default counterSlice.reducer;

