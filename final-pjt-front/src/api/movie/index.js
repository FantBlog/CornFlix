import api from '@/api/base.js'

const fetchRecentMovies = function ({ page }) {
  return api({
    method: 'get',
    url: `/movies/recent/${page}/`
  })
}

const fetchRecommendMovies = function ({ page }) {
  return api({
    method: 'get',
    url: `/movies/recommend/${page}/`
  })
}

const fetchGenreMovies = function ({ genre_id, page }) {
  return api({
    method: 'get',
    url: `/movies/genre/${genre_id}/${page}/`
  })
}

const fetchTypeMovies = function ({ type, page }) {
  return api({
    method: 'get',
    url: `/movies/${type}/${page}/`
  })
}

const fetchDetailMovie = function ({ movie_id }) {
  return api({
    method: 'get',
    url: `/movies/${movie_id}/`
  })
}

const fetchRelateMovies = function ({ movie_id }) {
  return api({
    method: 'get',
    url: `/movies/relate/${movie_id}/`
  })
}

const fetchLikeMovies = function ({ movie_id }) {
  return api({
    method: 'post',
    url: `/movies/${movie_id}/like/`,
  })
}

export { fetchRecentMovies, fetchDetailMovie, fetchRecommendMovies, fetchRelateMovies, fetchGenreMovies, fetchTypeMovies, fetchLikeMovies };
