<template>
  <div class="container-lg p-0">
    <div class="profile">
    <div class="header bg-warning"></div>
    <div class="content">
      <div style="display: flex; align-items: center;">
        <div class="img-container">
          <img :src="profileImage" alt="" class="img-thumbnail rounded-circle float-start" style="width: 120px; height: 120px;">
        </div>
        <div style="margin-left: 10px;">
          <h3 style="text-align: left;">{{ profile.username }}</h3>
          <p class="me-2 mb-0">팔로워: {{ profile.user_followers_count }} 팔로잉: {{ profile.followings_count }}</p>
        </div>
        <button v-if="!isCurrentUser" @click="toggleFollow" class="ms-auto btn btn-primary">
          {{ isFollowing ? '언팔로우' : '팔로우' }}
        </button>
        <button v-else @click="toggleProfile" class="ms-auto btn btn-primary">프로필 수정</button>
      </div>
      <p style="text-align: center;">{{ profile.content }}</p>
    </div>
  </div>



  </div>
</template>
  
<script>
export default {
  computed: {
    isCurrentUser() {
      return this.$route.params.username === this.$store.state.user.username
    },
    profile() {
      return this.$store.state.profile.profile
    },
    isFollowing() {
      return this.$store.state.profile.isFollowing
    },
    profileImage() {
      const IMG_URL = process.env.VUE_APP_IMG_URL
      if (this.profile.profile_image === null || this.profile.profile_image === undefined) return IMG_URL + '/media/free-icon-popcorn-3418886.png'
      return IMG_URL + this.profile.profile_image
    },
  },
  methods: {
    toggleFollow() {
      const user_name = this.$route.params.username
      const payload = { user_name }
      this.$store.dispatch('postFollow', payload)
    },
    toggleProfile() {
      this.$store.dispatch('toggleProfile')
    },
  }
}
</script>
  
<style scoped>
.profile {
  width: 100%;
}

.header {
  height: 120px;
}

.content {
  text-align: center;
  padding: 20px;
}

.img-container {
  position: relative;
}

.img-container>.img-thumbnail {
  border-color: transparent;
  position: relative;
  top: -75px;
}
</style>