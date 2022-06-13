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
    setNotesTitle(state, { payload: value }) {
      state.notes.title = value;
    },
    setNotesValue(state, { payload: value }) {
      state.notes.value = value;
    },
    setTermsTitle(state, { payload: value }) {
      state.terms.title = value;
    },
    setTermsValue(state, { payload: value }) {
      state.terms.value = value;
    },
  },
});

export default reducer;

export const { setNotesTitle, setNotesValue, setTermsTitle, setTermsValue } =
  actions;
