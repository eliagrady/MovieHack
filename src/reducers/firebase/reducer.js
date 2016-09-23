import * as types from './actionTypes';
import Immutable from 'seamless-immutable';
import _ from 'lodash';

const initialState = Immutable({
  syncStatus: 'default',
  userRatings: {},
  userRatingsCollection: {}
});

export default function counter(state = initialState, action = {}) {
  switch (action.type) {
    case types.FIREBASE_MOVIES_FETCHING:
      return state.merge({
        syncStatus: 'fetching'
      });
    case types.FIREBASE_MOVIES_FETCHED:
      return state.merge({
        userRatings: action.userRatings,
        userRatingsCollection: action.userRatingsCollection,
        syncStatus: 'fetched'
      });
    case types.FIREBASE_MOVIES_FETCH_FAILED:
      return state.merge({
        syncStatus: 'failed'
      });
    case types.FIREBASE_MOVIES_SAVING:
      return state.merge({
        syncStatus: 'syncing'
      });
    case types.FIREBASE_MOVIES_SAVED:
      return state.merge({
        syncStatus: 'synced'
      });
    default:
      return state;
  }
}
