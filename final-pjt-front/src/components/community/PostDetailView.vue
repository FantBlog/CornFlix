<template>
  <div class="post-box">
    <!-- <h1 class="mb-4">Detail</h1> -->
    <div class="row justify-content-between">
      <button @click="back" class="back btn btn-outline-dark col-1">〈</button>
      <div v-if="post.user.username === $store.state.user.username" class="btn-group btn-group-sm p-0 col-2" role="group" aria-label="Small button group">
        <button type="button" @click="putPost" class="btn btn-warning">수정</button>
        <button type="button" @click="deletePostDetail" class="btn btn-danger">삭제</button>
        <!-- 삭제 전에 정말 삭제하시겠습니까? 창 띄우기 -->
      </div>
    </div>
    <div class="post-detail">
      <h1 class="mb-3 ">{{ post?.title }}</h1>
      <div class="row">        
        <p class="post-username m-auto col-2 text-start">{{ post?.user?.username }}</p>
        <div class="col text-end">
          <!-- <p class="post-date">생성 : {{ post?.created }}</p> -->
          <!-- <p class="post-date">수정 : {{ post?.updated }}</p> -->
          <p class="post-date">{{ post?.created === post?.updated ? '생성 : ' + post?.created : '수정 : ' + post?.updated }}</p>
        </div>
      </div>
      <hr>
      <p class="post-content text-start">{{ post?.content }}</p>
      <!-- <p>수정시간: {{ post?.updated }}</p> -->
      <!-- 글 작성자 (추가사항: admin권한자) 가 아니면 삭제, 수정 버튼 안보이게 -->
      <hr>
      <p class="text-start">
        <button class="heart btn" @click="like">{{ islike ? '♥' : '♡'}}</button>
        <!-- <button class="heart btn" @click="like">{{ islike ? '🍿' : '🌽'}}</button> -->
        {{ post?.like_users_count }}
      </p>
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
      if (confirm("게시글을 삭제하시겠습니까?")){
        const post_id = this.$route.params.id;
        const payload = { post_id };
        this.$store.dispatch('deleteDetailPost', payload);
      }
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
  /* border: 1px solid white; */
  border-radius: 10px;
}
.post-content{
  min-height: 15vw;
  white-space: pre-line;
}
.post-date{
  font-size: small;
  margin: auto;
}
.btn{
  color: white;
}
.heart {
  color: red;
  width: 40px;
}
</style>
