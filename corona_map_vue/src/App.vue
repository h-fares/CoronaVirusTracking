<template>
  <div id="app" class="container-fluid main-container">
    <nav-bar></nav-bar>
    <router-view />
    <main-footer></main-footer>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import MainFooter from "./components/MainFooter";
export default {
  components: {
    NavBar,
    MainFooter
  }
};
</script>

<style>
html,
body {
  height: 100%;
  position: relative;
}
* {
  box-sizing: border-box;
}
*:before,
*:after {
  box-sizing: border-box;
}
.main-container {
  min-height: 100vh; /* will cover the 100% of viewport */
  overflow: hidden;
  display: block;
  position: relative;
  padding-bottom: 100px; /* height of your footer */
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
