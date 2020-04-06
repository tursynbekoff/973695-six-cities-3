import NameSpace from "../name-space.js";

export const getAllOffers = (state) => {
  return state[NameSpace.DATA].offers;
};

export const getCurrentOffers = (state) => {
  return state[NameSpace.DATA].currentOffers;
};

export const getCities = (state) => {
  return state[NameSpace.DATA].cities;
};

export const getReviews = (state) => {
  return state[NameSpace.DATA].reviews;
};

export const getIsError = (state) => {
  return state[NameSpace.DATA].isError;
};

export const getIsSending = (state) => {
  return state[NameSpace.DATA].isSending;
};
