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


