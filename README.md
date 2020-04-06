# CoronaVirusLiveMap
## Motivation
CoronaVirusLiveMap is a live tracking map for the coronavierus in the world. 
This project is made to help people know better about the COVID-19, and to help the Developers integrate this Project in their own projects 

## Structure
This Project has two folders:

1. simple_coronavirus_map:

    This folder ist a simple PHP project which has three files **corona_map.php**, **corona_map_style.css** and **index.html**
 
2. corona_map_vue:
    
    This folder is a simple vue cli project with **vuex**, **axios**, **vue Router** and **highcharts-vue**.
    
    To setup this project please read the README.md in the **corona_map_vue** folder.
  
## Style
* using **BOOTSTRAP**

## API Reference
By sending an **API** request using **axios** to [Coronavirus COVID19 API](https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest#intro),
which is built by [Kyle Redelinghuys](https://covid19api.com/).

#### Response:
```json
{
    "Global": {
      "NewConfirmed": 100282,
      "TotalConfirmed": 1162857,
      "NewDeaths": 5658,
      "TotalDeaths": 63263,
      "NewRecovered": 15405,
      "TotalRecovered": 230845
    },
    "Countries":
    [ 
        { 
          "Country": "Afghanistan",
          "CountryCode": "AF",
          "Slug": "afghanistan",
          "NewConfirmed": 18,
          "TotalConfirmed": 299,
          "NewDeaths": 1,
          "TotalDeaths": 7,
          "NewRecovered": 0,
          "TotalRecovered": 10,
          "Date": "2020-04-05T06:37:00Z"
        },
        {
          "Country": "Albania",
          "CountryCode": "AL",
          "Slug": "albania",
          "NewConfirmed": 29,
          "TotalConfirmed": 333,
          "NewDeaths": 3,
          "TotalDeaths": 20,
          "NewRecovered": 10,
          "TotalRecovered": 99,
          "Date": "2020-04-05T06:37:00Z"
        }
    ],
    "Date": "2020-04-05T06:37:00Z"
}
```


### License:
#### Feel Free to integrate this project in your dashboards, mobile apps or in other applications.
> Let's help our community and **#StayHome**