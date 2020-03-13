import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SortingVariants from "./sorting-variants";

Enzyme.configure({
  adapter: new Adapter(),
});

const isActive = false;
const currentSortValue = `Popular`;

it(`Should SortingVariants button be pressed`, () => {
  const onSortTypeClick = jest.fn();
  const onToggleClick = jest.fn();

  const sortingVariantsScreen = shallow(
      <SortingVariants
        currentSortValue={currentSortValue}
        onSortTypeClick ={onSortTypeClick}
        isActive={isActive}
        onToggleClick={onToggleClick}
      />
  );

  const sortValueButton = sortingVariantsScreen.find(`places__sorting-type`);
  const toggleButton = sortingVariantsScreen.find(`places__sorting-type`);

  sortValueButton.forEach((sortChoiceButton) => {
    sortChoiceButton.props().onClick();
  });

  expect(onSortTypeClick.mock.calls.length).toBe(sortValueButton.length);
  expect(onToggleClick.mock.calls.length).toBe(toggleButton.length);
});
