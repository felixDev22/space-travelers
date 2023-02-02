import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ADD_ROCKET_DATA = 'space-travelers/rockets/ADD_ROCKET_DATA';
const rockets = [];

// Action
const rocketLists = createAsyncThunk(ADD_ROCKET_DATA, async () => {
  const url = 'https://api.spacexdata.com/v3/rockets/';
  const response = await axios.get(url);
  if (response.data) {
    return response.data;
  }
  return [];
});

const rocketSlice = createSlice({
  name: 'rocket',
  initialState: rockets,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(rocketLists.fulfilled, (state, action) => {
      const newState = state;
      Object.entries(action.payload).forEach((key) => {
        newState.push({
          id: key[1].id,
          name: key[1].rocket_name,
          description: key[1].description,
          flickr_images: key[1].flickr_images[1],
          reserved: false,
        });
      });
      return newState;
    });
  },
});

export default rocketSlice.reducer;
export { rocketLists };
