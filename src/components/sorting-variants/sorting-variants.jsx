import React from "react";
import PropTypes from "prop-types";
import {SortType} from "../../const.js";

const SortingVariants = (props) => {
  const {currentSortValue, onSortTypeClick, isActive, onToggleClick} = props;
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex="0"
        onClick={onToggleClick}
      >
        {currentSortValue}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${
        isActive ? `places__options--opened` : ``
      }`}
      onClick={onToggleClick}
      >
        {Object.values(SortType).map((sortValue, i) => {
          return (
            <li className={`places__option  ${
              sortValue === currentSortValue ? `places__option--active` : ``
            }`}
            tabIndex="0"
            key={i + sortValue}
            onClick={() =>
              onSortTypeClick(sortValue)
            }
            >{sortValue}</li>
          );
        })}
      </ul>
    </form>
  );

};

SortingVariants.propTypes = {
  currentSortValue: PropTypes.string.isRequired,
  onSortTypeClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  onToggleClick: PropTypes.func.isRequired,
};

export default SortingVariants;
