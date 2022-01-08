---
sidebarDepth: 3
title: GeoGuess Deployment Instructions
---
# GeoGuess Deployment Instructions

## 1) Deploy GeoGuess

You can deploy the game with : 

[![Deploy to netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Geoguess/Geoguess) or 
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2FGeoGuess%2FGeoguess&env=VUE_APP_API_KEY,VUE_APP_FIREBASE_API_KEY,VUE_APP_FIREBASE_AUTH_DOMAIN,VUE_APP_FIREBASE_DATABASE_URL,VUE_APP_FIREBASE_PROJECT_ID,VUE_APP_STORAGE_BUCKET,VUE_APP_FIREBASE_MESSAGING_SENDER_ID,VUE_APP_FIREBASE_APP_ID,VUE_APP_FIREBASE_MEASUREMENT_ID&envDescription=Follow%20guide%20on%20https%3A%2F%2Fgeoguess.games%2F&envLink=https%3A%2F%2Fgeoguess.games%2F&project-name=my-geoguess&demo-title=GeoGuess&demo-description=GeoGuess%20is%20an%20open-source%20geography%20game%20with%20Google%20Map%20StreetView.%20You%20can%20play%20solo%20or%20with%20your%20friends%20simultaneously.&demo-url=https%3A%2F%2Fdemo.geoguess.games%2F&demo-image=https%3A%2F%2Fgeoguess.games%2Fimg%2Fsocial.jpg)


It will be ask to give Environment variables, we will explain how to create and find them.

> For hosting in subfolder like Github/Gitlab pages, use environnement variable `VUE_APP_PUBLIC_PATH`

## 2) Environment variables
### 2.1) Google Map

> Environnement variable : VUE_APP_API_KEY

1. Google Cloud, your 1st project ?
    1. Go to [https://cloud.google.com/maps-platform/](https://cloud.google.com/maps-platform/)
    2. Click on "Get started"
    3. Page will open and ask you to activate billing
    !["Google"](../img/google-en.png)
    > **Note :** Google offers 200 $ credit per month to use Google Map Apis ([Source](https://cloud.google.com/maps-platform/pricing)). For personal usage, you won't use more than the free credit.
    4. Create Billing Account

1.(bis) Google Cloud, I know 💪 then create a project

2. In the "MarketPlace", activate "Maps JavaScript API"
3. In "Identifiants", generate on API key. This key will be your `VUE_APP_API_KEY`

> Since GeoGuess is web app front, malicious visitors can stroll your Google API key and use it.
> You MUST define quotas et restrictions.
> If you can add access control on your website (.htaccess)

#### Quotas & restrictions

##### Key restrictions (in "Credentials")
 !["Credentials"](../img/security/security-1.jpg)

1. Under "Application restrictions" set "HTTP referrers (websites)"

2. Add website restrictions to your game server URL (1): Do not forget to add "*" after "/" to includes all URLs.
   
3. Restrict key to "Maps JavaScript API" (2)
 !["Credentials"](../img/security/security-2.jpg)

##### Quotas	
 1. In the search box, tape "quotas google maps"
 2. Select "Maps JavaScript API" next to the title "Quotas"
 2. Open Map loads Panel with ">"
 3. Set limits. For the demo, "Map loads per day" is set to 500

 !["Limits"](../img/security/security-4.jpg)



> More information : [https://developers.google.com/maps/gmp-get-started](https://developers.google.com/maps/gmp-get-started)


### 2.2) Firebase (multiplayer)

> Environment variables : VUE_APP_FIREBASE_API_KEY, VUE_APP_FIREBASE_PROJECT_ID, VUE_APP_FIREBASE_MESSAGING_SENDER_ID, VUE_APP_FIREBASE_APP_ID et VUE_APP_FIREBASE_MEASUREMENT_ID, VUE_APP_FIREBASE_AUTH_DOMAIN, VUE_APP_FIREBASE_DATABASE_URL, VUE_APP_STORAGE_BUCKET

1. Create a Firebase project (or use the Google Cloud project create for Google Map Api) on [https://console.firebase.google.com/](https://console.firebase.google.com/)
> You can activate Google Analytics to get statistics
2. Go in the section "Develop" and click on "Realtime Database", create a database
3. Go in the Rules Section
    1. Replace, 2 variable (.write et .read) `false` by `true` in the textarea
!["Rules"](../img/firebase.png)
    2. Publish


1. Return on the home page with "Project Overview" 
2. Under the title of the project, click on Web icon `</>` to add an application
!["Ajout App"](../img/firebase-2.png)
1. Save the application then get Environment variables reveals under `firebaseConfig` 

Here are the associations:

| Parameter         | Env. Variables                       |
| ----------------- | ------------------------------------ |
| apiKey            | VUE_APP_FIREBASE_API_KEY             |
| authDomain        | VUE_APP_FIREBASE_AUTH_DOMAIN         |
| databaseURL       | VUE_APP_FIREBASE_DATABASE_URL        |
| projectId         | VUE_APP_FIREBASE_PROJECT_ID          |
| storageBucket     | VUE_APP_STORAGE_BUCKET               |
| messagingSenderId | VUE_APP_FIREBASE_MESSAGING_SENDER_ID |
| appId             | VUE_APP_FIREBASE_APP_ID              |
| measurementId     | VUE_APP_FIREBASE_MEASUREMENT_ID      |

> **Note**: `measurementId` was accessible if you have activate Google Analytics
<!--imageSocial"https://geoguess.games/img/social.jpg"-->
