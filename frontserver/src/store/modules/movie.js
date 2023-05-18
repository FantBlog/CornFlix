import { fetchRecentMovies } from '@/api/movie/index.js';

export default {
  state: {
    recentmovies: [],
  },
  mutations: {
    GET_RECENT_MOVIES(state, movies) {
      state.recentmovies = movies;
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
  },
};
