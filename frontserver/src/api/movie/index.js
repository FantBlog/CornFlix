import api from '@/api/base.js'

const fetchRecentMovies = () => api.get('/api/v1/movies/recent/')
const fetchRecommendMovies = () => api.get('/api/v1/movies/recommend/')

const fetchDetailMovie = function ({ movie_id }) {
  return api({
    method: 'get',
    url: `/api/v1/movies/${movie_id}/`
  })
}
const fetchRelateMovies = function ({ movie_id }) {
  return api({
    method: 'get',
    url: `/api/v1/movies/relate/${movie_id}/`
  })
}
const fetchGenreMovies = function ({ genre_id }) {
  return api({
    method: 'get',
    url: `/api/v1/movies/genre/${genre_id}/`
  })
}
export { fetchRecentMovies, fetchDetailMovie, fetchRecommendMovies, fetchRelateMovies, fetchGenreMovies };
