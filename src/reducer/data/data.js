import {getOffersByCity} from "../../utils.js";
import {extend} from "../../utils.js";
import {offersAdapter} from "../../utils.js";
import {City} from "../../const.js";
import {getUniqueCities} from "../../utils.js";


const initialState = {
  offers: [],
  currentOffers: [],
  cities: [],
  isError: false,
};

const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  SET_ERROR: `SET_ERROR`,
  GET_OFFERS: `GET_OFFERS`,
};

const ActionCreator = {
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),
  setError: (isError) => ({
    type: ActionType.SET_ERROR,
    payload: isError,
  }),
  getOffers: (offer) => ({
    type: ActionType.GET_OFFERS,
    payload: offer
  }),
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload,
        currentOffers: getOffersByCity(City.AMSTERDAM, action.payload),
        cities: getUniqueCities(action.payload),
      });

    case ActionType.SET_ERROR:
      return extend(state, {
        isError: action.payload,
      });

    case ActionType.GET_OFFERS:
      return extend(state, {
        currentOffers: getOffersByCity(action.payload, state.offers)
      });

  }

  return state;
};

const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api
        .get(`/hotels`)
        .then((response) => {
          dispatch(
              ActionCreator.loadOffers(
                  response.data.map((offer) => offersAdapter(offer))
              )
          );
        })
        .catch(() => {
          dispatch(ActionCreator.setError(true));
        });
  }
};

export {reducer, ActionType, ActionCreator, Operation};
