const defaultState = {
  title: 'INVOICE',
  number: 1,
  logo: {
    placeholder: 'Add Your Logo',
    value: '',
  },
};

const SET_TITLE = 'SET_TITLE';
const SET_NUMBER = 'SET_NUMBER';
const SET_LOGO = 'SET_LOGO';

const mainReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_TITLE:
      return { ...state, title: action.payload };
    case SET_NUMBER:
      return { ...state, number: action.payload < 0 ? 1 : action.payload };
    case SET_LOGO:
      return {
        ...state,
        logo: {
          ...state.logo,
          value: action.payload,
        },
      };
    default:
      return state;
  }
};

export default mainReducer;

export const setTitleAction = (payload) => ({ type: SET_TITLE, payload });
export const setNumberAction = (payload) => ({ type: SET_NUMBER, payload });
export const setLogoAction = (payload) => ({ type: SET_LOGO, payload });
