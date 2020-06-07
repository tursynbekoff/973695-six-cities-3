import React from "react";
import ReviewList from "../review-list/review-list.jsx";
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import Map from "../map/map.jsx";
import {OffersRestriction} from "../../const";
import CommentSection from "../offer-review-form/offer-review-form.jsx";
import withReview from "../../hocs/with-review/with-review.jsx";

const CommentSectionWrapped = withReview(CommentSection);

import {
  getIsError,
  getIsSending,
  getReviews,
} from "../../reducer/data/selectors.js";
import {Operation as DataOperation} from "../../reducer/data/data.js";

const Details = (props) => {
  console.log(`props on details page `, props);
  console.log(props.loadOfferData);
  const {
    offer,
    offerList,
    cities,
    currentCity,
    activeMapPin,
    postReview,
    isSending,
    isError,
    userEmail,
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
    rentalHost: {
      hostName,
      hostAvatar,
      isSuper
    }
  } = offer;

  const filteredList = offerList.filter((offerItem) => offerItem.id !== id);

  return (
    <React.Fragment>
      <div className="page">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link" href="main.html">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
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
                      <img className="property__avatar user__avatar" src={hostAvatar} width="74"
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
                  <CommentSectionWrapped
                    onReviewSubmit={postReview}
                    id={id}
                    isSending={isSending}
                    isError={isError}
                  />
                </section>
              </div>
            </div>
            <section className="property__map map">

              <Map
                cities={cities}
                currentCity={currentCity}
                offerList={filteredList}
                activeMapPin={activeMapPin}
              />
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                <article className="near-places__card place-card">
                  <div className="near-places__image-wrapper place-card__image-wrapper">
                    <a href="#">
                      <img className="place-card__image" src="img/room.jpg" width="260" height="200"
                        alt="Place image" />
                    </a>
                  </div>
                  <div className="place-card__info">
                    <div className="place-card__price-wrapper">
                      <div className="place-card__price">
                        <b className="place-card__price-value">&euro;80</b>
                        <span className="place-card__price-text">&#47;&nbsp;night</span>
                      </div>
                      <button
                        className="place-card__bookmark-button place-card__bookmark-button--active button"
                        type="button">
                        <svg className="place-card__bookmark-icon" width="18" height="19">

                        </svg>
                        <span className="visually-hidden">In bookmarks</span>
                      </button>
                    </div>
                    <div className="place-card__rating rating">
                      <div className="place-card__stars rating__stars">

                        <span className="visually-hidden">Rating</span>
                      </div>
                    </div>
                    <h2 className="place-card__name">
                      <a href="#">Wood and stone place</a>
                    </h2>
                    <p className="place-card__type">Private room</p>
                  </div>
                </article>

                <article className="near-places__card place-card">
                  <div className="near-places__image-wrapper place-card__image-wrapper">
                    <a href="#">
                      <img className="place-card__image" src="img/apartment-02.jpg" width="260" height="200"
                        alt="Place image" />
                    </a>
                  </div>
                  <div className="place-card__info">
                    <div className="place-card__price-wrapper">
                      <div className="place-card__price">
                        <b className="place-card__price-value">&euro;132</b>
                        <span className="place-card__price-text">&#47;&nbsp;night</span>
                      </div>
                      <button className="place-card__bookmark-button button" type="button">
                        <svg className="place-card__bookmark-icon" width="18" height="19">

                        </svg>
                        <span className="visually-hidden">To bookmarks</span>
                      </button>
                    </div>
                    <div className="place-card__rating rating">
                      <div className="place-card__stars rating__stars">
                        <span className="visually-hidden">Rating</span>
                      </div>
                    </div>
                    <h2 className="place-card__name">
                      <a href="#">Canal View Prinsengracht</a>
                    </h2>
                    <p className="place-card__type">Apartment</p>
                  </div>
                </article>

                <article className="near-places__card place-card">
                  <div className="near-places__image-wrapper place-card__image-wrapper">
                    <a href="#">
                      <img className="place-card__image" src="img/apartment-03.jpg" width="260" height="200"
                        alt="Place image" />
                    </a>
                  </div>
                  <div className="place-card__info">
                    <div className="place-card__price-wrapper">
                      <div className="place-card__price">
                        <b className="place-card__price-value">&euro;180</b>
                        <span className="place-card__price-text">&#47;&nbsp;night</span>
                      </div>
                      <button className="place-card__bookmark-button button" type="button">
                        <svg className="place-card__bookmark-icon" width="18" height="19">

                        </svg>
                        <span className="visually-hidden">To bookmarks</span>
                      </button>
                    </div>
                    <div className="place-card__rating rating">
                      <div className="place-card__stars rating__stars">
                        <span className="visually-hidden">Rating</span>
                      </div>
                    </div>
                    <h2 className="place-card__name">
                      <a href="#">Nice, cozy, warm big bed apartment</a>
                    </h2>
                    <p className="place-card__type">Apartment</p>
                  </div>
                </article>
              </div>
            </section>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};

// Details.propTypes = {
//   cities: PropTypes.array.isRequired,
//   currentCity: PropTypes.string.isRequired,
//   userEmail: PropTypes.string.isRequired,
//   offer: PropTypes.oneOfType([PropTypes.bool,
//     PropTypes.shape({
//       rating: PropTypes.number,
//       id: PropTypes.number,
//       price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//       description: PropTypes.string,
//       type: PropTypes.string,
//       reviews: PropTypes.array,
//     })
//   ]),
//   offerList: PropTypes.array.isRequired,
//   activeMapPin: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
//   postReview: PropTypes.func.isRequired,
//   isSending: PropTypes.bool.isRequired,
//   isError: PropTypes.bool.isRequired,
// };

const mapStateToProps = (state) => ({
  reviews: getReviews(state),
  isSending: getIsSending(state),
  isError: getIsError(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadOfferData(id) {
    dispatch(DataOperation.getReviews(id));
    console.log(`in page log, id: `, id);
  },
  postReview(id, review) {
    dispatch(DataOperation.postReview(id, review));
    dispatch(DataOperation.getReviews(id));
  },
});

export {Details};
export default connect(mapStateToProps, mapDispatchToProps)(Details);
