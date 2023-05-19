<template>
  <div>
    <h1>Detail</h1>
    <p>글쓴이 : {{ post?.user?.username }}</p>
    <p>제목 : {{ post?.title }}</p>
    <p>내용 : {{ post?.content }}</p>
    <p>작성시간 : {{ post?.created }}</p>
    <p>수정시간 : {{ post?.updated }}</p>
    <!-- 글 작성자 (추가사항: admin권한자) 가 아니면 삭제, 수정 버튼 안보이게 -->
    <button @click="deletePostDetail">[삭제]</button>
    <button @click="putPost">[수정]</button>
    <button @click="back">[돌아가기]</button>
  </div>
</template>

<script>
export default {
  name: 'PostDetailView',
  props: {
    post:Object,
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
  }
}
</script>
