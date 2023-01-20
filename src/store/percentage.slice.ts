import { createSlice } from '@reduxjs/toolkit';
import { EDatePeriod } from '../types';

const percentageSlice = createSlice({
  name: 'percentage',
  initialState: {
    request: {
      data: [],
      loading: true,
      error: undefined
    },
    form: {
      period: EDatePeriod.Day,
      searchableField: 'user_wallet',
      searchableFieldTitle: 'user wallet',
      startDate: '2021-01-01',
      endDate: '2021-06-01',
      searchableFieldValue: '',
      nullableField: 'zero_conf_time',
      initialized: false,
    }
  },
  reducers: {
    startRequest(state) {
      state.request.data = [];
      state.request.loading = true;
      state.request.error = undefined;
    },
    setSuccess(state, action) {
      state.request.data = action.payload.data;
      state.request.loading = false;
      state.request.error = undefined;
    },
    setFailure(state, action) {
      state.request.loading = false;
      state.request.error = action.payload.error;
    },
    setForm(state, action) {
      state.form.period = action.payload.period ? action.payload.period : state.form.period;
      state.form.searchableField = action.payload.searchableField ? action.payload.searchableField : state.form.searchableField;
      state.form.startDate = action.payload.startDate ? action.payload.startDate : state.form.startDate;
      state.form.endDate = action.payload.endDate ? action.payload.endDate : state.form.endDate;
      state.form.searchableFieldValue = action.payload.searchableFieldValue ? action.payload.searchableFieldValue : state.form.searchableFieldValue;
      state.form.nullableField = action.payload.nullableField ? action.payload.nullableField : state.form.nullableField;
      state.form.searchableFieldTitle = action.payload.searchableFieldTitle ? action.payload.searchableFieldTitle : state.form.searchableFieldTitle;
      state.form.initialized = true;
    },
  }
});

export const percentageActions = percentageSlice.actions;

export default percentageSlice;
