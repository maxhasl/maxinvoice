import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 0,
    name: 'Name',
    quantity: 1,
    cost: 0,
    amount: 0,
  },
];

const { reducer, actions } = createSlice({
  name: 'list',
  initialState,
  reducers: {
    add(state, { payload: id }) {
      state.push({ id: id });
    },
    remove(state, { payload: id }) {
      return state.filter((e) => e.id !== id);
    },
    name(state, { payload: id }) {},
  },
});

export default reducer;

const { add, remove, name } = actions;

export { add, remove, name };

export const listItemSelector = (state, id) =>
  state.list.find((e) => e.id === id);
