<template>
  <div>
    <p>{{ movie.title }}</p>
    <!-- <iframe 
        :width="1024"
        :height="600"
        :src="`https://www.youtube.com/embed/${movie.youtube}?autoplay=1`"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe> -->
  </div>
</template>

<script>

export default {
  name: 'RecentMovieListItem',
  props: {
    movie: Object,
  }
};
</script>

<style>

</style>
