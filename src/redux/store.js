import { configureStore } from '@reduxjs/toolkit';
import makePdf from './middleware/make-pdf/make-pdf';
import reducer from './reducer';

const middleware = (getDefaultMiddleware) => [
  ...getDefaultMiddleware(),
  makePdf,
];

export default configureStore({ reducer, middleware });
