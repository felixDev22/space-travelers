import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/missions';
import rocketReducer from './rockets/RocketApi';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
    rockets: rocketReducer.reducer,
  },
});

export default store;
