import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

const List = createEntityAdapter();

const initialState = List.getInitialState({
  listHeader: {
    name: 'Item',
    quantity: 'Quantity',
    cost: 'Rate',
    amount: 'Amount',
  },
});

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
    setListHeaderName(state, { payload: value }) {
      state.listHeader.name = value;
    },
    setListHeaderQuantity(state, { payload: value }) {
      state.listHeader.quantity = value;
    },
    setListHeaderCost(state, { payload: value }) {
      state.listHeader.cost = value;
    },
    setListHeaderAmount(state, { payload: value }) {
      state.listHeader.amount = value;
    },

    addListItem(state, { payload: { id } }) {
      List.addOne(state, { id, name: '', quantity: 1, cost: 0, amount: 0 });
    },
    removeListItem: List.removeOne,
    setListItemName: List.updateOne,
    setListItemQuantity(state, { payload: { id, quantity } }) {
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
    setListItemCost(state, { payload: { id, cost } }) {
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

export const {
  setListHeaderName,
  setListHeaderQuantity,
  setListHeaderCost,
  setListHeaderAmount,
  addListItem,
  removeListItem,
  setListItemName,
  setListItemQuantity,
  setListItemCost,
} = actions;

export const listSelectors = List.getSelectors((state) => state.list);

export const listHeaderSelector = (state) => state.list.listHeader;

export const listAllSelector = listSelectors.selectAll;

export const listItemSelector = (state, id) =>
  listSelectors.selectById(state, id);
