import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Options = {
  RENT_COUNT: 100
};

ReactDOM.render(
    <App
      rentOptionsCount={Options.RENT_COUNT}
    />,
    document.querySelector(`#root`)
);
