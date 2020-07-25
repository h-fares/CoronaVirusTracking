<template>
  <div>
    <div class="d-lg-flex justify-content-around m-3">
      <span class="badge badge-danger m-1" style="font-size:1em">Global Total <strong>Confirmed Cases: </strong> {{ global.globalCases.TotalConfirmed}} </span>
      <span class="badge badge-info m-1" style="font-size:1em">Global New <strong>Confirmed Cases: </strong> {{ global.globalCases.NewConfirmed}} </span>
      <span class="badge badge-dark m-1" style="font-size:1em">Global Total <strong>Deaths: </strong> {{ global.globalCases.TotalDeaths}} </span>
      <span class="badge badge-success m-1" style="font-size:1em">Global Total <strong>Recovered: </strong> {{ global.globalCases.TotalRecovered}} </span>
    </div>
    <highcharts
      :constructor-type="'mapChart'"
      :options="mapOptions"
      class="map shadow rounded
"
    ></highcharts>
    <div class="updated container mb-5">Updated {{ date.date | moment("from", "now") }}<br/><br></div>

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
        colors: ['#7cb5e8', '#343a40', '#28a745'],
        chart: {
          map: "myMapName",
          marginLeft: 0,
          marginRight: 0,
          plotBorderWidth: 0,
          plotShadow: false,
          backgroundColor: "#0f4c75",
          plotBackgroundColor: '#0f4c75',
          borderWidth:0
        },
        title: {
          text: "Coronavirus Live Map",
          style: {
            color: "#fff"
          }
        },
        credits: {
          enabled: false
        },
        legend: {
          backgroundColor:"#0f4c75",
          itemStyle: {

          },
          title: {
            text: "Number of Confirmed cases",
            color:"#fff"
          }
        },
        mapNavigation: {
          enabled: true,
          buttonOptions: {
            symbolStroke:"#3282b8",
            style: {
              color: "#3282b8"
            }

          }
        },
        tooltip: {
          backgroundColor: "none",
          borderWidth: 0,
          shadow: false,
          useHTML: true,
          padding: 0,
          pointFormat:
            '<span class="badge badge-info m-1" style="font-size:1em">{point.Country} </span> <br> <img src="https://www.countryflags.io/{point.CountryCode}/shiny/32.png"> <br>' +
            '<span class="badge badge-dark m-1" style="font-size:1em">Total <strong>Confirmed Cases: </strong> {point.value} </span> <br>' +
            '<span class="badge badge-secondary m-1" style="font-size:1em">New <strong>Confirmed Cases: </strong> {point.NewConfirmed} </span> <br>' +
            '<span class="badge badge-danger m-1" style="font-size:1em">Total <strong>Deaths: </strong> {point.TotalDeaths} </span> <br>' +
            '<span class="badge badge-success m-1" style="font-size:1em">Total <strong>Recovered: </strong> {point.TotalRecovered} </span> <br>',
          positioner: function() {
            return { x: 0, y: 250 };
          }
        },
        colorAxis: {
          min: 1,
          max: 5000000,
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
            states: {},
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

<style scoped lang="scss">
  @import "../style";
.map {
  min-height: 500px;
  margin: 2%;
}
  .updated{
    background-color: $background-color-items;
    color: $items-color;
    padding-top: 1.5em;
    width: fit-content;
    border-radius: 20px;
  }
</style>
