import * as types from './actionTypes';
import Immutable from 'seamless-immutable';
import _ from 'lodash';

const initialState = Immutable({
  isLoading: false,
  connected: false,
  failure: undefined,

  users: {},
});

export default function counter(state = initialState, action = {}) {
  switch (action.type) {
    case types.FIREBASE_CONNECT_LOADING:
      return state.merge({
        isLoading: true,
      });

    case types.FIREBASE_CONNECT_SUCCESS:
      return state.merge({
        isLoading: false,
        connected: true,
      });

    case types.FIREBASE_CONNECT_FAILURE:
      return state.merge({
        isLoading: false,
        failure: action.err,
      });

    case types.FIREBASE_DATA_CHANGED:
      return state.merge({
        users: action.users,
      });

    default:
      return state;
  }
}
