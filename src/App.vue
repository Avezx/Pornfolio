<template>
  <div id="app">
    <nav1 />
    <img class="bg-img" src="./assets/zajebistetlo.png">
    <div class="bg-color">
    </div>
  </div>
</template>

<script>
import nav1 from './components/navus.vue'
export default {
  name: 'App',
  components: {
    nav1
  }
}
</script>

<style>
body{
  overflow: hidden;
}

.bg-img{
  width: 100vw;
  bottom: 0;
  position: absolute;
  left: 0;
  z-index: 1;

}
.bg-color{
  width: 100%;
  bottom: -1000px;
  position: absolute;
  left: 0;
  z-index: 1;
  height: 1000px;
  background-color: #2a2a2a;

}

</style>