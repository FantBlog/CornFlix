import { fetchProfile, fetchReview } from '@/api/user/profile';

export default {
  state: {
    profile: {},
  },
  mutations: {
    GET_PROFILE(state, profile) {
      state.profile = profile;
    },
    GET_REVIEW(state, review) {
      state.review = review;
    },
  },
  actions: {
    getProfile(context, payload) {
      const user_name = payload.user_name
      fetchProfile({ user_name })
        .then((res) => {
          // console.log(res, context)
          context.commit('GET_PROFILE', res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getReview(context, payload) {
      const user_name = payload.user_name
      fetchReview({ user_name })
        .then((res) => {
          // console.log(res, context)
          context.commit('GET_REVIEW', res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};