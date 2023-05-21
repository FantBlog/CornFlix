<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    <HeaderLayout />
    <router-view class="flex-fill" />
    <FooterLayout />
  </div>
</template>

<script>
import HeaderLayout from '@/layout/HeaderLayout.vue'
import FooterLayout from '@/layout/FooterLayout.vue'

export default {
  components: {
    HeaderLayout,
    FooterLayout,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(0, 0, 0);
  /* color: rgb(230, 230, 230); */
}
</style>
