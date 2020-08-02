import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import Details from "../offer-details/offer-details.jsx";
import PropTypes from "prop-types";
import {Switch, Route, Router} from "react-router-dom";
import SignIn from '../sign-in/sign-in.jsx';
import {AppRoute} from '../../const.js';
import history from "../../history.js";
import Empty from "../offer-empty-screen/offer-empty-screen.jsx";

import {ActionCreator} from "../../reducer/app/app.js";
import {ActionCreator as DataActionCreator} from "../../reducer/data/data.js";

import {connect} from "react-redux";

import {
  getAllOffers,

} from "../../reducer/data/selectors.js";

class App extends PureComponent {

  render() {


    return (
      <Router history={history}>
        <Switch>
          <Route path={AppRoute.ROOT} exact>
            <Main/>
          </Route>
          {/* <Route path={AppRoute.offer(id)} exact component={Details}/> */}
          <Route path={`/offer/:id`} exact component={Details}/>
          <Route path={AppRoute.LOGIN} exact component={SignIn}/>
          <Route component={Empty}/>
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

const mapDispatchToProps = (dispatch) => ({
  onCityClick(city) {
    dispatch(ActionCreator.changeCity(city));
    dispatch(DataActionCreator.getOffers(city));
  },
  onBookmarkClick(offerId) {
    dispatch(ActionCreator.changeOfferScreen(offerId));
  },
  onSortTypeClick(sortType) {
    dispatch(ActionCreator.changeSortType(sortType));
  },
});

const mapStateToProps = (state) => (

  {
    offers: getAllOffers(state),
  });

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
