import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const Options = {
  RENT_COUNT: 100
};

const offerList = [
  {
    price: `60`,
    description: `Wood and stone place`,
    type: `Private room`
  }, {
    price: `130`,
    description: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`
  }, {
    price: `80`,
    description: `Canal View Prinsengracht`,
    type: `Private room`
  }, {
    price: `120`,
    description: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`
  }
];

it(`Render App`, () => {
  const tree = renderer
      .create(<App
        rentOptionsCount={Options.RENT_COUNT}
        offerList={offerList}
      />)
      .toJSON();

  expect(tree).toMatchSnapshot();
});