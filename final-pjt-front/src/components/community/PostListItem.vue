<template>
  <div class="list-item-wrap">
    <hr>
    <router-link :to="{
      name: 'DetailPostView',
      params: {id: post.id }}">
      <div class="post-list-item">
        <h4 class="text-start">{{ post.title }}</h4>
        <p class="post-item-content text-start">{{ post.content }}</p>
      </div>
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'PostListItem',
  props: {
    post: Object,
  }
};
</script>

<style scoped>
a{
  text-decoration: none;
  color: white;
}

.post-list-item { 
  text-align:center; 
}
.post-list-item:hover { 
  /* border:3px solid white;  */
  background-color: rgb(43, 43, 43);
  /* margin:-3px;  */
  border-radius:5px; 
}
.post-item-content{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;  
  font-size: 18px;
}
</style>
