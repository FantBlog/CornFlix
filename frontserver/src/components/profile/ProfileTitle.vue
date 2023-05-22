<template>
  <div class="container-lg p-0">
    <div class="profile">
      <div class="header bg-warning">
        <!-- 배경색 선택 가능하도록... -->
      </div>
      <div class="content">
        <div class="img-container">
          <img :src="profileImage" alt="" class="img-thumbnail rounded-circle float-start"
            style="width: 120px; height: 120px;">
          <div id="follow" class="d-flex align-items-center justify-content-between">
            <p class="me-2 mb-0">팔로워: {{ profile.user_followers_count }} 팔로잉: {{ profile.followings_count }}</p>
            <button v-if="!isCurrentUser" @click="toggleFollow" class="ms-auto btn btn-primary">
              {{ isFollowing ? '언팔로우' : '팔로우' }}
            </button>
            <button v-else>
              <a href="https://getbootstrap.kr/docs/5.2/components/dropdowns/">프로필 수정
                드롭박스</a>
              <button @click="toggleProfile">[프로필 수정]</button>
              <br>
              <a href="https://getbootstrap.kr/docs/5.2/components/collapse/">리뷰 토글?</a>
            </button>
          </div>
        </div>
        <h3 style="text-align: center;">{{ profile.username }}</h3>
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
      const IMG_URL = process.env.VUE_APP_IMG_URL;
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