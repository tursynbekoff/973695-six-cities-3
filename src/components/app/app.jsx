import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import Details from "../offer-details/offer-details.jsx";
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";

class App extends PureComponent {

  _renderMainScreen() {

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
          onHoverActiveMapPin={this.props.onHoverActiveMapPin}
          activeMapPin={this.props.activeMapPin}
          onHoverDisableMapPin={this.props.onHoverDisableMapPin}
          disabledMapPin={this.props.disabledMapPin}
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
      />
    );
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderMainScreen()}
          </Route>
          <Route >
            {this._renderDetailScreen(this.props.offerScreen)}
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
  offerScreen: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  currentSortValue: PropTypes.string.isRequired,
  onSortTypeClick: PropTypes.func.isRequired,
  onHoverActiveMapPin: PropTypes.func.isRequired,
  activeMapPin: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]).isRequired,
  onHoverDisableMapPin: PropTypes.func.isRequired,
  disabledMapPin: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]).isRequired,
};

const mapStateToProps = (state) => ({
  currentCity: state.currentCity,
  offers: state.offers,
  currentOffers: state.currentOffers,
  cities: state.cities,
  offerScreen: state.offerScreen,
  currentSortValue: state.currentSortValue,
  activeMapPin: state.activeMapPin,
  disabledMapPin: state.disabledMapPin,
});


const mapDispatchToProps = (dispatch) => ({
  onCityClick(evt, city) {
    evt.preventDefault();
    dispatch(ActionCreator.changeCity(city));
    dispatch(ActionCreator.getOffers(city));
  },
  onBookmarkClick(offerId) {
    dispatch(ActionCreator.changeOfferScreen(offerId));
  },
  onSortTypeClick(sortType) {
    dispatch(ActionCreator.changeSortType(sortType));
  },
  onHoverActiveMapPin(cardId) {
    dispatch(ActionCreator.activateMapPin(cardId));
  },
  onHoverDisableMapPin(cardId) {
    dispatch(ActionCreator.disableMapPin(cardId));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
