<template>
  <div>
    <h1>게시글 수정</h1>
    <form @submit.prevent="putPost">
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
