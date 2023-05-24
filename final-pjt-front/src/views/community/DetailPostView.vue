<template>
  <div>
    <DetailPost :post="post"/>
    <br>
    <Comment :post="post"/>
  </div>
</template>

<script>
import DetailPost from '@/components/community/PostDetailView.vue'
import Comment from '@/components/community/CommentView.vue'

export default {
  name: 'DetailView',
  components: {
    DetailPost,
    Comment,
  },
  computed: {
    post() {
      return this.$store.state.post.post
    },
  },
  created() {
    this.getPostDetail()
  },
  methods: {
    getPostDetail() {
      const post_id = this.$route.params.id
      const payload = { post_id }
      this.$store.dispatch('getDetailPost', payload)
    },
  }
}
</script>
