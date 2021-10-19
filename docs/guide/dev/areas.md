---
sidebarDepth: 3
title: Areas
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

* **urlArea**: url of the areas GeoJSON
* **pathKey**: path of the property key

  * Examples :

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
* **bbox** *(optional)*: bounding box of the area mode. Player aren't allow to play outside.

### Type: nominatim

Use [Reverse Geocoding](https://nominatim.org/release-docs/develop/api/Reverse/) of Nominatim.org, to determine the area of the random latitude, longitude.

1. Define query params of the request with `nominatimQueryParams`

```js
fetch(
    `https://nominatim.openstreetmap.org/reverse?lat=${latLng.lat()}&lon=${latLng.lng()}&format=json&${new URLSearchParams(nominatimQueryParams)}`
)
```

2. Get the key in the response with `nominatimResultPath`
> You can define fallback with `nominatimFallbackResultPath`

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

```json
{
  "name": "Mexico States",
  "description": "",
  "author": "BilelJegham, angelnmara",
  "data": {
     "bbox": [-118.366000,14.534700,-86.723700,32.718200],
     "urlArea": "https://raw.githubusercontent.com/GeoGuess/GeoGuess-Maps/main/public/geojson/areas/mexico_states.geojson",
     "type": "nominatim",
     "pathKey": "name",
     "nominatimResultPath": "address.state",
     "nominatimFallbackResultPath": "display_name",
     "nominatimQueryParams": {
        "zoom": "5",
        "accept-language": "es"
     }
  }
},
```

<!--imageSocial"https://geoguess.games/img/social.jpg"-->