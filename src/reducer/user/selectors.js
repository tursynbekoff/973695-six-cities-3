import NameSpace from "../name-space.js";

export const getUserEmail = (state) => {
  return state[NameSpace.USER].userEmail;
};

export const getLoginStatus = (state) => {
  return state[NameSpace.USER].isLoginError;
};

export const getAuthorisationStatus = (state) => {
  return state[NameSpace.USER].authorizationStatus;
};
