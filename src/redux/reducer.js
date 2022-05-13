import { combineReducers } from 'redux';
import contactReducer from './features/contact';
import detailsReducer from './features/details';
import mainReducer from './features/main';

const reducer = combineReducers({
  main: mainReducer,
  contact: contactReducer,
  details: detailsReducer,
});

export default reducer;
