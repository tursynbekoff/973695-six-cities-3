import React from "react";
import PropTypes from 'prop-types';
import Map from "../map/map.jsx";
import SortingVariants from "../sorting-variants/sorting-variants.jsx";
import OfferList from "../offer-list/offer-list.jsx";
import withToggle from '../../hocs/with-toggle/with-toggle.jsx';

const SortingWrapped = withToggle(SortingVariants);

const OfferContainer = (props) => {

  const {
    offerList,
    cities,
    onBookmarkClick,
    currentCity,
    currentSortValue,
    onSortTypeClick,
    onHoverActiveMapPin,
    activeMapPin,
    onHoverResetMapPin,
  } = props;

  const placesStentence = `${offerList.length} ${(offerList.length === 1) ? `place` : `places` } to stay in ${currentCity}`;

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{placesStentence}</b>
        <SortingWrapped
          currentSortValue={currentSortValue}
          onSortTypeClick ={onSortTypeClick}
        />
        <div className="cities__places-list places__list tabs__content">

          <OfferList
            offerList={offerList}
            currentSortValue={currentSortValue}
            onBookmarkClick={onBookmarkClick}
            onHoverActiveMapPin={onHoverActiveMapPin}
            onHoverResetMapPin={onHoverResetMapPin}
          />

        </div>
      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          <Map
            cities={cities}
            currentCity={currentCity}
            offerList={offerList}
            activeMapPin={activeMapPin}
          />
        </section>
      </div>
    </div>
  );
};

OfferContainer.propTypes = {
  offerList: PropTypes.array.isRequired,
  onBookmarkClick: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
  currentCity: PropTypes.string.isRequired,
  currentSortValue: PropTypes.string.isRequired,
  onSortTypeClick: PropTypes.func.isRequired,
  onHoverActiveMapPin: PropTypes.func.isRequired,
  activeMapPin: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]).isRequired,
  onHoverResetMapPin: PropTypes.func.isRequired,
};

export default OfferContainer;
