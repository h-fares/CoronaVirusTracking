<template>
  <div v-if="country['value'] > 0" class="col-3 mb-5">
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <p class="card-text m-2">
          <strong style="color: #dd4b39">All Confirmed Cases</strong>
        </p>
        <p class="card-text m-2">{{ country["value"] }}</p>
        <p class="card-text m-2">
          <strong style="color: rgb(124, 181, 236)">Active Cases</strong>
        </p>
        <p class="card-text m-2">
          {{
            country["value"] -
              country["TotalDeaths"] -
              country["TotalRecovered"]
          }}
        </p>
        <p class="card-text m-2"><strong>Deaths</strong></p>
        <p class="card-text m-2">{{ country["TotalDeaths"] }}</p>
        <p class="card-text m-2">
          <strong style="color: rgb(144, 237, 125)">Recovered</strong>
        </p>
        <p class="card-text m-2">{{ country["TotalRecovered"] }}</p>
        <h6 class="card-subtitle mb-2 text-muted">NEW</h6>
        <p class="card-text m-2">
          <strong style="color: #dd4b39">Confirmed Cases</strong>
        </p>
        <p class="card-text m-2">{{ country["NewConfirmed"] }}</p>
        <p class="card-text m-2"><strong>Death Cases</strong></p>
        <p class="card-text m-2">{{ country["NewDeaths"] }}</p>
        <p class="card-text m-2">
          <strong style="color: rgb(144, 237, 125)">Recovered Cases</strong>
        </p>
        <p class="card-text m-2">{{ country["TotalRecovered"] }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoCountry",
  props: ["country"]
};
</script>

<style scoped></style>
