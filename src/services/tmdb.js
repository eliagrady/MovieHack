import * as config from '../config';

const fetchDiscoverMovies = async function fetchDiscoverMovies() {
  const response = await fetch(`${config.TMDB_ENDPOINT}${config.TMDB_DISCOVER}${config.TMDB_API_KEY}`,{
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    }
  });
  if (!response.ok) {
    throw new Error("Couldn't fetch Discover Movies");
  }
  const json = await response.json();
  const movies = json.results;

  return movies;
}

export default fetchDiscoverMovies;
