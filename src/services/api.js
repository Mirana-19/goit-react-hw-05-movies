import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'f26b3adbc85d2ddd2a653c090353d688',
    language: 'en-US',
  },
});

export function getTrendingMovies() {
  return instance.get('trending/all/week').then(({ data }) => data.results);
}

export function getMoviesByName(name) {
  return instance
    .get(`search/movie?query=${name}`)
    .then(({ data }) => data.results);
}

export function getMovieByID(id) {
  return instance.get(`movie/${id}`).then(({ data }) => data);
}

export function getMovieCast(id) {
  return instance.get(`movie/${id}/credits`).then(({ data }) => data.cast);
}

export function getMovieReviews(id) {
  return instance.get(`movie/${id}/reviews`).then(({ data }) => data.results);
}
