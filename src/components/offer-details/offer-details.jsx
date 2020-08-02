import React from "react";
import ReviewList from "../review-list/review-list.jsx";
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import Map from "../map/map.jsx";
import NearCard from "../near-offers/near-offers.jsx";

import {AppRoute, calculateDistance, OffersRestriction} from '../../const.js';

import {
  getUserEmail,
} from "../../reducer/user/selectors.js";

import {
  getCurrentOffers,
} from "../../reducer/data/selectors.js";

import {
  getCurrentCity,
} from "../../reducer/app/selectors.js";

import {Operation as DataOperation} from "../../reducer/data/data.js";

import {ActionCreator} from "../../reducer/app/app.js";

const Details = (props) => {

  const {
    currentOffers,
    currentCity,
    userEmail,
    onBookmarkClick,
  } = props;

  const {
    id,
    price,
    description,
    type,
    reviews,
    rating,
    imgSrc,
    roomQuantity,
    guestQuantity,
    rentalFeatures,
    coordinate,
    rentalHost: {
      hostName,
      hostAvatar,
      isSuper
    }
  } = props.history.location.offer;

  const filteredList = currentOffers.filter((offerItem) => offerItem.id !== id);

  const coordinates = filteredList.map(function (it) {
    it.distance = calculateDistance(coordinate[0], coordinate[1], it.coordinate[0], it.coordinate[1]);
    return it;
  });

  coordinates.sort(function (a, b) {
    return a.distance - b.distance;
  });

  const closeObj = coordinates.slice(0, 3);

  return (
    <React.Fragment>

      <div className="page">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link" href={AppRoute.ROOT}>
                  <img className="header__logo" src={AppRoute.ROOT + `img/logo.svg`} alt="6 cities logo" width="81" height="41" />
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">{userEmail}</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {
                  imgSrc.map((src, i) => {
                    return (
                      <div className="property__image-wrapper" key={i + src}>
                        <img className="property__image" src={src} alt="Photo studio" />
                      </div>
                    );
                  }).slice(0, OffersRestriction.MAX_IMAGES_QUANTITY)
                }
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                <div className="property__mark">
                  <span>Premium</span>
                </div>
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {description}
                  </h1>
                  <button className="property__bookmark-button button" type="button">
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: `${(rating / 5) * 100}%`}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {roomQuantity} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                  Max {guestQuantity} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {
                      rentalFeatures.map((feature, i) => {
                        return (
                          <li className="property__inside-item" key={i + feature}>
                            {feature}
                          </li>
                        );
                      })
                    }
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div
                      className={`property__avatar-wrapper user__avatar-wrapper ${isSuper ? `property__avatar-wrapper--pro` : ``} `}>
                      <img className="property__avatar user__avatar" src={AppRoute.ROOT + hostAvatar} width="74"
                        height="74" alt="Host avatar" />
                    </div>
                    <span className="property__user-name">
                      {hostName}
                    </span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                                            A quiet cozy and picturesque that hides behind a a river by the unique lightness of
                                            Amsterdam. The building is green and from 18th century.
                    </p>
                    <p className="property__text">
                                            An independent House, strategically located between Rembrand Square and National Opera,
                                            but where the bustle of the city comes to rest in this alley flowery and colorful.
                    </p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <ReviewList
                    reviews={reviews}
                  />

                </section>
              </div>
            </div>
            <section className="property__map map">
              <Map
                currentCity={currentCity}
                offerList={closeObj}
              />
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                {


                  closeObj.map((offer, index) => {
                    return (
                      <NearCard
                        offerCard={offer}
                        onBookmarkClick={onBookmarkClick}
                        key={index}
                      />);
                  })
                }
              </div>
            </section>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};

Details.propTypes = {
  currentCity: PropTypes.string.isRequired,
  userEmail: PropTypes.string.isRequired,
  offer: PropTypes.oneOfType([PropTypes.bool,
    PropTypes.shape({
      rating: PropTypes.number,
      id: PropTypes.number,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      description: PropTypes.string,
      type: PropTypes.string,
      reviews: PropTypes.array,
    })
  ]),

  history: PropTypes.oneOfType([PropTypes.bool,
    PropTypes.shape({
      location: PropTypes.oneOfType([PropTypes.bool,
        PropTypes.shape({
          offer: PropTypes.oneOfType([PropTypes.bool,
            PropTypes.shape({
              rating: PropTypes.number,
              id: PropTypes.number,
              price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
              description: PropTypes.string,
              type: PropTypes.string,
              imgSrc: PropTypes.arrayOf(
                  PropTypes.string.isRequired
              ),
              roomQuantity: PropTypes.number,
              guestQuantity: PropTypes.number,
              rentalFeatures: PropTypes.arrayOf(
                  PropTypes.string.isRequired
              ),
              coordinate: PropTypes.arrayOf(
                  PropTypes.number.isRequired
              ),
            })
          ]),
        })
      ]),
    })
  ]),

  currentOffers: PropTypes.array.isRequired,

  onBookmarkClick: PropTypes.func.isRequired,
  onHoverActiveMapPin: PropTypes.oneOfType([PropTypes.bool,
    PropTypes.func
  ]),
  onHoverResetMapPin: PropTypes.oneOfType([PropTypes.bool,
    PropTypes.func
  ]),
};


const mapDispatchToProps = (dispatch) => ({
  loadOfferData(id) {
    dispatch(DataOperation.getReviews(id));
  },
  onBookmarkClick(offerId) {
    dispatch(ActionCreator.changeOfferScreen(offerId));
  },
});

const mapStateToProps = (state) => (

  {
    currentCity: getCurrentCity(state),
    currentOffers: getCurrentOffers(state),
    userEmail: getUserEmail(state),
  });

export {Details};
export default connect(mapStateToProps, mapDispatchToProps)(Details);
