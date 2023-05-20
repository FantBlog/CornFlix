<template>
  <div class="container-lg p-0">
    <UserProfileTitle />
    <UserLikeMovies />
  </div>
</template>
  
<script>
import UserProfileTitle from '@/components/profile/UserProfileTitle'
import UserLikeMovies from '@/components/profile/UserLikeMovies'

export default {
  props: ['username'],
  components: {
    UserProfileTitle,
    UserLikeMovies
  },
  created() {
    this.getProfile()
  },
  methods: {
    getProfile() {
      this.$store.dispatch('getMyProfile')
    }
  },
}
</script>
  
<style scoped></style>