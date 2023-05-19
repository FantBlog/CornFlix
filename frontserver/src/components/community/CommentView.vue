<template>
  <div>
    <p>댓글 개수 : {{ post?.comment_count }}</p>
    <ul>
      <li v-for="comment in post?.comment_set" :key="comment.id">
        <CommentDetail :comment="comment"/>
      </li>
    </ul>
    <input type="text" v-model="comment_content">
    <button @click="createComment">[댓글 작성]</button>
  </div>
</template>

<script>
import CommentDetail from '@/components/community/CommentDetailView.vue'

export default {
  name: 'DetailView',
  components: {
    CommentDetail,
  },
  props: {
    post:Object,
  },
  data() {
    return {
      comment_content:'',
    }
  },
  methods: {
    createComment() {
      const content = this.comment_content
      const post_id = this.$route.params.id
      const payload = {post_id,content}
      this.$store.dispatch('createComment', payload)
    },
  }
}
</script>
