import {getOffersByCity} from "./utils.js";
import offers from "./components/mocks/offers.js";
import {City} from "./const.js";
import {CITIES} from "./const.js";

const initialState = {
  currentCity: City.AMSTERDAM,
  offers,
  currentOffers: getOffersByCity(City.AMSTERDAM, offers),
  cities: CITIES
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  getOffers: (city) => ({
    type: ActionType.GET_OFFERS,
    payload: city
  })

};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state,
          {currentCity: action.payload});

    case ActionType.GET_OFFERS:
      return Object.assign({}, state,
          {currentOffers: getOffersByCity(action.payload, state.offers)});
  }
  return state;
};

export {reducer, ActionType, ActionCreator}
;
