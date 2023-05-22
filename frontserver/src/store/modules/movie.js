import { fetchRecentMovies, fetchDetailMovie } from '@/api/movie/index.js';

export default {
  state: {
    recentmovies: [],
    movie: null,
  },
  mutations: {
    GET_RECENT_MOVIES(state, movies) {
      state.recentmovies = movies;
    },
    GET_DETAIL_MOVIE(state, movie) {
      state.movie = movie;
    },
  },
  actions: {
    getMovies(context) {
      fetchRecentMovies()
        .then((res) => {
          // console.log(res, context)
          context.commit('GET_RECENT_MOVIES', res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getMovies(context, payload) {
      const movie_id = payload.movie_id
      fetchDetailMovie({ movie_id })
        .then((res) => {
          context.commit('GET_DETAIL_MOVIE', res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
