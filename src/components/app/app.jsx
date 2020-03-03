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

    this.state = {
      step: -1
    };

    this._handleHeaderClick = this._handleHeaderClick.bind(this);
  }

  _handleHeaderClick(id) {
    this.setState({
      value: id,
    });
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

  _renderDetailsScreen(id) {
    const offer = this.props.currentOffers[0].offers.find(
        (property) => property.id === +id
    );
    return offer ? (
      <Details
        offer={offer}
        location={this.props.currentOffers[0].location}
        offers={this.props.currentOffers[0].offers}
        onHeaderClick={this._handleHeaderClick}
      />
    ) : (
      <Details to="/" />
    );
  }

  render() {

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderMainScreen()}
          </Route>
          <Route exact path="/detail/:id"
            render={(routeProps) =>
              this._renderDetailsScreen(routeProps.match.params.id)
            }
          />
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
