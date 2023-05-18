<template>
  <div>
    <h1>로그인</h1>
    <form @submit="logIn">
      <label for="username">사용자 이름:</label>
      <input type="text" id="username" v-model="username" required>
      <br>
      <label for="password">비밀번호:</label>
      <input type="password" id="password" v-model="password" required>
      <br>
      <button type="submit">로그인</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    logIn(event) {
      event.preventDefault();
      
      const username = this.username
      const password = this.password

      const payload = {
        username, password
      }
      this.$store.dispatch('logIn', payload)
    }
  }
}
</script>
