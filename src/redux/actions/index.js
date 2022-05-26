import {
  SET_TITLE,
  SET_LOGO,
  REMOVE_LOGO,
  SET_NUMBER,
  SET_CONTACT_FROM,
  SET_CONTACT_BILL_TITLE,
  SET_CONTACT_BILL_VALUE,
  SET_CONTACT_SHIP_TITLE,
  SET_CONTACT_SHIP_VALUE,
  SET_DETAILS_DATE_TITLE,
  SET_DETAILS_DATE_VALUE,
  SET_DETAILS_TERMS_TITLE,
  SET_DETAILS_TERMS_VALUE,
  SET_DETAILS_DUE_DATE_TITLE,
  SET_DETAILS_DUE_DATE_VALUE,
  SET_DETAILS_PO_NUMBER_TITLE,
  SET_DETAILS_PO_NUMBER_VALUE,
} from '../constants';

export const setTitleAction = (payload) => ({ type: SET_TITLE, payload });
export const setLogoAction = (payload) => ({ type: SET_LOGO, payload });
export const removeLogoAction = () => ({ type: REMOVE_LOGO });
export const setNumberAction = (payload) => ({ type: SET_NUMBER, payload });

export const setContactFromAction = (payload) => ({
  type: SET_CONTACT_FROM,
  payload,
});
export const setContactBillTitleAction = (payload) => ({
  type: SET_CONTACT_BILL_TITLE,
  payload,
});
export const setContactBillValueAction = (payload) => ({
  type: SET_CONTACT_BILL_VALUE,
  payload,
});
export const setContactShipTitleAction = (payload) => ({
  type: SET_CONTACT_SHIP_TITLE,
  payload,
});
export const setContactShipValueAction = (payload) => ({
  type: SET_CONTACT_SHIP_VALUE,
  payload,
});

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
