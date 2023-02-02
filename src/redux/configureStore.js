import { configureStore, combineReducers } from '@reduxjs/toolkit';
import rocketSlice from './rockets/RocketApi';

const reducer = combineReducers({
  rockets: rocketSlice,
});

const store = configureStore({
  reducer,
});

export default store;
