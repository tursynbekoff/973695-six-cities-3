import React from "react";
import PropTypes from "prop-types";
import Card from "../offer-card/offer-card.jsx";

const OfferList = (props) => {
  const {offerList, onBookmarkClick} = props;

  const offers = offerList.map((offer, index) => {
    return (
      <Card
        offerCard={offer}
        onBookmarkClick={onBookmarkClick}
        key={index}
      />);
  });

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers}
    </div>
  );
};

OfferList.propTypes = {
  offerList: PropTypes.arrayOf(
      PropTypes.shape({
        price: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
      })),
  onBookmarkClick: PropTypes.func.isRequired
};

export default OfferList;
