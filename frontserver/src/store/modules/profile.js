import { fetchProfile, fetchMyProfile } from '@/api/user/profile';

export default {
  state: {
    profile: {},
  },
  mutations: {
    GET_PROFILE(state, profile) {
      state.profile = profile;
    },
  },
  actions: {
    getProfile(context, payload) {
      const user_id = payload.user_id
      fetchProfile({ user_id })
        .then((res) => {
          // console.log(res, context)
          context.commit('GET_PROFILE', res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getMyProfile(context) {
      fetchMyProfile()
        .then((res) => {
          // console.log(res, context)
          context.commit('GET_PROFILE', res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
