import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import breakdownUserWalletSlice from './breakdownUserWallet.slice';
import trendUserWalletSlice from './trendUserWallet.slice';

const store = configureStore({
    reducer: {
        breakdownUserWallet: breakdownUserWalletSlice.reducer,
        trendUserWallet: trendUserWalletSlice.reducer,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;