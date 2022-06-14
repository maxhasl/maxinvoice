import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: 'INVOICE',
  number: 1,
  logo: {
    placeholder: 'Add Your Logo',
    value: '',
  },
};

const { reducer, actions } = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setTitle(state, { payload: value }) {
      state.title = value;
    },
    setNumber(state, { payload: value }) {
      state.number = value > 0 ? +value : 1;
    },
    setLogo(state, { payload: value }) {
      state.logo.value = value;
    },
    removeLogo(state) {
      state.logo.value = '';
    },
  },
});

export default reducer;

export const { setTitle, setNumber, setLogo, removeLogo } = actions;

export const mainTitleSelector = (state) => state.main.title;

export const mainNumberSelector = (state) => state.main.number;

export const mainLogoSelector = (state) => state.main.logo;
