<template>
<div class="container_map">
  <span :class="'marker marker-'+this.marker">🖈</span>
  <span :class="'marker marker-'+((this.marker+3)%4)">🖈</span>
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
}
.container_map:first-child{
  color: chocolate;
}

.marker-0{
  right: 10%;
  bottom: 40%;
}
.marker-1{
  right: 75%;
  bottom: 80%;
}
.marker-2{
  right: 50%;
  bottom: 50%;
}
.marker-3{
  right: 25%;
  bottom: 75%;
}
</style>