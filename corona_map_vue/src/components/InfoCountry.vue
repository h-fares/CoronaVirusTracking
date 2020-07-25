<template>
  <div class="col">
    <div
      class="card mb-4 mt-4 shadow p-3 mb-5 rounded"
      style="width: 18rem;height: 27rem"
    >
      <div class="card-body">
        <div class="card-text mx-auto">
          <ul class="list-group">
            <li
              class="list-group-item d-flex justify-content-between align-items-center"
              style="font-size:0.9em"
            >
              Total Cases
              <span
                class="badge badge-danger badge-pill"
                style="font-size:1em"
                >{{ country["value"] }}</span
              >
            </li>
            <li
              class="list-group-item d-flex justify-content-between align-items-center"
              style="font-size:0.9em"
            >
              Active Cases
              <span
                class="badge badge-primary badge-pill"
                style="font-size:1em; background-color: rgb(124, 181, 236); color: #ffffff"
                >{{
                  country["value"] -
                    country["TotalDeaths"] -
                    country["TotalRecovered"]
                }}</span
              >
            </li>
            <li
              class="list-group-item d-flex justify-content-between align-items-center"
              style="font-size:0.9em"
            >
              Total Deaths
              <span class="badge badge-dark badge-pill" style="font-size:1em">{{
                country["TotalDeaths"]
              }}</span>
            </li>
            <li
              class="list-group-item d-flex justify-content-between align-items-center"
              style="font-size:0.9em"
            >
              Total Recovered
              <span
                class="badge badge-success badge-pill"
                style="font-size:1em"
                >{{ country["TotalRecovered"] }}</span
              >
            </li>
            <li
              class="list-group-item d-flex justify-content-between align-items-center"
              style="font-size:0.9em"
            >
              New Confirmed
              <span class="badge badge-info badge-pill" style="font-size:1em">
                {{ country["NewConfirmed"] }}
              </span>
            </li>
            <li
              class="list-group-item d-flex justify-content-between align-items-center"
              style="font-size:0.9em"
            >
              New Deaths
              <span class="badge badge-dark badge-pill" style="font-size:1em"
                >{{ country["NewDeaths"] }}
              </span>
            </li>
            <li
              class="list-group-item d-flex justify-content-between align-items-center"
              style="font-size:0.9em"
            >
              New Recovered
              <span
                class="badge badge-success badge-pill"
                style="font-size:1em"
                >{{ country["NewRecovered"] }}</span
              >
            </li>
          </ul>
        </div>
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

<style scoped lang="scss">
  @import "../style";
  .card, .list-group, .list-group-item{
    background-color: $background-color-secondary;
    color: white;
  }
  .card{
    background-color: $background-color-secondary;
    transition: transform 0.2s;
  }
  .card:hover {
    transform: scale(1.05);
  }
</style>
