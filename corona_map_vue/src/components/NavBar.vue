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
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Dropdown
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li class="nav-item">
          <a
            class="nav-link disabled"
            href="#"
            tabindex="-1"
            aria-disabled="true"
            >Disabled</a
          >
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0" v-if="this.path === '/countries'">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
      <dropdown
        class="form-inline my-2 my-lg-0"
        :options="this.$store.state.countries.countries"
        v-on:selected="validateSelection"
      >
      </dropdown>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      path: ""
    };
  },
  watch: {
    $route() {
      this.path = this.$router.currentRoute.fullPath;
    }
  },
  methods: {
    validateSelection(selected) {
      console.log(selected.CountryCode);
      this.$router.push({
        name: 'country-show',
        params: { countryCode: selected.CountryCode }
      });
    }
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
