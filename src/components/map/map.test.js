import React from "react";
import renderer from "react-test-renderer";
import Map from "./map.jsx";

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

it(`Render Map`, () => {
  const tree = renderer
      .create(<Map
        offerList={offerList}
      />, {
        createNodeMock: () => document.createElement(`div`)
      })
      .toJSON();

  expect(tree).toMatchSnapshot();
});