<template>
  <div>
    <router-link :to="{
      name: 'DetailPostView',
      params: {id: post.id }}">
      <div class="post-list-item">
        <h1>{{ post.title }}</h1>
        <p>{{ post.content }}</p>
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
  color:white; 
  text-align:center; 
}
.post-list-item:hover { 
  /* border:3px solid white;  */
  background-color: rgb(43, 43, 43);
  /* margin:-3px;  */
  border-radius:5px; 
}

</style>
