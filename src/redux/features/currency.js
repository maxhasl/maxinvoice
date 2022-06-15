import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selected: { value: '$', label: 'USD ($)' },
  options: [
    { value: '$', label: 'USD ($)' },
    { value: '₴', label: 'UAH (₴)' },
    { value: '€', label: 'EUR (€)' },
  ],
};

const { reducer, actions } = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setCurrency(state, { payload: { value, label } }) {
      state.selected.value = value;
      state.selected.label = label;
    },
  },
});

export default reducer;

export const { setCurrency } = actions;

export const currencySelectedSelector = (state) => state.currency.selected;

export const currencyOptionsSelector = (state) => state.currency.options;
