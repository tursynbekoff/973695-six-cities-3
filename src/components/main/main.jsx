import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import OfferList from "../offer-list/offer-list.jsx";
import Map from "../map/map.jsx";
import CitiesList from "../cities-list/cities-list.jsx";
import SortingVariants from "../sorting-variants/sorting-variants.jsx";
class Main extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false
    };

    this._handleToggleClick = this._handleToggleClick.bind(this);
  }

  _handleToggleClick() {
    this.setState({
      isActive: !this.state.isActive,
    });
  }

  render() {
    const {
      offerList,
      cities,
      onBookmarkClick,
      onCityClick,
      currentCity,
      currentSortValue,
      onSortTypeClick,
      onHoverActiveMapPin,
      onHoverDisableMapPin,
      activeMapPin,
      disabledMapPin,
      onHoverResetMapPin,
    } = this.props;

    const {isActive} = this.state;

    const placesStentence = `${offerList.length} ${(offerList.length === 1) ? `place` : `places` } to stay in ${currentCity}`;

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
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--index">
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
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{placesStentence}</b>
                <SortingVariants
                  currentSortValue={currentSortValue}
                  onSortTypeClick ={onSortTypeClick}
                  isActive={isActive}
                  onToggleClick={this._handleToggleClick}
                />
                <div className="cities__places-list places__list tabs__content">

                  <OfferList
                    offerList={offerList}
                    currentSortValue={currentSortValue}
                    onBookmarkClick={onBookmarkClick}
                    onHoverActiveMapPin={onHoverActiveMapPin}
                    onHoverDisableMapPin={onHoverDisableMapPin}
                    onHoverResetMapPin={onHoverResetMapPin}
                  />

                </div>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map
                    cities={cities}
                    currentCity={currentCity}
                    offerList={offerList}
                    activeMapPin={activeMapPin}
                    disabledMapPin={disabledMapPin}
                  />
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

Main.propTypes = {
  offerList: PropTypes.array.isRequired,
  onBookmarkClick: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
  onCityClick: PropTypes.func.isRequired,
  currentCity: PropTypes.string.isRequired,
  currentSortValue: PropTypes.string.isRequired,
  onSortTypeClick: PropTypes.func.isRequired,
  onHoverActiveMapPin: PropTypes.func.isRequired,
  activeMapPin: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]).isRequired,
  onHoverDisableMapPin: PropTypes.func.isRequired,
  disabledMapPin: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]).isRequired,
  onHoverResetMapPin: PropTypes.func.isRequired,
};

export default Main;
