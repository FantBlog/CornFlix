<template>
  <div class="container d-flex justify-content-center">
    <div class="col-lg-6">
      <h1>게시글 수정</h1>
      <form @submit.prevent="putPost" class="mt-4">
        <div class="mb-3">
          <input type="text" id="title" v-model.trim="title" class="form-control" value="this.content">
        </div>
        <div class="mb-3">
          <textarea id="content" cols="30" rows="10" v-model="content" class="form-control"></textarea>
        </div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-center">
          <button type="submit" class="btn btn-primary" :disabled="!title || !content">수정완료</button>
          <!-- <input type="submit" id="submit"> -->
        </div>        
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PutPostView',
  data() {
    return {
      title: null,
      content: null,
    }
  },
  methods: {
    putPost() {
      const post_id = this.$route.params.id
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
        post_id, title, content
      }

      this.$store.dispatch('putDetailPost', payload)
    }
  }
}
</script>

<style>

</style>
