import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

it(`Should WelcomeScreen render correctly`, () => {
  const tree = renderer
    .create(<Main
      rentOptionsCount={100}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
