import Vue from 'vue';
import Vuex from 'vuex';

import createPersistedState from 'vuex-persistedstate';

import userModule from '@/store/modules/user.js';
import movieModule from '@/store/modules/movie.js';
import communityModule from '@/store/modules/community.js';

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
    community: communityModule,
  },
});
