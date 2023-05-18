<template>
  <div>
    <h1>게시판</h1>
    <PostListItem 
    v-for="post in posts" 
    :key="post.id" 
    :post="post"
    />
    <button @click="createPost">
      [새글작성]
    </button>
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
      return this.$store.state.community.posts;
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
