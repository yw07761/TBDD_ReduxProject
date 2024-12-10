import { configureStore } from '@reduxjs/toolkit';
import clotherReducer from './clotherSlice';

export const store = configureStore({
  reducer: {
    clother: clotherReducer,
  },
});
