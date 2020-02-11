import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const Options = {
  RENT_COUNT: 100,
  DESCRIPTION: [`Beautiful & luxurious apartment at great location`, `Wood and stone place`]
};

it(`Render App`, () => {
  const tree = renderer
      .create(<App
        rentOptionsCount={Options.RENT_COUNT}
        rentOptionsDescriptions={Options.DESCRIPTION}
      />)
      .toJSON();

  expect(tree).toMatchSnapshot();
});
