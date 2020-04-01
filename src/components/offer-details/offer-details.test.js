import React from "react";
import renderer from "react-test-renderer";
import Details from "./offer-details.jsx";
import {Provider} from "react-redux";
import {createStore} from 'redux';

const offerList = [
  {
    id: 1,
    price: `60`,
    rating: 3.3,
    description: `Wood and stone place`,
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
  }, {
    id: 2,
    price: `130`,
    rating: 4.3,
    description: `Beautiful & luxurious apartment at great location`,
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
  }
];

const offer = {
  id: 2,
  price: `130`,
  rating: 4.5,
  description: `Beautiful & luxurious apartment at great location`,
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
  ],
  rentalHost: {
    id: `3`,
    hostName: `Sammy`,
    hostAvatar: `img/host_2.jpg`,
    isSuper: true,
  },
};

const currentCity = `Amsterdam`;

const cities = [
  `Paris`,
  `Cologne`,
  `Brussels`,
  `Amsterdam`,
  `Hamburg`,
  `Dusseldorf`
];

const userEmail = `sample@yahoo.com`;


export const AuthorizationStatus = {
  AUTHORIZED: `AUTHORIZED`,
  UNAUTHORIZED: `UNAUTHORIZED`,
  UNKNOWN: `UNKNOWN`,
  NO_AUTH: `NO_AUTH`,
};

const initialState = {
  DATA: {
    offers: offerList,
    currentOffers: offerList,
    cities,
    isError: false,
    isSending: false,
    reviews: offer.reviews,
  },
  APP: {
    currentCity: cities[3],
    currentSortValue: `Popular`,
    offerScreen: false,
  },
  USER: {
    userEmail: `sample@yahoo.com`,
    isLoginError: false,
    authorizationStatus: AuthorizationStatus.AUTHORIZED,
    isSending: false,
    reviews: offer.reviews,
  }
};

const reducer = (state = initialState) => {
  return state;
};


it(`Should OfferDetails render correctly`, () => {
  const store = createStore(reducer);
  const tree = renderer
    .create(
        <Provider store={store}>
          <Details
            cities={cities}
            currentCity={currentCity}
            offerList={offerList}
            offer={offer}
            userEmail={userEmail}
          />
        </Provider>,
        {
          createNodeMock: () => document.createElement(`div`)
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
