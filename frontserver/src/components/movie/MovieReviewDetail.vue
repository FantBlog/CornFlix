<template>
    <div>
        <p>1</p>
    <div v-if="modifycomment">
      <p>{{ comment.content }}
        <button @click="setmodify">[리뷰 수정]</button>
        <button @click="deleteComment(comment.id)">[리뷰 삭제]</button>
      </p>
    </div>
    <div v-else>
      <input type="text" v-model="comment_content">
      <button @click="setmodify">[취소]</button>
      <button @click="putComment(comment.id)">[완료]</button>
    </div>
    </div>

  </template>
  
  <script>
  export default {
    name: 'DetailView',
    props: {
      comment:Object,
    },
    data() {
      return {
        comment_content: '',
        modifycomment:true,
      }
    },
    methods: {
      putComment(comment_id) {
        const content = this.comment_content
        const payload = {comment_id, content}
        this.$store.dispatch('putComment', payload)
      },
      deleteComment(comment_id) {
        const payload = {comment_id}
        this.$store.dispatch('deleteComment', payload)
      },
      setmodify() {
        this.modifycomment = !this.modifycomment
      }
    }
  }
  </script>
  