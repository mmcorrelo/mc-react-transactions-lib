import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import breakdownSlice from './breakdown.slice';
import percentageSlice from './percentage.slice';
import trendSlice from './trend.slice';

const store = configureStore({
  reducer: {
    breakdown: breakdownSlice.reducer,
    trend: trendSlice.reducer,
    percentage: percentageSlice.reducer
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
