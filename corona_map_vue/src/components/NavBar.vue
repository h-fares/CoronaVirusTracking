<template>
  <nav id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/countries">Countries List</router-link>
  </nav>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2a54aa;
}

#nav a.router-link-exact-active {
  color: rgb(99, 130, 193);
}
</style>
