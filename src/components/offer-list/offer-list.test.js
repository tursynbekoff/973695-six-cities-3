import React from "react";
import renderer from "react-test-renderer";
import OfferList from "./offer-list.jsx";

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

it(`Should WelcomeScreen render correctly`, () => {
  const onBookmarkClick = jest.fn();

  const tree = renderer
    .create(<OfferList
      offerList={offerList}
      onBookmarkClick={onBookmarkClick}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
