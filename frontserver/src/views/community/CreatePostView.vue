<template>
  <div>
    <h1>게시글 작성</h1>
    <form @submit.prevent="createPost">
      <label for="title">제목 : </label>
      <input type="text" id="title" v-model.trim="title"><br>
      <label for="content">내용 : </label>
      <textarea id="content" cols="30" rows="10" v-model="content"></textarea><br>
      <input type="submit" id="submit">
    </form>
  </div>
</template>

<script>

export default {
  name: 'CreateView',
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

<style>

</style>
