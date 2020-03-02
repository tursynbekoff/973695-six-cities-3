import React from "react";
import renderer from "react-test-renderer";
import Details from "./offer-details.jsx";


it(`Should OfferDetails render correctly`, () => {

  const tree = renderer
    .create(<Details />,
        {
          createNodeMock: () => document.createElement(`div`)
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
