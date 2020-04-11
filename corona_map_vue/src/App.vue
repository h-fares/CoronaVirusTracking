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
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
