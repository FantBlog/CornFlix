import api from '@/api/base.js';

const fetchRecentMovies = () => api.get('/api/v1/movies/recent/');

const fetchDetailMovie = function ({ movie_id }) {
  return api({
    method: 'get',
    url: `/api/v1/movies/${movie_id}/`
  });
};
export { fetchRecentMovies, fetchDetailMovie };
