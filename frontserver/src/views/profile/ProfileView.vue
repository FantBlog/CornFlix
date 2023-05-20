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
      const user_id = this.$route.params.id
      const payload = { user_id }
      this.$store.dispatch('getProfile', payload)
    }
  },
}
</script>
  
<style scoped></style>