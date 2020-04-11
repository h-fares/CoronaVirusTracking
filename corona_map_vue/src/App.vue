<template>
  <div id="app" class="container-fluid">
    <nav-bar></nav-bar>
    <router-view />
    <div class="card-footer text-muted">
      Developed by: Hani Fares
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
export default {
  components: {
    NavBar
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

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
