import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import Details from "../offer-details/offer-details.jsx";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/app/app.js";
import {ActionCreator as DataActionCreator} from "../../reducer/data/data.js";
import {Operation as UserOperation} from "../../reducer/user/user.js";

import {
  getLoginStatus,
  getUserEmail,
  getAuthorisationStatus,
} from "../../reducer/user/selectors.js";

import SignIn from '../sign-in/sign-in.jsx';

import {
  getAllOffers,
  getCurrentOffers,
  getCities,
} from "../../reducer/data/selectors.js";

import {
  getCurrentCity,
  getCurrentSortValue,
  getActiveOfferScreen,
} from "../../reducer/app/selectors.js";

import {AuthorizationStatus} from '../../const';

class App extends PureComponent {

  _renderMainScreen() {

    if (this.props.authorizationStatus === AuthorizationStatus.UNAUTHORIZED) {
      return this._renderAuthScreen();
    }

    if (!this.props.offerScreen) {
      return (
        <Main
          offerList={this.props.currentOffers}
          cities={this.props.cities}
          currentCity={this.props.currentCity}
          onCityClick={this.props.onCityClick}
          onBookmarkClick={this.props.onBookmarkClick}
          currentSortValue={this.props.currentSortValue}
          onSortTypeClick={this.props.onSortTypeClick}
          userEmail={this.props.userEmail}
        />
      );
    } else if (this.props.offerScreen) {
      return this._renderDetailScreen(this.props.offerScreen);
    }

    return null;
  }

  _renderDetailScreen(id) {
    this.offerObj = this.props.currentOffers.find(
        (offerDetail) => offerDetail.id === +id
    );
    return (
      <Details
        offerList={this.props.currentOffers}
        cities={this.props.cities}
        currentCity={this.props.currentCity}
        offer={this.offerObj}
        userEmail={this.props.userEmail}
      />
    );
  }

  _renderAuthScreen() {
    return (<SignIn
      onSubmit={this.props.login}
      isLoginError={this.props.isLoginError}
      userEmail={this.props.userEmail}
    />);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderMainScreen()}
          </Route>
          <Route exact path="/details/">
            {this._renderDetailScreen(this.props.offerScreen)}
          </Route>
          <Route
            exact
            path="/login"
          >
            {this._renderAuthScreen}
          </Route>

        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  currentOffers: PropTypes.array.isRequired,
  cities: PropTypes.array.isRequired,
  onCityClick: PropTypes.func.isRequired,
  onBookmarkClick: PropTypes.func.isRequired,
  currentCity: PropTypes.string.isRequired,
  offerScreen: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]).isRequired,
  currentSortValue: PropTypes.string.isRequired,
  onSortTypeClick: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  userEmail: PropTypes.string,
  isLoginError: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  currentCity: getCurrentCity(state),
  offers: getAllOffers(state),
  currentOffers: getCurrentOffers(state),
  cities: getCities(state),
  offerScreen: getActiveOfferScreen(state),
  currentSortValue: getCurrentSortValue(state),
  userEmail: getUserEmail(state),
  isLoginError: getLoginStatus(state),
  authorizationStatus: getAuthorisationStatus(state),
});


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
  login(userData) {
    dispatch(UserOperation.login(userData));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
