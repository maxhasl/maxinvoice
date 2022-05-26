import { SET_TITLE, SET_LOGO, REMOVE_LOGO, SET_NUMBER } from "../constants";

export const setTitleAction = (payload) => ({ type: SET_TITLE, payload });
export const setLogoAction = (payload) => ({ type: SET_LOGO, payload });
export const removeLogoAction = () => ({ type: REMOVE_LOGO });
export const setNumberAction = (payload) => ({ type: SET_NUMBER, payload });
