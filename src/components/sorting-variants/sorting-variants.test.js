import React from "react";
import renderer from "react-test-renderer";
import SortingVariants from "./sorting-variants.jsx";

const isActive = false;
const currentSortValue = `Popular`;

it(`Should SortingVariants render correctly`, () => {
  const onSortTypeClick = jest.fn();
  const onToggleClick = jest.fn();
  const tree = renderer
    .create(<SortingVariants
      currentSortValue={currentSortValue}
      onSortTypeClick ={onSortTypeClick}
      isActive={isActive}
      onToggleClick={onToggleClick}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
