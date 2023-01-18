import { createSlice } from '@reduxjs/toolkit';

const trendUserWalletSlice = createSlice({
  name: 'trend-user-wallet',
  initialState: {
    data: [],
    loading: true,
    error: undefined
  },
  reducers: {
    startRequest(state) {
      state.data = [];
      state.loading = true;
      state.error = undefined;
    },
    setSuccess(state, action) {
      state.data = action.payload.data;
      state.loading = false;
      state.error = undefined;
    },
    setFailure(state, action) {
      state.loading = false;
      state.error = action.payload.error;
    }
  }
});

export const trendUserWalletActions = trendUserWalletSlice.actions;

export default trendUserWalletSlice;
