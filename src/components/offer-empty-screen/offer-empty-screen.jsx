import React from "react";
import PropTypes from "prop-types";

const EmptyScreen = (props) => {
  const {currentCity} = props;

  return (
    <div className="cities__places-container cities__places-container--empty container">
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">We could not find any property availbale at the moment in {currentCity}</p>
        </div>
      </section>
      <div
        className="cities__right-section"
        style={{
          backgroundPosition: `right center`,
          backgroundSize: `100% auto`,
          backgroundImage: `url(../img/no-places@2x.png)`,
        }}
      ></div>
    </div>
  );

};

EmptyScreen.propTypes = {
  currentCity: PropTypes.string.isRequired,
};

export default EmptyScreen;
