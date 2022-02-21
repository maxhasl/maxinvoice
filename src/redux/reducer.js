const defaultState = {
  title: 'INVOICE',
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_TITLE':
      return { ...state, title: action.payload };
    default:
      return state;
  }
};

export default reducer;
