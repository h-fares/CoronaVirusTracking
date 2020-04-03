<template>
    <div>
        <highcharts :constructor-type="'mapChart'" :options="mapOptions" class="map"></highcharts>
        <button @click="click()"> CLICK</button>
    </div>

</template>

<script>
    import { mapState } from 'vuex'
export default {
        created() {
            this.$store.dispatch('fetchCountries')
        },
        computed:{
            ...mapState(['countries', 'date']),
            mapOptions() {
                return {
                    chart: {
                        map: 'myMapName'
                    },
                    title: {
                        text: ''
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
                        pointFormat: '<span style="font-size:20px">{point.Country}</span> <br>' +
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
                        data: this.countries,
                        joinBy: ['name', 'Country'],
                        name: 'Country: ',
                        minSize: 4,
                        maxSize: '12%',
                        states: {
                            hover: {
                                color: '#a4edba'
                            }
                        }
                    }]
                }
            }
        },
        data() {
            return {

            };
        },
        methods: {
            click() {
                console.log(this.countries)
            }
        }
    };
</script>

<style scoped>
.map {
    min-height: 500px;
}
</style>