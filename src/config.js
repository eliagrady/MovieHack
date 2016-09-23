export const TMDB_ENDPOINT = "https://api.themoviedb.org/3/";
export const TMDB_DISCOVER = "discover/movie";
export const TMDB_API_KEY = "?api_key=e05dd64e450edf78f2ad8d93fb0f1857";
export const TMDB_POSTER_BASE = "https://image.tmdb.org/t/p/w370_and_h556_bestv2/";
export const TMDB_TRAILER_FUNC = (videoId) => `https://api.themoviedb.org/3/movie/${videoId}/videos${TMDB_API_KEY}`;
export const TMDB_DETAILS_FUNC = (videoId) => `https://api.themoviedb.org/3/movie/${videoId}${TMDB_API_KEY}&append_to_response=videos`;
