import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  done: false,
  error: false,
  process: false,
};

const { reducer, actions } = createSlice({
  name: 'makePdf',
  initialState,
  reducers: {
    makePdf(state, { payload: { done, error, process } }) {
      state.done = done;
      state.error = error;
      state.process = process;
    },
  },
});

export default reducer;

export const { makePdf } = actions;

export const makePdfSelector = (state) => state.makePdf;
