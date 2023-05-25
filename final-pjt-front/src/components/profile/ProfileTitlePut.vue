<template>
  <div class="container-lg p-0">
    <div class="profile">
      <div class="header bg-warning">
        <!-- 배경색 선택 가능하도록... -->
      </div>
      <div class="content">
        <div class="img-container">
          <img :src="profileImage" alt="" class="img-thumbnail rounded-circle float-start"
            style="width: 120px;height: 120px;" v-if="!inputimage">
          <img :src="inputimage?.preview" class="img-thumbnail rounded-circle float-start"
              style="width: 120px; height: 120px;" v-else>
          <div class="image-upload">
            <label for="file-input" @change="handleFileUpload">
              <img src="@/assets/changeimage.png" class="img-thumbnail rounded-circle float-start"
                style="width: 120px; height: 120px;" />
            </label>

            <input id="file-input" type="file" style="visibility: hidden;" @change="handleFileUpload" />
          </div>
        </div>
        <div class="img-container">
          <div id="follow" class="d-flex align-items-center justify-content-between">
            <div class="ml-2">
              <h3 style="text-align: left;">{{ profile.username }}</h3>
              <p class="me-2 mb-0">팔로워: {{ profile.user_followers_count }} 팔로잉: {{ profile.followings_count }}</p>
            </div>
            <button v-if="!isCurrentUser" @click="toggleFollow" class="ms-auto btn btn-primary">
              {{ isFollowing ? '언팔로우' : '팔로우' }}
            </button>
            <button v-else @click="toggleProfile" class="ms-auto btn btn-primary">수정 취소</button>
          </div>
        </div>
        <input type="text" v-model="content">
        <button @click="uploadImage">[수정하기]</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedFile: null,
      content: "",
      inputimage: null,
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
    profileImage() {
      const IMG_URL = process.env.VUE_APP_IMG_URL
      if (this.profile.profile_image === null || this.profile.profile_image === undefined) return '@/assets/popcorn/err.png'
      return IMG_URL + this.profile.profile_image
    },
  },
  methods: {
    handleFileUpload(event) {
      this.selectedFile = event.target.files[0]
      this.inputimage = {
        file:event.target.files[0],
        preview: URL.createObjectURL(event.target.files[0])
      }
      console.log(this.inputimage.preview)
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

.image-upload {
  position: absolute;
  border-color: transparent;
  top: -75px;
  opacity: 0.5;
  /* 반투명한 배경색 */
  z-index: 1;
}
</style>