<template>
  <div class="row">
    <div class="col">
      <p>{{ post.id }}</p>
    </div>
    <div class="col">
      <p>{{ post.title }}</p>
    </div>
    <div class="col">
      <p>작성시간 : {{ post.created_at }}</p>
    </div>
  </div>
</template>
  
<script>

export default {
  props: {
    post: Object
  }
}
</script>
  
<style scoped></style>