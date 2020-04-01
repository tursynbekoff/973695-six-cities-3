import {getOffersByCity} from "../../utils.js";
import {extend} from "../../utils.js";
import {offersAdapter, reviewsAdapter} from "../../utils.js";
import {City} from "../../const.js";
import {getUniqueCities} from "../../utils.js";


const initialState = {
  offers: [],
  currentOffers: [],
  cities: [],
  isError: false,
  reviews: [],
  isSending: false,
};

const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  SET_ERROR: `SET_ERROR`,
  GET_OFFERS: `GET_OFFERS`,
  GET_REVIEWS: `GET_REVIEWS`,
  SET_SENDING: `SET_SENDING`,
  POST_REVIEW: `POST_REVIEW`,
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
  getReviews: (reviews) => ({
    type: ActionType.GET_REVIEWS,
    payload: reviews,
  }),
  setSending: (isSending) => ({
    type: ActionType.SET_SENDING,
    payload: isSending,
  }),
  postReview: (newReview) => ({
    type: ActionType.POST_REVIEW,
    payload: newReview,
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

    case ActionType.GET_REVIEWS:
      return Object.assign({}, state, {
        reviews: action.payload,
      });

    case ActionType.POST_REVIEW:
      return Object.assign({}, state, {
        reviews: action.payload,
      });

    case ActionType.SET_SENDING:
      return Object.assign({}, state, {
        isSending: action.payload,
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
  },

  getReviews: (id) => (dispatch, getState, api) => {
    return api
      .get(`/comments/${id}`)
      .then((response) => {
        dispatch(
            ActionCreator.getReviews(
                response.data.map((review) => reviewsAdapter(review))
            )
        );
      })
      .catch(() => {
        dispatch(ActionCreator.setError(true));
      });
  },

  postReview: (id, newReview) => (dispatch, getState, api) => {
    return api
      .post(`/comments/${id}`, newReview)
      .then((response) => {
        dispatch(ActionCreator.setSending(true));
        return response;
      })
      .then((response) => {
        dispatch(
            ActionCreator.getReviews(
                response.data.map((review) => reviewsAdapter(review))
            )
        );
      })
      .then(() => dispatch(ActionCreator.setSending(false)))
      .catch(() => {
        dispatch(ActionCreator.setError(true));
      });
  },
};

export {reducer, ActionType, ActionCreator, Operation};
