import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notes: {
    title: 'Notes',
    placeholder: 'Notes - any relevant information not already covered',
    value: '',
  },
  terms: {
    title: 'Terms',
    placeholder:
      'Terms and conditions - late fees, payment methods, delivery schedule',
    value: '',
  },
};

const { reducer, actions } = createSlice({
  name: 'description',
  initialState,
  reducers: {
    notesTitle(state, { payload: value }) {
      state.notes.title = value;
    },
    notesValue(state, { payload: value }) {
      state.notes.value = value;
    },
    termsTitle(state, { payload: value }) {
      state.terms.title = value;
    },
    termsValue(state, { payload: value }) {
      state.terms.value = value;
    },
  },
});

export default reducer;

const { notesTitle, notesValue, termsTitle, termsValue } = actions;

export { notesTitle, notesValue, termsTitle, termsValue };
