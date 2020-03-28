import {extend} from "../../utils.js";

const initialState = {
  currentCity: `Amsterdam`,
  offerScreen: false,
  currentSortValue: `Popular`,
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_OFFER_SCREEN: `CHANGE_OFFER_SCREEN`,
  CHANGE_SORT_TYPE: `CHANGE_SORT_TYPE`,
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  changeOfferScreen: (offerId) => ({
    type: ActionType.CHANGE_OFFER_SCREEN,
    payload: offerId
  }),
  changeSortType: (sortType) => ({
    type: ActionType.CHANGE_SORT_TYPE,
    payload: sortType
  }),
};

const reducer = (state = initialState, action) => {

  switch (action.type) {

    case ActionType.CHANGE_CITY:
      return extend(state, {currentCity: action.payload});

    case ActionType.CHANGE_OFFER_SCREEN:
      return extend(state, {offerScreen: action.payload});

    case ActionType.CHANGE_SORT_TYPE:
      return extend(state, {currentSortValue: action.payload});
  }

  return state;
};

export {reducer, ActionType, ActionCreator};

