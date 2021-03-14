<template>
<div class="container_map">  
  <div class="opacity"></div>
  <span v-for="i in [0,1,2,3]" v-bind:key="'m'+i" :class="'marker marker-'+i+' pos-'+((marker+i)%4)">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
    </svg>
  </span>
  <div class="container_map__content">
      <img
        v-if="data.heroImage"
        :src="$withBase(data.heroImage)"
        :alt="data.heroAlt || 'hero'"
      >

      <h1
        v-if="data.heroText !== null"
        id="main-title"
      >
        {{ data.heroText || $title || 'Hello' }}
      </h1>

      <p
        v-if="data.tagline !== null"
        class="description"
      >
        {{ data.tagline || $description || 'Welcome to your VuePress site' }}
      </p>
    <div class="deploy_menu">


        <a target="_blank" href="https://app.netlify.com/start/deploy?repository=https://github.com/Geoguess/Geoguess">
        <img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to netlify">
        </a> 
        <a target="_blank" href="https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2FGeoGuess%2FGeoguess&env=VUE_APP_API_KEY,VUE_APP_FIREBASE_API_KEY,VUE_APP_FIREBASE_AUTH_DOMAIN,VUE_APP_FIREBASE_DATABASE_URL,VUE_APP_FIREBASE_PROJECT_ID,VUE_APP_STORAGE_BUCKET,VUE_APP_FIREBASE_MESSAGING_SENDER_ID,VUE_APP_FIREBASE_APP_ID,VUE_APP_FIREBASE_MEASUREMENT_ID&envDescription=Follow%20guide%20on%20https%3A%2F%2Fgeoguess.games%2F&envLink=https%3A%2F%2Fgeoguess.games%2F&project-name=my-geoguess&demo-title=GeoGuess&demo-description=GeoGuess%20is%20an%20open-source%20geography%20game%20with%20Google%20Map%20StreetView.%20You%20can%20play%20solo%20or%20with%20your%20friends%20simultaneously.&demo-url=https%3A%2F%2Fdemo.geoguess.games%2F&demo-image=https%3A%2F%2Fgeoguess.games%2Fimg%2Fsocial.jpg">
        <img class="vercel_btn" src="https://vercel.com/button" alt="Deploy with Vercel">
        </a>
    </div>
    <p
        v-if="data.actionText && data.actionLink"
        class="action"
    >
        <NavLink
          class="action-button"
          :item="actionLink"
        />
    </p>
  </div>

</div>
</template>
<script>
import NavLink from '@theme/components/NavLink.vue'

export default {  
  components: { NavLink },
  data(){
    return {
      marker: 0,
    }
  },
  mounted(){
    setInterval(()=>{
      this.marker = (this.marker+1) %4
    }, 5000)
  },
  computed: {
    data () {
      return this.$page.frontmatter
    },
    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      } 
    }
  }
}
</script>

<style>
.container_map{
  width: 100%;
  height: 550px;
  position: relative;
  background: url(/img/background-home.jpg);
  background-size: cover;
  background-position: center;
}

.marker{
  color: aquamarine;
  font-size: 3em;
  position: absolute;
  transition: all 2.5s ease;
  right: 0;
  bottom: 0;
  z-index: 1;
  opacity: 0.7;
  width: 0.75em;
}
.marker-1{
  color: chocolate;
}
.marker-2{
  color: darkgreen;
}
.marker-3{
  color: #cc2727;
}
.pos-0{
  right: 10%;
  bottom: 40%;
}
.pos-1{
  right: 75%;
  bottom: 70%;
}
.pos-2{
  right: 75%;
  bottom: 20%;
}
.pos-3{
  right: 25%;
  bottom: 75%;
}

.opacity{
  width: 100%;
  height: 100%;    
  background: rgba(0,0,0,0.8);
}
.container_map__content{

  z-index: 9;
    position: absolute;
    width: 100%;
    top: 100px;
    text-align: center;
    color: white;
}
.deploy_menu{
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}
.deploy_menu a{
  margin: 0 5%;
}
.deploy_menu img{
  height: 48px;
}
.deploy_menu img.vercel_btn{
  height: 50px;

}
.action-button{
    display: inline-block;
    font-size: 1rem;
    color: #fff;
    padding: 0.4rem 0.8rem;
}
.action-button:hover {
    text-decoration: underline;
}
</style>

