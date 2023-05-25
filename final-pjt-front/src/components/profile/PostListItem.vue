<template>
  <div class="row" @click="goToDetailPage">
    <div class="post-list-item p-2">{{ post.title }}</div>
  </div>
</template>
  
<script>

export default {
  props: {
    post: Object
  },
  methods: {
    goToDetailPage() {
      this.$router.push({ name: 'DetailPostView', params: { id: this.post.id } })
    },
  },
}
</script>
  
<style scoped>
.post-list-item:hover{
  background-color: rgb(90, 90, 90);
  border-radius: 10px;
}
</style>