<template>
  <div>
    <h1 class="text-start">게시글</h1>
    <div>
      <PostListItem 
      v-for="post in posts" 
      :key="post.id" 
      :post="post"
      />
    </div>
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
