import Vue from 'vue';
import Vuex from 'vuex';

import createPersistedState from 'vuex-persistedstate';

import userModule from '@/store/modules/user.js';
import movieModule from '@/store/modules/movie.js';
import postModule from '@/store/modules/post.js';
import commentModule from '@/store/modules/comment.js';

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
    post: postModule,
    comment: commentModule,
  },
});
