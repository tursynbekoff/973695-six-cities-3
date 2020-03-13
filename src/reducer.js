import {getOffersByCity} from "./utils.js";
import {extend} from "./utils.js";
import offers from "./components/mocks/offers.js";
import {City} from "./const.js";
import {CITIES} from "./const.js";

const initialState = {
  currentCity: City.AMSTERDAM,
  offers,
  currentOffers: getOffersByCity(City.AMSTERDAM, offers),
  cities: CITIES,
  offerScreen: false,
  currentSortValue: `Popular`,
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  CHANGE_OFFER_SCREEN: `CHANGE_OFFER_SCREEN`,
  CHANGE_SORT_TYPE: `CHANGE_SORT_TYPE`,
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  getOffers: (city) => ({
    type: ActionType.GET_OFFERS,
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

    case ActionType.GET_OFFERS:
      return extend(state, {currentOffers: getOffersByCity(action.payload, state.offers)});

    case ActionType.CHANGE_OFFER_SCREEN:
      return extend(state, {offerScreen: action.payload});

    case ActionType.CHANGE_SORT_TYPE:
      return extend(state, {currentSortValue: action.payload});
  }

  return state;
};

export {reducer, ActionType, ActionCreator}
;
