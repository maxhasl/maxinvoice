import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  from: {
    placeholder: 'Who is this invoice from? (required)',
    value: '',
  },
  bill: {
    placeholder: 'Who is this invoice to?',
    title: 'Bill To',
    value: '',
  },
  ship: {
    placeholder: '(optional)',
    title: 'Ship To',
    value: '',
  },
};

const { reducer, actions } = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    from(state, { payload: value }) {
      state.from.value = value;
    },
    billTitle(state, { payload: value }) {
      state.bill.title = value;
    },
    billValue(state, { payload: value }) {
      state.bill.value = value;
    },
    shipTitle(state, { payload: value }) {
      state.ship.title = value;
    },
    shipValue(state, { payload: value }) {
      state.ship.value = value;
    },
  },
});

export default reducer;

const { from, billTitle, billValue, shipTitle, shipValue } = actions;

export { from, billTitle, billValue, shipTitle, shipValue };
