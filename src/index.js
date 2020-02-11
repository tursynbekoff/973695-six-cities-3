import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Options = {
  RENT_COUNT: 100,
  DESCRIPTION: [`Beautiful & luxurious apartment at great location`, `Wood and stone place`]
};

ReactDOM.render(
    <App
      rentOptionsCount={Options.RENT_COUNT}
      rentOptionsDescriptions ={Options.DESCRIPTION}
    />,
    document.querySelector(`#root`)
);
