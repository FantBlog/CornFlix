<template>
  <div class="background-container d-flex align-items-center justify-content-center mx-0">
    <h1 class="m-0">페이지를 찾을 수 없습니다</h1>
    <div class="text-center err-msg"></div>
    <router-link :to="{ name: 'main' }" class="logo position-absolute">
      <img src="@/assets/popcorn/logo.png" class="logoimage" alt="Logo" height="40">
    </router-link>
  </div>
</template>

<script>
export default {
  created() {
    this.toogleHeader()
  },
  destroyed() {
    this.toogleHeader()
  },
  methods: {
    toogleHeader() {
      this.$store.dispatch('toggleHeader')
    },
  }
}
</script>
<style scoped>
.background-container {
  background-image: url("~@/assets/popcorn/err.png");
  background-size: cover;
}
.err-msg{
  position: fixed;
  width: 100vw;
  height: 100vw;
  background-color: black;
  text-align: center;
  opacity: 0.3;
}
.logo{
  left: 10px;
  top: 10px;
}
.logo:hover {
  transform: scale(1.1);
  left: 10px;
  top: 10px;
}
.logoimage{
  filter: invert(0%) sepia(100%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);
}
</style>
