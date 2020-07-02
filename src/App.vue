<template>
  <div id="app">
    <div class="grey">
      <!-- Global nav -->
      <nav class="flex-containerNav">
        <h1 class="ninety">
          <!-- <router-link to="/"> points to Home.vue  -->
          <router-link to="/">
            <img class="logo" src="./assets/wineTime.svg" />
          </router-link>
        </h1>
        <!-- <router-link to="/About"> points to About.vue -->
        <Menu v-show="mobile"></Menu>
        <div v-show="desktop" class="ten about">
          <router-link to="/Saved">Wine Collection</router-link> <span class="separate">|</span> <router-link to="/About">About</router-link> 
        </div> 
      </nav>
      <!-- Global nav -->
    </div>
    <!-- The router's current view will be injected into the application here with <router-view />  -->
    <router-view />
  </div>
</template>

<script>

import Menu from "./components/Menu.vue";

export default {
  name: "App",
  components: {
    Menu
  },
    data() {
    return {
      mobile:false,
      desktop:false,
      windowWidth: 0
    };
  },
  created() {
        window.addEventListener('resize', this.resize);
        this.resize();
    },
    destroyed() {
        window.removeEventListener('resize', this.resize);
    },
    methods: {
        resize() {
            this.windowWidth = window.innerWidth;
            if(this.windowWidth >= 900){
                this.desktop = true;
                this.mobile = false;
            } else{
                this.desktop = false;
                this.mobile = true;
            }
       
        }
    }

};
</script>


<style>
/* Global Styles */

@import url("https://fonts.googleapis.com/css2?family=Abhaya+Libre:wght@400;500;600;700;800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700;800&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@100;200;300;400;600;700&display=swap');




.separate{
  font-size:1.4em;
  margin: 0 5px 0 5px;
}

.container {
  max-width: 1460px;
  margin: 0 auto;
}

::selection {
  background: black;
  color: white;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.logo {
  width: 300px;
  
}

.grey {
  background-color: #f3f3f3;
  height:59px;
}

.flex-containerNav {
  display: flex;
  flex-wrap: nowrap;
  /* justify-content: center; */
  align-items: center;
  max-width: 1460px;
  margin: 0 auto;
  justify-content: space-between;
  padding:7px 20px 2px 20px;
}


@media screen and (max-width: 900px) {

.flex-containerNav {

  align-items: unset;

}
}



@media screen and (max-width: 500px) {
 
.logo {
  padding-top:6px;
  width: 200px;
  
}

}

.about a{
  font-family: "Abhaya Libre", serif;
  text-decoration: none;
  font-size: 1.5em;
  color: #94154b;
}

.about a:hover{
  color:black;
}




</style>