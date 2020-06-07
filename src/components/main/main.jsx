import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import CitiesList from "../cities-list/cities-list.jsx";
import OfferContainer from "../offer-container/offer-container.jsx";
import withHover from "../../hocs/with-hover/with-hover.jsx";
import EmptyScreen from "../offer-empty-screen/offer-empty-screen.jsx";
import {ActionCreator} from "../../reducer/app/app.js";
import {ActionCreator as DataActionCreator} from "../../reducer/data/data.js";

import {connect} from "react-redux";

import {
  getLoginStatus,
  getUserEmail,
  getAuthorisationStatus,
} from "../../reducer/user/selectors.js";

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

const OfferContainerWrapped = withHover(OfferContainer);

class Main extends PureComponent {

  render() {
    const {currentOffers, offers, cities, onBookmarkClick, onCityClick, currentCity, currentSortValue, onSortTypeClick, userEmail} = this.props;

    const isOfferList = offers.length > 0;

    return (
      <div className="page page--gray page--main">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link header__logo-link--active">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">{userEmail}</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className={`page__main page__main--index `}>
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <CitiesList
                cities={cities}
                currentCity={currentCity}
                onCityClick={onCityClick}
              />
            </section>
          </div>
          <div className="cities">
            {isOfferList > 0 ?
              (<OfferContainerWrapped
                offerList={currentOffers}
                onBookmarkClick={onBookmarkClick}
                currentCity={currentCity}
                currentSortValue={currentSortValue}
                onSortTypeClick={onSortTypeClick}
              />) : (
                <EmptyScreen
                  currentCity={currentCity}
                />
              )
            }
          </div>
        </main>
      </div>
    );
  }
}
Main.propTypes = {
  currentOffers: PropTypes.array.isRequired,
  offers: PropTypes.array.isRequired,
  onBookmarkClick: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
  onCityClick: PropTypes.func.isRequired,
  currentCity: PropTypes.string.isRequired,
  currentSortValue: PropTypes.string.isRequired,
  onSortTypeClick: PropTypes.func.isRequired,
  userEmail: PropTypes.string,
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);
