<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <corona-map></corona-map>
  </div>
</template>

<script>
  import CoronaMap from "../components/CoronaMap";
export default {
  name: "Home",
  components: {
    CoronaMap
  }
};
</script>
