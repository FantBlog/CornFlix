<template>
  <div class="container d-flex justify-content-center">
    <div class="col-lg-6">
      <h1>게시글 작성</h1>
      <form @submit.prevent="createPost" class="mt-4">
        <div class="mb-3">
          <!-- <label for="title" class="form-label">제목:</label> -->
          <input type="text" id="title" v-model.trim="title" class="form-control" placeholder="제목을 입력해주세요">
        </div>
        <div class="mb-3">
          <!-- <label for="content" class="form-label">내용:</label> -->
          <textarea id="content" cols="30" rows="10" v-model="content" class="form-control" placeholder="내용을 입력해주세요"></textarea>
        </div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-center">
          <button type="submit" class="btn btn-primary" :disabled="!title || !content">작성완료</button>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  name: 'CreatePostView',
  data() {
    return {
      title: null,
      content: null,
    }
  },
  methods: {
    createPost() {
      const title = this.title
      const content = this.content

      if (!title) {
        alert('제목 입력해주세요')
        return
      } else if (!content){
        alert('내용 입력해주세요')
        return
      }
      
      const payload = {
        title, content
      }

      this.$store.dispatch('CreatePosts', payload)
      // 글 작성이후 글 있는곳으로 라우터 이동
    }
  }
}
</script>

<style scoped>
/* Custom styles for labels */
.form-control {
  font-size: 24px;
}
</style>
