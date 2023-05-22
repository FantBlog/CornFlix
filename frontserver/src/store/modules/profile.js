import { fetchProfile, fetchFollow, fetchPutProfile } from '@/api/user/profile';

export default {
  state: {
    profile: {},
    isFollowing: false,
    changeprofile: true,
  },
  mutations: {
    GET_PROFILE(state, profile) {
      if (profile.username !== this.state.user.username) {
        const followers = profile.user_followers
        state.isFollowing = false
        if (followers !== undefined) {
          followers.forEach(user => {
            if (user.username == this.state.user.username) {
              state.isFollowing = true
            }
          })
        }
      }
      else state.isFollowing = false
      state.profile = profile
    },
    GET_REVIEW(state, reviews) {
      state.reviews = reviews
    },
    TOGGLE_PROFILE(state) {
      state.changeprofile = !state.changeprofile
    },
  },
  actions: {
    getProfile(context, payload) {
      const user_name = payload.user_name
      fetchProfile({ user_name })
        .then((res) => {
          // console.log(res.data)
          context.commit('GET_PROFILE', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    postFollow(context, payload) {
      const user_name = payload.user_name
      fetchFollow({ user_name })
        .then((res) => {
          // console.log(res.data)
          context.commit('GET_PROFILE', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    putProfile(context, payload) {
      const user_name = payload.user_name
      const image = payload.image
      const content = payload.content
      fetchPutProfile({ user_name, image, content })
        .then((res) => {
          console.log(res.data)
          // context.commit('GET_PROFILE', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    toggleProfile(context) {
      context.commit('TOGGLE_PROFILE')
    },
  },
}
