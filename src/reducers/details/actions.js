import * as types from './actionTypes';
import { fetchVideoDetails } from '../../services/tmdb';

export function fetchMovieDetailsAction(movieId) {
  return async function(dispatch, getState) {
    try {
      dispatch({type: types.FETCH_MOVIE_DETAILS_LOADING});
      const details = await fetchVideoDetails(movieId);
      dispatch({type: types.FETCH_MOVIE_DETAILS_LOADED, details})

    } catch (err) {
      console.error(err)
      dispatch({type: types.FETCH_MOVIE_DETAILS_FAILED, err})
    }
  }
}
