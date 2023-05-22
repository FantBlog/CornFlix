import { fetchProfile, fetchReview, fetchFollow } from '@/api/user/profile';

export default {
  state: {
    profile: {},
    isFollowing: false,
  },
  mutations: {
    GET_PROFILE(state, profile) {
      const followers = profile.user_followers
      state.isFollowing = false
      followers.forEach(user => {
        if (user.username == this.state.user.username) {
          state.isFollowing = true
        }
      })
      state.profile = profile;
    },
    GET_REVIEW(state, review) {
      state.review = review;
    }
  },
  actions: {
    getProfile(context, payload) {
      const user_name = payload.user_name
      fetchProfile({ user_name })
        .then((res) => {
          console.log(res.data)
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
    postFollow(context, payload) {
      const user_name = payload.user_name
      fetchFollow({ user_name })
        .then((res) => {
          // console.log(res.data)
          context.commit('GET_PROFILE', res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
