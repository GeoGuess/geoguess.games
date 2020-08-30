<template>
<div class="container_map">  
  <div class="opacity"></div>
  <span v-for="i in [0,1,2]" v-bind:key="'m'+i" :class="'marker marker-'+i+' pos-'+((marker+i)%4)">🖈</span>
  <div class="deploy_menu">
    <a href="https://app.netlify.com/start/deploy?repository=https://github.com/BilelJegham/Geoguess-2">
      <img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to netlify">
    </a> 
    <a href="https://vercel.com/import/git?s=https%3A%2F%2Fgithub.com%2FBilelJegham%2FGeoguess-2&env=VUE_APP_API_KEY,VUE_APP_FIREBASE_API_KEY,VUE_APP_FIREBASE_PROJECT_ID,VUE_APP_FIREBASE_MESSAGING_SENDER_ID,VUE_APP_FIREBASE_APP_ID,VUE_APP_FIREBASE_MEASUREMENT_ID&envDescription=Follow%20guide%20on%20https%3A%2F%2Fgeoguess-2.github.io%2F&envLink=https%3A%2F%2Fgeoguess-2.github.io%2F&project-name=my-geoguess">
      <img class="vercel_btn" src="https://vercel.com/button" alt="Deploy with Vercel">
    </a>
  </div>

</div>
</template>
<script>
export default {
  data(){
    return {
      marker: 0,
    }
  },
  mounted(){
    setInterval(()=>{
      this.marker = (this.marker+1) %4
    }, 5000)
  }
}
</script>

<style>
.container_map{
  width: 100%;
  height: 500px;
  position: relative;
  background: url(https://images.unsplash.com/photo-1562504208-03d85cc8c23e);
  background-size: cover;
}

.marker{
  color: #cc2727;
  font-size: 3em;
  position: absolute;
  transition: all 2.5s ease;
  right: 0;
  bottom: 0;
  z-index: 1;
}
.marker-1{
  color: chocolate;
}
.marker-2{
  color: darkgreen;
}
.pos-0{
  right: 10%;
  bottom: 40%;
}
.pos-1{
  right: 75%;
  bottom: 80%;
}
.pos-2{
  right: 50%;
  bottom: 50%;
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
.deploy_menu{
  z-index: 9;
    position: absolute;
    width: 100%;
    top: 200px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}
.deploy_menu a{
  margin: 0 5%;
}
.deploy_menu img{
  height: 40px;
}
.deploy_menu img.vercel_btn{
  height: 50px;

}
</style>