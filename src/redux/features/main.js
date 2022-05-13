const defaultState = {
  title: 'INVOICE',
  number: 1,
  logo: {
    placeholder: 'Add Your Logo',
    value: '',
  },
};

const mainReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_TITLE':
      return { ...state, title: action.payload };
    case 'SET_NUMBER':
      return { ...state, number: action.payload < 0 ? 1 : action.payload };
    case 'SET_LOGO':
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
