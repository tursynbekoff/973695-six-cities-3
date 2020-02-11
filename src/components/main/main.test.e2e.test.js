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

it(`Should welcome button be pressed`, () => {
  const onBookmarkClick = jest.fn();

  const welcomeScreen = shallow(
      <Main
        rentOptionsCount={Options.RENT_COUNT}
        rentOptionsDescriptions={Options.DESCRIPTION}
        onWelcomeButtonClick={onBookmarkClick}
      />
  );

  const bookmarkButton = welcomeScreen.find(`place-card__bookmark-button`);

  bookmarkButton.props().onClick();

  expect(bookmarkButton.mock.calls.length).toBe(1);
});
