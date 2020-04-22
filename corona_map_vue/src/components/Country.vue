<template>
  <div>
    <div v-if="country['value'] > 0" class="col-3 mb-4 mt-2">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">{{ country["Country"] }}</h5>

          <country-flag :country="country['CountryCode']"></country-flag>

          <p class="card-text m-2">
            <strong style="color: #dd4b39">Confirmed Cases</strong>
          </p>
          <p class="card-text m-2">{{ country["value"] }}</p>
          <br />
          <p class="card-text m-2">
            Updated:
            {{ country.Date | moment("dddd, MMMM Do YYYY, h:mm:ss a") }}
          </p>
          <router-link
            :to="{
              name: 'country-show',
              params: { countryCode: country.CountryCode, country: country }
            }"
            >More Information</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["country"],
  name: "Country"
};
</script>

<style scoped></style>
