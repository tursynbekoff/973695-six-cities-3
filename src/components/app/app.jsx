import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import Details from "../offer-details/offer-details.jsx";
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = null;
    this.offer = null;
    this._handleHeaderClick = this._handleHeaderClick.bind(this);
  }

  _handleHeaderClick(id) {
    this.setState({
      value: id,
    });

    this.offer = this.props.currentOffers.find(
        (property) => property.id === +id
    );
  }

  _renderMainScreen() {
    return (
      <Main
        offerList={this.props.currentOffers}
        cities={this.props.cities}
        currentCity={this.props.currentCity}
        onCityClick={this.props.onCityClick}
        onBookmarkClick={this._handleHeaderClick}
      />
    );
  }

  _renderDetailScreen() {
    return (
      <Details
        offerList={this.props.currentOffers}
        cities={this.props.cities}
        currentCity={this.props.currentCity}
        offer={this.offer}
      />
    );
  }

  _renderApp() {
    if (this.state) {
      return this._renderDetailScreen();
    } else if (!this.state) {
      return this._renderMainScreen();
    }
    return this.state;
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/details/:id">
            <Details
              offer={this.offer}
            />
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
  currentCity: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  currentCity: state.currentCity,
  offers: state.offers,
  currentOffers: state.currentOffers,
  cities: state.cities,
});


const mapDispatchToProps = (dispatch) => ({
  onCityClick(evt, city) {
    evt.preventDefault();
    dispatch(ActionCreator.changeCity(city));
    dispatch(ActionCreator.getOffers(city));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
