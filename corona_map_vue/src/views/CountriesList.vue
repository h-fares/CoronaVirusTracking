<template>
  <div>
    <countries></countries>
    <div class="alert alert-danger align-content-center" role="alert">
      For you and your Family <strong>Please #StayHome</strong>
    </div>
  </div>
</template>

<script>
import Countries from "../components/Countries";
export default {
  name: "CountriesList",
  components: {
    Countries
  }
};
</script>

<style scoped></style>
