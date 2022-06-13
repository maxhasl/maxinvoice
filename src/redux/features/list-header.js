import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'Item',
  quantity: 'Quantity',
  cost: 'Rate',
  amount: 'Amount',
};

const { reducer, actions } = createSlice({
  name: 'listHeader',
  initialState,
  reducers: {
    name(state, { payload: value }) {
      state.name = value;
    },
    quantity(state, { payload: value }) {
      state.quantity = value;
    },
    cost(state, { payload: value }) {
      state.cost = value;
    },
    amount(state, { payload: value }) {
      state.amount = value;
    },
  },
});

export default reducer;

const { name, quantity, cost, amount } = actions;

export { name, quantity, cost, amount };
