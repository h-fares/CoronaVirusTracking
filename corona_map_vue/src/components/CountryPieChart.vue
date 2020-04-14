<template>
  <div v-if="country['value'] > 0" class="col-3 mb-5">
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <highcharts
          :options="chartOptions"
          style="margin-bottom: 3%"
        ></highcharts>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CountryPieChart",
  props:['country'],
  created() {
    //Did that because the chart take an array like [{name: 'test', y: '10'}, {name: 'test1', y: '35'}, ......, ]
    this.newCountry.push({
      name: "Active",
      y:
        this.country["value"] -
        this.country["TotalDeaths"] -
        this.country["TotalRecovered"]
    });
    this.newCountry.push({ name: "Deaths", y: this.country["TotalDeaths"] });
    this.newCountry.push({
      name: "Recovered",
      y: this.country["TotalRecovered"]
    });
  },
  computed: {
    chartOptions() {
      return {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: "pie"
        },
        title: {
          text: "All Cases Diagram"
        },
        tooltip: {
          pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
        },
        accessibility: {
          point: {
            valueSuffix: "%"
          }
        },
        credits: {
          enabled: false
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: "pointer",
            dataLabels: {
              enabled: false,
              format: "<b>{point.name}</b>: {point.percentage:.1f} %"
            }
          }
        },
        series: [
          {
            name: "percentage",
            colorByPoint: true,
            data: this.newCountry
          }
        ]
      };
    }
  },
  data() {
    return {
      newCountry: []
    };
  }
};
</script>

<style scoped></style>
