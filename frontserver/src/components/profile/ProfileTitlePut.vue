<template>
  <div>
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
                <a
                  href="https://getbootstrap.kr/docs/5.2/components/dropdowns/">프로필 수정
                드롭박스</a>
                <button @click="toggleProfile">[프로필 수정]</button>
                <br>
                <a
                  href="https://getbootstrap.kr/docs/5.2/components/collapse/">리뷰 토글?</a>
              </button>
            </div>
          </div>
          <h3 style="text-align: center;">{{ profile.username }}</h3>
          <p style="text-align: center;">프로필 소개 인가? </p>
        </div>
      </div>
    </div>
    <input type="text" v-model="content">
    <br>
    <input type="file" @change="handleFileUpload">
    <button @click="uploadImage">Upload</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedFile: null
    }
  },
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
  },
  methods: {
    handleFileUpload(event) {
      this.selectedFile = event.target.files[0]
    },
    uploadImage() {
      const user_name = this.$route.params.username
      const image = this.selectedFile
      const content = this.content
      const payload = {
        user_name, content, image
      }
      
      if (!content) {
        alert('내용 입력해주세요')
        return
      }
      
      this.$store.dispatch('putProfile', payload)
    },
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
