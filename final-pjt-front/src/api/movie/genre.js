import api from '@/api/base.js'


const fetchGenres = () => api.get('/movies/genre/')

export { fetchGenres };
