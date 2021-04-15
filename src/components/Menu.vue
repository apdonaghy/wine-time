<template>
  <div>
    <div id="myNav" class="overlay" @click="closeNav">
    <span class="closebtn" @click="closeNav">&times;</span>
    <div @click="closeNav" class="overlay-content">
     <router-link @click="closeNav" to="/">Home</router-link> 
     <router-link @click="closeNav" to="/Saved">Wine Collection</router-link> 
     <router-link @click="closeNav" to="/About">About</router-link>
  </div>
</div>


<span class="burger" @click="openNav">&#9776;</span>




  </div>
</template>

<script>
// import { Slide } from "vue-burger-menu";
export default {
  data() {
    return {
    };
  },
  methods:{
    /* Open */
 openNav() {
  document.getElementById("myNav").style.height = "100%";
},

/* Close */
  closeNav() {
  document.getElementById("myNav").style.height = "0%";
}
  }
};





</script>

<style scoped>
/* .bm-item-list a{
  text-decoration:none;
  color:white;
  cursor: pointer;
  font-family: "Abhaya Libre", serif;
  font-size:1.25em;
}

.bm-item-list a:hover{

  color:rgb(168, 168, 168);
 
} */

.burger{
  font-size:30px;cursor:pointer
}

.overlay {

  height: 0%;
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: black;
  overflow: hidden;
  transition: 0.2s;
}

.overlay-content {
  position: relative;
  top: 25%;
  width: 100%;
  text-align: center;
  margin-top: 30px;
}

.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 44px;
  color: white;
  display: block;
  transition: 0.3s;
  font-family: "Abhaya Libre", serif;
}

.overlay a:hover, .overlay a:focus {
  color: var(--brand);
}

.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;

}

span.closebtn{
  color: white;
  cursor: pointer;
}

span.closebtn:hover{
  color: var(--brand);
}

@media screen and (max-height: 450px) {
  .overlay a {font-size: 20px}
  .overlay .closebtn {
  font-size: 40px;
  top: 15px;
  right: 35px;
  }
}


</style>