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
      state.value = +value;
    },
  },
});

export default reducer;

const { setPaidTitle, setPaidValue } = actions;

export { setPaidTitle, setPaidValue };