<template>
  <header class="header bg-dark fixed-top">
    <nav>
      <router-link :to="{ name: 'movies' }">
        <img class="icon" src="@/assets/popcorn/logo.png" alt="">
      </router-link>

      <router-link :to="{ name: 'main' }">index</router-link>
      <router-link :to="{ name: 'movies' }">Home</router-link>
      <router-link :to="{ name: 'commu' }">Community</router-link>
      <router-link :to="{ name: 'profile', params: { username: username } }">Profile</router-link>

      <router-link v-if="!isLogin" :to="{ name: 'signup' }">SignUp</router-link>
      <router-link v-if="!isLogin" :to="{ name: 'login' }">LogIn</router-link>
      <a href="">
        <button v-if="isLogin" type="submit" @click="logOut">로그아웃</button>
      </a>

      <!-- <a href="https://www.flaticon.com/kr/free-icons/" title="팝콘 아이콘">팝콘 아이콘  제작자: Freepik - Flaticon</a> -->
    </nav>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['isLogin']),
    username() {
      return this.$store.state.user.username
    }
  },
  methods: {
    logOut(event) {
      event.preventDefault();
      this.$store.dispatch('logOut')
    }
  },
};
</script>

<style scoped>
.header {
  height: 60px;
}

nav {
  padding: 5px;
}

nav a {
  font-weight: bold;
  color: rgb(230, 230, 230);
  text-decoration: none;
  padding: 6px;
}

nav a.router-link-exact-active {
  color: #ffc107;
}

.icon{
  height: 40px;
}
</style>
