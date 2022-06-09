import { createSelector, createSlice } from '@reduxjs/toolkit';
import { ListAllSelector } from './list';

const initialState = {
  title: 'Subtotal',
  value: 0,
};

const { reducer, actions } = createSlice({
  name: 'subtotal',
  initialState,
  reducers: {
    setTitle(state, { payload: title }) {
      state.title = title;
    },
  },
});

export default reducer;

const { setTitle } = actions;

export { setTitle };

export const subtotalSelector = createSelector(ListAllSelector, (state) =>
  state.reduce((acc, item) => acc + item.amount, 0)
);
