<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    <div v-if="showHeader">
      <HeaderLayout/><br><br>
    </div>
    <router-view class="flex-fill main-wrap" />
    <FooterLayout v-if="showHeader"/>
  </div>
</template>

<script>
import HeaderLayout from '@/layout/HeaderLayout.vue'
import FooterLayout from '@/layout/FooterLayout.vue'
import '@fortawesome/fontawesome-free/css/all.css'

export default {
  components: {
    HeaderLayout,
    FooterLayout,
  },
  computed: {
    showHeader() {
      return this.$store.state.showHeader
    }

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(255, 255, 255);
  /* color: rgb(230, 230, 230); */
  background-color: rgb(15, 15, 15);
  /* font-family: 'Noto Sans KR', sans-serif; */
  font-family: 'Gowun Batang', serif;
  font-size: 24px
}

.main-nav-wrap {
  margin: 70px auto 20px;
  max-width: 90%;
  box-sizing: border-box;
}

/* @font-face {
    font-family: 'SUITE-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/SUITE-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
} */
/* @font-face {
    font-family: 'NanumSquareNeo-Variable';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/NanumSquareNeo-Variable.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
} */
/* @import url(//fonts.googleapis.com/earlyaccess/nanummyeongjo.css);
.nanummyeongjo * {
 font-family: 'Nanum Myeongjo', serif;
} */

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Gowun+Batang&display=swap');
</style>
