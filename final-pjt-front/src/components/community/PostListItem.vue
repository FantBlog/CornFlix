<template>
  <div>
    <h1>{{ post.title }}</h1>
    <p>{{ post.content }}</p>
    <router-link :to="{
      name: 'DetailPostView',
      params: {id: post.id }}">
      [DETAIL]
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

<style>

</style>
