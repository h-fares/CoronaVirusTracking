<?php
function drawCoronaMap()
{
?>
<script>
    Highcharts.getJSON('https://api.covid19api.com/summary', function (data) {

        // Prevent logarithmic errors in color calulcation
        data['Countries'].forEach(function (p) {
            p.value = p.TotalConfirmed;
            delete p.TotalConfirmed;
            p.value = (p.value < 1 ? 1: p.value);
            if(p.Country === 'US') {
                p.Country = 'United States of America';
            }
        });
console.log(data['Countries'])
        // Initiate the chart
        Highcharts.mapChart('customers_maps', {

            chart: {
                map: 'custom/world'
            },

            title: {
                text: 'Coronavirus Map'
            },
            credits: {
                enabled: false
            },
            legend: {
                title: {
                    text: 'Number of Confirmed cases',
                    style: {
                        color: ( // theme
                            Highcharts.defaultOptions &&
                            Highcharts.defaultOptions.legend &&
                            Highcharts.defaultOptions.legend.title &&
                            Highcharts.defaultOptions.legend.title.style &&
                            Highcharts.defaultOptions.legend.title.style.color
                        ) || 'black'
                    }
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
                    return { x: 0, y: 250 };
                }
            },
            colorAxis: {
                min: 1,
                max: 100000,
                type: 'logarithmic'
            },

            series: [{
                type: 'map',
                data: data['Countries'],
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
        });
    });
</script>
<?php

}

drawCoronaMap();
