<template>
  <div class="col">
    <div class="card">
      <img :src=movie?.poster_path class="card-img-top" alt="...">
      <div class="card-body">{{ movie?.title }}</div>
    </div>
  </div>
</template>
  
<script>

export default {
  props: {
    movie: Object
  }
}
</script>
  
<style scoped></style>