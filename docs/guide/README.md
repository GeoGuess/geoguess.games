---
sidebarDepth: 3
---
# Geoguess

Geoguess 2 is a free and lazy geoguess game. Players compete how close the player can guess random locations in five rounds. 
You can play multiplayer with your friends. The first player creates a room and decides the room size. Other players type the same room name as the first player created and the game will start.

This game was forked from [GeoGuess Master](https://geoguessmaster.com/).


This guide explain how deploy your own server GeoGuess.


## 1) Instruction to deploy

You can deploy the game with : 

[![Deploy to netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/BilelJegham/Geoguess-2) or 
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/git?s=https%3A%2F%2Fgithub.com%2FBilelJegham%2FGeoguess-2&env=VUE_APP_API_KEY,VUE_APP_FIREBASE_API_KEY,VUE_APP_FIREBASE_PROJECT_ID,VUE_APP_FIREBASE_MESSAGING_SENDER_ID,VUE_APP_FIREBASE_APP_ID,VUE_APP_FIREBASE_MEASUREMENT_ID&envDescription=Follow%20guide%20on%20https%3A%2F%2Fgeoguess-2.github.io%2F&envLink=https%3A%2F%2Fgeoguess-2.github.io%2F&project-name=my-geoguess)


It will be ask to give environnements variables, we will explain how to create and find them.

## 2) Environnements variables

### 2.1) Google Map

> Environnement variable : VUE_APP_API_KEY

1. Google Cloud, your 1st project ?
    1. Go to https://cloud.google.com/maps-platform/
    2. Click on "Premiers pas"
    3. Page will open and ask you to activate billing
    !["Google"](./img/google-1.png)
    > **Note :** Google offer 200 $ credit per month for use Google Map Apis ([Source](https://cloud.google.com/maps-platform/pricing)). For personnal usage, you won't use more than the free credit.
    4. Create Billing Account

1.(bis) Google Cloud, I know 💪 then create a project

2. In the "MarketPlace", activate "Maps JavaScript API"
3. In "Identifiants", generate on api key. This key will be your `VUE_APP_API_KEY`
> You can define quota et restriction

> More informations : [https://developers.google.com/maps/gmp-get-started](https://developers.google.com/maps/gmp-get-started)


### 2.2) Firebase (multiplayer)

> Environnements variables : VUE_APP_FIREBASE_API_KEY, VUE_APP_FIREBASE_PROJECT_ID, VUE_APP_FIREBASE_MESSAGING_SENDER_ID, VUE_APP_FIREBASE_APP_ID et VUE_APP_FIREBASE_MEASUREMENT_ID

1. Create a Firebase project (or use the Google Cloud project create for Google Map Api) on [https://console.firebase.google.com/](https://console.firebase.google.com/)
> You can activate Google Analytics to get statistics
2. Go in the section "Developper" and click on "Realtime Database", create a database
3. Go in the Rules Section
    1. Replace, 2 variable (write et read) `false` by `true` in the textarea
!["Rules"](./img/firebase.png)
    2. Publish les modifications


4. Revenez sur la page d'accueil en cliquant dans le menu à gauche sur "Vue d'ensemble du projet"
5. Sous le titre sur projet, cliquer sur l'icône Web `</>` pour ajouter une application
!["Ajout App"](./img/firebase-2.png)
6. Enregistrer l'application puis récupérer les variables d'environnement indiqué sous `firebaseConfig` 

Voici les associations :

| Parameter         | Env. Variables                       |
| ----------------- | ------------------------------------ |
| apiKey            | VUE_APP_FIREBASE_API_KEY             |
| projectId         | VUE_APP_FIREBASE_PROJECT_ID          |
| messagingSenderId | VUE_APP_FIREBASE_MESSAGING_SENDER_ID |
| appId             | VUE_APP_FIREBASE_APP_ID              |
| measurementId     | VUE_APP_FIREBASE_MEASUREMENT_ID      |

> **Note**: `measurementId` was accessible if you have activate  Google Analytics
