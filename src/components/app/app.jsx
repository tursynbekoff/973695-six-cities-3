import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import Details from "../offer-details/offer-details.jsx";
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from "react-router-dom";


class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      step: -1
    };
  }

  _renderApp() {
    const {rentOptionsCount, offerList} = this.props;
    const {step} = this.state;

    if (step > -1) {
      return (
        <Details />
      );
    }

    return (
      <Main
        rentOptionsCount={rentOptionsCount}
        offerList={offerList}
        onBookmarkClick={() => {
          this.setState({
            step: 0
          });
        }}
      />
    );
  }

  render() {

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/offer">
            <Details />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

}

App.propTypes = {
  rentOptionsCount: PropTypes.number.isRequired,

  offerList: PropTypes.arrayOf(
      PropTypes.shape({
        price: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        coordinate: PropTypes.array.isRequired
      })).isRequired

};

export default App;
