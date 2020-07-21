import React from "react";
import PropTypes from "prop-types";
import {AppRoute} from '../../const.js';

const Review = (props) => {
  const {
    imgSrc,
    rating,
    price,
    type
  } = props;

  return (
    <article className="near-places__card place-card">
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={imgSrc[0]} width="260" height="200"
            alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro; {price} </b>
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
            <span style={{width: `${(rating / 5) * 100}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">Wood and stone place</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

Review.propTypes = {
  reviews: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.shape({
      imgSrc: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      rating: PropTypes.string,
      type: PropTypes.string,
    })
  ]).isRequired,
};

export default Review;
