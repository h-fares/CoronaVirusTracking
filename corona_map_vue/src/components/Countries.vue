<template>
  <div>
    <div class="pb-0 pt-3">
      <jw-pagination
        :items="countries.countries"
        @changePage="onChangePage"
        :pageSize="15"
      ></jw-pagination>
    </div>
    <div class="container">
      <div class="row">
        <country
          class="zoom"
          v-for="country in paginatedCountry"
          :key="country['Country']"
          :country="country"
        ></country>
      </div>
    </div>
    <svg  @click="scrollToTop" width="3em" height="6em" viewBox="0 0 16 16" class="bi goUp shadow bi-chevron-double-up mb-5 mr-5 float-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"/>
      <path fill-rule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
    </svg>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Country from "./Country";

export default {
  name: "Countries",
  components: {
    Country
  },
  created() {
    this.fetchAllCases();
  },
  computed: {
    ...mapState(["countries", "date", "global"])
  },
  methods: {
    onChangePage(pageOfItems) {
      // update page of items
      this.paginatedCountry = pageOfItems;
    },
    ...mapActions("request", ["fetchAllCases"]),
    scrollToTop() {
      window.scrollTo(0,0);
    }
  },
  data() {
    return {
      paginatedCountry: []
    };
  }
};
</script>

<style lang="scss">
  @import "../style";
  .pagination li.page-number.active a.page-link{
    background-color: $background-color-secondary;
    border-color: $background-color-secondary;
  }

  .pagination li.first.disabled a.page-link, .pagination li.last.disabled a.page-link ,.pagination li.previous.disabled a.page-link, .pagination li.next.disabled a.page-link{

    color: $items-color;
  }

  .pagination li a:hover{
    background-color: $secondary-color;
  }
  .pagination li a{
    background: $background-color-items;
    color: $items-color;
  }
  .goUp{
    cursor: pointer;
    border-radius: 20px;
    background-color: $background-color-secondary;
    color: $background-color-items;
  }
  .goUp:hover{
    background-color: $background-color-items;
    color: $primary-color;
  }
  .zoom {
    transition: transform 0.2s;
  }

  .zoom:hover {
    transform: scale(1.05);
  }
</style>
