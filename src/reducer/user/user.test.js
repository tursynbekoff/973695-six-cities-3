import {reducer, ActionType, ActionCreator} from "../user/user.js";
import {AuthorizationStatus} from "../../const.js";


it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    authorizationStatus: AuthorizationStatus.UNAUTHORIZED,
    isLoginError: false,
    userEmail: ``,
  });
});

it(`Reducer should change authorizationStatus by a given value`, () => {
  expect(reducer({
    authorizationStatus: AuthorizationStatus.UNAUTHORIZED,
  }, {
    type: ActionType.AUTHORIZE_USER,
    payload: AuthorizationStatus.AUTHORIZED,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTHORIZED,
  });

  expect(reducer({
    authorizationStatus: AuthorizationStatus.AUTHORIZED,
  }, {
    type: ActionType.AUTHORIZE_USER,
    payload: AuthorizationStatus.UNAUTHORIZED,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.UNAUTHORIZED,
  });

  expect(reducer({
    authorizationStatus: AuthorizationStatus.AUTHORIZED,
  }, {
    type: ActionType.AUTHORIZE_USER,
    payload: AuthorizationStatus.AUTHORIZED,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTHORIZED,
  });

  expect(reducer({
    authorizationStatus: AuthorizationStatus.UNAUTHORIZED,
  }, {
    type: ActionType.AUTHORIZE_USER,
    payload: AuthorizationStatus.UNAUTHORIZED,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.UNAUTHORIZED,
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for require authorization returns correct action`, () => {
    expect(ActionCreator.authorizeUser(AuthorizationStatus.UNAUTHORIZED)).toEqual({
      type: ActionType.AUTHORIZE_USER,
      payload: AuthorizationStatus.UNAUTHORIZED,
    });

    expect(ActionCreator.authorizeUser(AuthorizationStatus.AUTHORIZED)).toEqual({
      type: ActionType.AUTHORIZE_USER,
      payload: AuthorizationStatus.AUTHORIZED,
    });
  });
});
