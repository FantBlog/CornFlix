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
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    logIn(event) {
      event.preventDefault();
      
      axios.post('/api/login', {
        username: this.username,
        password: this.password
      })
      .then(response => {
        // 로그인 성공 시 처리할 로직 작성
        console.log(response.data);
      })
      .catch(error => {
        // 로그인 실패 시 처리할 로직 작성
        console.error(error);
      });
    }
  }
}
</script>
