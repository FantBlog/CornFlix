<template>
    <div>
      <span>header</span>
      <nav>
        <router-link :to="{ name: 'main' }">index</router-link> |
        <router-link :to="{ name: 'movies' }">Home</router-link> |
        <router-link :to="{ name: 'commu' }">Community</router-link> |
        <router-link :to="{ name: 'signup' }">SignUp</router-link> |
        <router-link :to="{ name: 'login' }">LogIn</router-link>
      </nav>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style></style>
  