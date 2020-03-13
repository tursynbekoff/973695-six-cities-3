import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
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

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should onCityClick button be pressed`, () => {
  const onCityClick = jest.fn();

  const CitiesListScreen = shallow(
      <CitiesList
        cities={cities}
        currentCity={currentCity}
        onCityClick={onCityClick}
      />
  );

  const cityLink = CitiesListScreen.find(`locations__item-link`);

  cityLink.forEach((bookmarkButton) => {
    bookmarkButton.props().onClick();
  });

  expect(onCityClick.mock.calls.length).toBe(cityLink.length);
});
