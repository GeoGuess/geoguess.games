---
sidebarDepth: 3
---
# Maps 
## GeoJSON format
GeoGuess uses [GeoJSON format](https://geojson.org/) to specify maps where you are playing.


In **FeatureCollection**, you can add (only):
 - `Feature<Point>`
 - `Feature<Polygon>`
 - `Feature<MultiPolygon>`

### Round Details
A feature could have properties: title, description and link.

```json
{"type":"FeatureCollection","features":[
    {
    "type":"Feature",
        "geometry":...,
        "properties":{
            "title": string | object,
            "description": string | object,
            "link": string,
        }
    }
]}
```
```ts
interface object {
    [language string]: string
}
```
#### Examples
````json
{
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [2.0104348, 42.4411844]
        },
        "properties": {
            "title": "Sainte-Léocadie",
            "description": {
                "fr": "une ville",
                "en": "a city"
            },
            "link": "http://www.sainte-leocadie.fr/"
        }
    }]
}
````
- French station (source [https://ressources.data.sncf.com/](https://ressources.data.sncf.com/))
  : [GeoJSON](https://gist.githubusercontent.com/BilelJegham/891f976fac2017ae19e699991aba4f01/raw/19bfe072be8762e93142b56eddecf83b967f7d9d/referentiel-gares-voyageurs-min.geojson)

## Maps list

You can add your custom maps to the homepage in the JSON file on the [Github Maps Repo](https://github.com/GeoGuess/GeoGuess-Maps/blob/main/maps.json), under `maps`.

```json
    {
        "name": string | object,
        "description": string | object,
        "author":  string,
        "imageUrl": urlString (width = 500 & heigth = 230),
        "url": urlGeoJSON
    }
```



<!--imageSocial"https://geoguess.games/img/social.jpg"-->
