import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const Options = {
  RENT_COUNT: 100
};

const offerList = [
  {
    price: `60`,
    description: `Wood and stone place`,
    type: `Private room`,
    coordinate: [52.3909553943508, 4.85309666406198]
  }, {
    price: `130`,
    description: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
    coordinate: [52.369553943508, 4.85309666406198]
  }, {
    price: `80`,
    description: `Canal View Prinsengracht`,
    type: `Private room`,
    coordinate: [52.3909553943508, 4.929309666406198]
  }, {
    price: `120`,
    description: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
    coordinate: [52.3809553943508, 4.939309666406198]
  }
];

it(` Main render has problems`, () => {
  const onBookmarkClick = jest.fn();

  const tree = renderer
    .create(<Main
      rentOptionsCount={Options.RENT_COUNT}
      offerList={offerList}
      onBookmarkClick={onBookmarkClick}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
