import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rockets/RocketApi';

const store = configureStore({
  reducer: {
    rockets: rocketReducer.reducer,
  },
});

export default store;
