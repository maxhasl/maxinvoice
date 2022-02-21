const defaultState = {
  title: 'INVOICE',
  contact: {
    from: 'Who is this invoice from? (required)',
  },
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_TITLE':
      return { ...state, title: action.payload };
    case 'SET_CONTACT_FROM':
      return {
        ...state,
        contact: {
          ...state.contact,
          from: action.payload,
        },
      };
    default:
      return state;
  }
};

export default reducer;
