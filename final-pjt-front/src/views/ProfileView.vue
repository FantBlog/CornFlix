<template>
  <div class="container-lg p-0">
    <ProfileTitle v-if="changeprofile" />
    <ProfileTitlePut v-else />
    <div class="container-lg p-0">
      <div class="wrap">
        <LikeMovieList :like_movies="profile.like_movies" />
        <ReviewList :reviews="profile.review_set" />
        <PostList :posts="profile.post_set" />
      </div>
    </div>
  </div>
</template>
  
<script>
import ProfileTitle from '@/components/profile/ProfileTitle'
import ProfileTitlePut from '@/components/profile/ProfileTitlePut'
import LikeMovieList from '@/components/profile/LikeMovieList'
import ReviewList from '@/components/profile/ReviewList'
import PostList from '@/components/profile/PostList'

export default {
  components: {
    ProfileTitle,
    ProfileTitlePut,
    LikeMovieList,
    ReviewList,
    PostList,
  },
  computed: {
    profile() {
      return this.$store.state.profile.profile
    },
    changeprofile() {
      return this.$store.state.profile.changeprofile
    },
  },
  created() {
    this.getProfile()
  },
  watch: {
    $route(to, from) {
      if (to.path !== from.path) this.getProfile()
    }
  },
  methods: {
    getProfile() {
      const user_name = this.$route.params.username
      const payload = { user_name }
      this.$store.dispatch('getProfile', payload)
    },
  },
}
</script>
  
<style scoped></style>