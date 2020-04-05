<template>
    <div>
    <div v-if="country['value'] > 0" class="col-3 mb-5">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">{{country['Country']}}</h5>

                <country-flag :country="country['CountryCode']"></country-flag>

                <highcharts  :options="chartOptions" style="margin-bottom: 3%"></highcharts>

                <p class="card-text m-2">Total <strong style="color: #dd4b39">Confirmed Cases</strong></p>
                <p class="card-text m-2">{{country['value']}}</p>
                <p class="card-text m-2">Total <strong style="color: rgb(124, 181, 236)">Active Cases</strong></p>
                <p class="card-text m-2">{{country['value'] - country['TotalDeaths'] - country['TotalRecovered']}}</p>
                <p class="card-text m-2">Total <strong>Deaths</strong></p>
                <p class="card-text m-2">{{country['TotalDeaths']}}</p>
                <p class="card-text m-2">Total <strong style="color: rgb(144, 237, 125)">Recovered</strong></p>
                <p class="card-text m-2">{{country['TotalRecovered']}}</p>
                <p class="card-text m-2">Updated: {{ country['Date'] | moment("dddd, MMMM Do YYYY, h:mm:ss a") }}</p>
                <p class="card-text m-2">New <strong style="color: #dd4b39">Confirmed Cases</strong></p>
                <p class="card-text m-2">{{country['NewConfirmed']}}</p>
                <p class="card-text m-2">New <strong>Death Cases</strong></p>
                <p class="card-text m-2">{{country['NewDeaths']}}</p>
                <p class="card-text m-2">New <strong style="color: rgb(144, 237, 125)">Recovered Cases</strong></p>
                <p class="card-text m-2">{{country['TotalRecovered']}}</p>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        props:['country'],
        name: "Country",
        created() { //Did that because the chart take an array like [{name: 'test', y: '10'}, {name: 'test1', y: '35'}, ......, ]
            this.newCountry.push({'name': 'Active','y': this.country['value'] - this.country['TotalDeaths'] - this.country['TotalRecovered']})
            this.newCountry.push({'name': 'Deaths','y': this.country['TotalDeaths']})
            this.newCountry.push({'name': 'Recovered','y': this.country['TotalRecovered']})

        },
        computed: {
           chartOptions () {
                return {
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: null,
                        plotShadow: false,
                        type: 'pie'
                    },
                    title: {
                        text: ''
                    },
                    tooltip: {
                        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                    },
                    accessibility: {
                        point: {
                            valueSuffix: '%'
                        }
                    },
                    credits: {
                        enabled: false
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: false,
                                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                            }
                        }
                    },
                    series: [{
                        name: 'percentage',
                        colorByPoint: true,
                        data: this.newCountry
                    }]
                }
            }
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