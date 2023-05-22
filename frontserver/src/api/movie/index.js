import api from '@/api/base.js';

const fetchRecentMovies = () => api.get('/api/v1/movies/recent/');

const fetchDetailMovie = function ({ movie_pk }) {
  return api({
    method: 'get',
    url: `/api/v1/movies/${movie_pk}/`
  });
};
export { fetchRecentMovies, fetchDetailMovie };
