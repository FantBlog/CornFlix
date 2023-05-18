<template>
  <div id="app">
    <HeaderLayout />
    <router-view/>
    <FooterLayout />
  </div>
</template>

<script>
import HeaderLayout from '@/layout/HeaderLayout.vue';
import FooterLayout from '@/layout/FooterLayout.vue';

export default {
  components: {
    HeaderLayout,
    FooterLayout,
  },
  data() {
    return{
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(230, 230, 230);
  min-height: 800px;
}

</style>
