import * as types from './actionTypes';
import fetchMovies from '../../services/boilerData';
import { fetchDiscoverMovies } from '../../services/tmdb';

export function fetchMoviesAction() {
  return async function(dispatch, getState) {
    try {
      dispatch({type: types.FETCH_MOVIES_LOADING});
      const movies = await fetchDiscoverMovies();
      dispatch({type: types.FETCH_MOVIES_LOADED, movies})

    } catch (err) {
      dispatch({type: types.FETCH_MOVIES_FAILED, err})
    }
  }
}

export function movieInteraction(movie, userDidLike) {
  return async function(dispatch, getState) {
    dispatch({type: types.MOVIE_INTERACTED, movie, userDidLike});
  }
}
