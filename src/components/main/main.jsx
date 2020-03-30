import React from "react";
import PropTypes from "prop-types";
import CitiesList from "../cities-list/cities-list.jsx";
import OfferContainer from "../offer-container/offer-container.jsx";
import withHover from "../../hocs/with-hover/with-hover.jsx";
import EmptyScreen from "../offer-empty-screen/offer-empty-screen.jsx";

const OfferContainerWrapped = withHover(OfferContainer);

const Main = (props) => {

  const {
    offerList,
    cities,
    onBookmarkClick,
    onCityClick,
    currentCity,
    currentSortValue,
    onSortTypeClick,
    userEmail,
  } = props;

  const offerCount = offerList.length;

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
          {offerCount > 0 ?
            (<OfferContainerWrapped
              offerList={offerList}
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
};

Main.propTypes = {
  offerList: PropTypes.array.isRequired,
  onBookmarkClick: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
  onCityClick: PropTypes.func.isRequired,
  currentCity: PropTypes.string.isRequired,
  currentSortValue: PropTypes.string.isRequired,
  onSortTypeClick: PropTypes.func.isRequired,
  userEmail: PropTypes.string,
};

export default Main;
