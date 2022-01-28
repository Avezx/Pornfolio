<template>
  <div id="nav">
    <img class="logo" src="./zajebistelogo.png">
      <ul class="nav-cont">
        <li class="nav-item" ><a class="button">Portfolio</a></li>
        <li class="nav-item"><a class="button">Cennik</a></li>
        <li class="nav-item"><a class="button">Seks</a></li>
      </ul>
  </div>
</template>


<script>
export default {
  name: 'nav1',
  components: {
    
  }
}
</script>

<style>
.nav-cont {
  display: flex;
  list-style-type: none;
  justify-content: center;
  flex-wrap: wrap;
  z-index: 200;
  position: fixed;
  align-items: center;
  width: 100%;
  top: -0.9%;
  color: rgb(0, 0, 0);
}
.nav-item {
  font-size: 18px;
  padding: 0.8em;
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  display: inline-block;
  position: flex;
  transform: UPPERCASE;
  position: -webkit-sticky;
  position: sticky;
  align-self: flex-start;
  
}

.button{
   position: relative;
   display: inline-block;
   font-weight: bold;
   z-index: 200;
   text-decoration: none;
}

.button:before{
   position: absolute;
   content: '';
   width: 0%;
   height: 4px;
   top:100%;
   left: 0;
   background:#ff506d;
   transition: .2s;
}

.button:hover:before {
    
  width: 100%;
}

.logo {
width: 60px;
top: 1.5px;
left: 1.5px;
position: fixed;
z-index: 2;

}
.changed {
	color: rgb(255, 255, 255) !important;
  transition: .2s;
}
</style>