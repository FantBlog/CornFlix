<template>
  <div>
    <h1>{{ post.title }}</h1>
    <p>{{ post.content }}</p>
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
