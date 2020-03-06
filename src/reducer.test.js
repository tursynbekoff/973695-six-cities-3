import {reducer, ActionCreator, ActionType} from "./reducer.js";
import {getOffersByCity} from "./utils.js";
import {City} from "./const.js";
import {CITIES} from "./const.js";

const offers = [
  {
    id: 1,
    price: `60`,
    description: `Wood and stone place`,
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
  }, {
    id: 3,
    price: `80`,
    description: `Canal View Prinsengracht`,
    type: `Private room`,
    coordinate: [52.3909553943508, 4.929309666406198],
    location: {
      city: `Amsterdam`
    },
    reviews: [
      {
        name: `Angelina`,
        review: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
      },
      {
        name: `Max`,
        review: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`
      }
    ]
  }, {
    id: 4,
    price: `120`,
    description: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
    coordinate: [52.3809553943508, 4.939309666406198],
    location: {
      city: `Amsterdam`
    },
    reviews: [
      {
        name: `Angelina`,
        review: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
      }
    ]
  }, {
    id: 5,
    price: `60`,
    description: `Wood and stone place`,
    type: `Private room`,
    coordinate: [48.8536632, 2.3488556],
    location: {
      city: `Paris`
    },
    reviews: [
      {
        name: `Max`,
        review: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Paris. The building is green and from 18th century.`
      }
    ]
  }, {
    id: 6,
    price: `100`,
    description: `Luxary apparment near HBF`,
    type: `Apartment`,
    coordinate: [53.54932, 10.01654],
    location: {
      city: `Hamburg`
    },
    reviews: [
      {
        name: `Misha`,
        review: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Hamburg. The building is green and from 18th century.`
      }
    ]
  }, {
    id: 7,
    price: `65`,
    description: `Hrushevka near Reeperbahn red light disctrict neighbourhood`,
    type: `Private room`,
    coordinate: [53.5499012, 9.9566384],
    location: {
      city: `Hamburg`
    },
    reviews: [
      {
        name: `Kolja`,
        review: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Hamburg. The building is green and from 18th century.`
      }
    ]
  }
];

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    currentCity: City.AMSTERDAM,
    offers,
    currentOffers: getOffersByCity(City.AMSTERDAM, offers),
    cities: CITIES
  });
});


it(`Reducer should change current city by a given value`, () => {
  expect(
      reducer(
          {
            currentCity: City.AMSTERDAM,
            offers,
            currentOffers: getOffersByCity(City.AMSTERDAM, offers),
            cities: CITIES
          },
          {
            type: ActionType.CHANGE_CITY,
            payload: `Hamburg`,
          }
      )
  ).toEqual({
    currentCity: City.HAMBURG,
    offers,
    currentOffers: getOffersByCity(City.AMSTERDAM, offers),
    cities: CITIES
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for changing city returns correct action`, () => {
    expect(ActionCreator.changeCity(`Paris`)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: City.PARIS,
    });
  });

  it(`Action creator for getting offers returns correct action`, () => {
    expect(ActionCreator.getOffers(`Paris`)).toEqual({
      type: ActionType.GET_OFFERS,
      payload: City.PARIS,
    });
  });
});
