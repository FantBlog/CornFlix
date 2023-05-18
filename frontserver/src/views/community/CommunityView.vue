<template>
  <div>
    <h1>community</h1>
    <postList></postList>
  </div>
</template>

<script>
import postList from '@/components/community/PostList.vue'
export default {
  name: 'CommunityView',
  components: {
    postList,
  },
  computed:{
    isLogin() {
      return this.$store.getters.isLogin // 로그인 여부
    }
  },
  created() {
    this.getPosts()
  },
  methods: {
    getPosts() {
      this.$store.dispatch('getPosts')
    }
  },
}
</script>

<style>

</style>