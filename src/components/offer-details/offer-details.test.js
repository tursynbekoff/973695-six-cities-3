import React from "react";
import renderer from "react-test-renderer";
import Details from "./offer-details.jsx";

const offerList = [
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
  }
];

const offer = {
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

it(`Should OfferDetails render correctly`, () => {

  const tree = renderer
    .create(<Details
      cities={cities}
      currentCity={currentCity}
      offerList={offerList}
      offer={offer}
    />,
    {
      createNodeMock: () => document.createElement(`div`)
    }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
