<template>
    <div>
        <highcharts :constructor-type="'mapChart'" :options="mapOptions" class="map"></highcharts>
        <div>Updated  {{ cases.date | moment("from", "now") }}<br></div>

    </div>

</template>

<script>
    import { mapState, mapActions } from 'vuex'
export default {
        created() {
            this.fetchCountries();
        },
        computed:{
            ...mapState(['cases']),
            mapOptions() {
                return {
                    chart: {
                        map: 'myMapName'
                    },
                    title: {
                        text: 'Coronavirus Live Map'
                    },
                    credits: {
                        enabled: false
                    },
                    legend: {
                        title: {
                            text: 'Number of Confirmed cases'
                        }
                    },
                    mapNavigation: {
                        enabled: true,
                        buttonOptions: {
                            verticalAlign: 'top'
                        }
                    },

                    tooltip: {
                        backgroundColor: 'none',
                        borderWidth: 0,
                        shadow: false,
                        useHTML: true,
                        padding: 0,
                        pointFormat: '<span style="font-size:20px">{point.Country} </span> <br> <img src="https://www.countryflags.io/{point.CountryCode}/shiny/32.png"> <br>' +
                            '<span style="font-size:10px">Total <strong>Confirmed Cases</strong></span> <br>' +
                            '<span style="font-size:20px">{point.value}</span><br>' +
                            '<span style="font-size:10px">New <strong>Confirmed Cases</strong></span> <br>' +
                            '<span style="font-size:20px">{point.NewConfirmed}</span><br>' +
                            '<span style="font-size:10px">Total <strong style="color: red">Deaths</strong></span> <br>' +
                            '<span style="font-size:20px">{point.TotalDeaths}</span><br>' +
                            '<span style="font-size:10px">Total <strong style="color: green">Recovered</strong></span> <br>' +
                            '<span style="font-size:20px">{point.TotalRecovered}</span>',
                        positioner: function () {
                            return {x: 0, y: 250};
                        }
                    },
                    colorAxis: {
                        min: 1,
                        max: 100000,
                        type: 'logarithmic'
                    },
                    series: [{
                        type: 'map',
                        name: 'Country: ',
                        joinBy: ['iso-a2', 'CountryCode'],
                        data: this.cases.countries,
                        minSize: 4,
                        maxSize: '12%',
                        states: {
                        }
                    }]
                }
            }
        },
        methods: {
            ...mapActions('cases', ['fetchCountries'])
        }
    };
</script>

<style scoped>
.map {
    min-height: 500px;
    margin: 2%;
}
</style>