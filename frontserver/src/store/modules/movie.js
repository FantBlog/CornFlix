import { fetchRecentMovies, fetchDetailMovie, fetchRecommendMovies, fetchRelateMovies } from '@/api/movie/index.js';

export default {
  state: {
    recentmovies: [],
    recommendmovies: [],
    relatemovies: [],
    movie: null,
  },
  mutations: {
    GET_RECENT_MOVIES(state, movies) {
      state.recentmovies = movies;
    },
    GET_RECOMMEND_MOVIES(state, movies) {
      state.recommendmovies = movies;
    },
    GET_RELATE_MOVIE(state, movies) {
      state.relatemovies = movies;
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
    getRecommendMovies(context) {
      fetchRecommendMovies()
        .then((res) => {
          // console.log(res, context)
          context.commit('GET_RECOMMEND_MOVIES', res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getDetailMovie(context, payload) {
      const movie_id = payload.movie_id
      fetchDetailMovie({ movie_id })
        .then((res) => {
          context.commit('GET_DETAIL_MOVIE', res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getRelateMovie(context, payload) {
      const movie_id = payload.movie_id
      fetchRelateMovies({ movie_id })
        .then((res) => {
          context.commit('GET_RELATE_MOVIE', res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
