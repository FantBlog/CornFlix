<template>
  <div>

    <input type="text" v-model="comment_content">
    <button @click="createComment">[댓글 작성]</button>

    <div>
      <p>댓글 개수 : {{ post.comment_count }}</p>
      <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
        더보기
      </button>
    </div>
    <div class="collapse " id="collapseExample">
      <div class="card card-body bg-dark">
        <ul>
          <li v-for="comment in post.comment_set" :key="comment.id">
            <CommentDetail :comment="comment"/>
          </li>
        </ul> 
      </div>
    </div>

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
