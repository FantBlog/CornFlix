import api from '@/api/base.js';

const fetchRecentMovies = () => api.get('/api/v1/movies/recent/');

export { fetchRecentMovies };
