---
sidebarDepth: 3
---
# Instructions de déploiement de Geoguess

## 1) Déployer

Vous pouvez déployer le site via les outils suivants:

[!["Deploy to netlify"](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Geoguess/Geoguess) or 
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2FGeoGuess%2FGeoguess&env=VUE_APP_API_KEY,VUE_APP_FIREBASE_API_KEY,VUE_APP_FIREBASE_AUTH_DOMAIN,VUE_APP_FIREBASE_DATABASE_URL,VUE_APP_FIREBASE_PROJECT_ID,VUE_APP_STORAGE_BUCKET,VUE_APP_FIREBASE_MESSAGING_SENDER_ID,VUE_APP_FIREBASE_APP_ID,VUE_APP_FIREBASE_MEASUREMENT_ID&envDescription=Follow%20guide%20on%20https%3A%2F%2Fgeoguess.games%2F&envLink=https%3A%2F%2Fgeoguess.games%2F&project-name=my-geoguess&demo-title=GeoGuess&demo-description=GeoGuess%20is%20an%20open-source%20geography%20game%20with%20Google%20Map%20StreetView.%20You%20can%20play%20solo%20or%20with%20your%20friends%20simultaneously.&demo-url=https%3A%2F%2Fdemo.geoguess.games%2F&demo-image=https%3A%2F%2Fgeoguess.games%2Fimg%2Fsocial.jpg)

Il vous sera demandé de saisir des variables d'environnement, vous retrouverez ci-dessous quand les obtenir.

>Pour les hébergements non à la racine du domaine, dans un sous-dossier (notamment pour les Github/Gitlab pages), utiliser la variable d'env dans `VUE_APP_PUBLIC_PATH`

## 2) Variables d'environnements

### 2.1) Google Map

> Variable d'environnement : VUE_APP_API_KEY

1. Google Cloud, votre 1er projet ?

   1. Aller sur https://cloud.google.com/maps-platform/
   2. Cliquer sur Premiers pas
   3. Une page s'ouvre et vous demande d'activer la facturation
      !["Google"](../../img/google-fr.png)

      > **Note :** Google offre 200 $ de crédit mensuel pour l'usage des apis de Google Map ([Source](https://cloud.google.com/maps-platform/pricing?hl=fr)). Pour un usage entre amis, vous ne dépasserez jamais ce montant.
   4. Créer votre compte de facturation

1.(bis) Google Cloud, je connais 💪 alors créer un projet 

2. Dans le "MarketPlace", activer l'api "Maps JavaScript API"
3. Dans l'onglet "Identifiants", générer une clé d'api. Cette clé sera votre `VUE_APP_API_KEY`

   > Vous pouvez définir un quota et une restriction d'url

> Comme GeoGuess est une web app front, des visteurs mal attentionnés peuvent voler votre "Google API key" et l'utiliser. 
> Vous DEVEZ définir des quotas et des restrictions. 
> Si vous le pouvez ajouter des protections sur votre site (.htaccess)

#### Quotas & restrictions

##### Clés API (dans "Identifiants")

 !["Identifiants"](../../img/security/security-1.jpg)

1. Sous "Restrictions relatives aux applications", choisir "Référents HTTP (sites Web)"
2. Ajouter des restrictions pour limiter à l'usage de votre site WEB (1): 
   N'oubliez pas d'ajouter une "*" après "/" pour inclure toutes les urls de votre site.
      
3. Restreindre l'API activé : "Maps JavaScript API" (2)
   !["Identifiants"](../../img/security/security-2.jpg)

##### Quotas

1. Rechercher "quotas google maps" dans la barre de recherche
2. Selectionner "Maps JavaScript API" a côté du titre "Quotas"
3. Ouvrir "Map loads" via l'icône ">"
4. Définir les limites. Pour la démo, "Map loads par jour" est défini à 500

 !["Limits"](../../img/security/security-4.jpg)

> Plus d'infos : <https://developers.google.com/maps/gmp-get-started>

### 2.2) Firebase (multijoueur)

> Variables d'environnements : VUE_APP_FIREBASE_API_KEY, VUE_APP_FIREBASE_PROJECT_ID, VUE_APP_FIREBASE_MESSAGING_SENDER_ID, VUE_APP_FIREBASE_APP_ID et VUE_APP_FIREBASE_MEASUREMENT_ID, VUE_APP_FIREBASE_AUTH_DOMAIN, VUE_APP_FIREBASE_DATABASE_URL, VUE_APP_STORAGE_BUCKET

1. Créer un projet Firebase (ou utiliser le projet créé pour Google Map Api) via <https://console.firebase.google.com/>

   > Vous pouvez activer Google Analytics pour obtenir des statistiques  
2. Aller sous la rubrique "Développer" dans "Realtime Database", Créer une base de données
3. Aller dans l'onglet Règles,
       1. Remplacer les 2 champs (write et read) `false` par `true` dans le champ
   !["Règle"](../../img/firebase.png)
       2. Publier les modifications
4. Revenez sur la page d'accueil en cliquant dans le menu à gauche sur "Vue d'ensemble du projet"
5. Sous le titre sur projet, cliquer sur l'icône Web `</>` pour ajouter une application
   !["Ajout App"](../../img/firebase-2.png)
6. Enregistrer l'application puis récupérer les variables d'environnement indiqué sous `firebaseConfig` 

Voici les associations :

| Paramétre         | Variables d'environnements           |
| ----------------- | ------------------------------------ |
| apiKey            | VUE_APP_FIREBASE_API_KEY             |
| authDomain        | VUE_APP_FIREBASE_AUTH_DOMAIN         |
| databaseURL       | VUE_APP_FIREBASE_DATABASE_URL        |
| projectId         | VUE_APP_FIREBASE_PROJECT_ID          |
| storageBucket     | VUE_APP_STORAGE_BUCKET               |
| messagingSenderId | VUE_APP_FIREBASE_MESSAGING_SENDER_ID |
| appId             | VUE_APP_FIREBASE_APP_ID              |
| measurementId     | VUE_APP_FIREBASE_MEASUREMENT_ID      |

> **Note**: `measurementId` est accessible si vous avez activé Google Analytics

<!--imageSocial"https://geoguess.games/img/social.jpg"-->