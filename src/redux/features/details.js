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
    setDateTitle(state, { payload: value }) {
      state.date.title = value;
    },
    setDateValue(state, { payload: value }) {
      state.date.value = value;
    },
    setTermsTitle(state, { payload: value }) {
      state.terms.title = value;
    },
    setTermsValue(state, { payload: value }) {
      state.terms.value = value;
    },
    setDueDateTitle(state, { payload: value }) {
      state.dueDate.title = value;
    },
    setDueDateValue(state, { payload: value }) {
      state.dueDate.value = value;
    },
    setPoNumberTitle(state, { payload: value }) {
      state.poNumber.title = value;
    },
    setPoNumberValue(state, { payload: value }) {
      state.poNumber.value = value;
    },
  },
});

export default reducer;

export const {
  setDateTitle,
  setDateValue,
  setTermsTitle,
  setTermsValue,
  setDueDateTitle,
  setDueDateValue,
  setPoNumberTitle,
  setPoNumberValue,
} = actions;

export const detailsDateSelector = (state) => state.details.date;

export const detailsTermsSelector = (state) => state.details.terms;

export const detailsDueDateSelector = (state) => state.details.dueDate;

export const detailsPoNumberSelector = (state) => state.details.poNumber;
