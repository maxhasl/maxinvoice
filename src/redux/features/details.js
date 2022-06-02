import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  date: {
    title: 'Date',
    value: String(new Date()),
  },
  terms: {
    title: 'Patment Terms',
    value: '',
  },
  dueDate: {
    title: 'Due Date',
    value: '',
  },
  poNumber: {
    title: 'PO Number',
    value: '',
  },
};

const { reducer, actions } = createSlice({
  name: 'details',
  initialState,
  reducers: {
    dateTitle(state, { payload: value }) {
      state.date.title = value;
    },
    dateValue(state, { payload: value }) {
      state.date.value = value;
    },
    termsTitle(state, { payload: value }) {
      state.terms.title = value;
    },
    termsValue(state, { payload: value }) {
      state.terms.value = value;
    },
    dueDateTitle(state, { payload: value }) {
      state.dueDate.title = value;
    },
    dueDateValue(state, { payload: value }) {
      state.dueDate.value = value;
    },
    poNumberTitle(state, { payload: value }) {
      state.poNumber.title = value;
    },
    poNumberValue(state, { payload: value }) {
      state.poNumber.value = value;
    },
  },
});

export default reducer;

const {
  dateTitle,
  dateValue,
  termsTitle,
  termsValue,
  dueDateTitle,
  dueDateValue,
  poNumberTitle,
  poNumberValue,
} = actions;

export {
  dateTitle,
  dateValue,
  termsTitle,
  termsValue,
  dueDateTitle,
  dueDateValue,
  poNumberTitle,
  poNumberValue,
};
