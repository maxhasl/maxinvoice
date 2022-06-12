import { createSelector, createSlice } from '@reduxjs/toolkit';
import { ListAllSelector } from './list';

const initialState = {
  subtotal: {
    title: 'Subtotal',
    value: 0,
  },
  total: {
    title: 'Total',
    value: 0,
  },
  balanceDue: {
    title: 'Balance Due',
    value: 0,
  },
};

const { reducer, actions } = createSlice({
  name: 'totals',
  initialState,
  reducers: {
    setSubtotalTitle(state, { payload: title }) {
      state.subtotal.title = title;
    },
    setSubtotalValue(state, { payload: value }) {
      state.subtotal.value = value;
    },
    setTotalTitle(state, { payload: title }) {
      state.total.title = title;
    },
    setBalanceDueTitle(state, { payload: title }) {
      state.balanceDue.title = title;
    },
  },
});

export default reducer;

const {
  setSubtotalTitle,
  setTotalTitle,
  setBalanceDueTitle,
  setSubtotalValue,
} = actions;

export {
  setSubtotalTitle,
  setTotalTitle,
  setBalanceDueTitle,
  setSubtotalValue,
};

export const subtotalSelector = createSelector(ListAllSelector, (state) =>
  state.reduce((acc, item) => acc + item.amount, 0)
);

export const totalSelector = createSelector(ListAllSelector, (state) =>
  state.reduce((acc, item) => acc + item.amount, 0)
);
