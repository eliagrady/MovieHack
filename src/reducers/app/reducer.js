import * as types from './actionTypes';
import Immutable from 'seamless-immutable';
import _ from 'lodash';

const initialState = Immutable({
  userId: undefined,
  isUserNew: undefined,
});

export default function counter(state = initialState, action = {}) {
  switch (action.type) {
    case types.APP_INITIALIZED:
      return state.merge({
        userId: action.userId,
        isUserNew: action.isUserNew,
      });

    default:
      return state;
  }
}
