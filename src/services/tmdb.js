import * as config from '../config';

export const fetchDiscoverMovies = async function fetchDiscoverMovies() {
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
};

export const fetchYouTubeTrailerUrl = async function(videoId) {
  const response = await fetch(`${config.TMDB_TRAILER_FUNC(videoId)}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    }
  });
  if (!response.ok) {
    throw new Error("Couldn't fetch Trailers");
  }
  const json = await response.json();
  let trailers = json.results;
  trailers = trailers.filter(video => {
    return video.site === 'YouTube';
  });
  let videoTrailerUrl;
  if(trailers.length > 0) {
    videoTrailerUrl = `https://www.youtube.com/watch?v=${trailers.key}`
  }
  return videoTrailerUrl;
};

export async function fetchVideoDetails(videoId) {
  const response = await fetch(`${config.TMDB_DETAILS_FUNC(videoId)}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    }
  });
  if (!response.ok) {
    throw new Error("Couldn't fetch Trailers");
  }
  return await response.json();

}
