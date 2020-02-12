import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";

const Options = {
  RENT_COUNT: 100,
  DESCRIPTION: [`Beautiful & luxurious apartment at great location`, `Wood and stone place`]
};

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should bookmark button be pressed`, () => {
  const onBookmarkClick = jest.fn();

  const mainScreen = shallow(
      <Main
        rentOptionsCount={Options.RENT_COUNT}
        rentOptionsDescriptions={Options.DESCRIPTION}
        onBookmarkClick={onBookmarkClick}
      />
  );

  const bookmarkButtons = mainScreen.find(`place-card__bookmark-button`);

  bookmarkButtons.forEach((bookmarkButton) => {
    bookmarkButton.props().onClick();
  });

  expect(onBookmarkClick.mock.calls.length).toBe(bookmarkButtons.length);
});
