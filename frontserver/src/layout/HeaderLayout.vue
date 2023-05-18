<template>
  <header class="header bg-dark ">
    <nav>
      <router-link :to="{ name: 'main' }">index</router-link> |
      <router-link :to="{ name: 'movies' }">Home</router-link> |
      <router-link :to="{ name: 'commu' }">Community</router-link> |
      <router-link :to="{ name: 'profile' }">Profile</router-link> |
      <router-link :to="{ name: 'signup' }">SignUp</router-link> |
      <router-link :to="{ name: 'login' }">LogIn</router-link>
    </nav>
  </header>
</template>
  
  <script>
  export default {};
  </script>
  
  <style></style>
  



<script>
export default {};
</script>

<style scoped>
  .header{
    height: 50px;
  }

  nav {
    padding: 15px;
  }

  nav a {
    font-weight: bold;
    color: rgb(230, 230, 230);
    text-decoration: none;
  }

  nav a.router-link-exact-active {
    color: #ffc107;
  }
  
</style>
