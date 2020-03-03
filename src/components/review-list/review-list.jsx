import React from "react";
import PropTypes from "prop-types";
import Review from "../review/review.jsx";

const ReviewList = (props) => {
  const {offerList} = props;
  const object = offerList[2];
  const {reviews} = object;

  const reviewMarkup = reviews.map((review, index) => {
    return (<Review
      key={index}
      reviews={review}
    />);
  });

  return (
    <React.Fragment>
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>

      <ul className="reviews__list">
        {reviewMarkup}
      </ul>
    </React.Fragment>);
};


ReviewList.propTypes = {
  offerList: PropTypes.arrayOf(
      PropTypes.shape({
        reviews: PropTypes.arrayOf(
            PropTypes.shape({
              name: PropTypes.string.isRequired,
              review: PropTypes.string.isRequired
            })
        )
      })
  )
};

export default ReviewList;

