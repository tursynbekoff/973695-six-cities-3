import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Card from "./offer-card";

const index = 5464564;

const offer = {
  price: `60`,
  description: `Wood and stone place`,
  type: `Private room`
};

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should bookmark button be pressed`, () => {
  const onBookmarkClick = jest.fn();

  const mainScreen = shallow(
      <Card
        offerCard={offer}
        onBookmarkClick={onBookmarkClick}
        key={index}
      />
  );

  const bookmarkButtons = mainScreen.find(`place-card__bookmark-button`);

  bookmarkButtons.forEach((bookmarkButton) => {
    bookmarkButton.props().onClick();
  });

  expect(onBookmarkClick.mock.calls.length).toBe(bookmarkButtons.length);
});
