<template>
  <nav id="nav" class="navbar navbar-expand-lg shadow rounded">
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
      <svg width="1em" height="1em" style="color:#343A40; " viewBox="0 0 16 16" class="bi bi-justify" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
      </svg>
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
      <form class="form-inline my-2 my-lg-0 " v-if="this.path === '/countries'">
        <v-select
                class="mx-auto"
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
          params: { countryCode: this.selected.CountryCode }
        });
      }
    }
  },
  created() {
    this.path = this.$router.currentRoute.fullPath;
  }
};
</script>

<style lang="scss">
  @import "~vue-select/src/scss/global/variables";
  @import "../style";


#nav {
  background-color: $background-color-secondary;
}

#nav a {
  font-weight: bold;
  color: $primary-color;

}

#nav a.router-link-exact-active {
  color: $secondary-color;
  transform: scale(1.2);
  margin-left: 5px;
}

.vs__search{
  color: $items-color;
  text-transform: lowercase;
  opacity: 0.5;
  cursor: pointer;
  }

  .v-select .vs__dropdown-toggle,
  .v-select .vs__dropdown-menu {
    background: $background-color-items;
    border: none;
    text-transform: lowercase;
  }


  .style-chooser .vs__clear,
  .style-chooser .vs__open-indicator {
    fill: #394066;
  }

  .navbar-toggler{
    background-color: $background-color-items;

  }
  .navbar-toggler-icon{
    color: $items-color;
  }
</style>
