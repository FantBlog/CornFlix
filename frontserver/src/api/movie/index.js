import api from '@/api/base.js'

const fetchRecentMovies = function ({ page }) {
  return api({
    method: 'get',
    url: `/api/v1/movies/recent/${page}/`
  })
}

const fetchRecommendMovies = function ({ page }) {
  return api({
    method: 'get',
    url: `/api/v1/movies/recommend/${page}/`
  })
}

const fetchGenreMovies = function ({ genre_id, page }) {
  return api({
    method: 'get',
    url: `/api/v1/movies/genre/${genre_id}/${page}/`
  })
}

const fetchTypeMovies = function ({ type, page }) {
  return api({
    method: 'get',
    url: `/api/v1/movies/${type}/${page}/`
  })
}

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

export { fetchRecentMovies, fetchDetailMovie, fetchRecommendMovies, fetchRelateMovies, fetchGenreMovies, fetchTypeMovies };
