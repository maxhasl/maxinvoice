import {
  SET_CONTACT_FROM,
  SET_CONTACT_BILL_TITLE,
  SET_CONTACT_BILL_VALUE,
  SET_CONTACT_SHIP_TITLE,
  SET_CONTACT_SHIP_VALUE,
} from '../constants';

const defaultState = {
  from: {
    placeholder: 'Who is this invoice from? (required)',
    value: '',
  },
  bill: {
    placeholder: 'Who is this invoice to?',
    title: 'Bill To',
    value: '',
  },
  ship: {
    placeholder: '(optional)',
    title: 'Ship To',
    value: '',
  },
};

const contactReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_CONTACT_FROM:
      return {
        ...state,
        from: {
          ...state.from,
          value: action.payload,
        },
      };
    case SET_CONTACT_BILL_TITLE:
      return {
        ...state,
        bill: {
          ...state.bill,
          title: action.payload,
        },
      };
    case SET_CONTACT_BILL_VALUE:
      return {
        ...state,
        bill: {
          ...state.bill,
          value: action.payload,
        },
      };
    case SET_CONTACT_SHIP_TITLE:
      return {
        ...state,
        ship: {
          ...state.ship,
          title: action.payload,
        },
      };
    case SET_CONTACT_SHIP_VALUE:
      return {
        ...state,
        ship: {
          ...state.ship,
          value: action.payload,
        },
      };

    default:
      return state;
  }
};

export default contactReducer;
