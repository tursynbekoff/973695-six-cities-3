import React from "react";
import renderer from "react-test-renderer";
import Card from "./offer-card.jsx";

const index = 5464564;

const offer = {
  price: `60`,
  description: `Wood and stone place`,
  type: `Private room`
};


it(`Should WelcomeScreen render correctly`, () => {
  const onBookmarkClick = jest.fn();

  const tree = renderer
    .create(<Card
      offerCard={offer}
      onBookmarkClick={onBookmarkClick}
      key={index}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
