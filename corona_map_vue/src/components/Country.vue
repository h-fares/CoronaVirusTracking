<template>
    <div>
    <div v-if="country['Country']" class="col-4 mb-5">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">{{country['value']}}</h5>
                <!--<highcharts  :options="chartOptions" ></highcharts>-->
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        props:['country'],
        name: "Country",
        created() {
            this.newCountry.push({'name': 'Total Confirmed','y': this.country['value']})
            this.newCountry.push({'name': 'Total Recovered','y': this.country['TotalRecovered']})
            this.newCountry.push({'name': 'Total Deaths','y': this.country['TotalDeaths']})
            console.log(this.newCountry)
        },
        computed: {
          /*  chartOptions () {
                return {
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: null,
                        plotShadow: false,
                        type: 'pie'
                    },
                    title: {
                        text: 'test'
                    },
                    tooltip: {
                        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                    },
                    accessibility: {
                        point: {
                            valueSuffix: '%'
                        }
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                            }
                        }
                    },
                    series: [{
                        name: 'Brands',
                        colorByPoint: true,
                        joinBy: ['name', 'Country'],
                        data: this.newCountry
                    }]
                }
            }*/
        },
        data() {
            return {
                newCountry: []
            }
        }
    }
</script>

<style scoped>

</style>