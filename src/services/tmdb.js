import * as config from '../config';

export async function fetchDiscoverMovies() {
  console.error("Hello")
  const response = await fetch(`${config.TMDB_ENDPOINT}discover/movie?api_key=${config.TMDB_API_KEY}`,{
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
