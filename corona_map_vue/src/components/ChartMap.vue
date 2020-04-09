<template>
    <div>
        <highcharts :constructor-type="'mapChart'" :options="mapOptions" class="map"></highcharts>
        <div>Updated  {{ date.date | moment("from", "now") }}<br></div>

    </div>

</template>

<script>
    import { mapState, mapActions } from 'vuex'
export default {
        created() {
            this.fetchAllCases();
        },
        computed:{
            ...mapState(['countries', 'date', 'global']),
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
                        pointFormat: '<div style="  position: fixed; z-index: 10; background-color: rgba(0,0,0,0.25);">' +
                            '<span style="font-size:1.25em">{point.Country} </span> <br> <img src="https://www.countryflags.io/{point.CountryCode}/shiny/32.png"> <br>' +
                            '<span style="font-size:1em">Total <strong>Confirmed Cases</strong></span> <br>' +
                            '<span style="font-size:1.25em">{point.value}</span><br>' +
                            '<span style="font-size:1em">New <strong>Confirmed Cases</strong></span> <br>' +
                            '<span style="font-size:1.25em">{point.NewConfirmed}</span><br>' +
                            '<span style="font-size:1em">Total <strong style="color: red">Deaths</strong></span> <br>' +
                            '<span style="font-size:1.25em">{point.TotalDeaths}</span><br>' +
                            '<span style="font-size:1em">Total <strong style="color: green">Recovered</strong></span> <br>' +
                            '<span style="font-size:1.25em">{point.TotalRecovered}</span></div>',
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
                        data: this.countries.countries,
                        minSize: 4,
                        maxSize: '12%',
                        states: {
                        }
                    }]
                }
            }
        },
        methods: {
            ...mapActions('request', ['fetchAllCases'])
        }
    };
</script>

<style scoped>
.map {
    min-height: 500px;
    margin: 2%;
}
</style>