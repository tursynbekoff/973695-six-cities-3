import {reducer, ActionType, Operation} from "../data/data.js";
import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api.js";
import {City} from "../../const.js";
import {getOffersByCity} from "../../utils.js";

const api = createAPI();

const offerList = [
  {
    id: 1,
    price: `60`,
    description: `Wood and stone place`,
    rating: 3.3,
    type: `Private room`,
    coordinate: [52.3909553943508, 4.85309666406198],
    location: {
      city: `Amsterdam`
    },
    imgSrc: [`img/picture1.jpg`, `img/picture2.jpg`],
    rentalFeatures: [`Stove`, `Fridge`],
    reviews: [
      {
        name: `Max`,
        review: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`
      }
    ]
  },
  {
    id: 2,
    price: `130`,
    description: `Beautiful & luxurious apartment at great location`,
    rating: 4.3,
    type: `Apartment`,
    coordinate: [52.369553943508, 4.85309666406198],
    location: {
      city: `Amsterdam`
    },
    imgSrc: [`img/picture3.jpg`, `img/picture4.jpg`],
    rentalFeatures: [`A/C`, `Dresser`, `Washing Maschine`],
    reviews: [
      {
        name: `Angelina`,
        review: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
      }
    ]
  },
  {
    id: 3,
    price: `130`,
    description: `Beautiful & luxurious apartment at great location`,
    rating: 4.3,
    type: `Apartment`,
    coordinate: [52.369553943508, 4.85309666406198],
    location: {
      city: `Dusseldorf`
    },
    imgSrc: [`img/picture3.jpg`, `img/picture4.jpg`],
    rentalFeatures: [`A/C`, `Dresser`, `Washing Maschine`],
    reviews: [
      {
        name: `Angelina`,
        review: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
      }
    ]
  }
];

const cities = [
  `Amsterdam`,
  `Dusseldorf`,
];


it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    offers: [],
    currentOffers: [],
    cities: [],
    isError: false,
    isSending: false,
    reviews: [],
  });
});

it(`Reducer should update initial state by loaded data`, () => {
  expect(
      reducer(
          {
            offers: [],
            currentOffers: [],
            cities: [],
            isError: false,
            isSending: false,
            reviews: [],
          },
          {type: ActionType.LOAD_OFFERS, payload: offerList}
      )
  ).toEqual({
    offers: offerList,
    currentOffers: getOffersByCity(City.AMSTERDAM, offerList),
    cities,
    isError: false,
    isSending: false,
    reviews: [],
  });
});

it(`Reducer should get offers by a given city`, () => {
  expect(
      reducer(
          {
            offers: offerList,
            currentOffers: offerList,
            cities,
            isError: false,
            isSending: false,
            reviews: [],
          },
          {
            type: ActionType.GET_OFFERS,
            payload: `Amsterdam`,
          }
      )
  ).toEqual({
    offers: offerList,
    currentOffers: getOffersByCity(City.AMSTERDAM, offerList),
    cities,
    isError: false,
    isSending: false,
    reviews: [],
  });
});

describe(`Operation should work correctly`, () => {
  it(`Should make a correct API call to /hotels`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loadOffers = Operation.loadOffers();

    apiMock.onGet(`/hotels`).reply(200, []);

    return loadOffers(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);

      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_OFFERS,
        payload: [],
      });
    });
  });

  it(`Should get an error with API call`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loadOffers = Operation.loadOffers();

    apiMock.onGet(`/hotels`).reply(404, []);

    return loadOffers(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);

      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.SET_ERROR,
        payload: true,
      });
    });
  });

});
