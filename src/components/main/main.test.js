import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const Options = {
  RENT_COUNT: 100,
  DESCRIPTION: [`Beautiful & luxurious apartment at great location`, `Wood and stone place`]
};

it(`Should WelcomeScreen render correctly`, () => {
  const onBookmarkClick = jest.fn();

  const tree = renderer
    .create(<Main
      rentOptionsCount={Options.RENT_COUNT}
      rentOptionsDescriptions={Options.DESCRIPTION}
      onBookmarkClick={onBookmarkClick}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
