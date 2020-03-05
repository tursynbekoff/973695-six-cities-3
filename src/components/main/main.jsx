import React from "react";
import PropTypes from 'prop-types';
import OfferList from "../offer-list/offer-list.jsx";
import Map from "../map/map.jsx";
import CitiesList from "../cities-list/cities-list.jsx";
const Main = (props) => {
  const {
    offerList,
    cities,
    onBookmarkClick,
    onCityClick,
    currentCity
  } = props;

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
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">

                  </svg>
                </span>

              </form>
              <div className="cities__places-list places__list tabs__content">

                <OfferList
                  offerList={offerList}
                  onBookmarkClick={onBookmarkClick}
                />

              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  cities={cities}
                  currentCity={currentCity}
                  offerList={offerList}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  offerList: PropTypes.arrayOf(
      PropTypes.shape({
        price: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        coordinate: PropTypes.arrayOf(PropTypes.number.isRequired)
      })).isRequired,
  onBookmarkClick: PropTypes.func.isRequired,
  cities: PropTypes.array,
  onCityClick: PropTypes.func,
  currentCity: PropTypes.string
};

export default Main;
