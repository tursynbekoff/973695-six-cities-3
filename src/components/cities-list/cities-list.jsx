
import React from "react";
import PropTypes from "prop-types";

const CitiesList = (props) => {
  const {cities, currentCity, onCityClick} = props;

  const citiesMarkup = cities.map((city, index) => {
    return (
      <li className="locations__item" key={index}>
        <a className={`locations__item-link tabs__item ${
          city === currentCity ? `tabs__item--active` : ``
        }`} href="#"
        onClick={() => onCityClick(city)}
        >
          <span>{city}</span>
        </a>
      </li>);
  });

  return (
    <ul className="locations__list tabs__list">
      {citiesMarkup}
    </ul>
  );
};

CitiesList.propTypes = {
  cities: PropTypes.array.isRequired,
  onCityClick: PropTypes.func.isRequired,
  currentCity: PropTypes.string.isRequired,
};

export default CitiesList;

