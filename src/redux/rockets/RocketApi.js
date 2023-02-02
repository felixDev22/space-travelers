/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ROCKET_DATA = 'spaceTravelsHub/ROCKET_DATA';
const BOOK_ROCKET = 'spaceTravelsHub/BOOK_ROCKET';

// Action
const GetRockets = createAsyncThunk(ROCKET_DATA, async () => {
  const url = 'https://api.spacexdata.com/v4/rockets/';
  const response = await axios.get(url);
  const rocketList = response.data;
  return rocketList;
});

export const bookRocket = (payload) => ({
  type: BOOK_ROCKET,
  payload,
});

// reducer
const rocketReducer = createSlice({
  name: 'rocket',
  initialState: {
    data: [],
    isFulfilled: false,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetRockets.fulfilled, (state, action) => {
      state.isFulfilled = true;
      state.data = action.payload;
    });

    builder.addCase(BOOK_ROCKET, (state, action) => {
      const newState = state.data.map((rocket) => {
        if (rocket.id !== action.payload.id) return rocket;
        return { ...rocket, reserved: true };
      });
      state.data = newState;
    });
  },
});

export default rocketReducer;
export { GetRockets };
