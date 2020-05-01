<template>
  <div class="container-fluid">
    <h4 class="card-title">{{ country['Country'] }}</h4>
    <country-flag :country="country['CountryCode']"></country-flag>
    <div class="container">
      <div class="row">
        <InfoCountry :country="country"></InfoCountry>
        <CountryPieChart :country="country"></CountryPieChart>
      </div>
    </div>
  </div>
</template>

<script>
  import {  mapActions } from "vuex";
import InfoCountry from "../components/InfoCountry";
import CountryPieChart from "../components/CountryPieChart";
export default {
  name: "CountryShow",
  props: ["countryCode"],
  components: {
    InfoCountry,
    CountryPieChart
  },
  computed: {
    country() {
      return this.$store.getters['countries/getCountryByCode'](this.countryCode);
    }
  },
  created() {
    this.fetchAllCases();
  },
  methods: {
    ...mapActions("request", ["fetchAllCases"])
  }
};
</script>

<style scoped></style>
