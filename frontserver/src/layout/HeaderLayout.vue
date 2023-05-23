<template>
  <nav class="navbar navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
        <nav class="navbar navbar-dark bg-dark">
          <div class="container-fluid">
            <router-link :to="{ name: 'main' }" class="navbar-brand">
              <img src="@/assets/popcorn/logo.png" alt="Logo" height="40" class="d-inline-block align-text-top">
            </router-link>
          </div>
        </nav>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">CornFlix</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Profile
              </a>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li><router-link :to="{ name: 'profile', params: { username: username } }" class="dropdown-item">내 프로필</router-link></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li><router-link v-if="!isLogin" :to="{ name: 'signup' }" class="dropdown-item">Login</router-link></li>
                <li><router-link v-if="!isLogin" :to="{ name: 'login' }" class="dropdown-item">Signup</router-link></li>
                <li><router-link v-if="isLogin" :to="{ name: 'home' }" @click="logOut" class="dropdown-item">Logout</router-link></li>
              </ul>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'movies' }" class="nav-link active" aria-current="page">Movies</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'commu' }" class="nav-link">Community</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
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
