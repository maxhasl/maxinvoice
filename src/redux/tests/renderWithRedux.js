import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import reducer from '../reducer';
import { configureStore } from '@reduxjs/toolkit';

export const renderWithRedux = (component, initialState = {}) => {
  const store = configureStore({ reducer, preloadedState: initialState });

  return render(<Provider store={store}>{component}</Provider>);
};
