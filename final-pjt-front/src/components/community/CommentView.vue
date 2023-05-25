<template>
  <div>
    <div class="accordion" id="comentAccordion">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            댓글 {{ post.comment_count }} 개
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#comentAccordion">
          <div class="row accordion-body">
            <div class="col mb-3">
              <div class="input-group">
                <input @keyup.enter="createComment" type="text" class="form-control custom-input" v-model="comment_content" placeholder="댓글 추가...">
                <button class="btn btn-primary" @click="createComment">댓글</button>
              </div>
            </div>
            <div class="mt-3">
              <div v-for="comment in post.comment_set" :key="comment.id">
                <CommentDetail :comment="comment"/>
              </div>
            </div>
          </div>
        </div>
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

<style scoped>
.custom-input:focus {
  box-shadow: none;
}
</style>