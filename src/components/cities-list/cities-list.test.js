import React from "react";
import renderer from "react-test-renderer";
import CitiesList from "./cities-list.jsx";

const cities = [
  `Paris`,
  `Cologne`,
  `Brussels`,
  `Amsterdam`,
  `Hamburg`,
  `Dusseldorf`
];

const currentCity = `Amsterdam`;

it(`Should WelcomeScreen render correctly`, () => {
  const onCityClick = jest.fn();

  const tree = renderer
    .create(
        <CitiesList
          cities={cities}
          currentCity={currentCity}
          onCityClick={onCityClick}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
