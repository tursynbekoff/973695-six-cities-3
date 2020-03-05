import React from "react";
import PropTypes from "prop-types";
import Review from "../review/review.jsx";

const ReviewList = (props) => {
  const {reviews} = props;

  const reviewMarkup = reviews.map((review, index) => {
    return (
      <Review
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
  reviews: PropTypes.array
};

export default ReviewList;

