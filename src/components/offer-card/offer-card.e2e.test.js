import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Card from "./offer-card";

const index = 5464564;

const offer = {
  id: 1,
  price: `60`,
  rating: 3.3,
  description: `Wood and stone place`,
  type: `Private room`,
  coordinate: [52.3909553943508, 4.85309666406198],
  location: {
    city: `Amsterdam`
  },
  reviews: [
    {
      name: `Max`,
      review: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`
    }
  ]
};

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should bookmark button be pressed`, () => {
  const onBookmarkClick = jest.fn();
  const onHoverActiveMapPin = jest.fn();
  const onHoverDisableMapPin = jest.fn();
  const onHoverResetMapPin = jest.fn();

  const mainScreen = shallow(
      <Card
        offerCard={offer}
        onBookmarkClick={onBookmarkClick}
        key={index}
        onHoverActiveMapPin={onHoverActiveMapPin}
        onHoverDisableMapPin={onHoverDisableMapPin}
        onHoverResetMapPin={onHoverResetMapPin}
      />
  );

  const bookmarkButtons = mainScreen.find(`place-card__bookmark-button`);

  bookmarkButtons.forEach((bookmarkButton) => {
    bookmarkButton.props().onClick();
  });

  expect(onBookmarkClick.mock.calls.length).toBe(bookmarkButtons.length);
});
