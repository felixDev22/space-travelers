/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ROCKET_DATA = 'spaceTravelsHub/ROCKET_DATA';

// Action
const GetRockets = createAsyncThunk(ROCKET_DATA, async () => {
  const url = 'https://api.spacexdata.com/v4/rockets/';
  const response = await axios.get(url);
  const rocketList = response.data;
  return rocketList;
});

// reducer
const rocketReducer = createSlice({
  name: 'rocket',
  initialState: {
    data: [],
    isFulfilled: false,
  },

  reducers: {},
  extraReducers: {
    [GetRockets.fulfilled]: (state, action) => {
      state.isFulfilled = true;
      state.data = action.payload;
    },
  },
});

export default rocketReducer;
export { GetRockets };
