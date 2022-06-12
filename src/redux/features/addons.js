import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  discount: {
    title: 'Discount',
    value: 0,
    type: 'percent',
    visible: false,
    button: true,
  },
  tax: {
    title: 'Tax',
    value: 0,
    type: 'percent',
    visible: false,
    button: true,
  },
  shipping: {
    title: 'Shipping',
    value: 0,
    type: 'cash',
    visible: false,
    button: true,
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
    setDiscountVisible(state) {
      state.discount.visible = !state.discount.visible;
      state.discount.button = !state.discount.button;
      state.discount.type = 'percent';
      state.discount.value = 0;
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
    setTaxVisible(state) {
      state.tax.visible = !state.tax.visible;
      state.tax.button = !state.tax.button;
      state.tax.type = 'percent';
      state.tax.value = 0;
    },

    setShippingTitle(state, { payload: value }) {
      state.shipping.title = value;
    },
    setShippingValue(state, { payload: value }) {
      state.shipping.value = value > 0 ? value : 0;
    },
    setShippingVisible(state) {
      state.shipping.visible = !state.shipping.visible;
      state.shipping.button = !state.shipping.button;
      state.shipping.value = 0;
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
  setDiscountVisible,
  setTaxVisible,
  setShippingVisible,
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
  setDiscountVisible,
  setTaxVisible,
  setShippingVisible,
};

export const discountSelector = (state) => state.addons.discount;

export const taxSelector = (state) => state.addons.tax;

export const shippingSelector = (state) => state.addons.shipping;
