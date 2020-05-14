<template>
  <nav id="nav" class="navbar navbar-expand-lg navbar-light bg-light">
    <img
      src="../../public/coronaIcon.png"
      alt="Avatar"
      class="image float-left"
      style="height: 2em"
    />
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/countries"
            >Countries List</router-link
          >
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0" v-if="this.path === '/countries'">
        <v-select
          placeholder="Choose Country Please"
          style="width: 15rem;"
          label="Country"
          @input="submit()"
          :options="this.$store.state.countries.countriesSorted"
          v-model="selected"
        ></v-select>
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      path: "",
      selected: []
    };
  },
  watch: {
    $route() {
      this.path = this.$router.currentRoute.fullPath;
      this.selected = [];
    }
  },
  methods: {
    submit() {
      if (this.selected) {
        this.$router.push({
          name: "country-show",
          params: { countryCode: this.selected.FlagCode }
        });
      }
    }
  },
  created() {
    this.path = this.$router.currentRoute.fullPath;
  }
};
</script>

<style scoped>
#nav {
}

#nav a {
  font-weight: bold;
  color: #2a54aa;
}

#nav a.router-link-exact-active {
  color: rgb(99, 130, 193);
}
</style>
