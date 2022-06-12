import { createSelector, createSlice } from '@reduxjs/toolkit';
import { listAllSelector } from './list';
import { discountSelector, taxSelector, shippingSelector } from './addons';

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
    setTotalValue(state, { payload: value }) {
      state.total.value = value;
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
  setTotalValue,
} = actions;

export {
  setSubtotalTitle,
  setTotalTitle,
  setBalanceDueTitle,
  setSubtotalValue,
  setTotalValue,
};

export const subtotalSelector = createSelector(listAllSelector, (entities) =>
  entities.reduce((acc, item) => acc + item.amount, 0)
);

export const totalSelector = createSelector(
  subtotalSelector,
  discountSelector,
  taxSelector,
  shippingSelector,
  (subtotal, discount, tax, shipping) => {
    const { type: discountType, value: discountValue } = discount;
    const { type: taxType, value: taxValue } = tax;
    const { value: shippingValue } = shipping;

    const discountTotal =
      discountType === 'cash'
        ? subtotal - discountValue
        : subtotal - (subtotal / 100) * discountValue;

    const taxTotal =
      taxType === 'cash'
        ? discountTotal + taxValue
        : discountTotal + (discountTotal / 100) * taxValue;

    const total = taxTotal + shippingValue;
    return total;
  }
);
