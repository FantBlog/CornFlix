import { fetchRecentMovies, fetchDetailMovie, fetchRecommendMovies, fetchRelateMovies, fetchGenreMovies, fetchTypeMovies } from '@/api/movie/index.js';
import { fetchGenres } from '@/api/movie/genre.js'

export default {
  state: {
    genres: [],
    recentmovies: [],
    recommendmovies: [],
    relatemovies: [],
    typemovies: [],
    movie: null,
    movie_count: null,
  },
  mutations: {
    GET_RECENT_MOVIES(state, movies) { // 최신 영화 리스트 
      state.recentmovies = movies.movies
    },
    GET_RECOMMEND_MOVIES(state, movies) { // 추천 영화 리스트
      state.recommendmovies = movies.movies
    },
    GET_TYPE_MOVIE(state, movies) { // 특정 장르 영화 리스트
      state.typemovies = movies.movies
      state.movie_count = movies.total_length
    },
    GET_DETAIL_MOVIE(state, movie) { // 영화 디테일
      state.movie = movie
    },
    GET_RELATE_MOVIE(state, movies) { // 특정 영화 관련 영화
      state.relatemovies = movies
    },
    GET_GENRES(state, genres) { // 특정 영화 관련 영화
      state.genres = genres
    },
  },
  actions: {
    getRecentMovies(context, payload) { // 최신 영화 리스트 
      fetchRecentMovies(payload)
        .then((res) => {
          context.commit('GET_RECENT_MOVIES', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getRecommendMovies(context, payload) { // 추천 영화 리스트
      fetchRecommendMovies(payload)
        .then((res) => {
          context.commit('GET_RECOMMEND_MOVIES', res.data)
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
        })
    },
    getTypeMovies(context, payload) { // 특정 장르 영화 리스트
      fetchTypeMovies(payload)
        .then((res) => {
          console.log(res)
          context.commit('GET_TYPE_MOVIE', res.data);
        })
        .catch((err) => {
          console.log(err)
        })
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
    getGenre(context) {
      fetchGenres()
        .then((res) => context.commit('GET_GENRES', res.data))
    }
  },
};
