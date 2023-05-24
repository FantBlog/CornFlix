import Vue from 'vue';
import Vuex from 'vuex';

import createPersistedState from 'vuex-persistedstate';

import userModule from '@/store/modules/user.js';
import movieModule from '@/store/modules/movie.js';
import reviewModule from '@/store/modules/review.js';
import postModule from '@/store/modules/post.js';
import commentModule from '@/store/modules/comment.js';
import profileModule from '@/store/modules/profile.js';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      paths: ['user'],
    }),
  ],
  modules: {
    user: userModule,
    movie: movieModule,
    review: reviewModule,
    post: postModule,
    comment: commentModule,
    profile: profileModule,
  },
  state: {
    showHeader: true,
  },
  mutations: {
    TOGGLE_HEADER(state) {
      state.showHeader = !state.showHeader
    },
  },
  actions: {
    toggleHeader(context) {
      context.commit('TOGGLE_HEADER')
    }
  }
});
