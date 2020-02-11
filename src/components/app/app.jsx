import React from "react";
import Main from "../main/main.jsx";
import PropTypes from 'prop-types';

const onBookmarkClick = () => {};

const App = ({rentOptionsCount, rentOptionsDescriptions}) => {

  return (
    <Main
      rentOptionsCount={rentOptionsCount}
      rentOptionsDescriptions={rentOptionsDescriptions}
      onBookmarkClick={onBookmarkClick}

    />
  );
};

App.propTypes = {
  rentOptionsCount: PropTypes.number.isRequired,

  rentOptionsDescriptions: PropTypes.arrayOf(
      PropTypes.string
  ).isRequired

};

export default App;
