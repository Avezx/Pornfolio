<template>
  <div id="nav">
      <ul class="nav-cont">
        <img class="logo" src="./logo.png">
        <li class="nav-item"><a class="button" href="#down">Portfolio</a></li>
        <li class="nav-item"><a class="button">Cennik</a></li>
        <li class="nav-item"><a class="button">Seks</a></li>
      </ul>
    <div id="down">
      <h1></h1>
    </div>
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
  color: rgb(255, 255, 255);
  padding:0;
}
.nav-item {
  font-size: 18px;
  padding: 0.8em;
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  display: inline-block;

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

.button::before{
   position: absolute;
   content: '';
   width: 0%;
   height: 4px;
   top:100%;
   left: 0;
   background:#f30044;
   transition: .2s;
}

.button:hover::before {
    
  width: 100%;
}

.logo {
width: 45px;
top: 10px;
left: 10px;
position: fixed;
z-index: 2;

}
.changed::before {
   position: absolute;
   content: '';
   width: 0%;
   height: 4px;
   top:100%;
   left: 0;
   background:#2a2a2a;
   transition: .2s;
}
   #down {
    margin-top: 500px;
    padding-bottom: 25%;
    transition: .2s;
   } 

   a {
    color: unset;
}

a:hover {
    color: unset;
}

a:active {
    color: unset;
}

a:link {
    color: unset;
}
</style>