import { fetchRecentMovies, fetchDetailMovie, fetchRecommendMovies, fetchRelateMovies, fetchGenreMovies, fetchTypeMovies, fetchLikeMovies } from '@/api/movie/index.js';

export default {
  state: {
    recentmovies: [],
    recommendmovies: [],
    relatemovies: [],
    typemovies: [],
    movie: null,
    islike: false,
  },
  mutations: {
    GET_RECENT_MOVIES(state, movies) { // 최신 영화 리스트 
      state.recentmovies = movies
    },
    GET_RECOMMEND_MOVIES(state, movies) { // 추천 영화 리스트
      state.recommendmovies = movies
    },
    GET_TYPE_MOVIE(state, movies) { // 특정 장르 영화 리스트
      state.typemovies = movies
    },
    GET_DETAIL_MOVIE(state, movie) { // 영화 디테일
      state.movie = movie
    },
    GET_RELATE_MOVIE(state, movies) { // 특정 영화 관련 영화
      state.relatemovies = movies
    },
    GET_MOVIE(state, movie){ // 영화 좋아요
      state.movie = movie
      const like_users = movie.like_users
      if (like_users === undefined) state.islike = false
      state.islike = false

      like_users.forEach((user) => {
        if (user.username == this.state.user.username) {
          state.islike = true
        }
      })
    },
  },
  actions: {
    getRecentMovies(context, payload) { // 최신 영화 리스트 
      fetchRecentMovies(payload)
        .then((res) => {
          context.commit('GET_RECENT_MOVIES', res.data);
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getRecommendMovies(context, payload) { // 추천 영화 리스트
      fetchRecommendMovies(payload)
        .then((res) => {
          context.commit('GET_RECOMMEND_MOVIES', res.data);
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getGenreMovies(context, payload) { // 특정 장르 영화 리스트
      fetchGenreMovies(payload)
        .then((res) => {
          context.commit('GET_TYPE_MOVIE', res.data)
        })
        .catch((err) => {
          console.log(err)
        });
    },
    getTypeMovies(context, payload) { // 특정 장르 영화 리스트
      fetchTypeMovies(payload)
        .then((res) => {
          context.commit('GET_TYPE_MOVIE', res.data)
        })
        .catch((err) => {
          console.log(err)
        });
    },
    getDetailMovie(context, payload) { // 영화 디테일
      fetchDetailMovie(payload)
        .then((res) => {
          context.commit('GET_DETAIL_MOVIE', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getRelateMovie(context, payload) { // 특정 영화 관련 영화
      fetchRelateMovies(payload)
        .then((res) => {
          context.commit('GET_RELATE_MOVIE', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    likeMovie(context, payload) { // 영화 좋아요
      const movie_id = payload.movie_id
      fetchLikeMovies({ movie_id })
        .then((res) => {
          // console.log(res.data)
          context.commit('GET_MOVIE', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
