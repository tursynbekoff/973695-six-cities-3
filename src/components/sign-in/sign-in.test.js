import React from "react";
import renderer from "react-test-renderer";
import SignIn from "./sign-in.jsx";

const isLoginError = false;
const userEmail = `sample@yahoo.com`;

it(`Should Review render correctly`, () => {
  const onSubmit = jest.fn();

  const tree = renderer
    .create(
        <SignIn
          onSubmit={onSubmit}
          isLoginError={isLoginError}
          userEmail={userEmail}
        />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
