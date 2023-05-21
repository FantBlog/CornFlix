<template>
  <div class="container-lg p-0">
    <div class="profile">
      <div class="header bg-warning">
        <!-- 배경색 선택 가능하도록... -->
      </div>
      <div class="content">
        <div class="img-container">
          <img src="@/assets/poster/poster1.jpg" alt="" class="img-thumbnail rounded-circle float-start"
            style="width: 120px; height: 120px;">
          <div id="follow" class="d-flex align-items-center">
            <p class="me-2 mb-0">팔로워: {{ profile.user_followers_count }}</p>
            <p class="me-2 mb-0">팔로잉: {{ profile.followings_count }}</p>
            <p>팔로우 기능 만들기...</p>
            <button v-if="!isCurrentUser" @click="toggleFollow" class="ms-auto btn btn-primary">
              {{ isFollowing ? '언팔로우' : '팔로우' }}
            </button>
            <button v-else>
              프로필 수정
              드롭박스 <a
                href="https://getbootstrap.kr/docs/5.2/components/dropdowns/">https://getbootstrap.kr/docs/5.2/components/dropdowns/</a>
              리뷰 토글? <a
                href="https://getbootstrap.kr/docs/5.2/components/collapse/">https://getbootstrap.kr/docs/5.2/components/collapse/</a>
            </button>
          </div>
        </div>
        <h3 style="text-align: center;">{{ profile.username }}</h3>
        <p style="text-align: center;">프로필 소개 인가? </p>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      isCurrentUser: false,
      isFollowing: false,
    }
  },
  computed: {
    profile() {
      return this.$store.state.profile.profile
    },
  },
  methods: {
    toggleFollow() {

    }
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