import React from "react";
import renderer from "react-test-renderer";
import EmptyScreen from "./offer-empty-screen.jsx";

const currentCity = `Amsterdam`;

it(` EmptyScreen render has problems`, () => {

  const tree = renderer
      .create(
          <EmptyScreen
            currentCity={currentCity}
          />
      ).toJSON();

  expect(tree).toMatchSnapshot();
});

