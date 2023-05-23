<template>
  <div>
    <h1>Detail</h1>
    <router-link :to="{name: 'commu'}">뒤로가기</router-link>
    <button @click="back">[돌아가기]</button>

    <p>이전글/다음글/목록... </p>
    <h1>{{ post?.title }}</h1>
    <p>글쓴이 : {{ post?.user?.username }}</p>
    <hr>
    <p>내용 : {{ post?.content }}</p>
    <p>작성시간 : {{ post?.created }}</p>
    <!-- <p>수정시간 : {{ post?.updated }}</p> -->
    <!-- 글 작성자 (추가사항: admin권한자) 가 아니면 삭제, 수정 버튼 안보이게 -->
    <hr>
    <p>
      <!-- <button class="heart btn" @click="like">{{ islike ? '♥' : '♡'}}</button> -->
      <button class="heart btn" @click="like">{{ islike ? '🍿' : '🌽'}}</button>
      {{ post?.like_users_count }}
    </p>
    <div class="btn-group-vertical">
      <button @click="deletePostDetail">[삭제]</button>
      <button @click="putPost">[수정]</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostDetailView',
  props: {
    post:Object,
  }, 
  computed: {
    islike() {
      return this.$store.state.post.islike
    },
  },
  methods: {
    deletePostDetail() {
      const post_id = this.$route.params.id
      const payload = { post_id }
      this.$store.dispatch('deleteDetailPost', payload)
    },
    putPost() {
      const post_id = this.$route.params.id
      this.$router.push({name:'PutPostView', params:{id:post_id}})
    },
    back() {
      this.$router.push({name:'commu'})
    },
    like() {
      const post_id = this.$route.params.id
      const payload = { post_id }
      this.$store.dispatch('likePost', payload)
    },
  }
}
</script>

<style scoped>
.heart{
  color: red;
}
</style>