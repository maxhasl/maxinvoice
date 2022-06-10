import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  discount: {
    title: 'Discount',
    value: 0,
    type: 'percent',
  },
  tax: {
    title: 'Tax',
    value: 0,
    type: 'percent',
  },
  shipping: {
    title: 'Shipping',
    value: 0,
    type: 'cash',
  },
};

const { reducer, actions } = createSlice({
  name: 'addons',
  initialState,
  reducers: {
    setDiscountTitle(state, { payload: value }) {
      state.discount.title = value;
    },
    setDiscountValue(state, { payload: value }) {
      state.discount.value = value > 0 ? value : 0;
    },
    setDiscountType(state, { payload: value }) {
      state.discount.type = value;
    },
    setTaxTitle(state, { payload: value }) {
      state.tax.title = value;
    },
    setTaxValue(state, { payload: value }) {
      state.tax.value = value > 0 ? value : 0;
    },
    setTaxType(state, { payload: value }) {
      state.tax.type = value;
    },
    setShippingTitle(state, { payload: value }) {
      state.shipping.title = value;
    },
    setShippingValue(state, { payload: value }) {
      state.shipping.value = value > 0 ? value : 0;
    },
  },
});

export default reducer;

const {
  setDiscountTitle,
  setDiscountValue,
  setDiscountType,
  setTaxTitle,
  setTaxValue,
  setTaxType,
  setShippingTitle,
  setShippingValue,
} = actions;

export {
  setDiscountTitle,
  setDiscountValue,
  setDiscountType,
  setTaxTitle,
  setTaxValue,
  setTaxType,
  setShippingTitle,
  setShippingValue,
};

export const discountSelector = (state) => state.addons.discount;

export const taxSelector = (state) => state.addons.tax;

export const shippingSelector = (state) => state.addons.shipping;
