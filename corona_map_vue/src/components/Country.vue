<template>
  <div>
    <router-link
      :to="{
        name: 'country-show',
        params: { countryCode: country.CountryCode }
      }"
      class="nav-link"
      style="color: #000000"
    >
      <div v-if="country['value'] > 0" class="col-3 mb-4 mt-2">
        <div class="card shadow p-3 mb-5 rounded" style="width: 19rem; height: 25rem;">
          <div class="card-body">
            <h5 class="card-title">{{ country["Country"] }}</h5>

            <country-flag :country="country['CountryCode']" size='big'></country-flag>

            <p class="card-text m-2">
              <strong style="color: #dd4b39">Confirmed Cases</strong>
            </p>
            <p class="card-text m-2" style="color: white">{{ country["value"] }}</p>
            <br />
            <p class="card-text m-2" style="color: white">
              Updated:
              {{ country.Date | moment("dddd, MMMM Do YYYY, h:mm:ss a") }}
            </p>
            <button type="button" class="btn info-btn"> More Information </button>

          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["country"],
  name: "Country"
};
</script>

<style scoped lang="scss">
  @import "../style";
  .card {
    background-color: $background-color-secondary;
  }
  .card-title{
    color: $secondary-color;
  }

  .info-btn{
    background-color: $background-color-items;
    color: $items-color;
  }

  .info-btn:hover{
    background-color: $background-color-secondary;
    color: $secondary-color;
    border-bottom: 2px solid $primary-color;
  }



</style>
