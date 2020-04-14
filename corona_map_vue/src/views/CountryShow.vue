<template>
  <div class="container-fluid">
    <h4 class="card-title">{{ country["Country"] }}</h4>
    <country-flag :country="country['CountryCode']"></country-flag>
    <div class="row">
      <InfoCountry :country="country"></InfoCountry>
      <CountryPieChart :country="country"></CountryPieChart>
    </div>
  </div>
</template>

<script>
import InfoCountry from "../components/InfoCountry";
import CountryPieChart from "../components/CountryPieChart";
export default {
  name: "CountryShow",
  props: ["countryCode", "country"],
  components: {
    InfoCountry,
    CountryPieChart
  }
};
</script>

<style scoped></style>
