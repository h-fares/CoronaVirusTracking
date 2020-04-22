<template>
  <div>
    <highcharts
      :constructor-type="'mapChart'"
      :options="mapOptions"
      class="map"
    ></highcharts>
    <div>Updated {{ date.date | moment("from", "now") }}<br /></div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  created() {
    this.fetchAllCases();
  },
  computed: {
    ...mapState(["countries", "date", "global"]),
    mapOptions() {
      return {
        chart: {
          map: "myMapName"
        },
        title: {
          text: "Coronavirus Live Map"
        },
        credits: {
          enabled: false
        },
        legend: {
          title: {
            text: "Number of Confirmed cases"
          }
        },
        mapNavigation: {
          enabled: true,
          buttonOptions: {
            verticalAlign: "top"
          }
        },

        tooltip: {
          backgroundColor: "none",
          borderWidth: 0,
          shadow: false,
          useHTML: true,
          padding: 0,
          pointFormat:
            '<span class="badge badge-info" style="font-size:1em">{point.Country} </span> <br> <img src="https://www.countryflags.io/{point.CountryCode}/shiny/32.png"> <br>' +
            '<span class="badge badge-dark" style="font-size:1em">Total <strong>Confirmed Cases</strong> {point.value} </span> <br>' +
            '<span class="badge badge-secondary" style="font-size:1em">New <strong>Confirmed Cases</strong> {point.NewConfirmed} </span> <br>' +
            '<span class="badge badge-danger" style="font-size:1em">Total <strong>Deaths</strong> {point.TotalDeaths} </span> <br>' +
            '<span class="badge badge-success" style="font-size:1em">Total <strong>Recovered</strong> {point.TotalRecovered} </span> <br>',
          positioner: function() {
            return { x: 0, y: 250 };
          }
        },
        colorAxis: {
          min: 1,
          max: 100000,
          type: "logarithmic"
        },
        series: [
          {
            type: "map",
            name: "Country: ",
            joinBy: ["iso-a2", "CountryCode"],
            data: this.countries.countries,
            minSize: 4,
            maxSize: "12%",
            states: {}
          }
        ]
      };
    }
  },
  methods: {
    ...mapActions("request", ["fetchAllCases"])
  }
};
</script>

<style scoped>
.map {
  min-height: 500px;
  margin: 2%;
}
</style>
