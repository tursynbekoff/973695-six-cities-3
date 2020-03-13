import {getOffersByCity} from "./utils.js";
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
  activeMapPin: false,
  disabledMapPin: false,
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  CHANGE_OFFER_SCREEN: `CHANGE_OFFER_SCREEN`,
  CHANGE_SORT_TYPE: `CHANGE_SORT_TYPE`,
  ACTIVATE_MAP_PIN: `ACTIVATE_MAP_PIN`,
  DISABLE_MAP_PIN: `DISABLE_MAP_PIN`,
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
  activateMapPin: (mapPin) => ({
    type: ActionType.ACTIVATE_MAP_PIN,
    payload: mapPin
  }),
  disableMapPin: (mapPin) => ({
    type: ActionType.DISABLE_MAP_PIN,
    payload: mapPin
  }),
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state,
          {currentCity: action.payload});

    case ActionType.GET_OFFERS:
      return Object.assign({}, state,
          {currentOffers: getOffersByCity(action.payload, state.offers)});

    case ActionType.CHANGE_OFFER_SCREEN:
      return Object.assign({}, state,
          {offerScreen: action.payload});

    case ActionType.CHANGE_SORT_TYPE:
      return Object.assign({}, state,
          {currentSortValue: action.payload});

    case ActionType.ACTIVATE_MAP_PIN:
      return Object.assign({}, state,
          {activeMapPin: action.payload});

    case ActionType.DISABLE_MAP_PIN:
      return Object.assign({}, state,
          {disabledMapPin: action.payload});
  }


  return state;
};

export {reducer, ActionType, ActionCreator}
;
