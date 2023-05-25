<template>
  <div id="mycommu" class="m-3">
    <hr>
    <h3 class="text-start">나의 게시글</h3>
    <!-- <p>게시글... (커뮤니티 더보기에서 내 게시글과 댓글 확인)</p> -->
    <div class="text-start m-4">
      <PostListItem v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>
  
<script>
import PostListItem from '@/components/profile/PostListItem';

export default {
  components: {
    PostListItem,
  },
  props: {
    posts: Array,
  }
}
</script>
  
<style scoped></style>