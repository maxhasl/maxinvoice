import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: 'INVOICE',
  number: 7,
  logo: {
    placeholder: 'Add Your Logo',
    value: null,
  },
};

const { reducer, actions } = createSlice({
  name: 'main',
  initialState,
  reducers: {
    title(state, { payload: value }) {
      state.title = value;
    },
    number(state, { payload: value }) {
      state.number = value > 0 ? value : 1;
    },
    setLogo(state, { payload: value }) {
      state.logo.value = value;
    },
    removeLogo(state) {
      state.logo.value = null;
    },
  },
});

export default reducer;

const { title, number, setLogo, removeLogo } = actions;

export { title, number, setLogo, removeLogo };
