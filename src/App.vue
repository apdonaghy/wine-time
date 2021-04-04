<template>
  <div id="app">
    <div class="navStyle">
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
          <router-link to="/Saved">Wine Collection</router-link>
          <span class="separate">|</span>
          <router-link to="/About">About</router-link>
        </div>
      </nav>
      <!-- Global nav -->
    </div>
    <!-- The router's current view will be injected into the application here with <router-view />  -->
    <router-view
      :results="results"
      :favorites="favorites"
      :spin="spin"
      :errors="errors"
      @apiCall="apiCall"
      @saveWine="saveWine"
      @removeWine="removeWine"
    />
  </div>
</template>

<script>
import Menu from "./components/Menu.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    Menu,
  },
  data() {
    return {
      mobile: false,
      desktop: false,
      windowWidth: 0,
      results: null,
      spin: false,
      errors: [],
      favorites: [],
      inFaves: false
    };
  },
  created() {
    window.addEventListener("resize", this.resize);
    this.resize();
  },
  destroyed() {
    window.removeEventListener("resize", this.resize);
  },
  mounted() {
    if (this.$ls.get("savedWines")) {
      this.favorites = this.$ls.get("savedWines");
    }
  },
  methods: {
    resize() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth >= 900) {
        this.desktop = true;
        this.mobile = false;
      } else {
        this.desktop = false;
        this.mobile = true;
      }
    },
    apiCall(payload) {
      axios
        .get("https://api.spoonacular.com/food/wine/recommendation", {
          params: {
            wine: payload.wine, //dynamically adds the user's choice to the API request
            number: 100,
            minRating: 0.8,
            maxPrice: payload.maxPrice, //dynamically adds the users choice to the API request
            apiKey: "2c010ee91b164e24a2c25a653e110615", //apply for a unique API key at spoonacular.com
          },
        })
        .then((response) => {
          //API response
          this.results = this.processData(response.data.recommendedWines);
          this.spin = false;
        })
        .catch((error) => {
          (this.spin = false), this.errors.push(error);
        });
        this.spin = true;
    },
    processData: function (dataArr) {
      for (let data in dataArr) {
        dataArr[data].price = parseFloat(dataArr[data].price.substring(1));
      }
      return dataArr;
    },
    saveWine: function (item) {
      
      for(let newItem of this.favorites){
          if(item.id === newItem.id){
            this.inFaves = true
          }
      }

      if(this.inFaves === false){
        this.favorites.push(item);
      }

      this.$ls.set("savedWines", this.favorites);
      this.inFaves = false;
    },
    removeWine: function(wine) {
      let wineIndex = this.favorites.indexOf(wine);
      this.favorites.splice(wineIndex, 1);
      this.$ls.set("savedWines", this.favorites); 
    }
  },
};
</script>


<style>
/* Global Styles */

@import url("https://fonts.googleapis.com/css2?family=Abhaya+Libre:wght@400;500;600;700;800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap");

@font-face {
  font-family: "narrow";
  src: url(../public/fonts/din_LightAlternate.ttf);
}

@font-face {
  font-family: "narrowMedium";
  src: url(../public/fonts/din_Medium.ttf);
}

:root {
  --narrow: "narrow";
  --narrowMedium: "narrowMedium";
}

.separate {
  font-size: 1.4em;
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

.navStyle {
  background-color: white;
  box-shadow: 0px 0px 5px #ebebeb;
  position: fixed;
  z-index: 3;
  width: 100%;
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
  height: 59px;
}

.flex-containerNav {
  display: flex;
  flex-wrap: nowrap;
  /* justify-content: center; */
  align-items: center;
  max-width: 1460px;
  margin: 0 auto;
  justify-content: space-between;
  padding: 7px 20px 2px 20px;
}

@media screen and (max-width: 900px) {
  .flex-containerNav {
    align-items: unset;
  }
}

@media screen and (max-width: 500px) {
  .logo {
    padding-top: 6px;
    width: 200px;
  }
}

.about a {
  font-family: "Abhaya Libre", serif;
  text-decoration: none;
  font-size: 1.5em;
  color: #94154b;
}

.about a:hover {
  color: black;
}
</style>