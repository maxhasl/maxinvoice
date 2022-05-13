const defaultState = {
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
};

const SET_DETAILS_DATE_TITLE = 'SET_DETAILS_DATE_TITLE';
const SET_DETAILS_DATE_VALUE = 'SET_DETAILS_DATE_VALUE';
const SET_DETAILS_TERMS_TITLE = 'SET_DETAILS_TERMS_TITLE';
const SET_DETAILS_TERMS_VALUE = 'SET_DETAILS_TERMS_VALUE';
const SET_DETAILS_DUE_DATE_TITLE = 'SET_DETAILS_DUE_DATE_TITLE';
const SET_DETAILS_DUE_DATE_VALUE = 'SET_DETAILS_DUE_DATE_VALUE';
const SET_DETAILS_PO_NUMBER_TITLE = 'SET_DETAILS_PO_NUMBER_TITLE';
const SET_DETAILS_PO_NUMBER_VALUE = 'SET_DETAILS_PO_NUMBER_VALUE';

const detailsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_DETAILS_DATE_TITLE':
      return {
        ...state,
        date: {
          ...state.date,
          title: action.payload,
        },
      };
    case 'SET_DETAILS_DATE_VALUE':
      return {
        ...state,
        date: {
          ...state.date,
          value: action.payload,
        },
      };
    case 'SET_DETAILS_TERMS_TITLE':
      return {
        ...state,
        terms: {
          ...state.terms,
          title: action.payload,
        },
      };
    case 'SET_DETAILS_TERMS_VALUE':
      return {
        ...state,
        terms: {
          ...state.terms,
          value: action.payload,
        },
      };
    case 'SET_DETAILS_DUE_DATE_TITLE':
      return {
        ...state,
        dueDate: {
          ...state.dueDate,
          title: action.payload,
        },
      };
    case 'SET_DETAILS_DUE_DATE_VALUE':
      return {
        ...state,
        dueDate: {
          ...state.dueDate,
          value: action.payload,
        },
      };
    case 'SET_DETAILS_PO_NUMBER_TITLE':
      return {
        ...state,
        poNumber: {
          ...state.poNumber,
          title: action.payload,
        },
      };
    case 'SET_DETAILS_PO_NUMBER_VALUE':
      return {
        ...state,
        poNumber: {
          ...state.poNumber,
          value: action.payload,
        },
      };
    default:
      return state;
  }
};

export default detailsReducer;

export const setDetailsDateTitleAction = (payload) => ({
  type: SET_DETAILS_DATE_TITLE,
  payload,
});
export const setDetailsDateValueAction = (payload) => ({
  type: SET_DETAILS_DATE_VALUE,
  payload,
});
export const setDetailsTermsTitleAction = (payload) => ({
  type: SET_DETAILS_TERMS_TITLE,
  payload,
});
export const setDetailsTermsValueAction = (payload) => ({
  type: SET_DETAILS_TERMS_VALUE,
  payload,
});
export const setDetailsDueDateTitleAction = (payload) => ({
  type: SET_DETAILS_DUE_DATE_TITLE,
  payload,
});
export const setDetailsDueDateValueAction = (payload) => ({
  type: SET_DETAILS_DUE_DATE_VALUE,
  payload,
});
export const setDetailsPONumberTitleAction = (payload) => ({
  type: SET_DETAILS_PO_NUMBER_TITLE,
  payload,
});
export const setDetailsPONumberValueAction = (payload) => ({
  type: SET_DETAILS_PO_NUMBER_VALUE,
  payload,
});
