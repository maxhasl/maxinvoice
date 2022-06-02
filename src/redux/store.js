import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';

const middleware = (getDefaultMiddleware) => [...getDefaultMiddleware()];

export default configureStore({ reducer, middleware });
