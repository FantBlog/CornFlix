<template>
  <div>
      <h1 class="list-wrap">게시글</h1>
    <div class="text-end">
      <button @click="createPost" class="btn btn-warning">글 작성하러 가기</button>
    </div>
    <br>
    <div>
      <PostListItem 
      v-for="post in posts" 
      :key="post.id" 
      :post="post"
      />
    </div>
  </div>
</template>

<script>
import PostListItem from '@/components/community/PostListItem.vue'
export default {
  name: 'RecentMovieList',
  components: {
    PostListItem,
  },
  computed: {
    posts() {
      return this.$store.state.post.posts;
    },
  },
  methods:{
    createPost(){
      this.$router.push({name: 'createPost'})
    }
  }
}
</script>

<style>
</style>
