<template>
  <div class="container">
    <br>
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