import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CommentSection from "./offer-review-form.jsx";

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
    imgSrc: [`img/picture1.jpg`, `img/picture2.jpg`],
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
    imgSrc: [`img/picture3.jpg`, `img/picture4.jpg`],
    reviews: [
      {
        name: `Angelina`,
        review: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
      }
    ]
  }
];


Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should bookmark button be pressed`, () => {

  const onReviewSubmit = jest.fn();
  const onInputChange = jest.fn();
  const onFormReset = jest.fn();

  const mainScreen = shallow(
      <CommentSection
        id={offerList[0].id}
        onReviewSubmit={onReviewSubmit}
        isSending={false}
        isError={false}
        review={offerList[0].reviews[0].review}
        rating={offerList[0].rating}
        onInputChange={onInputChange}
        onFormReset={onFormReset}
      />
  );

  const onInputChangeInput = mainScreen.find(`form__rating-input`);

  onInputChangeInput.forEach((ChangeInput) => {
    ChangeInput.props().onClick();
  });

  expect(onInputChange.mock.calls.length).toBe(onInputChangeInput.length);
});
