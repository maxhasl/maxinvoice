import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: 'Amount Paid',
  value: 0,
  type: 'cash',
};

const { reducer, actions } = createSlice({
  name: 'paid',
  initialState,
  reducers: {
    setPaidTitle(state, { payload: title }) {
      state.title = title;
    },
    setPaidValue(state, { payload: value }) {
      state.value = value >= 0 ? +value : 0;
    },
  },
});

export default reducer;

export const { setPaidTitle, setPaidValue } = actions;
