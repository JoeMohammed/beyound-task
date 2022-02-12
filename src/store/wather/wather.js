import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  weather: [],
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    getWather(state, action) {
        state.weather = action.payload.weather
    },
  },
});

export const weatherActions = weatherSlice.actions;

export default weatherSlice.reducer;
