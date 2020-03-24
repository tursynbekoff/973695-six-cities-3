import NameSpace from "../name-space.js";

export const getCurrentCity = (state) => {
  return state[NameSpace.APP].currentCity;
};

export const getAllOffers = (state) => {
  return state[NameSpace.APP].offers;
};

export const getCurrentSortValue = (state) => {
  return state[NameSpace.APP].currentSortValue;
};

export const getActiveOfferScreen = (state) => {
  return state[NameSpace.APP].offerScreen;
};
