import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import Details from "../offer-details/offer-details.jsx";
import PropTypes from "prop-types";
import {Switch, Route, Router} from "react-router-dom";
import SignIn from '../sign-in/sign-in.jsx';
import {AppRoute} from '../../const';
import history from "../../history.js";
class App extends PureComponent {

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path={AppRoute.ROOT} component={Main}/>
          <Route exact path={`/offer/:id`} component={Details}/>
          <Route exact path={AppRoute.LOGIN} component={SignIn}/>
        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  apart: PropTypes.shape(
      {
        location: PropTypes.shape({
          city: PropTypes.string.isRequired,
        }),
        id: PropTypes.number.isRequired,
        coordinate: PropTypes.arrayOf(
            PropTypes.number.isRequired
        ),
        rentalHost: PropTypes.shape({
          id: PropTypes.number.isRequired,
          hostName: PropTypes.string.isRequired,
          hostAvatar: PropTypes.string.isRequired,
          isSuper: PropTypes.bool.isRequired,
        }),
        description: PropTypes.string.isRequired,
        imgSrc: PropTypes.arrayOf(
            PropTypes.string.isRequired
        ),
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        isPremium: PropTypes.bool.isRequired,
        isBookmark: PropTypes.bool.isRequired,
        rentalDescription: PropTypes.arrayOf(
            PropTypes.string.isRequired
        ),
        roomQuantity: PropTypes.number.isRequired,
        guestQuantity: PropTypes.number.isRequired,
      }
  ),
};

export default App;
