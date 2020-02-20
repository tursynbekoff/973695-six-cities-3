import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import offerList from "./components/mocks/offers.js";

const Options = {
  RENT_COUNT: 100,
};

ReactDOM.render(
    <App
      rentOptionsCount={Options.RENT_COUNT}
      offerList ={offerList}
    />,
    document.querySelector(`#root`)
);
