import React from "react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {AppRoute} from '../../const';

const Card = (props) => {
  const {
    offerCard,
    onBookmarkClick,
  } = props;
  const {id, price, description, type, rating, imgSrc} = offerCard;

  return (
    <article className="cities__place-card place-card">
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link
          onClick={() => {
            onBookmarkClick(id);
          }}
          to={{
            pathname: AppRoute.offer(id),
            offer: offerCard
          }}
        >
          <img className="place-card__image" src={imgSrc[0]} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className="place-card__bookmark-button button"
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <svg id="icon-bookmark" viewBox="0 0 17 18">
                <path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path>
              </svg>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">


          <div className="place-card__stars rating__stars">
            <span style={{width: `${(rating / 5) * 100}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>

        </div>
        <h2 className="place-card__name">
          <a href="#">{description}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

Card.propTypes = {
  offerCard: PropTypes.shape({
    id: PropTypes.number,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    description: PropTypes.string,
    type: PropTypes.string,
    rating: PropTypes.number,
    imgSrc: PropTypes.array,
  }),
  onBookmarkClick: PropTypes.func.isRequired,

  onHoverActiveMapPin: PropTypes.oneOfType([PropTypes.bool,
    PropTypes.func
  ]),
  onHoverResetMapPin: PropTypes.oneOfType([PropTypes.bool,
    PropTypes.func
  ]),
};

export default Card;
