---
sidebarDepth: 3
---
# Areas  <Badge text="beta" type="warning"/> 
## GeoJSON format
GeoGuess uses [GeoJSON format](https://geojson.org/) to specify maps where you are playing.


In `FeatureCollection` > `Feature<Polygon>`

### Area Details
A feature must have one property.

```json
{"type":"FeatureCollection","features":[
    {
      "type": "Feature",
      "properties": {
        "name": "New York",
      },
      "geometry": {
        "type": "Polygon",
        ...
      }
    }
]}
```

## Areas list

You can add your custom area mode to the homepage in the JSON file on the [Github Maps Repo](https://github.com/GeoGuess/GeoGuess-Maps/blob/main/maps.json), under `areas`.

```json
{
    "name": string | object,
    "description": string | object,
    "author":  string,
    "imageUrl": urlString (width = 500 & heigth = 230),
    "data": AreasModeObject
}
```
## AreasModeObject

```json
{
    "data": {
        "urlArea": urlGeoJSON,
        "bbox": Array<Number>,
        "pathKey": string,
        "type": "nominatim" | "polygon" ,
        ...
    }
}
```

- **urlArea**: url of the areas GeoJSON
- **pathKey**: path of the property key
    - Examples :
        ```json
        {
            "type": "Feature",
            "properties": {
                "name": "New York", // 'name'
                "state":{
                    "name": "New York", // "state.name"
                }
            },
        }
        ```
- **bbox** *(optional)*: bounding box of the area mode. Player aren't allow to play outside.

### Type: nominatim

Use [Reverse Geocoding](https://nominatim.org/release-docs/develop/api/Reverse/) of Nominatim.org, to determine the area of the random latitude, longitude.

 1. Define query params of the request with `nominatimQueryParams`

```js
fetch(
    `https://nominatim.openstreetmap.org/reverse?lat=${latLng.lat()}&lon=${latLng.lng()}&format=json&${new URLSearchParams(nominatimQueryParams)}`
)
```

 2. Get the key in the response with `nominatimResultPath`

Example: 
```json
"nominatimQueryParams": {
  "zoom": "5",
  "addressdetails": "1",
  "accept-language": "en"
},
"nominatimResultPath": "address.state",
```


### Type: polygon

Check if the random location is in the GeoJson `Feature<Polygon>` automatically.

```json
"data": {
   "urlArea": "https://raw.githubusercontent.com/GeoGuess/GeoGuess-Maps/main/areas/continents.json",
   "pathKey": "continent",
   "type": "polygon"
}
```


## Example
````json
{
  "name": "US States",
  "author": "BilelJegham",
  "data": {
    "bbox": [
      -171.79111060289117, 18.916190000000142, -66.96466, 71.35776357694175
    ],
    "urlArea": "https://raw.githubusercontent.com/martynafford/natural-earth-geojson/master/110m/cultural/ne_110m_admin_1_states_provinces.json",
    "type": "nominatim",
    "pathKey": "name",
    "nominatimResultPath": "address.state",
    "nominatimQueryParams": {
      "zoom": "5",
      "addressdetails": "1",
      "accept-language": "en"
    }
  }
},
````




<!--imageSocial"https://geoguess.games/img/social.jpg"-->