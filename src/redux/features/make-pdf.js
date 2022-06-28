import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  done: false,
  error: {
    value: false,
    message: '',
  },
};

const { reducer, actions } = createSlice({
  name: 'makePdf',
  initialState,
  reducers: {
    makePdf(state, { payload: { done, error } }) {
      state.done = done;
      state.error = error;
    },
    closeMessage(state) {
      state.done = false;
      state.error = { value: false, message: '' };
    },
  },
});

export default reducer;

export const { makePdf, closeMessage } = actions;

export const makePdfSelector = (state) => state.makePdf;
