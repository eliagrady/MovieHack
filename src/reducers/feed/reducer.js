import * as types from './actionTypes';
import Immutable from 'seamless-immutable';
import _ from 'lodash';

const initialState = Immutable({
  isLoading: false,
  movies: [],
  err: undefined,
});

export default function counter(state = initialState, action = {}) {
  switch (action.type) {
    case types.FETCH_MOVIES_LOADING:
      return state.merge(
        {
          isLoading: true,
        }
      );

    case types.FETCH_MOVIES_LOADED:
      return state.merge({
        movies: action.movies,
        isLoading: false,
      });

    case types.FETCH_MOVIES_FAILED:
      console.warn(action.err);
      return state.merge(
        {
          err: action.err,
          isLoading: false,
        }
      );

    case types.MOVIE_INTERACTED:
      const moviesClone = _.clone(state.movies);
      _.pull(moviesClone, action.movie);
      const userRatingsClone = _.clone(state.userRatings || {});
      userRatingsClone[action.movie] = action.userDidLike;
      return state.merge(
        {
          movies: moviesClone,
          userRatings: userRatingsClone
        }
      );

    default:
      return state;
  }
}
