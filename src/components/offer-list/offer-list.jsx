import React from "react";
import PropTypes from "prop-types";
import Card from "../offer-card/offer-card.jsx";

const OfferList = (props) => {
  const {
    offerList,
    onBookmarkClick,
    currentSortValue,
    onHoverActiveMapPin,
    onHoverResetMapPin,
  } = props;

  let offers = offerList.slice();

  if (currentSortValue === `Popular`) {
    offers = offerList.slice();
  }

  if (currentSortValue === `Price: high to low`) {
    offers = offers.sort(function (a, b) {
      return b.price - a.price;
    });
  }

  if (currentSortValue === `Price: low to high`) {
    offers = offers.sort(function (a, b) {
      return a.price - b.price;
    });
  }

  if (currentSortValue === `Top rated first`) {
    offers = offers.sort(function (a, b) {
      return b.rating - a.rating;
    });
  }


  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer, index) => {
        return (
          <Card
            offerCard={offer}
            onBookmarkClick={onBookmarkClick}
            key={index}
            onHoverActiveMapPin={onHoverActiveMapPin}
            onHoverResetMapPin={onHoverResetMapPin}
          />);
      })}
    </div>
  );
};

OfferList.propTypes = {

  offerList: PropTypes.array.isRequired,
  onBookmarkClick: PropTypes.func.isRequired,
  currentSortValue: PropTypes.oneOfType([PropTypes.bool,
    PropTypes.string.isRequired,
  ]),
  onHoverActiveMapPin: PropTypes.oneOfType([PropTypes.bool,
    PropTypes.func.isRequired,
  ]),
  onHoverResetMapPin: PropTypes.oneOfType([PropTypes.bool,
    PropTypes.func.isRequired,
  ]),
};

export default OfferList;
