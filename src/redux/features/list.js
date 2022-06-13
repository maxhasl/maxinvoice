import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

const List = createEntityAdapter();

const initialState = List.getInitialState();

const defaultState = List.upsertOne(initialState, {
  id: 0,
  name: 'Name',
  quantity: 1,
  cost: 0,
  amount: 0,
});

const { reducer, actions } = createSlice({
  name: 'list',
  initialState: defaultState,
  reducers: {
    add(state, { payload: { id } }) {
      List.addOne(state, { id, name: '', quantity: 1, cost: 0, amount: 0 });
    },
    remove: List.removeOne,
    name: List.updateOne,
    quantity(state, { payload: { id, quantity } }) {
      const finalQuantity =
        quantity !== '' ? (Number(quantity) > 0 ? Number(quantity) : 0) : '';

      List.updateOne(state, {
        id,
        changes: {
          quantity: finalQuantity,
          amount: state.entities[id].cost * finalQuantity,
        },
      });
    },
    cost(state, { payload: { id, cost } }) {
      const finalCost =
        cost !== '' ? (Number(cost) > 0 ? Number(cost) : 0) : '';

      List.updateOne(state, {
        id,
        changes: {
          cost: finalCost,
          amount: state.entities[id].quantity * finalCost,
        },
      });
    },
  },
});

export default reducer;

const { add, remove, name, quantity, cost } = actions;

export { add, remove, name, quantity, cost };

export const listSelectors = List.getSelectors((state) => state.list);

export const listAllSelector = listSelectors.selectAll;

export const listItemSelector = (state, id) =>
  listSelectors.selectById(state, id);
