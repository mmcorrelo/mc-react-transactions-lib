import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import breakdownSlice from './breakdown.slice';
import nullableFieldsSlice from './nullableFieldsSlice.slice';
import percentageSlice from './percentage.slice';
import searchableFieldsSlice from './searchableFieldsSlice.slice';
import trendSlice from './trend.slice';

const store = configureStore({
  reducer: {
    breakdown: breakdownSlice.reducer,
    trend: trendSlice.reducer,
    percentage: percentageSlice.reducer,
    nullableFields: nullableFieldsSlice.reducer,
    searchableFields: searchableFieldsSlice.reducer
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export * from './breakdown.slice';
export * from './percentage.slice';
export * from './trend.slice';
