<template>
  <div class="col">
    <div class="card">
      <img :src=review?.movie_poster_path class="card-img-top" alt="...">
      <div class="card-body">{{ review?.movie_title }}</div>
      <div class="card-body">{{ review?.title }}</div>
    </div>
  </div>
</template>
  
<script>

export default {
  props: {
    review: Object
  }
}
</script>
  
<style scoped></style>