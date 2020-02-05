import React from "react";
import Main from "../main/main.jsx";


const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {rentOptionsCount} = props;

  return (
    <Main rentOptionsCount={rentOptionsCount} />
  );
};


export default App;
