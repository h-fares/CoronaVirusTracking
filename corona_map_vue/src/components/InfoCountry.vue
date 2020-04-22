<template>
  <div class="col">
    <div class="card mb-4 mt-4" style="width: 18rem;height: 25rem">
      <div class="card-body">
        <p class="card-text m-2">
          <span class="badge badge-danger" style="font-size:1em">All <strong>Confirmed Cases</strong> {{ country["value"] }} </span> <br><br>
          <span class="badge badge-info" style="font-size:1em"> <strong>Active</strong>
            {{
            country["value"] -
              country["TotalDeaths"] -
              country["TotalRecovered"]
          }} </span> <br><br>
          <span class="badge badge-dark" style="font-size:1em"> <strong>Death</strong> {{ country["TotalDeaths"] }} </span> <br><br>
          <span class="badge badge-success" style="font-size:1em"> <strong>Recovered</strong> {{ country["TotalRecovered"] }} </span> <br><br>


          <span class="badge badge-info" style="font-size:1em">NEW <strong>Confirmed Cases</strong>{{ country["NewConfirmed"] }}</span> <br><br>
          <span class="badge badge-dark" style="font-size:1em"> <strong>Death</strong> {{ country["NewDeaths"] }} </span> <br><br>
          <span class="badge badge-success" style="font-size:1em"> <strong>Recovered</strong> {{ country["NewRecovered"] }} </span> <br><br>
        </p>
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
