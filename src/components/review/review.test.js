import React from "react";
import renderer from "react-test-renderer";
import Review from "./review.jsx";


const reviews = [
  {
    name: `Max`,
    review: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`
  }
];

it(`Should Review render correctly`, () => {

  const tree = renderer
    .create(<Review
      reviews={reviews}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
