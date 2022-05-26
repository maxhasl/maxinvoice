import { SET_LOGO, REMOVE_LOGO, SET_NUMBER, SET_TITLE } from "../constants";

const defaultState = {
  title: 'INVOICE',
  number: 7,
  logo: {
    placeholder: 'Add Your Logo',
    value: null,
  },
};

const mainReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_TITLE:
      return { ...state, title: action.payload };
    case SET_NUMBER:
      return { ...state, number: action.payload < 1 ? 1 : action.payload };
    case SET_LOGO:
      return {
        ...state,
        logo: {
          ...state.logo,
          value: action.payload,
        },
      };
      case REMOVE_LOGO:
        return {
          ...state,
          logo: {
            ...state.logo,
            value: null,
          },
        };
    default:
      return state;
  }
};

export default mainReducer;