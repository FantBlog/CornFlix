<template>
  <div class="post-box">
    <!-- <h1 class="mb-4">Detail</h1> -->
    <button @click="back" class="btn btn-primary mb-3">돌아가기</button>

    <p>이전글/다음글/목록... </p>
    <div class="post-detail">
      <h1 class="mb-3">{{ post?.title }}</h1>
      <p>글쓴이: {{ post?.user?.username }}</p>
      <p>{{ post?.created }}</p>
      <p>{{ post?.content }}</p>
      <!-- <p>수정시간: {{ post?.updated }}</p> -->
      <!-- 글 작성자 (추가사항: admin권한자) 가 아니면 삭제, 수정 버튼 안보이게 -->
      <hr>
      <p>
        <!-- <button class="heart btn" @click="like">{{ islike ? '♥' : '♡'}}</button> -->
        <button class="heart btn" @click="like">{{ islike ? '🍿' : '🌽'}}</button>
        {{ post?.like_users_count }}
      </p>
      <div class="btn-group btn-group-sm m-2" role="group" aria-label="Small button group">
        <button type="button" @click="putPost" class="btn btn-primary">수정</button>
        <button type="button" @click="deletePostDetail" class="btn btn-danger">삭제</button>
        <!-- 삭제 전에 정말 삭제하시겠습니까? 창 띄우기 -->
      </div>
    </div>
    <!-- <hr> -->
  </div>
</template>

<script>
export default {
  name: 'PostDetailView',
  props: {
    post: Object,
  },
  computed: {
    islike() {
      return this.$store.state.post.islike;
    },
  },
  methods: {
    deletePostDetail() {
      const post_id = this.$route.params.id;
      const payload = { post_id };
      this.$store.dispatch('deleteDetailPost', payload);
    },
    putPost() {
      const post_id = this.$route.params.id;
      this.$router.push({name:'PutPostView', params:{id:post_id}});
    },
    back() {
      this.$router.push({name:'commu'});
    },
    like() {
      const post_id = this.$route.params.id;
      const payload = { post_id };
      this.$store.dispatch('likePost', payload);
    },
  }
}
</script>

<style scoped>
.post-detail{
  border: 1px solid white;
  border-radius: 10px;
}
.heart {
  color: red;
}
</style>
