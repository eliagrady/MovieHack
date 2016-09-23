import * as types from './actionTypes';
import Immutable from 'seamless-immutable';
import _ from 'lodash';

const initialState = Immutable({
  isLoading: false,
  details: undefined,
  err: undefined,
});

export default function counter(state = initialState, action = {}) {
  switch (action.type) {
    case types.FETCH_MOVIE_DETAILS_LOADING:
      return state.merge(
        {
          isLoading: true,
        }
      );

    case types.FETCH_MOVIE_DETAILS_LOADED:
      return state.merge({
        details: action.details,
        isLoading: false,
      });

    case types.FETCH_MOVIE_DETAILS_FAILED:
      return state.merge(
        {
          err: action.err,
          isLoading: false,
        }
      );

    default:
      return state;
  }
}
