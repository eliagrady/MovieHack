movies = require('./data.json').movies;



export default async function getMovies() {
  return await fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e05dd64e450edf78f2ad8d93fb0f1857&page=1').results;
}

/*
export default function getMovies() {
  return movies;
}
*/
