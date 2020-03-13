import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

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
    reviews: [
      {
        name: `Angelina`,
        review: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
      }
    ]
  }
];

const cities = [
  `Paris`,
  `Cologne`,
  `Brussels`,
  `Amsterdam`,
  `Hamburg`,
  `Dusseldorf`
];

const currentCity = `Amsterdam`;
const currentSortValue = `Popular`;


it(` Main render has problems`, () => {
  const onBookmarkClick = jest.fn();
  const onCityClick = jest.fn();
  const onSortTypeClick = jest.fn();
  const onHoverActiveMapPin = jest.fn();
  const onHoverDisableMapPin = jest.fn();
  const activeMapPin = false;
  const disabledMapPin = false;
  const onHoverResetMapPin = jest.fn();

  const tree = renderer
      .create(
          <Main
            cities={cities}
            currentCity={currentCity}
            onCityClick={onCityClick}
            offerList={offerList}
            onBookmarkClick={onBookmarkClick}
            currentSortValue={currentSortValue}
            onSortTypeClick={onSortTypeClick}
            onHoverActiveMapPin={onHoverActiveMapPin}
            activeMapPin={activeMapPin}
            onHoverDisableMapPin={onHoverDisableMapPin}
            disabledMapPin={disabledMapPin}
            onHoverResetMapPin={onHoverResetMapPin}
          />, {
            createNodeMock: () => document.createElement(`div`)
          }
      ).toJSON();

  expect(tree).toMatchSnapshot();
});
