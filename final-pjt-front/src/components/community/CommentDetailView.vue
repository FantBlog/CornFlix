<template>
  <div class="container">
    <div v-if="modifycomment">
      <div class="row dropdown">
        <p class="col text-start">{{ comment.content }}</p>
        <button v-if="comment.user.username === this.$store.state.user.username" type="button" class="btn btn-link dropdown col-1 text-end" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="fa-solid fa-ellipsis-vertical text-black"></i>
        </button>
        <ul class="dropdown-menu" style="width:auto;">
          <li><p class="dropdown-item" @click="setmodify">수정</p></li>
          <li><p class="dropdown-item" @click="deleteComment(comment.id)">삭제</p></li>
        </ul>       
      </div>
    </div>
    <div v-else>
      <div class="input-group mb-3">
  <input @keyup.enter="putComment(comment.id)" type="text" class="form-control" v-model="comment_content">
  <div class="input-group-append">
    <button class="btn btn-secondary" @click="setmodify">취소</button>
    <button class="btn btn-primary" @click="putComment(comment.id)">수정</button>
  </div>
</div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailView',
  props: {
    comment: Object,
  },
  data() {
    return {
      comment_content: '',
      modifycomment: true,
    };
  },
  created() {
    this.comment_content = this.comment.content;
  },
  methods: {
    putComment(comment_id) {
      const content = this.comment_content;
      const payload = { comment_id, content };
      this.$store.dispatch('putComment', payload);
      this.modifycomment = true; // 수정 완료 후 다시 읽기 모드로 전환
    },
    deleteComment(comment_id) {
      const payload = { comment_id };
      this.$store.dispatch('deleteComment', payload);
    },
    setmodify() {
      this.modifycomment = false;
    },
  },
};
</script>

<style>
.btn-link.dropdown:hover {
  background-color: rgb(230, 230, 230);
}
</style>
