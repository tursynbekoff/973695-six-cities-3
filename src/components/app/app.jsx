import React from "react";
import Main from "../main/main.jsx";
import PropTypes from 'prop-types';

const onBookmarkClick = () => {};

const App = (props) => {
  const {rentOptionsCount, offerList} = props;

  return (
    <Main
      rentOptionsCount={rentOptionsCount}
      offerList={offerList}
      onBookmarkClick={onBookmarkClick}

    />
  );
};

App.propTypes = {
  rentOptionsCount: PropTypes.number.isRequired,

  offerList: PropTypes.arrayOf(
      PropTypes.shape({
        price: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
      })).isRequired

};

export default App;
