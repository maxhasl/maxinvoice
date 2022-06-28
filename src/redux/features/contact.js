import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  from: {
    placeholder: 'Who is this invoice from? (required)',
    value: undefined,
    required: true,
  },
  bill: {
    placeholder: 'Who is this invoice to?',
    title: 'Bill To',
    value: undefined,
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
    setFromValue(state, { payload: value }) {
      state.from.value = value;
    },
    setBillTitle(state, { payload: value }) {
      state.bill.title = value;
    },
    setBillValue(state, { payload: value }) {
      state.bill.value = value;
    },
    setShipTitle(state, { payload: value }) {
      state.ship.title = value;
    },
    setShipValue(state, { payload: value }) {
      state.ship.value = value;
    },
  },
});

export default reducer;

export const {
  setFromValue,
  setBillTitle,
  setBillValue,
  setShipTitle,
  setShipValue,
} = actions;

export const contactFromSelector = (state) => state.contact.from;

export const contactBillSelector = (state) => state.contact.bill;

export const contactShipSelector = (state) => state.contact.ship;
