import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import OfferList from "./offer-list";

const offerList = [
  {
    id: 1,
    price: `60`,
    rating: 3.3,
    description: `Wood and stone place`,
    type: `Private room`,
    coordinate: [52.3909553943508, 4.85309666406198],
    location: {
      city: `Amsterdam`
    },
    reviews: [
      {
        name: `Max`,
        review: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`
      }
    ]
  }, {
    id: 2,
    price: `130`,
    rating: 4.3,
    description: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
    coordinate: [52.369553943508, 4.85309666406198],
    location: {
      city: `Amsterdam`
    },
    reviews: [
      {
        name: `Angelina`,
        review: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
      }
    ]
  }
];

const currentSortValue = `Popular`;

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should bookmark button be pressed`, () => {
  const onBookmarkClick = jest.fn();

  const onHoverActiveMapPin = jest.fn();
  const onHoverDisableMapPin = jest.fn();
  const onHoverResetMapPin = jest.fn();

  const mainScreen = shallow(
      <OfferList
        offerList={offerList}
        onBookmarkClick={onBookmarkClick}

        currentSortValue={currentSortValue}

        onHoverActiveMapPin={onHoverActiveMapPin}
        onHoverDisableMapPin={onHoverDisableMapPin}
        onHoverResetMapPin={onHoverResetMapPin}
      />
  );

  const bookmarkButtons = mainScreen.find(`place-card__bookmark-button`);

  bookmarkButtons.forEach((bookmarkButton) => {
    bookmarkButton.props().onClick();
  });

  expect(onBookmarkClick.mock.calls.length).toBe(bookmarkButtons.length);
});
