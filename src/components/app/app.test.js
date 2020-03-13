import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import {Provider} from "react-redux";
import {createStore} from 'redux';

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
    reviews: [
      {
        name: `Max`,
        review: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`
      }
    ]
  }, {
    id: 2,
    price: `130`,
    description: `Beautiful & luxurious apartment at great location`,
    rating: 4.3,
    type: `Apartment`,
    coordinate: [52.369553943508, 4.85309666406198],
    location: {
      city: `Amsterdam`
    },
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
  reviews: [
    {
      name: `Angelina`,
      review: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
    }
  ]
};

const cities = [
  `Paris`,
  `Cologne`,
  `Brussels`,
  `Amsterdam`,
  `Hamburg`,
  `Dusseldorf`
];

const currentCity = `Amsterdam`;

const initialState = {
  currentCity: cities[0],
  offers: offerList,
  currentOffers: offerList,
  cities,
  offerScreen: false,
  currentSortValue: `Popular`,
  activeMapPin: false,
  disabledMapPin: false,
};

const reducer = (state = initialState) => {
  return state;
};

const activeMapPin = false;
const disabledMapPin = false;
const currentSortValue = `Popular`;
const offerScreen = false;

it(`Render App`, () => {
  const store = createStore(reducer);

  const tree = renderer
      .create(
          <Provider store={store}>
            <App
              currentCity={currentCity}
              offers={offerList}
              currentOffers={offerList}
              cities={cities}
              offerScreen={offerScreen}
              currentSortValue={currentSortValue}
              activeMapPin={activeMapPin}
              disabledMapPin={disabledMapPin}
              offer={offer}
            />
          </Provider>, {
            createNodeMock: () => document.createElement(`div`)
          }
      ).toJSON();

  expect(tree).toMatchSnapshot();
});
