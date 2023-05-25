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
  },
  created() {
    this.getGenres()
  },
  methods: {
    getGenres() {
      this.$store.dispatch('getGenre')
    },
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

/* 리뷰, 댓글 */
/* 접혀있는 아코디언 스타일 */
.accordion-button:not(.collapsed) {
  background-color: #151515;
  color: white;
}
/* 열려있는 아코디언 스타일 */
.accordion-button.collapsed {
  background-color: black;
  color: white;
}

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Gowun+Batang&display=swap');
</style>
