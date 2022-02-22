const defaultState = {
  title: 'INVOICE',
  number: 1,
  contact: {
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
  },
  details: {
    date: {
      title: 'Date',
      value: new Date(),
    },
    terms: {
      title: 'Patment Terms',
      value: '',
    },
    dueDate: {
      title: 'Due Date',
      value: '',
    },
    poNumber: {
      title: 'PO Number',
      value: '',
    },
  },
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_TITLE':
      return { ...state, title: action.payload };
    case 'SET_NUMBER':
      return { ...state, number: action.payload < 0 ? 1 : action.payload };
    case 'SET_CONTACT_FROM':
      return {
        ...state,
        contact: {
          ...state.contact,
          from: {
            ...state.contact.from,
            value: action.payload,
          },
        },
      };
    case 'SET_CONTACT_BILL_TITLE':
      return {
        ...state,
        contact: {
          ...state.contact,
          bill: {
            ...state.contact.bill,
            title: action.payload,
          },
        },
      };
    case 'SET_CONTACT_BILL_VALUE':
      return {
        ...state,
        contact: {
          ...state.contact,
          bill: {
            ...state.contact.bill,
            value: action.payload,
          },
        },
      };
    case 'SET_CONTACT_SHIP_TITLE':
      return {
        ...state,
        contact: {
          ...state.contact,
          ship: {
            ...state.contact.ship,
            title: action.payload,
          },
        },
      };
    case 'SET_CONTACT_SHIP_VALUE':
      return {
        ...state,
        contact: {
          ...state.contact,
          ship: {
            ...state.contact.ship,
            value: action.payload,
          },
        },
      };
    case 'SET_DETAILS_DATE_TITLE':
      return {
        ...state,
        details: {
          ...state.details,
          date: {
            ...state.details.date,
            title: action.payload,
          },
        },
      };
    case 'SET_DETAILS_DATE_VALUE':
      return {
        ...state,
        details: {
          ...state.details,
          date: {
            ...state.details.date,
            value: action.payload,
          },
        },
      };
    case 'SET_DETAILS_TERMS_TITLE':
      return {
        ...state,
        details: {
          ...state.details,
          terms: {
            ...state.details.terms,
            title: action.payload,
          },
        },
      };
    case 'SET_DETAILS_TERMS_VALUE':
      return {
        ...state,
        details: {
          ...state.details,
          terms: {
            ...state.details.terms,
            value: action.payload,
          },
        },
      };
    case 'SET_DETAILS_DUE_DATE_TITLE':
      return {
        ...state,
        details: {
          ...state.details,
          dueDate: {
            ...state.details.dueDate,
            title: action.payload,
          },
        },
      };
    case 'SET_DETAILS_DUE_DATE_VALUE':
      return {
        ...state,
        details: {
          ...state.details,
          dueDate: {
            ...state.details.dueDate,
            value: action.payload,
          },
        },
      };
    case 'SET_DETAILS_PO_NUMBER_TITLE':
      return {
        ...state,
        details: {
          ...state.details,
          poNumber: {
            ...state.details.poNumber,
            title: action.payload,
          },
        },
      };
    case 'SET_DETAILS_PO_NUMBER_VALUE':
      return {
        ...state,
        details: {
          ...state.details,
          poNumber: {
            ...state.details.poNumber,
            value: action.payload,
          },
        },
      };
    default:
      return state;
  }
};

export default reducer;
