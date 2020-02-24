import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";

const Options = {
  RENT_COUNT: 100,
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

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should bookmark button be pressed`, () => {
  const onBookmarkClick = jest.fn();

  const mainScreen = shallow(
      <Main
        rentOptionsCount={Options.RENT_COUNT}
        offerList={offerList}
        onBookmarkClick={onBookmarkClick}
      />
  );

  const bookmarkButtons = mainScreen.find(`place-card__bookmark-button`);

  bookmarkButtons.forEach((bookmarkButton) => {
    bookmarkButton.props().onClick();
  });

  expect(onBookmarkClick.mock.calls.length).toBe(bookmarkButtons.length);
});
