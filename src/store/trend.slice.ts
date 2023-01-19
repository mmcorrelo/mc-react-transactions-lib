import { createSlice } from '@reduxjs/toolkit';

const trendSlice = createSlice({
  name: 'trend',
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

export const trendActions = trendSlice.actions;

export default trendSlice;
